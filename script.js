document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("background-video");
  const dustContainer = document.querySelector(".dust");

  video.addEventListener("ended", () => {
    
    dustContainer.style.opacity = "0";


    setTimeout(() => {
      dustContainer.remove();
    }, 1000); 
  });
});

