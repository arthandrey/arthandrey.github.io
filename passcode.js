const passcode = "1200532006";
let enteredPin = "";

function appendDigit(digit) {
  if (enteredPin.length < passcode.length) {
    enteredPin += digit;
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("display").textContent = enteredPin;
}

function clearDisplay() {
  enteredPin = "";
  updateDisplay();
}

function deleteLast() {
  enteredPin = enteredPin.slice(0, -1);
  updateDisplay();
}

function checkPin() {
  if (enteredPin === passcode) {
    sessionStorage.setItem("authenticated", "true");
    alert("Great Job! my baby Ping ⸜(｡˃ ᵕ ˂ )⸝♡! Now here's my surprise for you! (˵•̀ ᴗ -˵)✧");
    window.location.href = "main.html";
  } else {
    alert("Nopee! Try again babyy, you can do it!! ⸜(｡˃ ᵕ ˂ )⸝♡ (˶ᵔ ᵕ ᵔ˶)");
    clearDisplay();
  }
}

document.querySelectorAll(".numButton").forEach(button => {
  button.addEventListener("touchstart", function () {
    this.classList.add("active-effect");
    setTimeout(() => this.classList.remove("active-effect"), 69);
  });
});

document.querySelectorAll(".enterBtn").forEach(button => {
  button.addEventListener("touchstart", function () {
    this.classList.add("active-effect-2");
    setTimeout(() => this.classList.remove("active-effect-2"), 69);
  });
});
