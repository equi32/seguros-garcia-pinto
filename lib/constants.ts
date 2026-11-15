export const WHATSAPP_NUMBER = '5493816169861';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SITE = {
  name: 'Rodrigo J. García Pinto',
  facebook: 'https://www.facebook.com/SegurosGarciaPinto/',
  instagram: 'https://www.instagram.com/segurosgarciapinto',
  linkedin: 'https://www.linkedin.com/in/rodrigo-garcia-pinto-71005319a/',
  email: 'rodrigo@segurosgarciapinto.com.ar',
  contact: 'info@segurosgarciapinto.com.ar',
  celular: '+54 9 381 616-9861',
  developia: 'https://www.developia.com.ar',
  whatsapp: buildWhatsAppUrl('Hola Rodrigo, quiero cotizar mi seguro'),
  ssn: 'https://www.argentina.gob.ar/superintendencia-de-seguros',
} as const;
