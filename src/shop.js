export function getTocartdata(data) {
  let prodact = JSON.parse(localStorage.getItem("prodatct")) || [];
  let data2 = [...prodact, data];
//   console.log(prodact);
  
//   console.log(prodact);
  localStorage.setItem("prodact", JSON.stringify(data2));
}