import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {

    if (!process.env.EMAIL_USERNAME || !process.env.EMAIL_PASSWORD) {
    return NextResponse.json(
      { success: false, message: "Server configuration error" },
      { status: 500 }
    );
  }

  let body: EmailRequestBody;
  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Invalid request body" },
      { status: 400 }
    );
  }

  const { firstName, lastName, email, message } = body;

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { success: false, message: "All fields are required" },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, message: "Invalid email format" },
      { status: 400 }
    );
  }

  const sanitize = (str: string) => str.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    pool: true,
    maxConnections: 1,
  });

  try {
    const mailOptions = {
      from: `"Portfolio Contact" <${email}>`,
      to: "kjgnaquines@gmail.com",
      replyTo: email,
      subject: `New employment message from ${sanitize(firstName)} ${sanitize(lastName)}`,
      text: `
        Name: ${sanitize(firstName)} ${sanitize(lastName)}
        Email: ${sanitize(email)}
        Message: ${sanitize(message)}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Contact Form Submission</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
            <p><strong style="color: #4b5563;">Name:</strong> ${sanitize(firstName)} ${sanitize(lastName)}</p>
            <p><strong style="color: #4b5563;">Email:</strong> <a href="mailto:${sanitize(email)}">${sanitize(email)}</a></p>
            <p><strong style="color: #4b5563;">Message:</strong></p>
            <p style="white-space: pre-wrap;">${sanitize(message)}</p>
          </div>
          <p style="margin-top: 20px; font-size: 0.9em; color: #6b7280;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    await transporter.verify();
    const info = await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    
    let errorMessage = "Failed to send email";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  } finally {
    transporter.close();
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, message: "Method Not Allowed" },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { success: false, message: "Method Not Allowed" },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { success: false, message: "Method Not Allowed" },
    { status: 405 }
  );
}

export async function PATCH() {
  return NextResponse.json(
    { success: false, message: "Method Not Allowed" },
    { status: 405 }
  );
}