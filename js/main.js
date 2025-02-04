function toggleMenu() {
  const $navMenu = document.getElementById("nav-menu");
  $navMenu.classList.toggle("show");
}

function handleFloatingButton() {
  const $floatingButton = document.getElementById("floating-button");
  $floatingButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0
    });
  });
}

function init() {
  const $navToggle = document.getElementById("nav-toggle");
  $navToggle.addEventListener("click", toggleMenu);

  const $navLinkList = document.querySelectorAll(".nav__link");
  $navLinkList.forEach((el) => el.addEventListener("click", toggleMenu));
  handleFloatingButton();
}

init();

const options = {
  threshold: 0.8
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entiry) => {
    const sectionId = entiry.target.id;
    if (entiry.isIntersecting) {
      document.querySelector(`.nav__link[href*=${sectionId}]`).classList.add("active-link");
      const $items = document.querySelectorAll(`.nav__link:not([href*=${sectionId}])`);
      $items.forEach((el) => el.classList.remove("active-link"));
    }
  });
}, options);

const $sectionList = document.querySelectorAll(".section");
$sectionList.forEach((el) => observer.observe(el));

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200
});

scrollReveal.reveal(".home__data, .about__img, .skills__subtitle, .skills__text");
scrollReveal.reveal(".home__img, .about__data, .skills__img", { delay: 400 });
scrollReveal.reveal(".skills__data, .work__link, .contact__input", { interval: 200 });

const typeit = new TypeIt("#typeit", {
  speed: 70,
  startDelay: 1300,
  waitUntilVisible: true
});

typeit
  .type("안녕하세요!<br/>")
  .type("<strong class='home__title-color'>프론트엔드 개발자</strong><br />")
  .type("<strong class='home__title-color'>KOSEONGIN</strong>")
  .delete(9, { delay: 300 })
  .type("<strong class='home__title-color'>고성인</strong>입니다!")
  .go();

const $contactForm = document.getElementById("contactForm");

$contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = $contactForm.name.value;
  const subject = $contactForm.subject.value;
  const message = $contactForm.message.value;
  const to = "jjjk0605@naver.com";

  location.href =
    "mailto:" +
    encodeURIComponent(to) +
    "?subject=" +
    encodeURIComponent(`[${name}님 문의] ${subject}`) +
    "&body=" +
    encodeURIComponent(message);
});
