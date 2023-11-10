var btn=document.getElementById('se_connecter')

btn.addEventListener('click',login)

function login(e){
    e.preventDefault()
    var form_valid=true
    var mail=document.getElementById('email')
    if(mail.value==""){
        form_valid=false
        mail.classList.remove('is-valid')
        mail.classList.add('is-invalid')

    }
    else{
        mail.classList.remove('is-invalid')
        mail.classList.add('is-valid')
    }

    var password=document.getElementById('password')
    if(password.value==""){
        form_valid=false

        password.classList.remove('is-valid')
        password.classList.add('is-invalid')

    }
    else{
        password.classList.remove('is-invalid')
        password.classList.add('is-valid')
    }
    if(form_valid){
        var users = JSON.parse(localStorage.getItem('users')) || []
        var found=users.find((user)=>user.email==mail.value && user.password==password.value)
        if(found){
            alert('connected with success')
        }
        else{
            alert('verify email and password')
        }
        console.log(found)
    }
    
}