import { useFetch } from "./request.js";
import { getTocartdata } from "./shop.js";
let load = document.querySelector(".loader");
let prodatct = document.querySelector(".prodatcts");
const request = useFetch();
let isloading = false;
const getDataasync = async () => {
  isloading = true;
  const response = await request({ url: "todo" });
  isloading = false;
  loadingUi(response);
  return load;
};
let globalData = [];

request({ url: "todo" }).then((data) => {
  globalData = data;
  getData(data);
});

function getData(data) {
  prodatct.innerHTML = "";
  data.forEach((value) => {
    prodatct.innerHTML += `
     <div class="product transform transition-transform duration-300 hover:scale-105">
        <img src="${value.img}" alt="${value.title}">
        <h3 class="h3">${value.title}</h3>
        <div class="sayhello">
            <div>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            </div>
            <p class="paragrp">${value.rate}</p>
        </div>
        <p class="moth">${value.moth}</p>
        <p class="pop">320 800 сум x 12 мес</p>
        <div class="flex items-center justify-between">
        <div class="buttonmw">
            <button class="bg-[#6666ff] mt-[15px] text-white text-[13px] border-2 border-blue-500 bg-vivid-blue p-[10px_20px] rounded-xl relative overflow-hidden transition-all duration-500 before:absolute before:top-0 before:right-full before:w-full before:h-full before:bg-[blue] before:transition-all before:duration-200 hover:before:right-0">
                <span class="relative z-10"> Купить в один клик</span>
            </button>
        </div><div>
            <button id="${value.id}" class="shop">
                <span class="pppp"><i class="fa-solid fa-bag-shopping fa-shake"></i>
                </span>
            </button>
            </div>
        </div>
     </div>
    `;
  });

  addShopEventListeners();
}

function addShopEventListeners() {
  const shopButtons = document.querySelectorAll(".shop");
  shopButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let productId = e.target.closest("button").id;
      let findData = globalData.find((item) => item.id == productId);

      if (findData) {
        getTocartdata(findData);
        console.log(findData);
      } else {
        console.error(productId);
      }
    });
  });
}
