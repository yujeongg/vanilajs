// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("h2");

const superEventHandler = {
  handleResize: function handleResize() {
    title.innerHTML = "You just resize!";
    title.style.color = "purple";
  },
  handelAuxClick: function handelAuxClick() {
    title.innerHTML = "That was a right click!";
    title.style.color = "peru";
  },
  handleMouseOver: function handleMouseOver() {
    title.innerHTML = "The mouse is here!";
    title.style.color = "yellowgreen";
  },
  handleMouseOut: function handleMouseOut() {
    title.innerHTML = "The mouse is gone!";
    title.style.color = "royalblue";
  }
};

window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("auxclick", superEventHandler.handelAuxClick);
window.addEventListener("mouseout", superEventHandler.handleMouseOut);
window.addEventListener("mouseover", superEventHandler.handleMouseOver);
