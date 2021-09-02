// transaction korar sysytem
//deposit


function thesameWork (inputId){
    
    const inputAmount = document.getElementById(inputId);
    const newdepositAmounttext = inputAmount.value;
    const newdepositAmount= parseFloat(newdepositAmounttext)

    //clean deposit value
    inputAmount.value = '';

    return newdepositAmount;

};

function updateAmount (amount, newamount){
    const previoustotal = document.getElementById(amount);
    const previousAmounttext = previoustotal.innerText;
    const previousAmount = parseFloat(previousAmounttext)
    
     previoustotal.innerText = previousAmount + newamount;
};

function getcurentBalance (){
    const currentBalance = document.getElementById('balance-total');
    const currenttottalBAlancetext  = currentBalance.innerText;
    const currentBalanceTotal = parseFloat(currenttottalBAlancetext) ;
    return currentBalanceTotal;
}


function updateBalance ( balance , isAdd){
    const currentBalance = document.getElementById('balance-total');
    // const currenttottalBAlancetext  = currentBalance.innerText;
    // const currentBalanceTotal = parseFloat(currenttottalBAlancetext) ;

    const currentBalanceTotal = getcurentBalance ()
     if(isAdd== true){
        currentBalance.innerText = balance + currentBalanceTotal;
     }
    else{
        currentBalance.innerText = currentBalanceTotal - balance;
    }


};
document.getElementById('deposit-button').addEventListener('click', function(){
    // const deposit_Amount = document.getElementById('deposit-amount');
    // const newdepositAmounttext = deposit_Amount.value;
    // const newdepositAmount= parseFloat(newdepositAmounttext)
    const theAmount = thesameWork('deposit-amount');
    if  (theAmount> 0) {
        updateAmount('total-deposit', theAmount);
    updateBalance(theAmount , true);

    } 
    
    
    // const previoustotalDeposit = document.getElementById('total-deposit');
    // const previousdepositAmounttext = previoustotalDeposit.innerText;
    // const previousdepositAmount = parseFloat(previousdepositAmounttext)
    
    // const updateddeposittotal = theAmount + previousdepositAmount;
   
    // previoustotalDeposit.innerText=updateddeposittotal;

    // main balance update by deposit 
    // const currentBalance = document.getElementById('balance-total');
    // const currenttottalBAlancetext  = currentBalance.innerText;
    // const currentBalanceTotal = parseFloat(currenttottalBAlancetext) ;
    
    // const updatedTotalBalance = theAmount + currentBalanceTotal;
    // currentBalance.innerText = updatedTotalBalance;

    //clean deposit value
    // inputAmount.value = '';
   
})


// withdraw section 
document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withdrawAmount = document.getElementById('withdraw-amount');
    // const withdrawAmounttext = withdrawAmount.value;
    // const withdrawamountbalance = parseFloat(withdrawAmounttext);
    const theWithdrawAmount = thesameWork('withdraw-amount');
    const theWithdrawbalance = getcurentBalance();
   if(theWithdrawAmount > 0 && theWithdrawAmount < theWithdrawbalance ){
    updateAmount('withdraw-total',theWithdrawAmount );
    updateBalance(theWithdrawAmount, false);

   }
   if(theWithdrawAmount > theWithdrawbalance){
       alert('warning!! you cant withdraw more than your balance what you have in  your account..')
   }
    // const previouswithdraw = document.getElementById('withdraw-total');
    // const previouswithdrawtext = previouswithdraw.innerText;
    // const previouswithdrawBalance = parseFloat(previouswithdrawtext);

    // const totalWithdraw = theWithdrawAmount + previouswithdrawBalance;
    // previouswithdraw.innerText = totalWithdraw;
    

    // withdrawal to balance minus 
    // const currentBalance = document.getElementById('balance-total');
    // const currenttottalBAlancetext  = currentBalance.innerText;
    // const currentBalanceTotal = parseFloat(currenttottalBAlancetext) ;

    // const updatedTotalBalance = currentBalanceTotal-theWithdrawAmount;
    // currentBalance.innerText = updatedTotalBalance;

    // inputAmount.value = '';



})