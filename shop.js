let prodact = JSON.parse(localStorage.getItem("prodact")) || [];
let products = JSON.parse(localStorage.getItem("prodact")) || [];

export function getTocartdata(data) {
  let isExists = prodact.some((item) => item.id === data.id);
  if (!isExists) {
    prodact.push(data);
    localStorage.setItem("prodact", JSON.stringify(prodact));
  }

  console.log(
    "Savatcha yangilandi:",
    JSON.parse(localStorage.getItem("prodact"))
  );
}

function renderui() {
  let productContainer = document.querySelector(".prodact");
  productContainer.innerHTML = "";

  products.forEach((value) => {
    let count = value.count ?? 1;
    productContainer.innerHTML += `
       <div class="joko flex gap-5 justify-between max-[1900px]:flex-col ">
            <div
              class="shop  rounded-xl p-3 bg-white flex items-center w-[100%] max-[1400px]:w-full max-[980px]:justify-between max-[1062px]:flex-col"
            >
              <img
                class="w-[200px] h-[200px]"
                src="${value.img}"
                alt=""
              />
              <div class="w-full flex flex-col items-e m-auto justify-end">
                <div
                  class="flex items-center justify-between w-full max-[1080px]:flex-col max-[980px]:items-start max-[980px]:gap-5 max-[462px]:items-center"
                >
                  <div
                    class="flex flex-col gap-3 max-[462px]:items-center max-[462px]:text-center"
                  >
                    <h2
                      class="text-[14px] font-medium max-w-[300px] max-[462px]:text-center"
                    >
                      ${value.title}
                    </h2>
                    <p
                      class="bg-vivid-blue p-[4px_8px] w-fit rounded-xl text-white"
                    >
                      SUMSUNG
                    </p>
                  </div>
                  <div class="pppp flex items-center gap-5">
                    <button
                      class="w-6 h-6 border border-vivid-blue rounded-full flex items-center justify-center"
                    >
                      -
                    </button>
                    <span>${count}</span>
                    <button
                      class="w-6 h-6 border border-vivid-blue rounded-full flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <div class="flex flex-col gap-4 max-[462px]:items-center">
                    <p class="pt-2 line-through text-[#94a3b8]">
                    ${value.oldPrice ?? ""}
                    </p>
                    <h1 class="text-vivid-blue text-lg font-bold">
                     ${value.price.toLocaleString("ru-RU") + " сум"}
                    </h1>
                    <div
                      class="p-[5px_10px] border-2 w-fit border-fire-orange transition-all duration-500 text-fire-orange text-[16px] rounded-md hover:bg-fire-orange hover:text-white"
                    >
              ${value.moth.toLocaleString("ru-RU") + " сум x 12 мес"}
                    </div>
                  </div>
                  <div class="flex items-center gap-5">
                    <i
                      class="fa-regular text-soft-steel active:text-[red] text-xl fa-heart"
                    ></i>
                    <i id=${value.id}
                      class="fa-regular text-soft-steel active:text-[red] text-xl fa-trash-can"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="totalSum shadow-[0_10px_30px_0_rgba(209,213,223,0.9)] rounded-xl p-5 max-[352px]:p-3 w-[30%] max-[1400px]:w-[50%] max-[800px]:w-[80%] max-[500px]:w-full max-[1400px]:m-auto"
            >
              <div class="kokomn flex items-center justify-between">
                <h3 class="text-xl">В корзине 1 товара</h3>
                <i class="fa-solid fa-tags text-xl text-soft-steel"></i>
              </div>
              <div
                class="flex items-center justify-between pt-3 border-b pb-8 border-soft-steel"
              >
                <h3 class="text-xl font-medium max-[352px]:text-[14px]">
                  Общая сумма:
                </h3>
                <h1
                  class="text-black text-lg font-bold max-[352px]:text-[16px]"
                >
                 ${value.price.toLocaleString("ru-RU") + " сум"}
                </h1>
              </div>
              <button
                class="text-white text-[13px] flex items-center justify-center m-auto mt-6 bg-vivid-blue p-[10px_20px] rounded-xl relative overflow-hidden transition-all duration-500 before:absolute before:top-0 before:right-full before:w-full before:h-full before:bg-[blue] before:transition-all before:duration-150 hover:before:right-0"
              >
                <span class="relative z-10"> Купить в один клик</span>
              </button>
            </div>
          </div>
    `;
  });
}
renderui();
document.addEventListener("click", function (event) {
  if (event.target.closest(".shop")) {
    let productId = event.target.closest(".shop").id;
    let selectedProduct = products.find((item) => item.id == productId);

    if (selectedProduct) {
      getTocartdata(selectedProduct);
      console.log("Mahsulot savatchaga qo‘shildi:", selectedProduct);
    }
  }
});

