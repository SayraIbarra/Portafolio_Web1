function calculateTip() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(subtotal) || isNaN(tipPercentage)) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    let tipAmount = (subtotal * tipPercentage) / 100;
    let totalAmount = subtotal + tipAmount;

    document.getElementById("result").innerHTML = `
        <p>Propina sugerida: $${tipAmount.toFixed(2)}</p>
        <p>Total con propina: $${totalAmount.toFixed(2)}</p>
    `;
}

