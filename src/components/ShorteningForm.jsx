import { useState } from "react";
import "../styles/shorteningForm.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function UnvalidUrl() {
  return (
    <div className="unvalid-url">
      <p>Unvalid Url</p>
    </div>
  );
}
function ShorteningForm() {
  const [link, setLink] = useState("");
  const [shortLinks, setShortLinks] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [error, setError] = useState(false);
  const shortenUrl = (e) => {
    if (link.trim() === "") {
      const input = document.querySelector(".link-input");
      input.placeholder = "Please add a link";
      input.classList.add("empty-link");
    } else {
      let counter = 0;
      shortLinks.forEach((l) => {
        if (l.originalUrl === link) {
          counter++;
        }
      });
      if (counter > 0) {
        const input = document.querySelector(".link-input");
        input.placeholder = "Link shortened already, give another link";
        input.value = "";
        input.classList.add("empty-link");
      } else {
        const input = document.querySelector(".link-input");
        input.value = "";
        setShowSkeleton(true);
        fetch(
          "https://api.tinyurl.com/create?api_token=782wGGexRdSNOFkghjW52qLVG9grfeQwfp9WFkFoFXxJfjKInWfdOWeKBqJ7",
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              url: link,
              domain: "tinyurl.com",
            }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setShowSkeleton(false);
            if (data.code !== 5) {
              setShortLinks([
                ...shortLinks,
                { originalUrl: data.data.url, shortUrl: data.data.tiny_url },
              ]);
            } else {
              setError(true);
            }
          });
      }
    }
  };
  const shortUrlCopy = (shortUrl, index) => {
    navigator.clipboard.writeText(shortUrl);
    const copyButton = document.querySelector(`.link-${index}`).children[2];
    copyButton.textContent = "Copied";
    copyButton.classList.add("copied");
    setTimeout(() => {
      copyButton.textContent = "Copy";
      copyButton.classList.remove("copied");
    }, 1000);
  };
  return (
    <>
      <div className="shortening-form">
        <input
          type="text"
          placeholder="Shorten link here..."
          onChange={(e) => {
            setLink(e.target.value);
            const input = document.querySelector(".link-input");
            input.placeholder = "Shorten a link here...";
            input.classList.remove("empty-link");
            setError(false);
          }}
          className="link-input"
        />
        <button onClick={shortenUrl} className="shorten-btn">
          Shorten It!
        </button>
      </div>
      <div className="urls-list">
        {shortLinks.map((link, index) => {
          return (
            <div className={`link link-${index}`} key={index}>
              <h3>{link.originalUrl}</h3>
              <h3 className="short-url">{link.shortUrl}</h3>
              <button onClick={() => shortUrlCopy(link.shortUrl, index)}>
                Copy
              </button>
            </div>
          );
        })}
        {error && <UnvalidUrl />}
        {showSkeleton && <Skeleton height={"83px"} borderRadius={"10px"} />}
      </div>
    </>
  );
}
export default ShorteningForm;
