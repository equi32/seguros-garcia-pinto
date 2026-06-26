import { NextResponse } from 'next/server';
import { ContactSchema } from '@/lib/validators';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  const body = await request.json();
  const result = ContactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({
      type: 'error',
      text: 'Debe completar todos los campos, e ingresar un mail válido',
    });
  }

  const { userName, userEmail, userMessage } = result.data;
  const subj = 'RGP Web - Contacto';
  const msg = `${subj} \r\nNombre: ${userName} \r\nE-mail: ${userEmail} \r\nMensaje: ${userMessage}`;

  try {
    await sendEmail({ subject: subj, text: msg, replyTo: userEmail, replyToName: userName });
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
