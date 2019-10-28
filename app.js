let textarea = document.querySelector(".textarea");
let button = document.querySelector(".button-submit");
let newComments = document.querySelector(".comments-new");

textarea.addEventListener("keyup", keyup);
button.addEventListener("click", addText);

function keyup(e) {
  if (e.ctrlKey && e.keyCode === 13 && textarea.value != "") {
    createMessage();
  }
}

function addText(e) {
  if (textarea.value === "") {
    alert("Введите сообщение!");
  }
  createMessage();
  e.preventDefault();
}

function createMessage() {
  let div = document.createElement("div");
  div.setAttribute("class", "comments");

  const textMessage = document.createElement("p");
  textMessage.setAttribute("class", "comment-title");

  const name = document.createElement("strong");
  name.setAttribute("class", "comment-name");

  const newDate = document.createElement("span");
  newDate.setAttribute("class", "date");

  var textComment = document.createElement("p");
  textComment.setAttribute("class", "comment-message");

  const date = new Date();
  const options = {
    month: "long",
    day: "numeric",
    timezone: "UTC"
  };

  name.textContent = "Ваше имя";
  newDate.textContent =
    date.toLocaleString("ua", options) + " " + date.getFullYear();
  textComment.textContent = textarea.value;

  textMessage.appendChild(name);
  textMessage.appendChild(newDate);
  div.appendChild(textMessage);
  div.appendChild(textComment);
  newComments.appendChild(div);

  textarea.value = "";
}
