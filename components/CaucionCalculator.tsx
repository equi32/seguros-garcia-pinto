'use client';

import { useMemo, useState } from 'react';
import { buildWhatsAppUrl } from '@/lib/constants';
import {
  CIUDADES,
  COBERTURA_EXPENSAS,
  COBERTURA_IMPUESTOS_SERVICIOS,
  calcularCaucion,
  ciudadLabel,
  formatARS,
  zonaDe,
  type CiudadValue,
  type Duracion,
} from '@/lib/caucion';
import CaucionPdfModal from './CaucionPdfModal';

const DURACIONES: Duracion[] = [12, 24, 36];

type FormaPago = 'transferencia' | 3 | 6 | 9 | 12;

export default function CaucionCalculator() {
  const [ciudad, setCiudad] = useState<CiudadValue>('tucuman');
  const [alquilerInput, setAlquilerInput] = useState('700.000');
  const [meses, setMeses] = useState<Duracion>(24);
  const [tieneDeposito, setTieneDeposito] = useState(false);
  const [depositoInput, setDepositoInput] = useState('');
  const [formaPago, setFormaPago] = useState<FormaPago>('transferencia');
  const [pdfOpen, setPdfOpen] = useState(false);

  const alquiler = Number(alquilerInput.replace(/\D/g, '')) || 0;
  const deposito = tieneDeposito ? Number(depositoInput.replace(/\D/g, '')) || 0 : 0;

  const datosCompletos = alquiler > 0 && (!tieneDeposito || deposito > 0);

  const resultado = useMemo(() => {
    if (!datosCompletos) return null;
    return calcularCaucion(zonaDe(ciudad), alquiler, meses, deposito);
  }, [datosCompletos, ciudad, alquiler, meses, deposito]);

  const cuotasDisponibles: FormaPago[] = resultado
    ? ['transferencia', ...resultado.cuotas.map((c) => c.n as FormaPago)]
    : ['transferencia'];

  function handleToggleDeposito(checked: boolean) {
    setTieneDeposito(checked);
    const nuevasCuotas: FormaPago[] = checked ? [3, 6, 12] : [9];
    if (formaPago !== 'transferencia' && !nuevasCuotas.includes(formaPago)) {
      setFormaPago('transferencia');
    }
  }

  const cuotaSeleccionada =
    resultado && formaPago !== 'transferencia'
      ? resultado.cuotas.find((c) => c.n === formaPago)
      : undefined;

  function mensajeWhatsApp(): string {
    if (!resultado) {
      return 'Hola García Pinto, vi el simulador de garantía de alquiler en su web y quiero pedir una cotización.';
    }
    const partes = [
      'Hola García Pinto, hice la simulación de garantía de alquiler en su web.',
      `Ciudad: ${ciudadLabel(ciudad)}. Alquiler mensual: $ ${formatARS(alquiler)}. Contrato: ${meses} meses.`,
      deposito > 0
        ? `Depósito de garantía: $ ${formatARS(deposito)}.`
        : 'Sin depósito de garantía.',
      formaPago === 'transferencia'
        ? `Estimación orientativa: transferencia con 10% de descuento de $ ${formatARS(resultado.transferencia)} (precio sin descuento $ ${formatARS(resultado.precio)}).`
        : `Estimación orientativa: ${formaPago} cuotas sin interés de $ ${formatARS(cuotaSeleccionada?.valor ?? 0)} (total $ ${formatARS(resultado.precio)}).`,
      'Quiero pedir una cotización oficial.',
    ];
    return partes.join(' ');
  }

  return (
    <div className="caucion-calc">
      <h3 className="caucion-calc-title">Calculá tu garantía</h3>

      <div className="caucion-row">
        <div className="caucion-row-label">
          <strong>Ciudad del alquiler</strong>
          <span>Dónde alquilás cambia el precio</span>
        </div>
        <div className="caucion-row-control">
          <select
            className="caucion-select"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value as CiudadValue)}
          >
            {CIUDADES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="caucion-row">
        <div className="caucion-row-label">
          <strong>Alquiler mensual</strong>
          <span>El valor de tu primer mes de alquiler, en pesos</span>
        </div>
        <div className="caucion-row-control">
          <div className="caucion-input-prefix">
            <span>$</span>
            <input
              type="text"
              inputMode="numeric"
              className="caucion-input"
              value={alquilerInput}
              onChange={(e) => setAlquilerInput(e.target.value.replace(/[^\d]/g, ''))}
              onBlur={() => alquiler > 0 && setAlquilerInput(formatARS(alquiler))}
            />
          </div>
        </div>
      </div>

      <div className="caucion-row">
        <div className="caucion-row-label">
          <strong>Duración del contrato</strong>
          <span>¿Por cuántos meses vas a firmar el contrato?</span>
        </div>
        <div className="caucion-row-control">
          <div className="caucion-pills">
            {DURACIONES.map((d) => (
              <button
                key={d}
                type="button"
                className={`caucion-pill ${meses === d ? 'is-active' : ''}`}
                onClick={() => setMeses(d)}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="caucion-row">
        <div className="caucion-row-label">
          <strong>Depósito de garantía</strong>
          <span>Sumá el depósito del contrato al cálculo</span>
        </div>
        <div className="caucion-row-control">
          <label className="caucion-switch">
            <input
              type="checkbox"
              checked={tieneDeposito}
              onChange={(e) => handleToggleDeposito(e.target.checked)}
            />
            <span className="caucion-switch-slider"></span>
          </label>
        </div>
      </div>

      {tieneDeposito && (
        <div className="caucion-row">
          <div className="caucion-row-label">
            <strong>Monto del depósito</strong>
            <span>El depósito de garantía que figura en el contrato</span>
          </div>
          <div className="caucion-row-control">
            <div className="caucion-input-prefix">
              <span>$</span>
              <input
                type="text"
                inputMode="numeric"
                className="caucion-input"
                value={depositoInput}
                onChange={(e) => setDepositoInput(e.target.value.replace(/[^\d]/g, ''))}
                onBlur={() => deposito > 0 && setDepositoInput(formatARS(deposito))}
              />
            </div>
          </div>
        </div>
      )}

      <div className="caucion-row">
        <div className="caucion-row-label">
          <strong>Forma de pago</strong>
          <span>10% off con transferencia, o en cuotas sin interés con tarjeta</span>
        </div>
        <div className="caucion-row-control">
          <div className="caucion-pills">
            {cuotasDisponibles.map((opcion) => (
              <button
                key={opcion}
                type="button"
                className={`caucion-pill ${formaPago === opcion ? 'is-active' : ''}`}
                onClick={() => setFormaPago(opcion)}
              >
                {opcion === 'transferencia' ? 'Transferencia' : `${opcion} cuotas`}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="caucion-cobertura">
        <strong>Cobertura incluida · según póliza</strong>
        <div className="caucion-cobertura-row">
          <span>Canon locativo (total del contrato)</span>
          <span>$ {formatARS(alquiler * meses)}</span>
        </div>
        <div className="caucion-cobertura-row">
          <span>Expensas</span>
          <span>Hasta $ {formatARS(COBERTURA_EXPENSAS)}</span>
        </div>
        <div className="caucion-cobertura-row">
          <span>Impuestos y servicios</span>
          <span>Hasta $ {formatARS(COBERTURA_IMPUESTOS_SERVICIOS)}</span>
        </div>
      </div>

      <div className="caucion-resultado" aria-live="polite">
        {!resultado ? (
          <>
            <p className="caucion-resultado-precio">$ —</p>
            <p className="caucion-resultado-nota">
              Completá el alquiler{tieneDeposito ? ' y el depósito' : ''} para ver el costo
              estimado.
            </p>
          </>
        ) : (
          <>
            <p className="caucion-resultado-titulo">
              Costo estimado · {meses} meses · {ciudadLabel(ciudad)}
            </p>
            {formaPago === 'transferencia' ? (
              <>
                <p className="caucion-resultado-previa">Pagás una sola vez</p>
                <p className="caucion-resultado-precio">$ {formatARS(resultado.transferencia)}</p>
                <p className="caucion-resultado-nota">
                  10% de descuento incluido. Precio sin descuento: $ {formatARS(resultado.precio)}.
                </p>
              </>
            ) : (
              <>
                <p className="caucion-resultado-previa">{formaPago} cuotas sin interés de</p>
                <p className="caucion-resultado-precio">$ {formatARS(cuotaSeleccionada?.valor ?? 0)}</p>
                <p className="caucion-resultado-nota">
                  Total: $ {formatARS(resultado.precio)}
                  {formaPago === 9 ? ', con tarjeta de crédito.' : '.'}
                </p>
              </>
            )}
            <p className="caucion-resultado-prima">
              Este costo se llama prima: es lo que se paga por la caución. Es una referencia: la
              compañía puede ajustarlo según tu caso y las condiciones de la póliza.
            </p>
          </>
        )}

        <div className="caucion-cta-row">
          <a
            href={buildWhatsAppUrl(mensajeWhatsApp())}
            target="_blank"
            rel="noopener noreferrer"
            className="button caucion-cta-whatsapp"
          >
            Pedir cotización oficial
          </a>
          <button
            type="button"
            className="caucion-cta-pdf"
            disabled={!resultado}
            onClick={() => setPdfOpen(true)}
          >
            Descargar cotización en PDF
          </button>
        </div>

        <p className="caucion-resultado-productor">Productor Asesor de Seguros · MP 87740</p>

        <p className="caucion-aviso-legal">
          Valor orientativo y no vinculante, sujeto a modificaciones según las condiciones de la
          póliza. No es una cotización oficial de una compañía de seguros. El precio final lo
          define la aseguradora según el riesgo, la documentación y las condiciones de la póliza.
        </p>
      </div>

      {pdfOpen && resultado && (
        <CaucionPdfModal
          onClose={() => setPdfOpen(false)}
          ciudad={ciudadLabel(ciudad)}
          alquiler={alquiler}
          meses={meses}
          deposito={deposito}
          resultado={resultado}
          formaPago={formaPago}
          mensajeBase={mensajeWhatsApp()}
        />
      )}
    </div>
  );
}
