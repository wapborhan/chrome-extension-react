import React, { useEffect } from "react";

const ColorChange = () => {
  useEffect(() => {
    // This will run after the component mounts, similar to DOMContentLoaded
    const themeStorageKey = "selectedTheme";
    const customThemeStorageKey = "customThemeColor";
    const storedTheme = localStorage.getItem(themeStorageKey);
    const storedCustomColor = localStorage.getItem(customThemeStorageKey);
    const colorPicker = document.getElementById("colorPicker");
    const radioButtons = document.querySelectorAll(".colorPlate");

    // Function to apply the selected theme
    const applySelectedTheme = (colorValue) => {
      // Reset dark theme if not selected
      if (colorValue !== "dark") {
        resetDarkTheme();
      }

      // Apply styles for other themes
      if (colorValue === "blue") {
        setCssVariables({
          "--bg-color-blue": "#BBD6FD",
          "--accentLightTint-blue": "#E2EEFF",
          "--darkerColor-blue": "#3569b2",
          "--darkColor-blue": "#4382EC",
          "--textColorDark-blue": "#1b3041",
          "--whitishColor-blue": "#ffffff",
        });
      } else if (colorValue === "dark") {
        applyDarkTheme();
      } else {
        // For other predefined colors
        setCssVariables({
          "--bg-color-blue": `var(--bg-color-${colorValue})`,
          "--accentLightTint-blue": `var(--accentLightTint-${colorValue})`,
          "--darkerColor-blue": `var(--darkerColor-${colorValue})`,
          "--darkColor-blue": `var(--darkColor-${colorValue})`,
          "--textColorDark-blue": `var(--textColorDark-${colorValue})`,
          "--whitishColor-blue": `var(--whitishColor-${colorValue})`,
        });
      }
    };

    const resetDarkTheme = () => {
      document.documentElement.classList.remove("dark-theme");
      // Reset other dark theme specific styles if needed
    };

    const applyDarkTheme = () => {
      // Apply dark theme specific styles
      document.documentElement.classList.add("dark-theme");
      setCssVariables({
        "--bg-color-blue": `var(--bg-color-dark)`,
        "--accentLightTint-blue": `var(--accentLightTint-dark)`,
        "--darkerColor-blue": `var(--darkerColor-dark)`,
        "--darkColor-blue": `var(--darkColor-dark)`,
        "--textColorDark-blue": `var(--textColorDark-dark)`,
        "--whitishColor-blue": `var(--whitishColor-dark)`,
      });
    };

    const setCssVariables = (variables) => {
      const root = document.documentElement;
      Object.entries(variables).forEach(([property, value]) => {
        root.style.setProperty(property, value);
      });
    };

    const applyCustomTheme = (color) => {
      let adjustedColor = color;

      // Helper functions from original script
      const darkenHexColor = (hex, factor = 0.6) => {
        hex = hex.replace("#", "");
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        r = Math.floor(r * (1 - factor));
        g = Math.floor(g * (1 - factor));
        b = Math.floor(b * (1 - factor));
        return `#${((1 << 24) | (r << 16) | (g << 8) | b)
          .toString(16)
          .slice(1)
          .toUpperCase()}`;
      };

      const lightenHexColor = (hex, factor = 0.85) => {
        hex = hex.replace("#", "");
        if (hex.length === 3) {
          hex = hex
            .split("")
            .map((c) => c + c)
            .join("");
        }
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        r = Math.floor(r + (255 - r) * factor);
        g = Math.floor(g + (255 - g) * factor);
        b = Math.floor(b + (255 - b) * factor);
        return `#${((1 << 24) | (r << 16) | (g << 8) | b)
          .toString(16)
          .slice(1)
          .toUpperCase()}`;
      };

      const lightestColor = (hex, factor = 0.95) => {
        hex = hex.replace("#", "");
        if (hex.length === 3) {
          hex = hex
            .split("")
            .map((c) => c + c)
            .join("");
        }
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        r = Math.floor(r + (255 - r) * factor);
        g = Math.floor(g + (255 - g) * factor);
        b = Math.floor(b + (255 - b) * factor);
        return `#${((1 << 24) | (r << 16) | (g << 8) | b)
          .toString(16)
          .slice(1)
          .toUpperCase()}`;
      };

      const isNearWhite = (hex, threshold = 240) => {
        hex = hex.replace("#", "");
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        return r > threshold && g > threshold && b > threshold;
      };

      if (isNearWhite(color)) {
        adjustedColor = "#696969";
      }

      const darkerColorHex = darkenHexColor(adjustedColor);
      const lighterColorHex = lightenHexColor(adjustedColor, 0.85);
      const lightTin = lightestColor(adjustedColor, 0.95);

      resetDarkTheme();

      setCssVariables({
        "--bg-color-blue": lighterColorHex,
        "--accentLightTint-blue": lightTin,
        "--darkerColor-blue": darkerColorHex,
        "--darkColor-blue": adjustedColor,
        "--textColorDark-blue": darkerColorHex,
        "--whitishColor-blue": "#ffffff",
      });

      document.getElementById("rangColor").style.borderColor = color;
      document.getElementById("dfChecked").checked = false;
    };

    // Handle radio button changes
    const handleThemeChange = function () {
      if (this.checked) {
        const colorValue = this.value;
        localStorage.setItem(themeStorageKey, colorValue);
        localStorage.removeItem(customThemeStorageKey);
        applySelectedTheme(colorValue);
      }
    };

    // Handle color picker changes
    const handleColorPickerChange = function (event) {
      const selectedColor = event.target.value;
      resetDarkTheme();
      localStorage.setItem(customThemeStorageKey, selectedColor);
      localStorage.removeItem(themeStorageKey);
      applyCustomTheme(selectedColor);

      // Uncheck all radio buttons
      radioButtons.forEach((radio) => {
        radio.checked = false;
      });
    };

    // Add event listeners
    radioButtons.forEach((radioButton) => {
      radioButton.removeEventListener("change", handleThemeChange);
      radioButton.addEventListener("change", handleThemeChange);
    });

    if (colorPicker) {
      colorPicker.removeEventListener("input", handleColorPickerChange);
      colorPicker.addEventListener("input", handleColorPickerChange);
    }

    // Load theme on component mount
    if (storedTheme) {
      applySelectedTheme(storedTheme);
      // Check the corresponding radio button
      const selectedRadio = document.querySelector(
        `.colorPlate[value="${storedTheme}"]`
      );
      if (selectedRadio) selectedRadio.checked = true;
    } else if (storedCustomColor) {
      applyCustomTheme(storedCustomColor);
      colorPicker.value = storedCustomColor;
    }

    return () => {
      // Cleanup event listeners when component unmounts
      radioButtons.forEach((radioButton) => {
        radioButton.removeEventListener("change", handleThemeChange);
      });
      if (colorPicker) {
        colorPicker.removeEventListener("input", handleColorPickerChange);
      }
    };
  }, []);

  return (
    <div className="themingStuff">
      <div className="btn" id="themeButton">
        <svg
          fill="none"
          height="100%"
          viewBox="0 0 20 20"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="themeIconSvg"
            className="accentColor"
            d="M14.2778 10C13.9684 10 13.6716 9.87708 13.4528 9.65829C13.234 9.4395 13.1111 9.14275 13.1111 8.83333C13.1111 8.52391 13.234 8.22717 13.4528 8.00837C13.6716 7.78958 13.9684 7.66667 14.2778 7.66667C14.5872 7.66667 14.8839 7.78958 15.1027 8.00837C15.3215 8.22717 15.4444 8.52391 15.4444 8.83333C15.4444 9.14275 15.3215 9.4395 15.1027 9.65829C14.8839 9.87708 14.5872 10 14.2778 10ZM11.9444 6.88889C11.635 6.88889 11.3383 6.76597 11.1195 6.54718C10.9007 6.32839 10.7778 6.03164 10.7778 5.72222C10.7778 5.4128 10.9007 5.11606 11.1195 4.89726C11.3383 4.67847 11.635 4.55556 11.9444 4.55556C12.2539 4.55556 12.5506 4.67847 12.7694 4.89726C12.9882 5.11606 13.1111 5.4128 13.1111 5.72222C13.1111 6.03164 12.9882 6.32839 12.7694 6.54718C12.5506 6.76597 12.2539 6.88889 11.9444 6.88889ZM8.05556 6.88889C7.74614 6.88889 7.44939 6.76597 7.2306 6.54718C7.0118 6.32839 6.88889 6.03164 6.88889 5.72222C6.88889 5.4128 7.0118 5.11606 7.2306 4.89726C7.44939 4.67847 7.74614 4.55556 8.05556 4.55556C8.36497 4.55556 8.66172 4.67847 8.88051 4.89726C9.09931 5.11606 9.22222 5.4128 9.22222 5.72222C9.22222 6.03164 9.09931 6.32839 8.88051 6.54718C8.66172 6.76597 8.36497 6.88889 8.05556 6.88889ZM5.72222 10C5.4128 10 5.11606 9.87708 4.89726 9.65829C4.67847 9.4395 4.55556 9.14275 4.55556 8.83333C4.55556 8.52391 4.67847 8.22717 4.89726 8.00837C5.11606 7.78958 5.4128 7.66667 5.72222 7.66667C6.03164 7.66667 6.32839 7.78958 6.54718 8.00837C6.76597 8.22717 6.88889 8.52391 6.88889 8.83333C6.88889 9.14275 6.76597 9.4395 6.54718 9.65829C6.32839 9.87708 6.03164 10 5.72222 10ZM10 3C8.14348 3 6.36301 3.7375 5.05025 5.05025C3.7375 6.36301 3 8.14348 3 10C3 11.8565 3.7375 13.637 5.05025 14.9497C6.36301 16.2625 8.14348 17 10 17C10.3094 17 10.6062 16.8771 10.825 16.6583C11.0437 16.4395 11.1667 16.1428 11.1667 15.8333C11.1667 15.53 11.05 15.2578 10.8633 15.0556C10.6844 14.8456 10.5678 14.5733 10.5678 14.2778C10.5678 13.9684 10.6907 13.6716 10.9095 13.4528C11.1283 13.234 11.425 13.1111 11.7344 13.1111H13.1111C14.1425 13.1111 15.1317 12.7014 15.861 11.9721C16.5903 11.2428 17 10.2536 17 9.22222C17 5.78444 13.8656 3 10 3Z"
            fill="#f00"
          />
        </svg>
      </div>

      <div className="colorsContainer" id="colorsContainer">
        {/* Predefined color options */}
        <input className="colorPlate" name="color" type="radio" value="red" />
        <input
          className="colorPlate"
          name="color"
          type="radio"
          value="yellow"
        />
        <input className="colorPlate" name="color" type="radio" value="green" />
        <input className="colorPlate" name="color" type="radio" value="cyan" />
        <input
          id="dfChecked"
          className="colorPlate"
          name="color"
          type="radio"
          defaultChecked
          value="blue"
        />

        <input className="colorPlate" name="color" type="radio" value="pink" />
        <input
          className="colorPlate"
          name="color"
          type="radio"
          value="purple"
        />
        <input
          className="colorPlate"
          name="color"
          type="radio"
          value="orange"
        />
        <input className="colorPlate" name="color" type="radio" value="brown" />
        <input
          className="colorPlate"
          name="color"
          type="radio"
          value="silver"
        />

        <input className="colorPlate" name="color" type="radio" value="grey" />
        <input
          className="colorPlate"
          id="darkTheme"
          name="color"
          type="radio"
          value="dark"
        />

        {/* Color picker option */}
        <label
          id="rangColor"
          className="colorPlate colorPickerLabel"
          htmlFor="colorPicker"
        >
          Pick color
        </label>
        <input type="color" id="colorPicker" defaultValue="#EA1010" />
      </div>
    </div>
  );
};

export default ColorChange;
