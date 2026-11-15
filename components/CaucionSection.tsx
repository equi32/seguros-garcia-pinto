'use client';

import { buildWhatsAppUrl } from '@/lib/constants';
import CaucionCalculator from './CaucionCalculator';

const OPCIONES = [
  {
    icono: 'fa-home',
    titulo: 'Soy inquilino',
    texto: 'Garantía de alquiler para acceder a tu próxima vivienda sin garante propietario.',
  },
  {
    icono: 'fa-key',
    titulo: 'Soy propietario',
    texto: 'Alquilá tu propiedad con el respaldo de una compañía de seguros.',
  },
  {
    icono: 'fa-building',
    titulo: 'Soy inmobiliaria o PAS',
    texto: 'Sumate como inmobiliaria o productor asesor y ofrecé garantías de alquiler a tus clientes.',
  },
];

const MENSAJE_WHATSAPP =
  'Hola Rodrigo, quiero información sobre la garantía de alquiler (caución)';

export default function CaucionSection() {
  return (
    <section id="cauciones" className="padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="heading-title darkcolor wow fadeInUp" data-wow-delay="100ms">
              <span className="defaultcolor">Garantías de alquiler</span>
              <h2 className="font-normal darkcolor heading_space_half">
                Seguros de caución y garantías de alquiler
              </h2>
            </div>
            <div className="col-md-8 offset-md-2 heading_space">
              <p>Elegí cómo querés empezar.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <CaucionCalculator />
          </div>
        </div>

        <div className="row top50 caucion-opciones">
          {OPCIONES.map((o) => (
            <div className="col-lg-4 col-md-4 caucion-opcion-col wow fadeInUp" data-wow-delay="200ms" key={o.titulo}>
              <div className="caucion-opcion">
                <i className={`fa ${o.icono} caucion-opcion-icon`}></i>
                <h3 className="font-normal darkcolor">{o.titulo}</h3>
                <p>{o.texto}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-md-12 text-center caucion-opciones-cta">
            <a
              href={buildWhatsAppUrl(MENSAJE_WHATSAPP)}
              target="_blank"
              rel="noopener noreferrer"
              className="button caucion-cta-whatsapp"
            >
              Escribinos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
