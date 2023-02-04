import React, { useEffect } from "react";
import VideoPlayer from "../components/VideoPlayer";
import WelcomeButton from "../components/WelcomeButton";
import AOS from "aos";
import "aos/dist/aos.css";


function Welcome() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <aside className="grid grid-cols-1 md:grid-cols-2" data-aos="fade-up">
      <div>
        <VideoPlayer src="https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY3NTc4OTkwNH0.aOYpLnsEkGkbn7NmuCDTFNOBG34Fd-rfbX0f4gV6Y5mzOHU7nMMm11S9W1n1A3YiGD3_T_uqwnE1WNvt3XMliesPwh5RCVUnmJ8ZNlLszN0QXutxuv69ImpGq6Vbvn0mbuScHreHPbd0ob1QM6BDRcZ521Lqx1Lf1xByuIj32Dl_P4I0bekilKCnI9BsuJAtH9ntRzCdok3-5BUXnAQ4586cNvn_8b5f5b6QSzGm3M3GvHIjpJnvYZkx8BxRFdJKooGaY66AbzV8bKui3rnOhn9GKhHwCOqIqiMeHJo_-VCyX3X0WmvEiAskWaw-HMt0Nx8z1olQy1340BDB1zJ5iD3CDMepndI6DmGkV-E_79a9gaZAzau1x-2ZwAhM-OEP32eAAz2O5F_iksyNUM0ImNKqeZQwe03yTmrZfaaeBGSXEZ_cenGGi6TnKNnVkkKie-_-FjO4oa7nczW1DnSErlVZfAtkh6RNokpLy_rBBaKTMgS8gz9p7fUVgmj9f-jvDh8rahHc_Dhrbml5flXhZ6ucW5ZHVzQTzCb7ThPDspMouJjOkjY8SAi_-yHfT-d8R3F8bY68HqrKvL-RgddefqL_vmRp6588jMl_6C_doGT2v2zV5apOl0nUgCrxorZQlR9kiZaBMTjKcp_ClWTs6yTQ53H-8Nj1Xb1gqL41BOI" />
      </div>
      <div className="flex flex-col justify-center mx-auto space-y-4">
        <WelcomeButton
          btnText="Campaign structure"
          btnIndex="A"
          routePath="campaignPage"
        />
        <WelcomeButton
          btnText="Learn Facebook basics"
          btnIndex="B"
          routePath="webinarPage"
        />
        <WelcomeButton
          btnText="3rd choice"
          btnIndex="C"
          routePath="thirdChoicePage"
        />
      </div>
    </aside>
  );
}

export default Welcome;
