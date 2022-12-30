"use strict";

// global function
const select = (el) => {
  return document.getElementById(el);
};
const foot = document.querySelectorAll("#footerItems2");
console.log(foot);

// our services

const services = [
  {
    img: "./Assest/Frame2.svg",
    title: "Even cooler feature",
    description: "Learning curve network effects return on investment.",
  },
  {
    img: "./Assest/Frame3.svg",
    title: "Cool feature title",
    description: "Learning curve network effects return on investment.",
  },
];
const blog = [
  {
    img: "./Assest/Frame4.svg",
    pfp: "./Assest/profile2.svg",
    title:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    user: "Rachel Green",
  },
  {
    img: "./Assest/Frame5.svg",
    pfp: "./Assest/profile3.svg",
    title:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    user: "Monica Geller",
  },
];

const footer = [
  {
    header: "Landings",
    link1: "Home",
    link2: "Products",
    link3: "Services",
  },
  {
    header: "Company",
    link1: "Home",
    link2: "Careers",
    link3: "Services",
  },
  {
    header: "Resources",
    link1: "Blog",
    link2: "Product",
    link3: "Services",
  },
];

services.forEach((item) => {
  const servicesHtml = `<div
        class="md:w-[30%]  text-center md:text-left my-4 md:my-[3em]"
      >
        <img
          class="w-full h-[300px] md:h-[250px] object-cover rounded-lg"
          src= ${item.img}
          alt=""
        />
        <div class="mt-4">
          <p class="font-medium text-xl">${item.title}</p>
          <p>${item.description}</p>
          <div
            class="flex justify-center text-[#0A2640] items-center md:justify-start md:mt-[1.5em] space-x-2 font-medium active:font-bold border-b-2 border-[#0A2640] mt-4 pb-2 w-[35%] md:w-[50%] mx-auto md:mx-0"
          >
            <div class="text-[#0A2640]">Explore page</div>
            <img
              class="w-[10px] h-[10px]"
              src="./Assest/next-right-arrow-svgrepo-com.svg"
              alt=""
            />
          </div>
        </div>
      </div>`;

  select("servicesCard").insertAdjacentHTML("beforeend", servicesHtml);
});

blog.forEach((item) => {
  const blogHtml = `<div class="w-[45%] md:w-[30%]  my-4">
      <img
        class="w-full h-[150px] lg:h-[250px] object-cover rounded-lg"
        src=${item.img}
        alt=""
      />
      <div class="mt-4 space-y-4">
        <div class="flex text-sm space-x-2">
          <p class="font-bold">Category</p>
          <p>November 22, 2021</p>
        </div>
        <p>${item.title}</p>
        <div class="flex items-center">
          <img
            class="w-[30px] h-[30px] mr-2"
            src=${item.pfp}
            alt=""
          />
          <p class="font-medium text-sm">${item.user}</p>
        </div>
      </div>
    </div>`;

  select("blogCard").insertAdjacentHTML("beforeend", blogHtml);
});

footer.forEach((item) => {
  const footerHtml = `<div class="md:w-[30%] space-y-[1em] ">
      <div class="font-medium text-lg lg:text-xl">${item.header}</div>
      <p>${item.link1}</p>
      <p>${item.link2}</p>
      <p>${item.link3}</p>
    </div>`;

  select("footerItems").insertAdjacentHTML("beforeend", footerHtml);
});

// swiper js

new Swiper(".mySwiper", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "1",
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    type: "bullets",
    clickable: true,
  },
});
