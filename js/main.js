import AOS from "./aos";

import "../css/normalize.css";
import "../css/styles.css";
import "../css/aos.css";

document
  .querySelectorAll(".collapsible__header")
  .forEach((e) =>
    e.addEventListener("click", (ev) =>
      e.parentElement
        .closest(".collapsible")
        .classList.toggle("collapsible--expanded")
    )
  );

AOS.init();
