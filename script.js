const display = document.getElementById('display');

function appendValue(val) {
  if(display.value === "0") display.value = "";
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Hata!";
  }
}
