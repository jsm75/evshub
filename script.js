console.log("script.js se está ejecutando");

const sections = document.querySelectorAll(".section");
sections.forEach(sec => {
  sec.style.display = "none";
});
document.getElementById("inicio").style.display = "block";

const buttons = document.querySelectorAll("[data-section]");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const destino = button.getAttribute("data-section");
    
    sections.forEach(sec => {
      sec.style.display = "none";
    });

    const target = document.getElementById(destino);
    if (target) {
      target.style.display = "block";
    }
  });
});
