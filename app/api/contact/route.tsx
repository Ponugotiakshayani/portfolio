import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactMessage from '@/emails/ContactMessage';

const resend = new Resend(process.env.RESEND_API_KEY); // ✅ Add this in .env.local

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Akshayani Ponugoti <onboarding@resend.dev>', // must be verified or domain-linked
      to: 'aponugot@asu.edu', // your inbox
      subject: 'New message from portfolio site',
      react: <ContactMessage name={name} email={email} message={message} />,

    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
