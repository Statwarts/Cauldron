import React from "react";

const Mail = (name) => {
  return `<div className="wrap">
    <img className="logo" src="https://github.com/Statwarts/Cauldron/blob/main/src/assets/svg/cauldron.svg" alt="Cauldron" />
      <h1 className="header">Welcome to Cauldron!</h1>
      <br />
      <div className="content">
        <p className="paragraph">Hello ${name},</p>
        <p className="paragraph">
          Thank you for your interest in being one of Cauldron's first users. We
          truly appreciate your support!
        </p>
        <p className="paragraph">
          We've been working diligently on 
          <a className="link" href="https://cauldron.live">
            cauldron.live
          </a>
          , since May 2024, and we're excited to announce that it will be
          released in August. Stay tuned for an incredible experience!
        </p>
        <p className="paragraph">
          To get the latest updates, follow us on Twitter: 
          <a className="link" href="https://x.com/cauldron_live">
             @cauldron_live
          </a>
        </p>
        <p className="paragraph">
          Right now it's just 3 people working on this idea we believe is quite
          amazing. We have colleges, examinations, internships, and other
          projects, but we will ship this very soon.
        </p>
        <p className="paragraph">
          Stay tuned and thank you for joining the queue.
        </p>
        <br />
        <p className="paragraph">Best regards,</p>
        <p className="team">The Cauldron Team</p>
      </div>
      <br />
      <div className="footer">
        <p className="footer-text">&copy; 2024 Cauldron.</p>
      </div>
      <style jsx>{
        @media (min-width: 1280px) {
          .wrap {
            padding-left: 0px;
            padding-right: 0px;
          }
        }
        @media (min-width: 1024px) {
          .wrap {
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (min-width: 768px) {
          .wrap {
            padding-left: 2.5rem;
            padding-right: 2.5rem;
          }
        }
        .logo{
          width:70px;
        }
        .wrap {
          max-width: 80rem;
          padding: 0.5rem;
          width: 100%;
        }
        .header {
          font-size: 2rem;
          font-weight: 500;
          color: #0f1014;
        }
        .content {
          margin-top: 1rem;
        }
        .paragraph {
          color: #313131;
        }
        .link {
          color: #212121;
          text-decoration: underline;
        }
        .team {
          font-weight: 500;
          color: #212121;
        }
        .footer {
          margin-top: 1rem;
        }
        .footer-text {
          font-size: 0.875rem;
          color: #515151;
        }
      }</style>
    </div>`;
};

export default Mail;
