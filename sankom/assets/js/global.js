// Homepage brand slider

var slider = tns({
    container: '.brand-slider',
    slideBy: 'page',
    autoplay: true,
    items: 4,
    mouseDrag: true,
    speed: 800,
    controls: false,
    autoplayHoverPause: false,
});

let btnAboutUs = document.querySelectorAll(".buttonAboutUs")[0];
let btnFounders = document.querySelectorAll(".buttonFounders")[0];
let btnTalkToUs = document.querySelectorAll(".buttonTalkToUs")[0];

let txtAboutUs = document.querySelectorAll(".aboutUsText")[0];

let txtFounders = document.querySelectorAll(".foundersText")[0];

let txtTalkToUs = document.querySelectorAll(".talkToUsText")[0];

btnAboutUs.addEventListener("click", () => {
  txtAboutUs.classList.remove("isHidden");
  txtFounders.classList.add("isHidden");
  txtTalkToUs.classList.add("isHidden");
  btnAboutUs.classList.add('isActive')
  btnFounders.classList.remove('isActive')
  btnTalkToUs.classList.remove('isActive')
});

btnFounders.addEventListener("click", () => {
  txtFounders.classList.remove("isHidden");
  txtAboutUs.classList.add("isHidden");
  txtTalkToUs.classList.add("isHidden");
  btnFounders.classList.add('isActive')
  btnAboutUs.classList.remove('isActive')
  btnTalkToUs.classList.remove('isActive')
});

btnTalkToUs.addEventListener("click", () => {
  txtTalkToUs.classList.remove("isHidden");
  txtAboutUs.classList.add("isHidden");
  txtFounders.classList.add("isHidden");
    btnTalkToUs.classList.add('isActive')
  btnFounders.classList.remove('isActive')
  btnAboutUs.classList.remove('isActive')
});
