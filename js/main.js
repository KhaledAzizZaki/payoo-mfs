document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amountAdd = parseInt(document.getElementById("amount-add").value);
    // console.log(amountAdd);
    const pinNumber = parseInt(document.getElementById("pin-number").value);
    const balanceAmount = document.getElementById("balance").innerText;
    const balance = parseInt(balanceAmount);
    // console.log(balance);

    if (pinNumber == 1234) {
      if (amountAdd > 0) {
        const sum = amountAdd + balance;
        // console.log(sum);
        document.getElementById("balance").innerText = sum;
      } else {
        alert("Wrong amount");
      }
    } else {
      alert("Wrong pin");
    }
  });
