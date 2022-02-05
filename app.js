const project__boxes = document.querySelector(".project__boxes");
const listView = document.querySelector(".list--view");
const gridView = document.querySelector(".grid--view");

listView.addEventListener("click", () => {
  project__boxes.classList.add("jsGridView");
  gridView.classList.remove("active");
  listView.classList.add("active");
});

gridView.addEventListener("click", () => {
  project__boxes.classList.remove("jsGridView");
  gridView.classList.add("active");
  listView.classList.remove("active");
});
