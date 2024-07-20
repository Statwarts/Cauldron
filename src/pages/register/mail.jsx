import React from "react";

const mail = ({ name }) => {
  return (
    <div class="wrapper px-32 xs:px-8">
      <h1 className="text-2xl font-[500] text-[#0F1014]">
        Welcome to Cauldron!
      </h1>
      <br />
      <div class="content">
        <p className="text-[#313131]">Hello ${name},</p>
        <p className="text-[#313131]">
          Thank you for your interest in being one of Cauldron's first users. We
          truly appreciate your support!
        </p>
        <p className="text-[#313131]">
          We've been working diligently on{" "}
          <a className="text-[#212121] underline" href="https://cauldron.live">
            Cauldron.live
          </a>
          , since May 2024, and we're excited to announce that it will be
          released in August. Stay tuned for an incredible experience!
        </p>
        <p className="text-[#313131]">
          To get the latest updates, follow us on Twitter:{" "}
          <a
            className="text-[#212121] underline"
            href="https://x.com/cauldron_live"
          >
            @cauldron_live
          </a>
        </p>
        <p className="text-[#313131]">
          right now its just 3 people working on this idea we believe is quite
          amazing.We have colleges, examinations, internships, and other
          projects, but we will ship this very soon.
        </p>
        <p className="text-[#313131]">
          Stay tuned and thank you for joining the queue.
        </p>
        <br />
        <p className="text-[#313131]">Best regards,</p>
        <p className="font-[500] text-[#212121]">The Cauldron Team</p>
      </div>
      <br />
      <div class="footer">
        <p className="text-sm text-[#515151]">&copy; 2024 Cauldron.</p>
      </div>
    </div>
  );
};

export default mail;

//  `
//       <html>
//       <head>
//         <style>
//           body {
//             font-family: Arial, sans-serif;
//             margin: 0;
//             padding: 0;
//             background-color: #f4f4f4;
//           }
//           .container {
//             width: 100%;
//             padding: 20px;
//             background-color: #ffffff;
//             box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//             border-radius: 8px;
//             margin: 20px auto;
//             max-width: 600px;
//           }
//           .header {
//             background-color: #4CAF50;
//             color: white;
//             padding: 10px 20px;
//             text-align: center;
//             border-top-left-radius: 8px;
//             border-top-right-radius: 8px;
//           }
//           .content {
//             padding: 20px;
//             color: #333333;
//           }
//           .footer {
//             text-align: center;
//             padding: 10px;
//             color: #777777;
//             font-size: 12px;
//           }
//         </style>
//       </head>
//       <body>
//         <div class="container">
//           <div class="header">
//             <h1>Welcome to Cauldron!</h1>
//           </div>
//           <div class="content">
//             <p>Hello ${name},</p>
//             <p>Thank you for registering at Cauldron. We're excited to have you on board!</p>
//             <p>We will notify you as soon as Cauldron is ready for you.</p>
//             <p>If you have any questions, feel free to reach out to our support team at any time.</p>
//             <p>Best regards,</p>
//             <p>The Cauldron Team</p>
//           </div>
//           <div class="footer">
//             <p>&copy; 2024 Cauldron. All rights reserved.</p>
//           </div>
//         </div>
//       </body>
//       </html>
//     `
