let like_container = document.getElementById("like-container");

function getLocaleData(key) {
  return JSON.parse(localStorage.getItem(key));
}

const renderui = () => {
  like_container.innerHTML = "";
  let data = getLocaleData("liked");
  data.forEach((value) => {
    like_container.innerHTML += `
        <div class="card flex flex-col justify-between w-[250px] h-[400px] bg-[#ffff]">
        <div class="h-[170px]  rvalueative flex items-center justify-center"> 
        <button class="absolute top-0 right-5 "><i class="fa-regular fa-heart"></i> </button>
        <img  class="h-full" src="${value.image}" alt="">
        </div>
              <p class="text-[14px]">${value.title}</p>
                  <div class="stars text-[orange]">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                  </div>
                  <h2 class=" price text-[22px]  text-[#006bff]">${value.price.toLocaleString()}</h2>
                  <p class=" orangeh1 w-full text-[#FE7300]">320 800 сум x 12 мес</p>
                  <div class="buttons">
                      <button class="first">Купить в один клик</button>
                      <button class="second"><i class="fa-solid fa-cart-shopping"></i></button>
                  </div>
          </div>
      `;
  });
};

window.addEventListener("DOMContentLoaded", renderui());
