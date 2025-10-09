function showImage(elemId, imgSrc) {
  const elem = document.getElementById(elemId);
  elem.style.position = "relative";
  elem.style.display = "inline-block";
  const popImage = new Image();
  popImage.src = imgSrc;
  popImage.style.position = "absolute";
  popImage.style.zIndex = "1";
  popImage.style.width = (imgSrc === "assets/images/greninja.png") ? "200px": "150px";

  popImage.style.left = "50%";
  popImage.style.transform = "translateX(-50%) translateY(-100%)";

  elem.appendChild(popImage);
}
function hideImage(elemId) {
  const elem = document.getElementById(elemId);
  while (elem.childElementCount > 0) {
    elem.removeChild(elem.lastChild);
  }
}