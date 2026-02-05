import Bath from "../components/Bath";
import Helpers from "../components/Helpers";
import IntroductionSection from "../components/IntroductionSection";
import Safety from "../components/Safety";
import Services from "../components/services";
import Walk from "../components/Walk";
import "../styles/mainpage.scss";

const MainPage = () => {
  return (
    <div className="min-h-screen">
      <IntroductionSection />
      <Services />
      <Helpers />
      
      {/* Divider Line */}
      <div className="h-px bg-linear-to-r from-transparent via-purple-300 to-transparent my-4 md:my-6"></div>
      
      <Bath />
      
      {/* Divider Line */}
      <div className="h-px bg-linear-to-r from-transparent via-purple-300 to-transparent my-4 md:my-6"></div>
      
      <Safety />
      
      {/* Divider Line */}
      <div className="h-px bg-linear-to-r from-transparent via-purple-300 to-transparent my-4 md:my-6"></div>
      
      <Walk />
    </div>
  );
};

export default MainPage;
