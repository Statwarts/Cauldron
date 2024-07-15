import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-full text-balance bg-gradient-to-t from-[rgb(11,12,15)] to-[#0F1014] p-8 text-[#E5F1FD]">
      <div className="bg-gradient-to-t from-[#9dabc1] to-blue-200 bg-clip-text pb-10 pt-10 text-center text-5xl font-semibold text-transparent">
        <h1>Privacy Policy for Cauldron</h1>
      </div>
      <div className="m-auto flex max-w-4xl flex-col justify-center">
        <p>
          At Cauldron, accessible from{" "}
          <a href="https://www.cauldron.live"> cauldron.live</a>, one of our
          main priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by Cauldron and how we use it.
        </p>

        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>
        <div className="bg-gradient-to-t from-[#9dabc1] to-blue-200 bg-clip-text pb-5 pt-20 text-3xl font-semibold text-transparent">
          <h2>Log Files</h2>
        </div>
        <p>
          Cauldron follows a standard procedure of using log files. These files
          log visitors when they visit websites. All hosting companies do this
          and a part of hosting services' analytics. The information collected
          by log files include internet protocol (IP) addresses, browser type,
          Internet Service Provider (ISP), date and time stamp, referring/exit
          pages, and possibly the number of clicks. These are not linked to any
          information that is personally identifiable. The purpose of the
          information is for analyzing trends, administering the site, tracking
          users' movement on the website, and gathering demographic information.
          Our Privacy Policy was created with the help of the{" "}
          <a href="https://www.privacypolicyonline.com/privacy-policy-generator/">
            Privacy Policy Generator
          </a>
          .
        </p>

        <div className="bg-gradient-to-t from-[#9dabc1] to-blue-200 bg-clip-text pb-5 pt-20 text-3xl font-semibold text-transparent">
          <h2>Privacy Policies</h2>
        </div>

        <p>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of Cauldron.
        </p>

        <p>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on Cauldron, which are sent
          directly to users' browser. They automatically receive your IP address
          when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.
        </p>

        <p>
          Note that Cauldron has no access to or control over these cookies that
          are used by third-party advertisers.
        </p>
        <div className="bg-gradient-to-t from-[#9dabc1] to-blue-200 bg-clip-text pb-5 pt-20 text-3xl font-semibold text-transparent">
          <h2>Third Party Privacy Policies</h2>
        </div>

        <p>
          Cauldron's Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options.{" "}
        </p>

        <p>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites. What Are Cookies?
        </p>
        <div className="bg-gradient-to-t from-[#9dabc1] to-blue-200 bg-clip-text pb-5 pt-20 text-3xl font-semibold text-transparent">
          <h2>Children's Information</h2>
        </div>

        <p>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>

        <p>
          Cauldron does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>
        <div className="bg-gradient-to-t from-[#9dabc1] to-blue-200 bg-clip-text pb-5 pt-20 text-3xl font-semibold text-transparent">
          <h2>Online Privacy Policy Only</h2>
        </div>

        <p>
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in Cauldron. This policy is not applicable to
          any information collected offline or via channels other than this
          website.
        </p>
        <div className="bg-gradient-to-t from-[#9dabc1] to-blue-200 bg-clip-text pb-5 pt-20 text-3xl font-semibold text-transparent">
          <h2>Consent</h2>
        </div>

        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its Terms and Conditions.
        </p>
      </div>
    </div>
  );
}
