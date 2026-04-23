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
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
    
    <div style="background-color: #2563eb; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 22px;">📬 New Contact Message</h1>
    </div>

    <div style="background-color: #ffffff; padding: 32px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
      
      <div style="margin-bottom: 20px; padding: 16px; background-color: #f1f5f9; border-left: 4px solid #2563eb; border-radius: 4px;">
        <p style="margin: 0 0 4px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Name</p>
        <p style="margin: 0; font-size: 16px; color: #1e293b; font-weight: 600;">${name}</p>
      </div>

      <div style="margin-bottom: 20px; padding: 16px; background-color: #f1f5f9; border-left: 4px solid #2563eb; border-radius: 4px;">
        <p style="margin: 0 0 4px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Email</p>
        <a href="mailto:${email}" style="margin: 0; font-size: 16px; color: #2563eb; font-weight: 600; text-decoration: none;">${email}</a>
      </div>

      <div style="padding: 16px; background-color: #f1f5f9; border-left: 4px solid #2563eb; border-radius: 4px;">
        <p style="margin: 0 0 8px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Message</p>
        <p style="margin: 0; font-size: 15px; color: #1e293b; line-height: 1.6;">${message}</p>
      </div>

    </div>

    <p style="text-align: center; font-size: 12px; color: #94a3b8; margin-top: 16px;">
      This email was sent via your contact form.
    </p>
  </div>
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
