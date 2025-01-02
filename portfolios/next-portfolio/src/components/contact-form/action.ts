"use server";

import { Resend } from "resend";
import { EmailTemplate } from "~/components/contact-form/email";

export async function send({
  email,
  message,
}: {
  email: string;
  message: string;
}) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: `Acme <onboarding@resend.dev>`,
    to: ["dsmurdoch357@gmail.com"],
    subject: "From next portfolio",
    react: await EmailTemplate({ email, message }),
  });
}
