function checkMinLength(str, length){
    if(str.length > length){
        return true
    }
    return false
}

function checkMaxLength(str, length){
    if(str.length < length){
        return true
    }
    return false
}

function checkSpecialCharacter(str){
    for(let i = 0; i < str.length; i++){
        if(!((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= '0' && str[i] <= '9'))){
            return false
        }
    }
    return true
}

function counter(str, charSearch){
    let total = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] == charSearch){
            ++total
        }
    }
    return total
}

function checkEmailFormat(str){
    let atIdx = str.indexOf('@')
    if(!(str.includes('@'))){ //more than 1 @ 
        return false
    }
    else if(counter(str, '@') > 1){
        return false
    }
    else if(str[atIdx - 1] === '.' || str[atIdx + 1] === '.'){ //@ is beside .
        return false
    }
    else if(str[0] === '@'){ //@ at the beginning
        return false
    }
    return true
}

function checkEmailEnding(str){
    let ending = ['gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.id', 'ymail.com', 'hotmail.com', 'binus.ac.id', 'binus.edu']
    for(let i = 0; i < ending.length; i++){
        if(str.endsWith(ending[i])){
            return true
        }
    }
    return false
}

function checkCapital(str){
    for(let i = 0; i < str.length; i++){
        if(str[i] >= 'A' && str[i] <= 'Z'){
            return true
        }
    }
    return false
}

function checkNumber(str){
    for(let i = 0; i < str.length; i++){
        if(str[i] >= '0' && str[i] <= '9'){
            return true
        }
    }
    return false
}

function compareDOB(yearInput, monthInput, dateInput){
    let date = new Date()
    if(yearInput > date.getFullYear()){
        return false
    }
    else if(monthInput > date.getMonth() && yearInput == date.getFullYear()){
        return false
    }
    else if(dateInput > date.getDate() && monthInput == date.getMonth() && yearInput == date.getFullYear()){
        return false
    }
    return true
}

document.getElementById("username").addEventListener("keyup", validateUsername)
function validateUsername(){
    let username = document.getElementById('username').value
    let usernameError = document.getElementById('username-error')
    usernameError.classList.remove('hidden')

    let usernameCk = document.getElementById('username-checkmark')
    usernameCk.classList.add('hidden')
    if(!checkMinLength(username, 0)){
        usernameError.innerHTML = "Field Required!"
    }
    else if(!(checkMinLength(username, 3) && (checkMaxLength(username, 21)))){
        usernameError.innerHTML = "Username must contain between 4 and 20 characters!"
    }
    else if(!checkSpecialCharacter(username)){
        usernameError.innerHTML = "Username may not contain any special characters!"
    }
    else{
        usernameError.classList.add('hidden')
        usernameCk.classList.remove('hidden')
        return true
    }
    return false
}

document.getElementById("email").addEventListener("keyup", validateEmail)
function validateEmail(){
    let email = document.getElementById('email').value
    let emailError = document.getElementById('email-error')
    emailError.classList.remove('hidden')

    let emailCk = document.getElementById('email-checkmark')
    emailCk.classList.add('hidden')
    if(!checkMinLength(email, 0)){
        emailError.innerHTML = "Field Required!"
    }
    else if(!checkEmailFormat(email)){
        emailError.innerHTML = "Invalid Email Format!"
    }
    else if(!checkEmailEnding(email)){
        emailError.innerHTML = "Email Domain Unrecognized!"
    }
    else{
        emailError.classList.add('hidden')
        emailCk.classList.remove('hidden')
        return true
    }
    return false
}

document.getElementById("password").addEventListener("keyup", validatePassword)
document.getElementById("password").addEventListener("keyup", validateConfirmPassword)
function validatePassword(){
    let password = document.getElementById('password').value
    let passwordError = document.getElementById('password-error')
    passwordError.classList.remove('hidden')

    let passwordCk = document.getElementById('password-checkmark')
    passwordCk.classList.add('hidden')
    if(!checkMinLength(password, 0)){
        passwordError.innerHTML = "Field Required!"
    }
    else if(!(checkMinLength(password, 7))){
        passwordError.innerHTML = "Password must be at least 8 characters long!"
    }
    else if(!checkCapital(password)){
        passwordError.innerHTML = "Password must contain at least 1 capital letter!"
    }
    else if(!checkNumber(password)){
        passwordError.innerHTML = "Password must contain at least 1 number!"
    }
    else if(checkSpecialCharacter(password)){
        passwordError.innerHTML = "Password must contain at least 1 special character!"
    }
    else{
        passwordError.classList.add('hidden')
        passwordCk.classList.remove('hidden')
        return true
    }
    return false
}

document.getElementById("confirm-password").addEventListener("keyup", validateConfirmPassword)
function validateConfirmPassword(){
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirm-password').value
    let confirmPasswordError = document.getElementById('confirm-password-error')
    confirmPasswordError.classList.remove('hidden')

    let confirmPasswordCk = document.getElementById('confirm-password-checkmark')
    confirmPasswordCk.classList.add('hidden')
    if(!checkMinLength(confirmPassword, 0)){
        confirmPasswordError.innerHTML = "Field Required!"
    }
    else if(password != confirmPassword){
        confirmPasswordError.innerHTML = "Password and Confirm Password don't Match!"
    }
    else{
        confirmPasswordError.classList.add('hidden')
        confirmPasswordCk.classList.remove('hidden')
        return true
    }
    return false
}

document.getElementById("dob").addEventListener("change", validateDOB)
function validateDOB(){
    let inputDOB = document.getElementById('dob').value
    let yyyy = Number(inputDOB.substr(0, 4))
    let mm = Number(inputDOB.substr(5, 2))
    let dd = Number(inputDOB.substr(8, 2))

    let dobError = document.getElementById('dob-error')
    dobError.classList.remove('hidden')

    let dobCk = document.getElementById('dob-checkmark')
    dobCk.classList.add('hidden')
    if(!compareDOB(yyyy + 18, mm - 1, dd)){
        dobError.innerHTML = "You must be at least 18 years old!"
    }
    else if(yyyy < 1820 && yyyy>999){
        dobError.innerHTML = "Umm are you sure you're more than 200 years old?"
    }
    else if(!inputDOB || yyyy<999){
        dobError.innerHTML = "Field Required!"
    }
    else{
        dobError.classList.add('hidden')
        dobCk.classList.remove('hidden')
        return true
    }
    return false
}

document.getElementById("nationality").addEventListener("change", validateNationality)
function validateNationality(){
    let nationality = document.getElementById('nationality')
    let nationalityError = document.getElementById('nationality-error')
    nationalityError.classList.remove('hidden')

    let nationalityCk = document.getElementById('nationality-checkmark')
    nationalityCk.classList.add('hidden')
    if(nationality.value == 0){
        nationalityError.innerHTML = "Field Required!"
    }
    else{
        nationalityError.classList.add('hidden')
        nationalityCk.classList.remove('hidden')
        return true
    }
    return false
}

document.getElementById("terms").addEventListener("click", validateTerms)
function validateTerms(){
    let terms = document.getElementById('terms')
    let termsError = document.getElementById('terms-error')
    termsError.classList.remove('hidden')
    if(terms.checked){
        termsError.classList.add('hidden')
        return true
    }
    return false
}

function validateForm(){
    if(validateTerms() && validateNationality() && validateDOB() && validateConfirmPassword() && 
    validatePassword() && validateEmail() && validateUsername()){
        alert("Pre-Register Successful!")
        return true
    }
    alert("Please check your details again")
    return false
}

document.getElementById("toggle-eye").addEventListener("click", function(){
    let password = document.getElementById('password')
    let type = password.getAttribute("type")
    password.setAttribute("type", (type === "password")? "text" : "password")
    this.classList.toggle("fa-eye-slash")
})
