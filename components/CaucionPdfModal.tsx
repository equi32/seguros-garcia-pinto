'use client';

import { useState } from 'react';
import { buildWhatsAppUrl } from '@/lib/constants';
import { formatARS, type ResultadoCaucion } from '@/lib/caucion';
import { generarCotizacionPdf } from '@/lib/caucionPdf';

interface Props {
  onClose: () => void;
  ciudad: string;
  alquiler: number;
  meses: number;
  deposito: number;
  resultado: ResultadoCaucion;
  formaPago: 'transferencia' | 3 | 6 | 9 | 12;
  mensajeBase: string;
}

export default function CaucionPdfModal({
  onClose,
  ciudad,
  alquiler,
  meses,
  deposito,
  resultado,
  mensajeBase,
}: Props) {
  const [nombre, setNombre] = useState('');
  const [celular, setCelular] = useState('');
  const [mail, setMail] = useState('');
  const [errors, setErrors] = useState<{ nombre?: string; celular?: string; mail?: string }>({});
  const [listo, setListo] = useState(false);
  const [generando, setGenerando] = useState(false);

  function validar(): boolean {
    const next: typeof errors = {};
    if (nombre.trim().split(/\s+/).filter(Boolean).length < 2) {
      next.nombre = 'Escribí tu nombre y apellido.';
    }
    const digitos = celular.replace(/[\s-]/g, '');
    if (digitos.length < 8 || digitos.length > 15 || !/^\d+$/.test(digitos)) {
      next.celular = 'Revisá el celular: incluí el código de área.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.trim())) {
      next.mail = 'Revisá el mail. Tiene que verse así: nombre@correo.com';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validar()) return;
    setGenerando(true);
    try {
      await generarCotizacionPdf({ nombre, celular, mail, ciudad, alquiler, meses, deposito, resultado });
      setListo(true);
    } finally {
      setGenerando(false);
    }
  }

  const mensajeConDatos = `${mensajeBase} Mis datos: ${nombre}, cel ${celular}, mail ${mail}.`;

  return (
    <div className="caucion-modal-overlay" role="dialog" aria-modal="true">
      <div className="caucion-modal">
        <button type="button" className="caucion-modal-close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>
        {!listo ? (
          <form onSubmit={handleSubmit}>
            <h4>Descargar cotización en PDF</h4>
            <p className="caucion-modal-helper">
              Completá tus datos para generar el PDF con la simulación. No se envían a ningún
              servidor: se usan solo para armar el documento.
            </p>
            <div className="caucion-modal-field">
              <label htmlFor="pdf-nombre">Nombre completo</label>
              <input
                id="pdf-nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              {errors.nombre && <span className="caucion-modal-error">{errors.nombre}</span>}
            </div>
            <div className="caucion-modal-field">
              <label htmlFor="pdf-celular">Celular</label>
              <input
                id="pdf-celular"
                type="text"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
              />
              {errors.celular && <span className="caucion-modal-error">{errors.celular}</span>}
            </div>
            <div className="caucion-modal-field">
              <label htmlFor="pdf-mail">Mail</label>
              <input
                id="pdf-mail"
                type="text"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              {errors.mail && <span className="caucion-modal-error">{errors.mail}</span>}
            </div>
            <button type="submit" className="button caucion-cta-whatsapp w-100" disabled={generando}>
              {generando ? 'Generando...' : 'Generar y descargar PDF'}
            </button>
          </form>
        ) : (
          <div className="caucion-modal-done">
            <h4>¡Listo! Descargamos tu cotización</h4>
            <p>
              Precio estimado: <strong>$ {formatARS(resultado.precio)}</strong>. Si tenés dudas o
              querés avanzar, seguí por WhatsApp.
            </p>
            <a
              href={buildWhatsAppUrl(mensajeConDatos)}
              target="_blank"
              rel="noopener noreferrer"
              className="button caucion-cta-whatsapp w-100"
            >
              Continuar por WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
