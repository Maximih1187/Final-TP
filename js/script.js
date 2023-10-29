///

/////

/////

const btnMenu = document.querySelector(".header_navbar2-menu");
const imges23 = document.querySelector(".imges23");
const imges24 = document.querySelector(".imges24");
const imges22 = document.querySelector(".imges22");
const popapWrapper = document.querySelector(".popap-wrapper");

btnMenu.addEventListener("click", () => {
  popapWrapper.classList.toggle("popap-wrapper1");
  imges22.classList.toggle("imges20");
  imges22.classList.toggle("imges22");
  imges23.classList.toggle("imges25");
  imges24.classList.toggle("imges25");

  if (popapWrapper.classList.contains("popap-wrapper1")) {
    document.body.style.overflow = "hidden";
  } else document.body.style.overflow = "";
});
/////
document.querySelectorAll(".acordion_clickon").forEach((acordion) => {
  acordion.addEventListener("click", () => {
    document.querySelectorAll(".acordion_clickon").forEach((element) => {
      element.classList.remove("acordion_clickon1");
    });
    let content = acordion.nextElementSibling;

    if (content.style.maxHeight) {
      document.querySelectorAll(".content").forEach((el) => {
        el.style.maxHeight = null;
      });
    } else {
      document
        .querySelectorAll(".content")
        .forEach((el) => (el.style.maxHeight = null));
      acordion.classList.add("acordion_clickon1");

      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
////scroll
const headerEL = document.querySelector(".header");
const headerNav2 = document.querySelector(".header_navbar2");
const up1 = document.querySelector(".up2");

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;

  if (scrollPos > 20) {
    headerNav2.classList.add("header_navbar3");
  } else headerNav2.classList.remove("header_navbar3");

  if (scrollPos > 20) {
    headerEL.classList.add("header_mini");
  } else headerEL.classList.remove("header_mini");

  if (scrollPos > 700) {
    up1.classList.add("up");
  } else up1.classList.remove("up");
});
//////Модалкка первая///
const buttonConsult = document.querySelector(".button_consult-navbar"),
  modalService = document.querySelector(".modal_service"),
  modalCloser = document.querySelector(".modal_closer1"),
  modalWrapper = document.querySelector(".modal_wrapper");

buttonConsult.addEventListener("click", openModal);

document.addEventListener("keydown", (e) => {
  if (
    e.code === "Escape" &&
    modalService.classList.contains("modal_service-active")
  ) {
    closeModal();
  }
});

modalService.addEventListener("click", (e) => {
  if (e.target === modalService || e.target === modalCloser) {
    closeModal();
  }
});
function openModal() {
  modalService.classList.add("modal_service-active");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modalService.classList.remove("modal_service-active");
  document.body.style.overflow = "auto";
}
