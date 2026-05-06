import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const recipientEmail = "y700650@gmail.com";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
};

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = asTrimmedString(payload.name);
  const email = asTrimmedString(payload.email);
  const company = asTrimmedString(payload.company);
  const message = asTrimmedString(payload.message);
  const errors: Partial<Record<"name" | "email" | "message", string>> = {};

  if (name.length < 2) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email.";
  if (message.length < 20) errors.message = "Tell us a little more about the project.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Please check the form and try again.", errors }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user;

  if (!host || !user || !pass || !from) {
    return NextResponse.json(
      { error: "Email is not configured yet. Please add SMTP settings on the server." },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass
    }
  });

  try {
    await transporter.sendMail({
      from,
      to: recipientEmail,
      replyTo: email,
      subject: `New strategy call request from ${name}`,
      text: [
        "New strategy call request",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        "",
        "Project brief:",
        message
      ].join("\n"),
      html: `
        <h2>New strategy call request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
        <p><strong>Project brief:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json({ error: "We could not send your message. Please try again." }, { status: 500 });
  }
}
