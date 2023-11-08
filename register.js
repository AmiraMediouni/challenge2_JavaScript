var btn_register=document.querySelector('button')
btn_register.addEventListener('click',register)
function register(){
    var nom=document.getElementById('nom')
    if(nom.value==""){
        nom.classList.remove('is-valid')
        nom.classList.add('is-invalid')
    }
    else{
        nom.classList.remove('is-invalid')
        nom.classList.add('is-valid')
    }

    var prenom=document.getElementById('prenom')
    if(prenom.value==""){
        prenom.classList.remove('is-valid')
        prenom.classList.add('is-invalid')
    }
    else{
        prenom.classList.remove('is-invalid')
        prenom.classList.add('is-valid')
    }

    var email=document.getElementById('email')
    if(email.value==""){
        email.classList.remove('is-valid')
        email.classList.add('is-invalid')
    }
    else{
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
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

    var password2=document.getElementById('password2')
    if(password2.value==""){
        password2.classList.remove('is-valid')
        password2.classList.add('is-invalid')
    }
    else{
        password2.classList.remove('is-invalid')
        password2.classList.add('is-valid')
    }

    if(password2.value!=password.value){
        document.getElementById('password_feedback').innerText='la confirmation est invalide'
        
    }


}