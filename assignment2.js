let email = "xyz@gmail.com"
let password = '12345'
let e = prompt("Enter your mail")
let p = prompt("Enter your password")

//by if-else
if(e==email && p==password){
    alert("Yes, the login credentials are valid")
}
else{
    alert("No, the login credentials are not valid")
}

//by ternary operator
password==p && email==e
?alert("Yes, the login credentials are valid")
:alert("No, the login credentials are not valid")