import React, { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import VideoPlayer from "../components/VideoPlayer";
import SignUp from "./SignUp";
import AOS from "aos";
import "aos/dist/aos.css";

function Webinar() {
  const [isShowSignup, setIsShowSignup] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2" data-aos="fade-up">
      <div>
        <VideoPlayer src="https://media.videoask.com/transcoded/e8762b7e-7699-495d-a72c-24ea32902eea/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImU4NzYyYjdlLTc2OTktNDk1ZC1hNzJjLTI0ZWEzMjkwMmVlYSIsImV4cCI6MTY3NTc4OTkwNH0.BmVNveEpCdgA4y41LOS2QJ-AbFUj0x2aN4vT3lm_SXURXALKYmzWH42Fp6Dvi0qDTOaWOk9DONPfjlQW6y-hA-G7d0qENVfC-9z2JIUMOx8KztH6q2RIMl8KI_fRizSFJEYUe-KeX3ETBZA5340dJUcWPCiFQj4gX0iGmM07-2lh8iCgpVq3Nq28eeYRQAvSc6N8Mx0_R1hUNZ2lJ7PsaQE9SnR9UHVbFz7OyF5bKZAjssfvuoAu8dGkK3dvqQlOaqYL0VWI92ykRSry--Y7AmmhTuqHCSYm_RrrtUuoRGb-xT3br0XkDKU1z_fIprHaUxJz1VyHXUHYOTDuewYvdR-X1QV2Dh3sosH0qO-ejBBrw45XEkKDLfKl7BlToXAKceBf_iTK_IXqxSiGK3aApR_-HgxkeR7fG-5z_fbFnD_SnrKJDN9iD_cpfGAr-qEaL4omwk5NURmT48QQg2N1MbfVwFZps6XaV9sJ3PvfKKBbJZQp3OSGrNpaQgAiHoA8E25_Jw9CFg5c1lFCSGO3C_zyC0LyNreNWcSxD1WpaqAa3FIMOqso6tW54Mcy4mvg3m2G6X90B8PYlhn46D0Lz4-heYQMuQipGP03DjMJI7K5D1_4UeJ6jLicKmINVu_oqriWWH2mpEpd4eVCS_3mQ_1N2C2sWhbXVaMx8G3uB-s" />
      </div>
      <div className="flex flex-col justify-center mx-auto">
        {isShowSignup ? (
          <SignUp />
        ) : (
          <div onClick={() => setIsShowSignup(!isShowSignup)}>
            <PrimaryButton headerText="Sign up for free Webinar" />
          </div>
        )}
      </div>
    </section>
  );
}

export default Webinar;
