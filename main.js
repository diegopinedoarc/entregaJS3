//Traigo los elementos que debo utilizar
const inputNum = document.querySelector(".inputSearch");
console.dir(inputNum);
const inputBTN = document.querySelector(".inputBtn");
const menu = document.querySelector(".btn__container");
const item = document.querySelectorAll(".item");
const cartList = document.querySelector(".cartContainer");
const catalogo = document.querySelector(".catalogo");
let pizzas = [
  {
    id: 1,
    nombre: "Napo",
    ingrdientes: [
      "salsa de tomate",
      "muzzarella",
      "tomate",
      "ajo",
      "aceitunas verdes",
    ],
    precio: 1200,
    img: "./imagenes/napolitana.jpg",
  },
  {
    id: 2,
    nombre: "Polemica",
    ingrdientes: ["salsa de tomate", "muzzarella", "anana", "aceitunas negras"],
    precio: 1300,
    img: "./imagenes/muzza.jpg",
  },
  {
    id: 3,
    nombre: "Muzza",
    ingrdientes: ["salsa de tomate", "muzzarella", "aceitunas verdes"],
    precio: 500,
    img: "./imagenes/morrones.jpg",
  },
  {
    id: 4,
    nombre: "de morrones",
    ingrdientes: ["salsa de tomate", "muzzarella", "morrones", "ajo"],
    precio: 1200,
    img: "./imagenes/morrones.jpg",
  },
  {
    id: 5,
    nombre: "cuatro quesos",
    ingrdientes: [
      "salsa de tomate",
      "muzzarella",
      "provolone",
      "parmesano",
      "fontina",
    ],
    precio: 1400,
    img: "./imagenes/cuatroquesos.jpg",
  },
  {
    id: 6,
    nombre: "Fugazzeta",
    ingrdientes: [
      "salsa de tomate",
      "muzzarella",
      "cebolla",
      "aceitunas verdes",
    ],
    precio: 1200,
    img: "./imagenes/fugazeta.jpg",
  },
];
//Mostrar/ocultar menu
//Agrego un listener al menu hamburguesa con una funcion que cambia el display
menu.addEventListener("click", () => {
  item.forEach((i) => i.classList.toggle("show"));
});
//Array de objetos, que contiene la informacion de las pizzas

//Agrego un event listener al boton del input para filtrar que pizza busca
inputBTN.addEventListener("click", buscarPizza);

function buscarPizza(e) {
  e.preventDefault();
  const pizzaID = inputNum.value;
  if (pizzaID === "") {
    showError("Por favor ingresa el ID de la pizza !");
    return;
  }

  createHTML();
  inputNum.value = "";
}

function showError(error) {
  const msgError = document.createElement("p");
  msgError.textContent = error;
  msgError.classList.add("error");
  cartList.appendChild(msgError);
  setTimeout(() => {
    msgError.remove();
  }, 2000);
}

function createHTML() {
  cartList.innerHTML = "";
  pizzas.forEach((pizza) => {
    if (pizza.id === inputNum.valueAsNumber) {
      const h2 = document.createElement("h2");
      const h3 = document.createElement("h3");
      const h4 = document.createElement("h4");
      cartList.classList.add("cartList2");
      h2.innerHTML = `Esa es la ${pizza.nombre}`;
      h3.innerHTML = `Ingredientes: ${pizza.ingrdientes}`;
      h4.innerHTML = `$ ${pizza.precio}`;
      cartList.appendChild(h2);
      cartList.appendChild(h3);
      cartList.appendChild(h4);
    }
  });
}

// pizzas.forEach((pizza) => {
//   const div = document.createElement("div");
//   div.classList;
//   div.innerHTML = `<img class="imgCatalogo" src="${pizza.img}" alt="" />`;
//   catalogo.appendChild(div);
// });
