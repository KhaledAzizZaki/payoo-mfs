document.getElementById("cash-out").style.display = "none";
document.getElementById("transactions").style.display = "none";

document.getElementById("cash-out-card").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "block";
  document.getElementById("transactions").style.display = "none";
});

document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    document.getElementById("add-money").style.display = "block";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("transactions").style.display = "none";
  });

document
  .getElementById("transactions-card")
  .addEventListener("click", function () {
    document.getElementById("add-money").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("transactions").style.display = "block";
  });
