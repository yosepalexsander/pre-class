const form = document.getElementById("userForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // element for display data
  const name = document.getElementById("dataName");
  const summary = document.getElementById("dataSummary");
  const phone = document.getElementById("dataPhone");
  const email = document.getElementById("dataEmail");
  const address = document.getElementById("dataAddress");


  // input value
  const nameInput = getInputValue("name");
  const summaryInput = getInputValue("summary");
  const phoneInput = getInputValue("phone");
  const emailInput = getInputValue("email");
  const addressInput = getInputValue("address");

  // set value to element
  setValueToElement(name, nameInput);
  setValueToElement(summary, summaryInput);
  setValueToElement(phone, phoneInput);
  setValueToElement(email, emailInput);
  setValueToElement(address, addressInput);

})

function getInputValue(id) {
  return document.getElementById(id).value;
}

function setValueToElement(elm, value) {
  elm.innerHTML = value;
}