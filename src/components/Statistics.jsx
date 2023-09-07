import "../styles/statistics.css";
import brand from "../images/icon-brand-recognition.svg";
import records from "../images/icon-detailed-records.svg";
import custom from "../images/icon-fully-customizable.svg";
export default function Statistics() {
  const cardsInfos = [
    {
      id: 1,
      title: "Brand Recognition",
      image: brand,
      description:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
    },
    {
      id: 2,
      title: "Detailed Records",
      image: records,
      description:
        "Gain insights into who is clicking yourlinks. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      id: 3,
      title: "Fully Customizable",
      image: custom,
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement",
    },
  ];
  return (
    <div className="statistics">
      <div className="stats-title">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="stats-cards">
        {cardsInfos.map((card) => {
          return (
            <div className="card" key={card.id}>
              <div className="card-img">
                {" "}
                <img src={card.image} alt="" />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
