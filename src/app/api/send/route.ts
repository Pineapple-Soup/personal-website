import EmailTemplate from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, lastName, email, subject, message } = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <website@email.pineapplesoup.net>',
      to: process.env.EMAIL as string,
      subject: `New message from ${firstName} ${lastName}`,
      react: EmailTemplate({ firstName, lastName, email, subject, message }),
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
