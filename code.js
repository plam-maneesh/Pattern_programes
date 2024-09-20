function calculateSum() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    // Convert the inputs to numbers
    num1 = Number(num1);
    num2 = Number(num2);

    // Calculate the sum
    let sum = num1 + num2;

    // Display the result in the <p> tag
    document.getElementById("result").textContent = "The sum is: " + sum;
  }


  