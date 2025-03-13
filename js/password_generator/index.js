function generatePassword() {
    const pwlength = document.getElementById('passwordLength').value;
    const includeLowercase = true;
    const includeUppercase = true;
    const includeNumbers = true;
    const includeSymbols = true;

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';

    let characters = ''; //acts as a checker for allowed or not allowed characters
    if (includeLowercase) characters += lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let password = '';
    for (let i = 0; i < pwlength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('result').textContent = 'Password: ' + password;
}