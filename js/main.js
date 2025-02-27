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
    let transactionHistory = document.getElementById("transaction-history");
    let bank = document.getElementById("bank").value;

    if (pinNumber == 1234) {
      if (amountAdd > 0) {
        const sum = amountAdd + balance;
        // console.log(sum);
        document.getElementById("balance").innerText = sum;
        let div = document.createElement("div");
        div.innerHTML = `
        <fieldset class="fieldset flex items-center gap-4">
                    <img
                      src="assets/wallet1.png"
                      alt=""
                      class="bg-gray-300 p-3 rounded-full"
                    />
                    <div>
                      <h5 class="font-bold">Add Money from ${bank}</h5>
                      <p>${amountAdd} Taka</p>
                    </div>
                  </fieldset>
        `;
        transactionHistory.appendChild(div);
      } else {
        alert("Wrong amount");
      }
    } else {
      alert("Wrong pin");
    }
  });

document.getElementById("log-out-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});
