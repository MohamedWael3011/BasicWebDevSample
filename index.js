DownArrowBtn = document.getElementById("move-down");

DownArrowBtn.addEventListener("mouseover", () => {
  DownArrowBtn.classList.add("bx-fade-down");
});

DownArrowBtn.addEventListener("mouseleave", () => {
  DownArrowBtn.classList.remove("bx-fade-down");
});

DashboardBoxes = document.querySelectorAll(".box");

DashboardBoxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.classList.add("selected");
  });

  box.addEventListener("mouseleave", () => {
    box.classList.remove("selected");
  });
});

function showVisibleBoxes() {
  var container = document.querySelector('.container-services');
  var boxesContainer = container.querySelector('.boxes');
  var boxes = boxesContainer.querySelectorAll('.box');
  var containerTop = container.offsetTop;
  var windowHeight = window.innerHeight;

  var offset = 500;

  if (window.pageYOffset + windowHeight >= containerTop + offset) {
    for (var i = 0; i < boxes.length; i++) {
      (function(index) {
        setTimeout(function() {
          boxes[index].classList.add('fade-in');
        }, index * 200); 
      })(i);
    }
  }
  else{
    for (var i = 0; i < boxes.length; i++){
    boxes[i].classList.remove('fade-in');
    }
  }

}

window.addEventListener('scroll', showVisibleBoxes);