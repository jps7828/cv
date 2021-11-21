document.getElementById("my-dark-theme").addEventListener("click", () => {
  document.documentElement.style.setProperty("--my-bg-color", "#222");
  document.documentElement.style.setProperty("--my-btn-color", "#217dbb");
  document.getElementById("my-light-theme").style.display="block";
  document.getElementById("my-dark-theme").style.display="none";
});

document.getElementById("my-light-theme").addEventListener("click", () => {
  document.documentElement.style.setProperty("--my-bg-color", "#217dbb");
  document.documentElement.style.setProperty("--my-btn-color", "#6e5494");
  document.getElementById("my-light-theme").style.display="none";
  document.getElementById("my-dark-theme").style.display="block";
});
