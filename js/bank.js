// button function 
document.getElementById('submit-button').addEventListener('click', function(){
    //user name
    const userNameField = document.getElementById('user-name');
    const userName = userNameField.value;

    // user password
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;

    if(userName=='Riad Shahriar' && userPassword == 'riyad'){
        window.location.href='banksite.html'
    }
})