import ShorteningForm from "./ShorteningForm";
import "../styles/shortener.css";
import Statistics from "./Statistics";
function Shortener() {
  return (
    <div className="shortener">
      <div className="container shortener-container">
        <ShorteningForm />
        <Statistics />
      </div>
    </div>
  );
}
export default Shortener;
