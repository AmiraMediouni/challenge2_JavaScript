var btn=document.querySelector('button')
btn.addEventListener('click',login)

function login(){
    var mail=document.getElementById('email')
    if(mail.value==""){
        mail.classList.remove('is-valid')
        mail.classList.add('is-invalid')

    }
    else{
        mail.classList.remove('is-invalid')
        mail.classList.add('is-valid')
    }

    var password=document.getElementById('password')
    if(password.value==""){
        password.classList.remove('is-valid')
        password.classList.add('is-invalid')

    }
    else{
        password.classList.remove('is-invalid')
        password.classList.add('is-valid')
    }

    
}