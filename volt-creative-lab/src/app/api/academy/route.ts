import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const ACADEMY_EMAIL = "voltcreativelab@gmail.com";

export async function POST(request: NextRequest) {
  try {
    console.log("Academy API called");
    console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const {
      name,
      email,
      phone,
      paymentOption,
      trainingFormat,
      message,
      referralCode,
    } = body;

    // Validate inputs
    if (!name || !email || !trainingFormat) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, trainingFormat" },
        { status: 400 },
      );
    }

    // Email HTML template for admin
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #b35a00;">New Bootcamp Registration</h2>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <p><strong>Training Format:</strong> ${trainingFormat}</p>
        <p><strong>Payment Option:</strong> ${paymentOption || "Not selected"}</p>
        ${referralCode ? `<p><strong>Referral Code:</strong> ${referralCode}</p>` : ""}
        
        ${
          message
            ? `
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p><strong>Additional Information:</strong></p>
        <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #b35a00; white-space: pre-wrap;">${message}</p>
        `
            : ""
        }
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="font-size: 12px; color: #999;">This registration was submitted from your website. Reply directly to ${email} to respond.</p>
      </div>
    `;

    // Send email to academy
    console.log("Sending academy registration email to:", ACADEMY_EMAIL);
    const companyEmailResponse = await resend.emails.send({
      from: "Volt Academy <onboarding@resend.dev>",
      to: ACADEMY_EMAIL,
      replyTo: email,
      subject: `New Bootcamp Registration from ${name}`,
      html: emailHTML,
    });
    console.log("Academy email response:", companyEmailResponse);

    // Send confirmation email to user
    const confirmationHTML = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #b35a00;">Welcome to Volt Academy Bootcamp!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for registering for our Web Development Bootcamp starting <strong>April 13th, 2026</strong>.</p>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <p><strong>Your Registration Details:</strong></p>
        <ul>
          <li><strong>Training Format:</strong> ${trainingFormat}</li>
          ${paymentOption ? `<li><strong>Payment Plan:</strong> ${paymentOption}</li>` : ""}
          <li><strong>Course Duration:</strong> 3 Months</li>
          <li><strong>Investment:</strong> <span style="text-decoration: line-through; color: #999;">₦160,000 / €100 / $110</span> <strong style="color: #b35a00;">₦80,000 / €50 / $55</strong></li>
          <li><strong>Discount:</strong> 50% off till Saturday, March 28, 2026</li>
        </ul>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <p>We'll send you payment details and more information shortly. If you have any questions, feel free to reply to this email.</p>
        
        <p>Best regards,<br><strong>Volt Academy Team</strong></p>
      </div>
    `;

    console.log("Sending confirmation email to user:", email);
    const userEmailResponse = await resend.emails.send({
      from: "Volt Academy <onboarding@resend.dev>",
      to: email,
      subject: "Your Bootcamp Registration - Volt Academy",
      html: confirmationHTML,
    });
    console.log("User email response:", userEmailResponse);

    return NextResponse.json(
      { message: "Registration received successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to process registration. Please try again later." },
      { status: 500 },
    );
  }
}
