// start header
// 1-menu
let menuSgin = document.querySelector("header .container nav > i");
let menu = document.querySelector("header .container nav ul");
menuSgin.onclick = () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  } else {
    menu.classList.add("open");
  }
};
// end header
// Start Landing
// 1-image change aute
let LandingImage = document.querySelector(".landing");
let Landingbullets = document.querySelectorAll(".landing .bullets li");
console.log(Landingbullets);
let imageArray = [
  "image/background-2.jpg",
  "image/background-3.jpg",
  "image/background-1.jpg",
];
let x = 2;
let i = 1;
let backgroundIntrtval = setInterval(function () {
  LandingImage.style.backgroundImage = `url(${imageArray[i]})`;
  Landingbullets.forEach(function (ele) {
    ele.classList.remove("active");
  });
  Landingbullets[x].classList.add("active");
  i++;
  x++;
  if (i == 3) {
    i = 0;
  }
  if (x == 3) {
    x = 0;
  }
}, 5000);
// 2- change with bullets
Landingbullets.forEach(function (ele, nu) {
  ele.onclick = function () {
    Landingbullets.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.classList.add("active");
    if (nu !== 0) {
      LandingImage.style.backgroundImage = `url(${imageArray[nu - 1]})`;
    } else {
      LandingImage.style.backgroundImage = `url(${imageArray[2]})`;
    }
    clearInterval(backgroundIntrtval);
  };
});
// 3- change with arow
let leftArow = document.querySelector(".landing .fa-angle-left");
let rightArow = document.querySelector(".landing .fa-angle-right");
leftArow.onclick = function () {
  clearInterval(backgroundIntrtval);
  Landingbullets.forEach(function (ele, nu) {
    if (ele.classList.contains("active") && nu >= 1) {
      ele.classList.remove("active");
      Landingbullets[nu - 1].classList.add("active");
      if (nu !== 1) {
        LandingImage.style.backgroundImage = `url(${imageArray[nu - 2]})`;
      } else {
        LandingImage.style.backgroundImage = `url(${imageArray[2]})`;
      }
    }
  });
};
rightArow.onclick = function () {
  clearInterval(backgroundIntrtval);
  for (let i = Landingbullets.length; i > 0; i--) {
    if (Landingbullets[i - 1].classList.contains("active") && i < 3) {
      console.log(i);
      Landingbullets[i - 1].classList.remove("active");
      Landingbullets[i].classList.add("active");
      LandingImage.style.backgroundImage = `url(${imageArray[i - 1]})`;
    }
  }
};
// end Landing

// Start Portfolio

// 1-shuffle
let shuffle = document.querySelectorAll(".portfolio .shuffle li ");
shuffle.forEach(function (ele) {
  ele.onclick = function () {
    shuffle.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  };
});

//2-the more Bottem
let moreBottem = document.querySelector(".portfolio .more");
let portfolioBox = document.querySelectorAll(".portfolio .imgs-container .box");
moreBottem.onclick = () => {
  if (portfolioBox[10].classList.contains("less")) {
    portfolioBox.forEach((ele, nu) => {
      ele.classList.remove("less");
    });
    moreBottem.textContent = "Less";
  } else {
    portfolioBox.forEach((ele, nu) => {
      if (nu >= 8) {
        ele.classList.add("less");
      }
    });
    moreBottem.textContent = "More";
  }
};
// end Portfolio
// Start Skills
let skillsBullets = document.querySelectorAll(
  ".our-skills .testimonials .bullets li"
);
let skillsContent = document.querySelectorAll(
  ".our-skills .testimonials .content"
);
console.log(skillsContent);
skillsBullets.forEach(function (ele, nu) {
  ele.onclick = function () {
    skillsBullets.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.classList.add("active");
    skillsContent.forEach(function (e, i) {
      if (!e.classList.contains("out")) {
        e.classList.add("out");
      }
      if (i == nu * 2 || i == nu * 2 + 1) {
        e.classList.remove("out");
      }
    });

    // if (nu !== 0) {
    //   LandingImage.style.backgroundImage = `url(${imageArray[nu - 1]})`;
    // } else {
    //   LandingImage.style.backgroundImage = `url(${imageArray[2]})`;
    // }
  };
});
// end Skills
