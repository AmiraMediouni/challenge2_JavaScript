var categories = JSON.parse(localStorage.getItem('categories')) || [] 
var tbody=document.getElementById('tbody')
function load_data(){
    console.log(categories)
    categories.map((element,index)=>{                 //pour index de 0 a long categories return categories[index]
        tbody.innerHTML+=`<tr>
            <td>${element.nom}</td>
            <td>${element.description}</td>
            <td><button type="button"  class="btn btn-success" onClick="edit_category(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal">
             Modifier
          </button>
        
            <button class="btn btn-danger" onClick="delete_category(${index})">Supprimer</button>
            </td>

        </tr>`

    })
}
load_data()
function delete_category(i){
    categories.splice(i,1)
    localStorage.setItem('categories', JSON.stringify(categories))
    window.location.reload()

}
var nom=document.getElementById('nom')
var description=document.getElementById('description')

var save=document.getElementById('save')
save.addEventListener('click',save_change)
var index=0
function edit_category(i){    
    
    nom.value=categories[i].nom
    description.value=categories[i].description
    index=i    

}
function save_change(){
    var data={                   
        nom:nom.value,
        description:description.value
    }
    categories.splice(index,1,data)
    localStorage.setItem('categories',JSON.stringify(categories))
    window.location.reload()
}

