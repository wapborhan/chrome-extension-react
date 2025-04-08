import React, { useEffect } from "react";

const Wallpaper = () => {
  useEffect(() => {
    const savedWallpaper = localStorage.getItem("wallpaper");
    if (savedWallpaper) {
      const root = document.getElementById("root");
      if (root) root.style.backgroundImage = `url(${savedWallpaper})`;
    }
  }, []);

  const setWallpaper = (url, isRandom = false) => {
    const root = document.getElementById("root");
    if (root) {
      root.style.backgroundImage = `url(${url})`;
      localStorage.setItem("wallpaper", url);
      localStorage.setItem("isRandomWallpaper", isRandom ? "true" : "false");
    }
  };

  const clearWallpaper = () => {
    const root = document.getElementById("root");
    if (root) {
      root.style.backgroundImage = "none";
      localStorage.removeItem("wallpaper");
      localStorage.removeItem("isRandomWallpaper");
    }
  };

  const handleUpload = async () => {
    try {
      const [fileHandle] = await window.showOpenFilePicker({
        types: [
          {
            description: "Image Files",
            accept: {
              "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
            },
          },
        ],
        multiple: false,
      });

      const file = await fileHandle.getFile();
      const reader = new FileReader();
      reader.onload = (e) => {
        const wallpaperUrl = e.target.result;
        setWallpaper(wallpaperUrl);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("File upload canceled or failed:", error);
    }
  };

  const handleRandom = async () => {
    try {
      const res = await fetch("https://source.unsplash.com/random/1920x1080");
      setWallpaper(res.url, true);
    } catch (err) {
      console.error("Error fetching random wallpaper:", err);
    }
  };

  return (
    <div className="uploadClearContainer">
      {/* Upload Button */}
      <button
        className="uploadButton"
        onClick={handleUpload}
        title="Upload Wallpaper"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m11.558 13.646l-.084.071l-6.927 6.8a3.23 3.23 0 0 0 1.703.481h4.914l.356-1.423c.162-.648.497-1.24.97-1.712l2.11-2.11l-2.075-2.036l-.094-.078a.75.75 0 0 0-.873.007m4.945-5.394a.752.752 0 1 0-1.504 0a.752.752 0 0 0 1.504 0m-.843 6.441l-2.085-2.046l-.128-.117a2.25 2.25 0 0 0-2.888-.006l-.136.123l-6.938 6.81A3.23 3.23 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.499a3.25 3.25 0 0 1 3.25 3.25v4.762a3.28 3.28 0 0 0-2.608.95zM13.5 8.252a2.252 2.252 0 1 0 4.503 0a2.252 2.252 0 0 0-4.504 0m5.598 4.417l-5.901 5.901a2.7 2.7 0 0 0-.707 1.248l-.457 1.83c-.2.797.522 1.518 1.318 1.319l1.83-.458a2.7 2.7 0 0 0 1.248-.706L22.33 15.9a2.286 2.286 0 0 0-3.233-3.232"
          />
        </svg>
        <span id="uploadWallpaperText">Upload Wallpaper</span>
      </button>

      {/* Random Button */}
      <button
        className="randomButton"
        onClick={handleRandom}
        title="Random Wallpaper"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 1792 1600"
        >
          <path
            fill="currentColor"
            d="M666 449q-60 92-137 273q-22-45-37-72.5T451.5 586t-51-56.5t-63-35T256 480H32q-14 0-23-9t-9-23V256q0-14 9-23t23-9h224q250 0 410 225m1126 799q0 14-9 23l-320 320q-9 9-23 9q-13 0-22.5-9.5t-9.5-22.5v-192q-32 0-85 .5t-81 1t-73-1t-71-5t-64-10.5t-63-18.5t-58-28.5t-59-40t-55-53.5t-56-69.5q59-93 136-273q22 45 37 72.5t40.5 63.5t51 56.5t63 35t81.5 14.5h256V928q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23m0-896q0 14-9 23l-320 320q-9 9-23 9q-13 0-22.5-9.5T1408 672V480h-256q-48 0-87 15t-69 45t-51 61.5t-45 77.5q-32 62-78 171q-29 66-49.5 111t-54 105t-64 100t-74 83t-90 68.5t-106.5 42t-128 16.5H32q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224q48 0 87-15t69-45t51-61.5t45-77.5q32-62 78-171q29-66 49.5-111t54-105t64-100t74-83t90-68.5t106.5-42t128-16.5h256V32q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23"
          />
        </svg>
      </button>

      {/* Clear Button */}
      <button
        className="clearButton"
        onClick={clearWallpaper}
        title="Clear Wallpaper"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Wallpaper;
