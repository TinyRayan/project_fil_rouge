$(document).ready(function() {


    const recherche = document.querySelector('#searchInput')
    console.log(recherche);
    recherche.addEventListener('keydown', function () {
    
        var saisieUtilisateur = document.querySelector("#searchInput").value;

        
        //console.log("L'utilisateur a saisi : " + saisieUtilisateur);
        $.get('Assets/json/data.json', function(data){

            const plats = data.plat.filter(plat => plat.libelle.toLowerCase().includes(saisieUtilisateur))
                
            console.log(plats);
          
            const list =document.querySelector('#results')


                plats.forEach(plat => {

                    const listtitle = document.createElement('a')
                    listtitle.href="commande.php?id="+plat.id_plat
                    listtitle.textContent= plat.libelle


                    const listimg = document.createElement('img')
                    listimg.className = "img-fluid"
                    listimg.src = plat.image


                    list.append(listtitle)
                    listtitle.appendChild(listimg)
                })
          
        })


        });
   
 

});


