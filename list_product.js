var products = JSON.parse(localStorage.getItem('products')) || [] 
var tbody=document.getElementById('tbody')
function load_data(){
    console.log(products)
    products.map((element,index)=>{                 //pour index de 0 a long products return products[index]
        tbody.innerHTML+=`<tr>
            <td>${element.reference}</td>
            <td>${element.nom}</td>
            <td>${element.prix}</td>
            <td>${element.quantite}</td>
            <td>${element.description}</td>
            <td><button type="button"  class="btn btn-success" onClick="edit_product(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal">
             Modifier
          </button>
        
            <button class="btn btn-danger" onClick="delete_product(${index})">Supprimer</button>
            </td>

        </tr>`

    })
}
load_data()
function delete_product(i){
    products.splice(i,1)
    localStorage.setItem('products', JSON.stringify(products))
    window.location.reload()

}
var reference=document.getElementById('reference')
var nom=document.getElementById('nom')
var prix=document.getElementById('prix')
var quantite=document.getElementById('quantite')
var description=document.getElementById('description')

var save=document.getElementById('save')
save.addEventListener('click',save_change)
var index=0
function edit_product(i){    
    
    reference.value=products[i].reference
    nom.value=products[i].nom
    prix.value=products[i].prix
    quantite.value=products[i].quantite
    description.value=products[i].description
    index=i    

}
function save_change(){
    var data={                   
        reference:reference.value, 
        nom:nom.value,
        prix:prix.value,
        quantite:quantite.value,
        description:description.value
    }
    products.splice(index,1,data)
    localStorage.setItem('products',JSON.stringify(products))
    window.location.reload()
}

