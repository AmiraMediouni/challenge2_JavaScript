var btn_add_product=document.getElementById('add_product')
btn_add_product.addEventListener('click',add_P)
function add_P(e){
    e.preventDefault()
    var form_valid=true
    var reference=document.getElementById('reference')
    if(reference.value==""){
        form_valid=false
        reference.classList.remove('is-valid')
        reference.classList.add('is-invalid')
    }
    else{
        reference.classList.remove('is-invalid')
        reference.classList.add('is-valid')
    }

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

    var prix=document.getElementById('prix')
    if(prix.value==""){
        form_valid=false

        prix.classList.remove('is-valid')
        prix.classList.add('is-invalid')
    }
    else{
        prix.classList.remove('is-invalid')
        prix.classList.add('is-valid')
    }

    var quantite=document.getElementById('quantite')
    if(quantite.value==""){
        form_valid=false

        quantite.classList.remove('is-valid')
        quantite.classList.add('is-invalid')
    }
    else{
        quantite.classList.remove('is-invalid')
        quantite.classList.add('is-valid')
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
            reference:reference.value, 
            nom:nom.value,
            prix:prix.value,
            quantite:quantite.value,
            description:description.value
        }
        var products = JSON.parse(localStorage.getItem('products')) || [] 
        products.push(data) 
        console.log(products)
        localStorage.setItem('products',JSON.stringify(products))

    }

   
    
}