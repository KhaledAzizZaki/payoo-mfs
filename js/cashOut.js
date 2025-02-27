document
  .getElementById("btn-remove-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let pin = getInputValueById("cash-out-pin-number");
    let amount = getInputValueById("amount-remove");
    let balance = getInputTextById("balance");

    // console.log(pin, amount);
    let agent = document.getElementById("agent-number").value;
    let transactionHistory = document.getElementById("transaction-history");

    if (agent.length == 11 && pin == 1234) {
      if (amount > 0 && amount < balance) {
        // console.log("good");
        let subtract = balance - amount;
        document.getElementById("balance").innerText = subtract;
        document.getElementById("amount-remove").value = "";
        let div = document.createElement("div");
        div.innerHTML = `
        <fieldset class="fieldset flex items-center gap-4">
                    <img
                      src="assets/wallet1.png"
                      alt=""
                      class="bg-gray-300 p-3 rounded-full"
                    />
                    <div>
                      <h5 class="font-bold">Cash Out</h5>
                      <p>${amount} Taka</p>
                    </div>
                  </fieldset>
        `;
        transactionHistory.appendChild(div);
      } else {
        alert("Wrong Amount");
      }
    } else {
      alert("Wrong Pin or Number");
    }
  });
