// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';
// import ContactMessage from '@/emails/ContactMessage';
// import { render } from '@react-email/render';

// const resend = new Resend(process.env.RESEND_API_KEY as string); // ✅ Add this in .env.local

// export async function POST(req: Request) {
//   const { name, email, message } = await req.json();
//   const emailHtml = render(
//     <ContactMessage name={name} email={email} message={message} />
//   );

//   try {
//     const data = await resend.emails.send({
//       from: 'Akshayani Ponugoti <onboarding@resend.dev>', // must be verified or domain-linked
//       to: 'aponugot@asu.edu', // your inbox
//       subject: 'New message from portfolio site',
//       react: <ContactMessage name={name} email={email} message={message} />,

//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import ContactMessage from '@/emails/ContactMessage';

const resend = new Resend(process.env.RESEND_API_KEY);

console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Call the component as a function, not as JSX
  const emailHtml = await render(ContactMessage({ name, email, message }));

  try {
    const data = await resend.emails.send({
      from: 'Akshayani Ponugoti <onboarding@resend.dev>',
      to: 'aponugot@asu.edu',
      subject: 'New message from portfolio site',
      html: emailHtml,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Email send failed' }, { status: 500 });
  }
}

