import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const COMPANY_EMAIL = "voltcreativelab@gmail.com";

export async function POST(request: NextRequest) {
  try {
    console.log("Contact API called");
    console.log("RESEND_API_KEY exists:", !!process.env.REGSEND_API_KEY);

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 },
      );
    }

    // Email HTML template
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #a259ff;">New Contact Form Submission</h2>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <p><strong>Message:</strong></p>
        <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #a259ff; white-space: pre-wrap;">${message}</p>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="font-size: 12px; color: #999;">This email was sent from your website's contact form. Reply directly to ${email} to respond.</p>
      </div>
    `;

    // Send email to company
    console.log("Sending email to company:", COMPANY_EMAIL);
    const companyEmailResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: COMPANY_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: emailHTML,
    });
    console.log("Company email response:", companyEmailResponse);

    // Send confirmation email to user
    const confirmationHTML = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #a259ff;">Thank You for Contacting Volt Creative Lab!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p><strong>Your Message Summary:</strong></p>
        <p>${message}</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p>Best regards,<br><strong>Volt Creative Lab Team</strong></p>
      </div>
    `;

    console.log("Sending confirmation email to user:", email);
    const userEmailResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "We Received Your Message - Volt Creative Lab",
      html: confirmationHTML,
    });
    console.log("User email response:", userEmailResponse);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
