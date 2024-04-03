let result = 0;
let nickname;

const nicknameInput = document.querySelector("#nickname");
const type1 = document.querySelector("#type1");
const type2 = document.querySelector("#type2");
const type3 = document.querySelector("#type3");
const type4 = document.querySelector("#type4");
const type5 = document.querySelector("#type5");

const submitButton = document.querySelector(".submit");

nicknameInput.addEventListener("change", handleChange);
submitButton.addEventListener("click", handleSubmit);
type1.addEventListener("click", handleCheck);
type2.addEventListener("click", handleCheck);
type3.addEventListener("click", handleCheck);
type4.addEventListener("click", handleCheck);
type5.addEventListener("click", handleCheck);

function handleChange(event) {
  nickname = event.target.value;
}
function handleCheck(event) {
  if (this.checked) {
    result = result + 1;
  }
}

function handleSubmit() {
  alert(nickname + ", 저와 " + result + "개의 취향이 같으시네요!");
}