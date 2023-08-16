// For Deposit section
document.getElementById('depositSubmitBttn').addEventListener('click', function(){

    // Deposit Section
    const depositTkInitial = document.getElementById('depositInitial');
    const depositInitTkFloat = parseFloat(depositTkInitial.innerText);
    const depositingInitialTk = document.getElementById('depositInput');
    const depositingInitTkFloat = parseFloat(depositingInitialTk.value);

    if(depositingInitTkFloat >= 0)
    { 
        depositTkInitial.innerText = (depositInitTkFloat + depositingInitTkFloat);
    }
    else{
        alert("Please Enter Amount ! :(");
    }

    // Balance Section
    const balanceTkInitial = document.getElementById('balanceInitial');
    const balanceInitTkFloat = parseFloat(balanceTkInitial.innerText);
    const balanceingInitialTk = document.getElementById('depositInput');
    const balanceingInitialTkFloat = parseFloat(balanceingInitialTk.value);

    if(depositingInitTkFloat >= 0)
    {
        balanceTkInitial.innerText = (balanceInitTkFloat + balanceingInitialTkFloat);

    }
    


    depositingInitialTk.value = "";
})


// For Withdraw section
document.getElementById('withdrawSubmitBttn').addEventListener('click', function(){

    // Withdraw Section
    const withdrawTkInitial = document.getElementById('withdrawInitial');
    const withdrawInitTkFloat = parseFloat(withdrawTkInitial.innerText);
    const withdrawingInitialTk = document.getElementById('withdrawInput');
    const withdrawingInitTkFloat = parseFloat(withdrawingInitialTk.value);

    

    // Balance Section
    const balanceTkInitial = document.getElementById('balanceInitial');
    const balanceInitTkFloat = parseFloat(balanceTkInitial.innerText);
    const balanceingInitialTk = document.getElementById('withdrawInput');
    const balanceingInitialTkFloat = parseFloat(balanceingInitialTk.value);
    const valueBalance = (balanceInitTkFloat - balanceingInitialTkFloat);


    if(valueBalance >= 0 && withdrawingInitTkFloat >= 0)
    {
        withdrawTkInitial.innerText = (withdrawInitTkFloat + withdrawingInitTkFloat);

    }
    else{
        alert("Please Deposit First ! :(");
    }

    if(valueBalance >= 0 && withdrawingInitTkFloat >= 0)
    {
        balanceTkInitial.innerText = (balanceInitTkFloat - balanceingInitialTkFloat);

    }
    else{
        alert("Please Enter Correct Amount ! :(");
    }


    withdrawingInitialTk.value = "";
})