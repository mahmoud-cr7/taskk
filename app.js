// /header
let header = document.createElement("header");
header.className = "header";
let logo = document.createElement("h2");

let logoText = document.createTextNode("ELZERO");
logo.className = "logo";

logo.appendChild(logoText);
header.appendChild(logo);

logo.style.cssText = "color: #019688";
let ul = document.createElement("ul");
let arr = ["Home", "Services", "About", "Contact"];
for (let i = 0; i <= arr.length-1; i++) {
  let li = document.createElement("li");
  litext = document.createTextNode(arr[i]);
  ul.appendChild(li);
  li.appendChild(litext);
  li.style.cssText = "color: #eee; font-size: 25px; ";

}
header.appendChild(ul);
document.body.style.cssText = "argin-top: 0; margin-bottom: 0;";
header.style.cssText =
  "display:flex; justify-content: space-between; align-items: center; flex-wrap: wrap";
ul.style.cssText =
  "list-style: none; display:flex; align-items: center; gap: 20px; font-size: 17px ";

document.body.appendChild(header);

///////////////////////////content
let container = document.createElement("div");
container.style.cssText =
  "display: grid; grid-template-columns: repeat(auto-fill, minmax(450px, 1fr)); gap: 15px; background-color: #ececec; padding: 15px;";
for (let i = 0; i < 16; i++){
      let prod = document.createElement("div");
  let prodText = document.createTextNode("proudct");
  prod.appendChild(prodText);
    let number = document.createElement("span");
  let num = document.createTextNode(`${i + 1}`);
    number.appendChild(num);
  prod.appendChild(number);
  prod.style.cssText =
"display: flex; flex-direction: column; gap: 30px; align-items: center; padding: 15px; background-color: #fff; border-radius: 4px; box-shadow: rgb(0 0 0 / 9%) 1px 1px 10px 1px; font-size: 13px; color: rgb(153, 153, 153);";
number.style.cssText = "font-size: 25px; font-weight: bold; color: #000";
container.appendChild(prod);
}

document.body.appendChild(container);
//////////////////////////footer
let footer = document.createElement("footer");
footer.className = "footer";
let footcont = document.createTextNode("copy Right 2021");
footer.appendChild(footcont);
footer.style.cssText =
  "background-color: #019688; text-align: center; padding: 15px; color: #fff; font-size: 17px";
document.body.appendChild(footer);

/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");
// if (window.localStorage.getItem("color")) {
//       exp.style.backgroundColor = window.localStorage.getItem("color");

//    lis.forEach((li) => {
//      li.classList.remove("active");
//    });
//   document.querySelector(
//     `[data-color=${window.localStorage.getItem("color")}]`
//   ).classList.add("active")
// }
// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {

//     lis.forEach((li) => {
//       li.classList.remove("active");
//     })
//     e.currentTarget.classList.add("active");

//     window.localStorage.setItem("color", e.currentTarget.dataset.color)
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
// })

// });

// let add = document.querySelector(".add");
// let tasks = document.querySelector(".tasks");
// let input = document.querySelector(".input");
// let del = document.querySelector("button");
// let newArray = [];

// function show() {
//   if (window.localStorage.task) {
//     newArray = JSON.parse(window.localStorage.task);
//     tasks.innerHTML = "";
//     newArray.forEach((e) => {
//           let task = document.createElement("div");
//       tasks.appendChild(task);
//       task.id = e.id;
//       task.textContent = e.title;
//       let btn = document.createElement("button")
//       btn.textContent = "Delete"
//       task.append(btn);
//       btn.onclick = function (e) {
//         newArray = newArray.filter((ele) => {
//           return ele.id != e.currentTarget.parentElement.id;
//         });
//         e.currentTarget.parentElement.remove();
//         window.localStorage.setItem("task", JSON.stringify(newArray));
//       };

//     });

//   }
// }
// show();
// add.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (input.value != "") {
//     let ele = {
//       id: Date.now(),
//       title: input.value,
//     }
//     newArray.push(ele)
//     window.localStorage.setItem("task", JSON.stringify(newArray))
//     newArray = "";
//     show();

//   }

// });
/*
  Destructuring
  - Challenge
*/

let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
// for (let i = 0; i < myFriends.length-1; i++) {
// if (myFriends[i+1] == chosen) {
//   let {
//     title: t,
//     age: a,
//     available: aa,
//     skills: [, two],
//   } = myFriends;
// }
// if (available == ture) {
//   let aa = "Avilable";
// } else {
//   let aa = "not Avilable";
// }
// }

//   console.log(`${t}`);
//   console.log(`${a}`);
//   console.log(`${aa}`);
//   console.log(`${two}`);

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
    
//   });
// });
