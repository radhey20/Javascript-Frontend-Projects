const videoElement = document.getElementById("video");
const button = document.getElementById("button");

async function selectMediaStream() {
  try {
    const mediaStrean = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStrean;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch the error
    console.log("whoops, error here:", error);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  await videoElement.requestPictureInPicture();
});
selectMediaStream();
