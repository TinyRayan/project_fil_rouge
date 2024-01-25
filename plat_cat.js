// ---Plat_Burger---//


$(document).ready(function() {


    const burger = $('#burgers')
 
$.get('data.json', function (data){
    
    const plats = data.plat.filter(plat => plat.id_categorie == 5);


   
    plats.forEach(plat =>{


    const elem_burger = document.createElement('div');
    elem_burger.className = "card col-10 col-md-8 "
    const img_burger = document.createElement('img');
    img_burger.src = plat.image;

    



    burger.append(elem_burger)
    elem_burger.append(img_burger)


    })

console.log(plats)

});





});
