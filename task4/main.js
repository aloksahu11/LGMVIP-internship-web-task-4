function appendToDisplay(value) {
    document.getElementById("a1").value += value;
  }

  function calculateResult() {
    try {
      const result = eval(document.getElementById("a1").value);
      document.getElementById("a1").value = result.toFixed(2);
    } catch (error) {
      document.getElementById("a1").value = "Error";
    }
  }

  function clearDisplay() {
    document.getElementById("a1").value = "";
  }