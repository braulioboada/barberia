let starValue = 0;
let disabledBtn = document.getElementById("disableBtn");
disabledBtn.disabled = true;

function addValueFunction(valuePar) {
    document.getElementById("amount").value;

    if(valuePar.value == 'increase') {
        starValue++;
        if (starValue == 4) {
            mDisabeBtn.disabled = true;
        } 
    } else {
        starValue--;
        mDisabeBtn.disabled = false;
    }
    document.getElementById("amount").textContent = 
    starValue;

    if (starValue == 0) {
        disabledBtn.disabled = true;
    } else {
        disabledBtn.disabled = false;
    }
}
