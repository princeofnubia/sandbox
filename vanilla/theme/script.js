const themeToggle = document.getElementById("theme-toggle");
let light = "light";
let dark = "dark";
let defaultTheme = light;
let root = document.querySelector(":root");
let themeState = defaultTheme;

const darkTheme = {
  backgroundColor: "#000",
  textColor: "#fff",
};

const lightTheme = {
  backgroundColor: "#fff",
  textColor: "#000",
};

themeToggle.addEventListener("click", () => {
  changeThemeState();
});

function changeThemeState() {
  let theme;
  if (themeState === "light") {
    themeState = dark;
    theme = darkTheme;
  } else {
    themeState = light;
    theme = lightTheme;
  }
  root.style.setProperty("--backgroundColor", theme.backgroundColor);
  root.style.setProperty("--textColor", theme.textColor);
}
