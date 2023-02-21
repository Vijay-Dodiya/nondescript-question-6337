function slideshowFun(images) {
  let slideshowEl = document.getElementById("slideshow");
  let imgEl = document.createElement("img");
  imgEl.setAttribute("src", images[0]);
  slideshowEl.append(imgEl);

  // slideshowEl.innerHTML = `<img src="${images[0]}" />`

  let index = 0;

  setInterval(function () {
    // index = (index + 1) % images.length;
    index++;
    if (index === images.length) {
      index = 0;
    }

    let imageElement = document.createElement("img");
    imageElement.setAttribute("src", images[index]);
    // imageElement.src = images[index];    this is another method to set the images

    slideshowEl.innerHTML = ""; //It will remove the images from  the slider

    slideshowEl.append(imageElement);
  }, 2000);
}

let sliderImage = [
  "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fac1ec1f4-fd83-4477-8f04-3a3a8d497e9c.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc8a0aa10-0c57-48e4-8882-31662d4c3c78.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fab569f69-5f23-4018-8a74-8657fc279ac3.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9adf71b4-8c62-45c2-9c54-e716a5140794.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fe4ea7d7e-eba9-41ac-9010-3856b42d3ffa.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F069d0c1c-f78c-4d80-94f9-e65f3bbdda73.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9723d8e3-9e99-459f-acfe-4ef93089e9ef.jpg&w=1920&q=75",
];

window.addEventListener("load", function () {
  slideshowFun(sliderImage);
});
