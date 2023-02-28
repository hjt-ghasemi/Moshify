document
  .querySelectorAll(".collapsible__header")
  .forEach((e) =>
    e.addEventListener("click", (ev) =>
      e.parentElement
        .closest(".collapsible")
        .classList.toggle("collapsible--expanded")
    )
  );
