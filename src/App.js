import "./App.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Shortener from "./components/Shortener";
import { SkeletonTheme } from "react-loading-skeleton";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";
function App() {
  return (
    <SkeletonTheme baseColor="#D8D8D8" highlightColor="#F3F2F2">
      <div className="App">
        <Header />
        <Showcase />
        <Shortener />
        <PreFooter />
        <Footer />
      </div>
    </SkeletonTheme>
  );
}

export default App;
