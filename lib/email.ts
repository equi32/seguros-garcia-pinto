import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'info@segurosgarciapinto.com.ar';
const FROM_EMAIL = process.env.FROM_EMAIL ?? 'noreply@segurosgarciapinto.com.ar';

export async function sendEmail({
  subject,
  text,
  replyTo,
  replyToName,
}: {
  subject: string;
  text: string;
  replyTo: string;
  replyToName: string;
}) {
  await resend.emails.send({
    from: `${replyToName} <${FROM_EMAIL}>`,
    to: CONTACT_EMAIL,
    replyTo: `${replyToName} <${replyTo}>`,
    subject,
    text,
  });
}
