"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { success: false, error: "Please fill in all fields." };
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`, // Sender address
            to: process.env.CONTACT_EMAIL, // List of receivers
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            text: message,
            html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #d4af37;">New Inquiry from Venezia Exports Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 2px solid #d4af37; padding-left: 10px; margin-left: 0; color: #555;">
            ${message.replace(/\n/g, "<br>")}
          </blockquote>
        </div>
      `,
        });

        return { success: true };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error: "Failed to send message. Please try again later." };
    }
}
