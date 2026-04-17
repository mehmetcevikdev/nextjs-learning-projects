import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, recaptcha } = await req.json();

    if (!name || !email || !message || !recaptcha) {
      return NextResponse.json({ message: "Eksik alan var!" }, { status: 400 });
    }

    // reCAPTCHA doğrulaması
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha}`,
      { method: "POST" }
    );
    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success) {
      return NextResponse.json(
        { message: "reCAPTCHA verification failed." },
        { status: 400 }
      );
    }

    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["mehmet_cvk20@outlook.com"],
      subject: "Mail",
      html: `
      <h2>Mail</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Email sent:", emailResponse);
    return NextResponse.json({ message: "message success!" }, { status: 200 });
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 },
    );
  }
}
