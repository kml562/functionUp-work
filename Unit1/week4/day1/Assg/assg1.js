const test= document.querySelector("ul")
// test.addEventListener(
//     "mouseenter",
//     (event) => {
//       // highlight the mouseenter target
//       event.target.style.color = "purple";
  
//       // reset the color after a short delay
//       setTimeout(() => {
//         event.target.style.color = "";
//       }, 500);
//     },
//     false
//   );
  test.addEventListener("onmouseleave", (event) => {
    event.target.style.color = "blue"
  })
  // This handler will be executed every time the cursor
  // is moved over a different list item
  test.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      event.target.style.color = "orange";
  
      // reset the color after a short delay
      setTimeout(() => {
        event.target.style.color = "";
      }, 500);
    },
    false
  );