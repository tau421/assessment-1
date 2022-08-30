let password = "DevmountainPT6";
if (password.length < 10){
    console.log("Your password must be at least 10 characters.")
}
// Password maximum length check
else if (password.length > 20) {console.log("Your password must be 20 characters or less.")} 
else {console.log("Password Length Success!")};

let numbersCheck = /[0-9]/g;
let letterCheck = /[a-z]/gi;
let dumbPasswordCheck = "password"
let dumbLetMeInCheck = "letmein"
if (password.match(numbersCheck) && password.match(letterCheck)){
    console.log("Number and Letter Success!")
} else {console.log("Your password must contain at least one number and at least one letter.")};
//Forbidden words checks
if (password.match(dumbPasswordCheck)){
    console.log("Don't use password in your password.")
}
else if (password.match(dumbLetMeInCheck)){
    console.log("Don't use letmein in your password.")
}
else {console.log("Success! No common password phrases detected.")}
console.log(`
___________         __                  _________                    .___.__  __   
\_   _____/__  ____/  |_____________    \_   ___ \_______   ____   __| _/|__|/  |_ 
 |    __)_\  \/  /\   __\_  __ \__  \   /    \  \/\_  __ \_/ __ \ / __ | |  \   __\
 |        \>    <  |  |  |  | \// __ \_ \     \____|  | \/\  ___// /_/ | |  ||  |  
/_______  /__/\_ \ |__|  |__|  (____  /  \______  /|__|    \___  >____ | |__||__|  
        \/      \/                  \/          \/             \/     \/           
`);
// I can't get it to show up exactly right for some reason