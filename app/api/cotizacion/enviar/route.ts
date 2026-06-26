import { NextResponse } from 'next/server';
import { CotizacionSchema } from '@/lib/validators';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  const body = await request.json();
  const result = CotizacionSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({
      type: 'error',
      text: 'Debe completar todos los campos, e ingresar un mail válido',
    });
  }

  const d = result.data;
  const subj = 'RGP Web - Solicitud Cotización';
  let msg = `${subj} \r\nNombre: ${d.name_cotization}`;
  msg += `\r\nE-mail: ${d.email_cotization}`;
  msg += `\r\nDNI: ${d.document_cotization}`;
  msg += `\r\nFecha Nac.: ${d.bornDate_cotization}`;
  msg += `\r\nCelular: ${d.cellPhone_cotization}`;
  msg += `\r\nDirección: ${d.address_cotization}`;
  msg += `\r\nLocalidad: ${d.city_cotization}`;
  msg += `\r\n------------------------\r\n`;

  switch (d.type_cotization) {
    case 'accidentes':
      msg += `\r\nTipo de Cotización: ACCIDENTES PERSONALES`;
      msg += `\r\nCantidad de vida: ${d.life_qty ?? ''}`;
      msg += `\r\nSuma asegurada: ${d.life_amount ?? ''}`;
      msg += `\r\nProfesión: ${d.life_profesion ?? ''}`;
      break;
    case 'hogar':
      msg += `\r\nTipo de Cotización: HOGAR`;
      msg += `\r\nTipo de propiedad: ${d.property_type ?? ''}`;
      msg += `\r\nMtos. cuadrados: ${d.property_area ?? ''}`;
      msg += `\r\nSuma asegurada: ${d.property_amount ?? ''}`;
      msg += `\r\nMascota: ${d.property_mascot ?? ''}`;
      break;
    case 'vehiculos':
      msg += `\r\nTipo de Cotización: VEHÍCULOS`;
      msg += `\r\nTipo de vehículo: ${d.vehicle_type ?? ''}`;
      msg += `\r\nMarca: ${d.vehicle_brand ?? ''}`;
      msg += `\r\nModelo: ${d.vehicle_model ?? ''}`;
      msg += `\r\nAño: ${d.vehicle_year ?? ''}`;
      break;
  }

  msg += `\r\nDetalles adicionales: ${d.details ?? ''}`;

  try {
    await sendEmail({
      subject: subj,
      text: msg,
      replyTo: d.email_cotization,
      replyToName: d.name_cotization,
    });
  } catch {
    return NextResponse.json({
      type: 'error',
      text: 'No se pudo enviar el mensaje. Reintente.',
    });
  }

  return NextResponse.json({
    type: 'success',
    text: 'Gracias por contactarse. Nos comunicaremos a la brevedad.',
  });
}
