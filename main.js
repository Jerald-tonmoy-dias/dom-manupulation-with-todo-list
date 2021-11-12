// select the elements
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");

//store a value on click
btn.onclick = () => {
  let val = input.value;
  input.value = "";

  //create  element
  let li = document.createElement("li");
  let span = document.createElement("span");
  let button = document.createElement("button");

  //   storing the value
  span.textContent = val;
  button.textContent = "delete";

  li.appendChild(span);
  li.appendChild(button);

  //   storing to ul
  ul.appendChild(li);

  //   remove item
  button.onclick = function () {
    ul.removeChild(li);
  };

  input.focus();
};
