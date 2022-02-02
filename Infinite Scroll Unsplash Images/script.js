const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];
//
const count = 10;
const apiKey = "Q0pCu9eYDom9GQdmqoD96pw-ECN_yyAECNyHcaQhrMQ";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
let countImageLoad = 0;
let totalImageLoad = 0;
let ready = false;

// Create Elements For Links and Photos and add to DOM
function displayPhotos() {
  photosArray.forEach((photo) => {
    const imageTag = `<a href=${photo.links.html} target=_blank> <img src="${photo.urls.regular}" alt="${photo.alt_description}" title="${photo.alt_description}" onload="imageloaded()"></a>`;
    imageContainer.insertAdjacentHTML("beforeend", imageTag);
  });
}

function imageloaded() {
  countImageLoad++;
  console.log(countImageLoad);
  console.log(totalImageLoad);

  if (countImageLoad === totalImageLoad) {
    ready = true;
  }
  console.log("Hi");
}

// Get photos from splash API
async function getUnpslashImage() {
  countImageLoad = 0;

  ready = false;
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    totalImageLoad = photosArray.length;
    displayPhotos();
  } catch (error) {
    console.log(error);
  }
}

getUnpslashImage();

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    getUnpslashImage();
  }
});
