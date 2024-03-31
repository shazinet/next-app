import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "id@hoomaan.dev",
    to: "hoomaan.sheikholeslami@gmail.com",
    subject: "Test email from Resend email provider",
    react: <WelcomeTemplate name="Hoomaan"></WelcomeTemplate>,
  });

  return NextResponse.json({});
}
