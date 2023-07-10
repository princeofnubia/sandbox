const keyLetter = document.getElementById("key-letter");
const keyCode = document.getElementById("key-code");
const eventCode = document.getElementById("event-code");

const eventHandler = function (event) {
  const keyC = event.keyCode;
  const code = event.code;
  const letter = event.key;

  keyLetter.innerText = letter;
  keyCode.innerText = code;
  eventCode.innerText = keyC;
};

document.body.addEventListener("keypress", eventHandler, false);
