const button = document.getElementById("convert");
const editor = document.getElementById("editor");
const typewriter = document.getElementById("typewriter");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let i = 0;

function appendText(texts) {}

function addText(texts) {
  typewriter.innerHTML += texts;
}
async function m() {
  typewriter.innerHTML = "";
  let texts = generateSequence(editor.textContent);
  let v = texts.next();
  while (!v.done) {
    typewriter.focus();
    await sleep(100);
    addText(v.value);
    v = texts.next();
    if (v.value == undefined) {
      break;
    }
  }
}
button.addEventListener("click", async () => {
  let time = editor.textContent.length * 100 + 5000;
  m();
  setInterval(m, time);
});

function* generateSequence(arr) {
  for (let i = 0; i <= arr.length; i++) {
    yield arr[i];
  }
}
