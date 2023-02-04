import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import Campaign from "./pages/Campaign";
import Webinar from "./pages/Webinar";
import Welcome from "./pages/Welcome";

import { store } from "./store";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const pageData = useSelector((state) => state.page);
  return (
    <>
      {pageData.welcomePage && <Welcome />}
      {pageData.webinarPage && <Webinar />}
      {pageData.campaignPage && <Campaign />}
      {pageData.thirdChoicePage && <Webinar />} 
      {/* <Webinar /> */}
      {/* <Campaign /> */}
      {/* <Welcome /> */}
    </>
  );
}

export default App;
