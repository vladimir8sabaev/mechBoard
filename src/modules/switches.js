"use strict";
//!Switches
function switches() {
  const switches = document.querySelectorAll(".switches-img");
  switches.forEach((switchName) => {
    switchName.addEventListener("mouseover", () => {
      const text = document.createElement("div");
      text.classList.add("switches-descr");
      text.textContent = switchName.dataset.text;
      switchName.parentElement.append(text);
    });
    switchName.addEventListener("mouseout", () => {
      const switchesDescr = document.querySelectorAll(".switches-descr");
      switchesDescr.forEach((switchDescr) => {
        switchDescr.innerHTML = "";
      });
    });
    switchName.addEventListener("click", (e) => {
      const audio = document.querySelector(
        `audio[data-name="${e.target.dataset.name}"]`
      );
      if (!audio) {
        return;
      }
      audio.play();
    });
  });
}
export default switches;
