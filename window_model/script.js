const modal = document.querySelector(".modal");
const showModal = document.querySelectorAll(".show-modal");
const modelClose = document.querySelector(".close-modal");
const overlay = document.querySelector(".hardik");

const body = document.querySelector("body");
for (let i = 0; i <= showModal.length; i += 1) {
  showModal[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
  modelClose.addEventListener("click", () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });
  body.addEventListener("keydown", (event) => {
    if (event.key === "Escape") modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });
}
