let circles = document.querySelectorAll(".circle");
let body = document.body;

function changeLight(index) {
  circles.forEach((circle, i) => {
    if (i === index) {
      circle.classList.add(circle.getAttribute("color"));
      updateBackground(index);
    } else {
      circle.classList.remove(circle.getAttribute("color"));
    }
  });
}

function updateBackground(index) {
  let newImage;

  switch (index) {
    case 0:
      newImage = "url(https://i.pinimg.com/564x/1b/39/cf/1b39cfbc6d1ad649bf966fd30bdb2082.jpg)";
      body.style.backgroundSize = "100% 100%";
      body.style.backgroundRepeat = "no-repeat";
      break;
    case 1:
      newImage = "url(https://i.pinimg.com/564x/3f/80/3a/3f803ae285119e37619cd54ef9da1aee.jpg)";
      body.style.backgroundSize = "100% 100%";
      body.style.backgroundRepeat = "no-repeat";
      break;
    case 2:
      newImage = "url(https://i.pinimg.com/564x/20/c3/4a/20c34adec3f4285c31fb90604d897106.jpg)";
      body.style.backgroundSize = "100% 100%";
      body.style.backgroundRepeat = "no-repeat";
      break;
    default:
      break;
  }

  body.style.transition = "background-image 0.5s ease-in-out";
  body.style.backgroundImage = newImage;

  setTimeout(() => {
    body.style.transition = "";
  }, 500);
}

circles.forEach((circle, index) => {
  circle.addEventListener("mouseover", () => {
    changeLight(index);
  });

  circle.addEventListener("mouseout", () => {
    circle.classList.remove(circle.getAttribute("color"));

    // Add the following lines for a gradual transition to linear gradient
    body.style.transition = "background-image 0.5s ease-in-out";
    body.style.backgroundImage = "linear-gradient(#d1d1d1, #242424)";

    setTimeout(() => {
      body.style.transition = "";
    }, 500);
  });
});

