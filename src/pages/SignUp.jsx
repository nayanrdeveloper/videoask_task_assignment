import React, { useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css";

function SignUp() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="px-20" data-aos="fade-up">
      <h3 className="font-semibold text-lg">
        Before you go, please leave your contact details so we can get back to
        you...
      </h3>
      <div className="flex flex-col space-y-5">
        <input placeholder="*Your Name" className="input" />
        <input placeholder="*Your Email" className="input" />
        <div className="space-x-2">
          <input type={"checkbox"} id="privacy" />
          <label htmlFor="privacy" className="text-gray-500">
            * [Sample legal text] The personal data you have provided will be
            processed by XXXXX for purposes of providing you the service. The
            legal basis of the processing is XXXXX. Your data will not be
            transferred nor assigned to third parties. You can exercise your
            right to access, rectify and delete your data, as well as the other
            rights granted by law by sending an email to XXXXX. For further
            information, please check our privacy policy XXXXX.
          </label>
        </div>
        <PrimaryButton headerText={"Send Your Answer ->"} />
      </div>
    </section>
  );
}

export default SignUp;
