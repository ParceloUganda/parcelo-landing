import { Router, type IRouter } from "express";
import { Resend } from "resend";

const router: IRouter = Router();

router.post("/business-application", async (req, res) => {
  const { fullName, businessName, businessEmail, contactNumber, businessType, challenges } = req.body;

  if (!fullName || !businessName || !businessEmail || !contactNumber || !businessType || !challenges) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Email service not configured" });
    return;
  }

  const resend = new Resend(apiKey);

  const challengeList = Array.isArray(challenges) ? challenges.join(", ") : challenges;

  try {
    await resend.emails.send({
      from: "Parcelo Forms <onboarding@resend.dev>",
      to: ["business@parcelo.ug"],
      replyTo: businessEmail,
      subject: `New Business Application — ${businessName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #0A0A0B; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #FBCA0C; margin: 0; font-size: 22px;">New Business Application</h1>
            <p style="color: #aaa; margin: 6px 0 0; font-size: 14px;">Submitted via parcelo.ug/for-business</p>
          </div>
          <div style="background: #f9f9f9; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #555; font-size: 13px; width: 40%;">Full Name</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">${fullName}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #555; font-size: 13px;">Business Name</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">${businessName}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #555; font-size: 13px;">Business Email</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${businessEmail}" style="color: #FBCA0C;">${businessEmail}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #555; font-size: 13px;">Contact Number</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="tel:${contactNumber}" style="color: #FBCA0C;">${contactNumber}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #555; font-size: 13px;">Business Type</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">${businessType}</td></tr>
              <tr><td style="padding: 10px 0; color: #555; font-size: 13px; vertical-align: top;">Challenges</td><td style="padding: 10px 0; font-weight: 600;">${challengeList}</td></tr>
            </table>
            <div style="margin-top: 28px; padding: 16px; background: #fff3cd; border-radius: 6px; border-left: 4px solid #FBCA0C;">
              <p style="margin: 0; font-size: 13px; color: #555;">Reply directly to this email to respond to <strong>${fullName}</strong> at <strong>${businessEmail}</strong></p>
            </div>
          </div>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
