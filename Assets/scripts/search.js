$(document).ready(function () {


    const recherche = document.querySelector('#searchInput')
    console.log(recherche);
    recherche.addEventListener('keydown', function () {

        var saisieUtilisateur = document.querySelector("#searchInput").value;


        //console.log("L'utilisateur a saisi : " + saisieUtilisateur);
        $.get('Assets/json/data.json', function (data) {

            const plats = data.plat.filter(plat => plat.libelle.toLowerCase().includes(saisieUtilisateur))

            console.log(plats);

            const list = document.querySelector('#results')

            list.innerHTML = '';
            plats.forEach(plat => {

                const listTitle = document.createElement('a')
                listTitle.href = "commande.php?id=" + plat.id_plat
                listTitle.textContent = plat.libelle


                const listImg = document.createElement('img')
                listImg.className = "img-fluid"
                listImg.src = plat.image


                list.append(listTitle)
                listtitle.appendChild(listImg)
            })

        })


    });



});


