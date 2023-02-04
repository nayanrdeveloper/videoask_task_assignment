import "./App.css";
import Campaign from "./pages/Campaign";
import Webinar from "./pages/Webinar";
import Welcome from "./pages/Welcome";


import { useSelector } from "react-redux";

function App() {
  const pageData = useSelector((state) => state.page);
  return (
    <div>
      {pageData.welcomePage && <Welcome />}
      {pageData.webinarPage && <Webinar />}
      {pageData.campaignPage && <Campaign />}
      {pageData.thirdChoicePage && <Webinar />} 
    </div>
  );
}

export default App;
