
// first ticket Price function start here
function firstTicketPrice(increase){
    const firstClassInput = document.getElementById("first-class-input");
    const firstInputNumber = parseInt(firstClassInput.value);
    let firstNewInput = firstInputNumber;
    if(increase == true){
         firstNewInput = firstInputNumber + 1 ;
    }
    if(increase == false && firstInputNumber > 0){
         firstNewInput = firstInputNumber - 1 
    };
    firstClassInput.value = firstNewInput;
    const firstTotalPrice = firstNewInput * 150;
    document.getElementById("first-class-price").innerHTML = "$" + firstTotalPrice;
    calculateSubTotal()
}

// first ticket Price function end here


// economy ticket Price function start here

function EconomyTicketPrice(increase){
    const economyClassInput = document.getElementById("economy-class-input");
    const economyInputInt = parseInt(economyClassInput.value);
    let economyNewInput = economyInputInt;
    if(increase == true){
        economyNewInput = economyInputInt + 1 ;
    }
    if(increase == false && economyInputInt > 0){
        economyNewInput = economyInputInt - 1 
    };
    economyClassInput.value = economyNewInput;
    const economyTotalPrice = economyNewInput * 100;
    document.getElementById("economy-class-price").innerHTML = "$" + economyTotalPrice;
    calculateSubTotal()
}
// economy ticket Price function end here

// calculate sub total function start here

function calculateSubTotal(){
    const firstClassInput = document.getElementById("first-class-input");
    const firstInputNumber = parseInt(firstClassInput.value);

    const economyClassInput = document.getElementById("economy-class-input");
    const economyInputNumber = parseInt(economyClassInput.value);

    const subTotal = firstInputNumber * 150 + economyInputNumber * 100;
    document.getElementById("sub-total").innerHTML = "$" + subTotal;


    const tax = subTotal * 0.10;
    document.getElementById("tax-amount").innerHTML = "$" + tax;


    const allTotalCost = subTotal + tax;
    document.getElementById("all-total").innerText = "$" + allTotalCost
}

// calculate sub total function end here