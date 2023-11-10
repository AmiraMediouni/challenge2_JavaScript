var btn_add_category=document.getElementById('add_category')
btn_add_category.addEventListener('click',add_C)
function add_C(e){
    e.preventDefault()
    var form_valid=true
    var nom=document.getElementById('nom')
    if(nom.value==""){
        form_valid=false

        nom.classList.remove('is-valid')
        nom.classList.add('is-invalid')
    }
    else{
        nom.classList.remove('is-invalid')
        nom.classList.add('is-valid')
    }
    var description=document.getElementById('description')
    if(description.value=="" ){
        form_valid=false

        description.classList.remove('is-valid')
        description.classList.add('is-invalid')
    }
    else{
        description.classList.remove('is-invalid')
        description.classList.add('is-valid')
    }
    if(form_valid){
        var data={                   
            nom:nom.value,
            description:description.value
        }
        var categories = JSON.parse(localStorage.getItem('categories')) || [] 
        categories.push(data) 
        console.log(categories)
        localStorage.setItem('categories',JSON.stringify(categories))
        window.location.href='./list_category.html'
        

    }


   
    
}