let prodact = JSON.parse(localStorage.getItem("prodact")) || [];
export function getTocartdata(data) {
  let isExists = prodact.some((item) => item.id === data.id);
  if (isExists) {
    prodact.push(data);
    localStorage.setItem("prodact", JSON.stringify(prodact));
  }

  console.log(
    "Savatcha yangilandi:",
    JSON.parse(localStorage.getItem("prodact"))
  );
}