var key = '0539'
var x = '';
var old = '';

var balance = 1000;
function fun(n) {
    document.getElementById("pin").innerHTML += 'X'
    x += `${n}`
    old += `${n}`

}
function cl() {
    document.getElementById("pin").innerHTML = ''
}
function ok() {
    if (x == key) {
        location.href = "services.html"
    }
    else {
        document.getElementById("pin").innerHTML = "Incorrect PIN"
    }
}
function func(n) {
    document.getElementById("amount").innerHTML += `${n}`
}
function c() {
    document.getElementById("amount").innerHTML = ''

}
function calc() {
    amount = document.getElementById("amount").innerHTML;
    if (document.getElementById("amount").innerHTML % 100 == 0) {
        $("#message").html('Your transaction is being processsed, Please wait')
        $(".pop-up").css("display", "block");
        $("#close").attr("href", "final.html")
        balance -= amount
    }
    else {
        $("#message").html('Enter denominations in multiples of ₹100')
        $(".pop-up").css("display", "block")
        $("#close").attr("href", "savings.html")
    }
}
function funct(n) {
    document.getElementById("amount").innerHTML += `${n}`
}
function calcu() {
    amount = document.getElementById("amount").innerHTML;
    if (document.getElementById("amount").innerHTML % 100 == 0) {
        $("#message").html('Your transaction is being processsed, Please wait')
        $(".pop-up").css("display", "block");
        $("#close").attr("href", "final.html")
        balance = balance + amount

    }
    else {
        $("#message").html('Enter denominations in multiples of ₹100')
        $(".pop-up").css("display", "block")
        $("#close").attr("href", "deposit.html")
    }
}

function oka() {
    if (old == key) {
        location.href = "new pass.html";
    }
    else {
        $("#message").html("Password didn't match");
        $(".pop-up").css("display", "block");

    }
}
var newpass = ''
function okay() {
    newpass = document.getElementById("pin").innerHTML
    key = newpass
    $("#message").html("Password updated successully!")
    $(".pop-up").css("display", "block")
    $("#close").attr("href", "final1.html")
}
function showbalance() {
    $("#message").html("Available balance in your account is " + balance)
    $(".pop-up").css("display", "block")
    $("#close").attr("href", "final1.html")
}
