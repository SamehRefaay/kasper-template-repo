/*start variables */
const menuIcon = document.querySelector(".toggle-menu");
const menu = document.querySelector("nav ul");
const moreBtn = document.querySelector(".portfolio a");
const imgsContainer = document.querySelector(".imgs-container");

//shuffle buttons
const shuffle = document.querySelectorAll(".portfolio ul li");

const appPhotos = ["app2", "app3", "app4"];
const webPhotos = ["web1"];
const printPhotos = [];
const photographyPhotos = [
  "photography1",
  "photography2",
  "photography3",
  "photography4",
];

const allPhotos = [...appPhotos, ...webPhotos, ...photographyPhotos];
console.log(allPhotos);

const morePhotos = [
  "more1",
  "more2",
  "more3",
  "more4",
  "more5",
  "more6",
  "more7",
  "more8",
];
/*end variables */

/*start helper methods */
function addNewPortfolioImages(images = [], type = "") {
  const fragment = new DocumentFragment();
  if (images.length !== 0) {
    moreBtn.classList.remove("gone");
    for (var i = 0; i < images.length; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.innerHTML = `
    <img class="img-resizer" src="images/${images[i]}.jpg" alt="${images[i]}" />
    <div class="caption">
      <h4>Awesome Image</h4>
      <p>${type}</p>
    </div>`;
      fragment.appendChild(box);
    }
  } else {
    moreBtn.classList.add("gone");
    console.log(moreBtn);
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerText = "No Images Found In This Category";
    box.style.cssText = `
    margin:color:#777;font-size:14px;margin:100px auto;
    display:flex;justify-content:center;`;
    fragment.appendChild(box);
  }

  imgsContainer.appendChild(fragment);
}
/*end helper methods */

function showMenu() {
  console.log("menu has been clicked!");
  menu.classList.toggle("show-vertically");
}

menuIcon.addEventListener("click", showMenu);

/*portfolio sections */
//function to show more photos in portfolio section
function showMorePhotos(event) {
  event.preventDefault();
  addNewPortfolioImages(morePhotos, "More");
}

moreBtn.addEventListener("click", showMorePhotos);

shuffle.forEach((element) => {
  element.addEventListener("click", getTargetPhotos);
});

function getTargetPhotos(event) {
  console.log(event.target.id + " is clicked");
  shuffle.forEach((element) => {
    element.classList.remove("active");
  });
  document.getElementById(event.target.id).classList.add("active");
  imgsContainer.innerHTML = "";
  switch (event.target.id) {
    case "all":
      addNewPortfolioImages(allPhotos, "All");
      break;
    case "app":
      addNewPortfolioImages(appPhotos, "App");
      break;
    case "photography":
      addNewPortfolioImages(photographyPhotos, "Photography");
      break;
    case "web":
      addNewPortfolioImages(webPhotos, "Web");
      break;
    case "print":
      addNewPortfolioImages(printPhotos, "print");
      break;
    default:
      break;
  }
}
