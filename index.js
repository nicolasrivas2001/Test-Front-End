const restaurantes=[
    {  
        img:"/imagenes/restaurante.webp",
        id:4,
        name:"Cantegril",
        contact:{website:"https://www.facebook.com/cantegrilparrillarestaurante/",email:"cantegriln@gmail.com",phone:"46723234"},
        adress:{
            street:"Av. Corrientes 4800",
            city:"Villa Crespo",
            state:"Buenos Aires",
        },
        rating:4
    },
    {   
        img:"/imagenes/seikiramen.jpg",
        id:2,
        name:"Seiki Ramen",
        contact:{website:"https://sites.google.com/view/seiki-ramen/take-awaydelivery",email:"seikeramen@gmail.com",phone:"01157879987"},
        adress:{
            street:"Sarmiento 4518",
            city:"Palermo",
            state:"Buenos Aires",
        },
        rating:2
    },
    {
        img:"/imagenes/elmosquito.jpg",
        id:3,
        name:"El Gran Mosquito",
        contact:{website:"https://www.facebook.com/ElGranMosquito/",email:"elmosquito@gmail.com",phone:"48769856"},
        adress:{
            street:"Lambare 567",
            city:"Alamgro",
            state:"Buenos Aires",
        },
        rating:3
    },
    {   
        img:"/imagenes/santamarta.jpg",
        id:4,
        name:"Santa Marta",
        contact:{website:"https://www.instagram.com/santamartatienetren/?hl=es",email:"santamarta@gmail.com",phone:"46763894"},
        adress:{
            street:"Raul Saclabrini Ortiz 114",
            city:"Almagro",
            state:"Buenos Aires",
        },
        rating:4
    },
    {   
        img:"/imagenes/joseluis.jpg",
        id:1,
        name:"José Luis Restaurante",
        contact:{website:"https://www.instagram.com/joseluisrestaurante/",email:"joseluis@gmail.com",phone:"01136862895"},
        adress:{
            street:"Quintana 456",
            city:"Recoleta",
            state:"Buenos Aires",
        },
        rating:2
    }
]




function ordenarAlfabeticamente(){
    let nodoProductos=document.getElementById("restaurantes");
    nodoProductos.innerHTML="";
    let lista=document.createElement("div");
    const ordenados=restaurantes.sort(function(a,b){
        return a.name.localeCompare(b.name)
    })
    for(let i=0;i<ordenados.length;i++){
        let item=document.createElement("div");
            item.innerHTML=`<div class="restaurante">
            <div><img src="${ordenados[i].img}"></div>
            <div><h3>${ordenados[i].name}</h3></div>
            <div>${`Email: `+ordenados[i].contact.email}</div>
            <div>${`Phone: `+ordenados[i].contact.phone}</div>
            <div>${`Adress: `+ordenados[i].adress.street}</div>
            <div>${`City: `+ordenados[i].adress.city}</div>
            <div>${`State: `+ordenados[i].adress.state}</div>
            <div>${`Rating: `+ordenados[i].rating}</div>
            <button><a href="${ordenados[i].contact.website}">Visita nuestra web!</a></button>
            </div>`;
        lista.append(item);
    }
    nodoProductos.appendChild(lista);
}


function ordenarRating(){
    let nodoProductos=document.getElementById("restaurantes");
    nodoProductos.innerHTML="";
    let lista=document.createElement("div");
    const ordenados=restaurantes.sort(function(a,b){
        return a.rating-b.rating
    })
    for(let i=0;i<ordenados.length;i++){
        let item=document.createElement("div");
            item.innerHTML=`<div class="restaurante">
            <div><img src="${ordenados[i].img}"></div>
            <div><h3>${ordenados[i].name}</h3></div>
            <div>${`Email: `+ordenados[i].contact.email}</div>
            <div>${`Phone: `+ordenados[i].contact.phone}</div>
            <div>${`Adress: `+ordenados[i].adress.street}</div>
            <div>${`City: `+ordenados[i].adress.city}</div>
            <div>${`State: `+ordenados[i].adress.state}</div>
            <div>${`Rating: `+ordenados[i].rating}</div>
            <button><a href="${ordenados[i].contact.website}">Visita nuestra web!</a></button>
            </div>`;
        lista.append(item);
    }
    nodoProductos.appendChild(lista);
}


function init(){
    listarProductos("Alta")
    restaurantesOrdenados(restaurantes)
}

function listarCategorias(){
    let nodoCategorias=document.getElementById("categorias");
    let contenido="<ul>";
    let i=0;
    while (i<categorias.length){
        contenido+=`<li onclick="listarProductos(${categorias[i]})">${categorias[i]}</li>`;
        i++;
    }
    contenido+="</ul>"
    nodoCategorias.innerHTML=contenido;
}

function listarProductos(){
    let nodoProductos=document.getElementById("restaurantes");
    nodoProductos.innerHTML="";
    let lista=document.createElement("div");
    for(let i=0;i<restaurantes.length;i++){
        let item=document.createElement("div");
            item.innerHTML=`<div class="restaurante">
            <div><img src="${restaurantes[i].img}"></div>
            <div><h3>${restaurantes[i].name}</h3></div>
            <div>${`Email: `+restaurantes[i].contact.email}</div>
            <div>${`Phone: `+restaurantes[i].contact.phone}</div>
            <div>${`Adress: `+restaurantes[i].adress.street}</div>
            <div>${`City: `+restaurantes[i].adress.city}</div>
            <div>${`State: `+restaurantes[i].adress.state}</div>
            <div>${`Rating: `+restaurantes[i].rating}</div>
            <button><a href="${restaurantes[i].contact.website}">Visita nuestra web!</a></button>
            </div>`;
        lista.append(item);
    }
    nodoProductos.appendChild(lista);
    
}

