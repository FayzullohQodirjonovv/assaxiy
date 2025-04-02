let prodact = JSON.parse(localStorage.getItem("prodact")) || [];
let total = document.getElementById("total");
let fulltotal = document.getElementById("fulltotol");

export function getTocartdata(data) {
    let isExists = prodact.find((item) => item.id === data.id);
    if (isExists) {
        isExists.count = (isExists.count || 0) + 1;
    } else {
        data.count = 1;
        prodact.push(data);
    }
    localStorage.setItem("prodact", JSON.stringify(prodact));
    renderui();
}

function renderui() {
    let productContainer = document.querySelector(".prodact");
    if (prodact.length > 0) {
        productContainer.innerHTML = "";
        prodact.forEach((value) => {
            let count = value.count ?? 1;
            productContainer.innerHTML += `
                <div class="joko flex gap-5 justify-between max-[1900px]:flex-col">
                    <div class="shop rounded-xl p-3 bg-white flex items-center w-[100%]">
                        <img class="w-[200px] h-[200px]" src="${value.img}" alt="" />
                        <div class="w-full flex flex-col items-end">
                            <div class="flex items-center justify-between w-full">
                                <div class="flex flex-col gap-3">
                                    <h2 class="fifty text-[14px] font-medium max-w-[300px]">
                                        ${value.title}
                                    </h2>
                                </div>
                                <div class="pppp flex items-center gap-5">
                                    <button class="minus-btn w-6 h-6 border border-vivid-blue rounded-full" data-id="${value.id}">
                                        -
                                    </button>
                                    <span>${count}</span>
                                    <button class="plus-btn w-6 h-6 border border-vivid-blue rounded-full" data-id="${value.id}">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="totalSum p-5 w-[30%]">
                        <div class="kokomn flex items-center justify-between">
                            <h3 class="text-xl">В корзине ${prodact.length} товара</h3>
                        </div>
                        <div class="flex items-center justify-between pt-3 border-b pb-8">
                            <h3 class="text-xl font-medium">Общая сумма:</h3>
                            <h1 class="text-black text-lg font-bold">
                                ${(value.price * count).toLocaleString("ru-RU") + " сум"}
                            </h1>
                            <div class="awasomed">
                                <i class="fa-regular fa-heart"></i>
                                <i id="${value.id}" class="fa-trash-can angular fa-regular text-soft-steel"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    } else {
        productContainer.innerHTML = "<p>Kart bo'sh</p>"; // Kart bo'sh bo'lsa xabar ko'rsatish
    }
}

renderui();

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("fa-trash-can")) {
        let productId = event.target.id;
        deletecardproduct(productId);
    }
});

let productContainer = document.querySelector(".prodact");

productContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("plus-btn")) {
        updateCount(e.target.dataset.id, 1);
    } else if (e.target.classList.contains("minus-btn")) {
        updateCount(e.target.dataset.id, -1);
    }
});

function deletecardproduct(id) {
    prodact = prodact.filter((value) => value.id != id);
    localStorage.setItem("prodact", JSON.stringify(prodact));
    renderui();
    subtotol();
}

function updateCount(id, change) {
    prodact = prodact.map((item) => {
        if (item.id == id) {
            item.count = (item.count || 1) + change;
            if (item.count < 1) {
                item.count = 1;
            }
        }
        return item;
    });

    localStorage.setItem("prodact", JSON.stringify(prodact));
    renderui();
}

function subtotol() {
    if (prodact.length > 0) {
        let totalprice = prodact.reduce(
            (acc, value) => acc + value.price * (value.count || 1),
            0
        );
        total.textContent = `${totalprice.toLocaleString()} som`;

        let fulltotolprice = totalprice + 50000;
        fulltotal.textContent = `${fulltotolprice.toLocaleString()} som`;
    } else {
        total.textContent = `0 som`;
        fulltotal.textContent = `50,000 som`;
    }
}

subtotol();
renderui()