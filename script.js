const form = document.getElementById( elementId , "calculator")

form.onsubmit = function(event :Event){
    event.preventDefault()

    let howMuch = document.getElementById(elementID, 'bill');
    let tipAmount = document.getElementById(elementID, "percentage");
    let customerNum = document.getElementById(elementID, "customer-num");

    

    console.log(form)
    return false
}