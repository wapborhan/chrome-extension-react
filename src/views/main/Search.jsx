import React, { useEffect, useRef, useState } from "react";

const Search = () => {
  const searchEngine = "https://www.google.com/search?q=";
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onstart = () => {
        setIsListening(true);
      };

      recognitionRef.current.onresult = (event) => {
        let transcript = "";
        for (let i = 0; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setQuery(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error: ", event.error);
        setIsListening(false);
      };
    }
  }, []);

  const handleSearch = () => {
    if (query) {
      window.location.href = searchEngine + encodeURIComponent(query);
    }
  };

  const handleVoiceSearch = () => {
    if (recognitionRef.current) {
      if (isListening) {
        recognitionRef.current.stop();
      } else {
        recognitionRef.current.start();
      }
    } else {
      alert("Voice search is not supported in this browser.");
    }
  };
  return (
    <div className="search">
      {/* <!-- ----------searchbar-------------- --> */}
      <div className="searchbar bgLightTint" id="searchbar">
        <div className="searchIcon">
          <svg
            fill="none"
            height="100%"
            viewBox="0 0 45 45"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="searchIconDark"
              className="accentColor"
              clipRule="evenodd"
              d="M5.00087 20.0137C5.00087 18.0425 5.38915 16.0906 6.14353 14.2695C6.89791 12.4484 8.00363 10.7936 9.39755 9.39981C10.7915 8.00598 12.4463 6.90034 14.2675 6.146C16.0888 5.39167 18.0408 5.00342 20.0121 5.00342C21.9834 5.00342 23.9354 5.39167 25.7566 6.146C27.5779 6.90034 29.2327 8.00598 30.6266 9.39981C32.0205 10.7936 33.1262 12.4484 33.8806 14.2695C34.635 16.0906 35.0233 18.0425 35.0233 20.0137C35.0233 23.9946 33.4417 27.8125 30.6266 30.6275C27.8114 33.4425 23.9933 35.0239 20.0121 35.0239C16.0309 35.0239 12.2127 33.4425 9.39755 30.6275C6.5824 27.8125 5.00087 23.9946 5.00087 20.0137ZM20.0121 1.23625e-07C16.8268 0.000456127 13.6877 0.761065 10.8556 2.21861C8.02347 3.67616 5.58012 5.78855 3.72863 8.38023C1.87714 10.9719 0.670974 13.968 0.210373 17.1196C-0.250229 20.2711 0.0480379 23.4871 1.08039 26.5002C2.11273 29.5133 3.84934 32.2365 6.14589 34.4435C8.44244 36.6505 11.2326 38.2776 14.2845 39.1895C17.3364 40.1014 20.5618 40.2718 23.6928 39.6865C26.8238 39.1013 29.7699 37.7772 32.2862 35.8245L40.7601 44.2977C41.2319 44.7534 41.8639 45.0056 42.5199 44.9999C43.1758 44.9942 43.8033 44.7311 44.2672 44.2673C44.7311 43.8034 44.9942 43.176 44.9999 42.52C45.0056 41.8641 44.7534 41.2322 44.2977 40.7603L35.8239 32.287C38.1208 29.3287 39.5415 25.7852 39.9244 22.0595C40.3073 18.3338 39.637 14.5754 37.9897 11.2118C36.3424 7.84812 33.7843 5.01415 30.6062 3.03213C27.4281 1.05011 23.7576 -0.000416085 20.0121 1.23625e-07ZM20.0121 30.0205C22.6662 30.0205 25.2117 28.9662 27.0884 27.0896C28.9652 25.2129 30.0195 22.6676 30.0195 20.0137C30.0195 17.3597 28.9652 14.8144 27.0884 12.9378C25.2117 11.0611 22.6662 10.0068 20.0121 10.0068C17.3579 10.0068 14.8125 11.0611 12.9357 12.9378C11.059 14.8144 10.0046 17.3597 10.0046 20.0137C10.0046 22.6676 11.059 25.2129 12.9357 27.0896C14.8125 28.9662 17.3579 30.0205 20.0121 30.0205Z"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="searchIcon">
          <svg
            fill="none"
            height="28"
            viewBox="0 0 28 28"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect className="accentColor" height="28" rx="14" width="28" />
            <path
              className="darkIconForDarkTheme"
              // style="transform: scale(0.85); transform-origin: center"
              d="M24.805 12.0177C24.9359 12.756 25.0011 13.504 25 14.2534C25 17.6 23.7796 20.4297 21.6559 22.345H21.6587C19.8016 24.0265 17.2487 25 14.2216 25C11.2455 25 8.3912 23.8411 6.28674 21.7783C4.18227 19.7154 3 16.9176 3 14.0004C3 11.0831 4.18227 8.28528 6.28674 6.22244C8.3912 4.15961 11.2455 3.00073 14.2216 3.00073C17.0073 2.96875 19.6976 3.99459 21.7289 5.86338L18.5251 9.00378C17.367 7.92165 15.8214 7.32907 14.2216 7.35383C11.2942 7.35383 8.80719 9.28977 7.92068 11.8967C7.45064 13.2627 7.45064 14.7421 7.92068 16.1082H7.92489C8.8156 18.711 11.2984 20.6469 14.2258 20.6469C15.7379 20.6469 17.0368 20.2674 18.044 19.5964H18.0398C18.6246 19.2167 19.1248 18.7247 19.5103 18.1502C19.8958 17.5758 20.1585 16.9307 20.2827 16.2539H14.2216V12.0191L24.805 12.0177Z"
              fill="#fffffff0"
            />
          </svg>
        </div>

        <div className="searchbar-content">
          <input
            id="searchQ"
            placeholder="Type here..."
            type="text"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          <div className="searchControls">
            {/* <!-- Mic Icon --> */}
            <div className="micIcon" id="micIcon" onClick={handleVoiceSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -1 24 24"
                height="100%"
                width="100%"
                className={
                  isListening ? "text-blue-500 animate-pulse" : "text-gray-500"
                }
              >
                <path
                  fill="currentColor"
                  d="M12 14q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2t2.125.875T15 5v6q0 1.25-.875 2.125T12 14m-1 7v-3.075q-2.6-.35-4.3-2.325T5 11h2q0 2.075 1.463 3.538T12 16t3.538-1.463T17 11h2q0 2.625-1.7 4.6T13 17.925V21z"
                />
              </svg>
            </div>
            {/* <!-- Search Button --> */}
            <button id="enterBtn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
