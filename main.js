let userAccbal=document.getElementById("userAccbal")
let borrowAmount=document.getElementById("borrowAmount")
let creditHistory=document.getElementById("creditHistory")
let lastDeposit=document.getElementById("lastDeposit")
let lastloan=document.getElementById("lastloan")
let loanRepay=document.getElementById("loanRepay")
let accountType=document.getElementById("accountType")
let regBtn=document.getElementById("regBtn")
let amountError=document.getElementById("amountError")
let borrowError=document.getElementById("borrowError")
let lastDepositerror=document.getElementById("lastDepositerror")

let creditScore=0

regBtn.addEventListener('click',function () {
    vaidateuserAcc()
})

function vaidateuserAcc() {
    if (userAccbal.value=="") {
        amountError.innerHTML="Amount is required!"
    }else if (userAccbal.value!="") {
        amountError.innerHTML=""
        validateloanAmount()
    }
}
function validateloanAmount() {
    if (borrowAmount.value=="") {
        borrowError.innerHTML="Amount is required!"
    }else if (borrowAmount.value!="") {
        borrowError.innerHTML=""
        loanAmountscore()
    }
}
function loanAmountscore() {
    if (userAccbal.value>=borrowAmount.value) {
        creditScore=creditScore+10
    }else if (userAccbal.value<<borrowAmount.value) {
        creditScore=creditScore-10
    }validatecreditHistory()
    console.log(creditScore)
}

function validatecreditHistory() {
    if (creditHistory.value=="less") {
        creditScore=creditScore
    }else if (creditHistory.value=="above6") {
        creditScore=creditScore+10
    }validatelastDeposit()
    console.log(creditScore)
}

function validatelastDeposit() {
     if (lastDeposit.value=="oneMonth") {
        creditScore=creditScore+5
    }else if (lastDeposit.value=="twoMonth") {
        creditScore=creditScore
    }validatelastloan()
    console.log(creditScore)
}

function validatelastloan() {
    if (lastloan.value=="moreThan") {
        creditScore=creditScore+10
    }else if (lastloan.value=="lessThan") {
        creditScore=creditScore  
    }validateloanRepay()
    console.log(creditScore)
}

function validateloanRepay() {
     if (loanRepay.value=="lesserThan") {
        creditScore=creditScore+10
    }else if (loanRepay.value=="greaterThan") {
        creditScore=creditScore
    }validateaccountType()
    console.log(creditScore)
}

function validateaccountType() {
    if (accountType.value=="current") {
        creditScore=creditScore+10
    }else if (accountType.value="saving") {
        creditScore=creditScore+5
    }displayScore()
    console.log(creditScore)
}

function displayScore() {
    if (creditScore>=30) {
        alert("Congratulations Sir/Ma. \n Your Credit Score is " +creditScore+ "\n You are Qualified to get the loan of " +borrowAmount.value+ "naira")
    }else if (creditScore<30) {
        alert("Ouch! Your Credit Score is "+creditScore+"\n You do not meet up with our requirements")
    }
}
