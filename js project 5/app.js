var mainform = document.getElementById("main-form")
var otpform = document.getElementById("otp-form")
var timerbox = document.getElementById("timer-box")
var Resendotp = document.getElementById("Resend-otp")
submitPhone=(e)=>{
    e.preventDefault();
    mainform.style.display = "none";
    otpform.style.display= "block";
    setTimer()
}
againOtp=(e)=>{
    e.preventDefault();
    setTimer()
}
setTimer=()=>{
    var timer = 20
    timerbox.disabled = true;
    var count = setInterval(() => {
        timer--;
        timerbox.innerHTML=`Resend OTP code in ${timer} seconds`
        if (timer <= 0) {
            clearInterval(count)
            Resendotp.disabled = false;
            timerbox.textContent = ''; 
        }
    }, 1000);
}