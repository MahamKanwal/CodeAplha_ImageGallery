const images = document.querySelectorAll(".main img");
const imgBox = document.querySelector(".img-box");
const img = document.getElementById("img");
const close = document.getElementById("close");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentIdx = 0;

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    imgBox.classList.remove("hidden");
    img.src = image.src;
    currentIdx = index;
  });
});

const closeModal = () => {
  imgBox.classList.add("hidden");
};

const nextImg = () => {
  currentIdx = (currentIdx + 1) % images.length;
  img.src = images[currentIdx].src;
};

const prevImg = () => {
  currentIdx = (currentIdx - 1 + images.length) % images.length;
  img.src = images[currentIdx].src;
};

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    images.forEach((image) => {
      const category = image
        .closest("div[data-category")
        .getAttribute("data-category");
      if (filter === "all" || category === filter) {
        image.closest("div[data-category]").style.display = "block";
      } else {
        image.closest("div[data-category]").style.display = "none";
      }
    });
  });
});

prev.addEventListener("click", prevImg);
next.addEventListener("click", nextImg);
close.addEventListener("click", closeModal);
