import React from "react";

const Mail = (name) => {
  return ` <div
    style="
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #e0e0e0;
    "
  >
    <div style="text-align: center">
      <!-- <img  alt="Cauldron" style="width: 70px;"/> -->
      <a href="https://cauldron.live/"><img src="https://i.ibb.co/2P7M74b/Frame-65.png" style="width: 70px;" alt="Frame-65" ></a>
    </div>
    <h1 style="text-align: left; color: #0f1014">Welcome to Cauldron!</h1>
    <div style="color: #313131; line-height: 1.5">
      <p>Hello ${name},</p>
      <p>
        Thank you for your interest in being one of Cauldron's first users. We
        truly appreciate your support!
      </p>
      <p>
        We've been working diligently on
        <a
          href="https://cauldron.live"
          style="color: #212121; text-decoration: underline"
        >
          cauldron.live </a
        >, since May 2024, and we're excited to announce that it will be
        released in August. Stay tuned for an incredible experience!
      </p>
      <p>
        To get the latest updates, follow us on Twitter:
        <a
          href="https://x.com/cauldron_live"
          style="color: #212121; text-decoration: underline"
        >
          @cauldron_live
        </a>
      </p>
      <p>
        Right now it's just 3 people working on this idea we believe is quite
        amazing. We have colleges, examinations, internships, and other
        projects, but we will ship this very soon.
      </p>
      <p>Stay tuned and thank you for joining the queue.</p>
      <p>Best regards,</p>
      <p style="font-weight: 500; color: #212121">The Cauldron Team</p>
    </div>
    <div
      style="
        border-top: 1px solid #e0e0e0;
        margin-top: 20px;
        padding-top: 10px;
        text-align: center;
      "
    >
      <p style="font-size: 0.875rem; color: #515151">&copy; 2024 Cauldron.</p>
    </div>
  </div>
`;
};

export default Mail;
