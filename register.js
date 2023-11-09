var btn_register=document.querySelector('button')
btn_register.addEventListener('click',register)
function register(e){
    e.preventDefault()//pour ne pas rafraichir la page automatiquement
    var form_valid=true
    var nom=document.getElementById('nom')
    if(nom.value==""){
        form_valid=false
        nom.classList.remove('is-valid')//supprimer l'attribut is-valid de la classe qui a l'id nom et ajouter is-invalid
        nom.classList.add('is-invalid')
    }
    else{
        nom.classList.remove('is-invalid')
        nom.classList.add('is-valid')
    }

    var prenom=document.getElementById('prenom')
    if(prenom.value==""){
        form_valid=false

        prenom.classList.remove('is-valid')
        prenom.classList.add('is-invalid')
    }
    else{
        prenom.classList.remove('is-invalid')
        prenom.classList.add('is-valid')
    }

    var email=document.getElementById('email')
    if(email.value==""){
        form_valid=false

        email.classList.remove('is-valid')
        email.classList.add('is-invalid')
    }
    else{
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
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

    var password2=document.getElementById('password2')
    if(password2.value=="" && password.value!=password2.value){
        form_valid=false

        password2.classList.remove('is-valid')
        password2.classList.add('is-invalid')
    }
    else{
        password2.classList.remove('is-invalid')
        password2.classList.add('is-valid')
    }
    if(form_valid){
        var data={                   //créer un objet data
            nom:nom.value, 
            prenom:prenom.value,
            email:email.value,
            password:password.value,
            password2:password2.value
        }
        var users = JSON.parse(localStorage.getItem('users')) || [] //charger les items préexistant dans localStorage sinon on crée un tableau vide
        users.push(data) //ajouter data au tableau users
        console.log(users)
        localStorage.setItem('users',JSON.stringify(users))

    }

   
    
}