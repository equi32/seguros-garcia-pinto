'use client';

import { buildWhatsAppUrl } from '@/lib/constants';

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl('Hola Rodrigo, quiero cotizar mi seguro')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="floating-whatsapp"
    >
      <i className="fab fa-whatsapp"></i>
      <span className="floating-whatsapp-tooltip">¿Querés cotizar? Escribinos</span>
    </a>
  );
}
