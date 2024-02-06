$(document).ready(function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const categoryId = urlParams.get('id');
    console.log(categoryId);

    const title_cat = $('#title');
    const desccat_plat= $('#desc-cat')
    const plats_cat = $('#plats');


    $.get('Assets/json/data.json', function (data) {

        const category = data.categorie.find(cat => cat.id_categorie == categoryId);
        
        const libellecat = category.libelle;
        const title_catplat = document.createElement('h3');
        title_catplat.textContent= libellecat
        title_cat.append(title_catplat)
        
        const desccat=category.description
        const pcat = document.createElement('h5');
        pcat.textContent=desccat
        desccat_plat.append(pcat)
    

        const plats = data.plat.filter(plat => plat.id_categorie == categoryId);

        plats.forEach(plat => {
            
         
            const card = document.createElement('div');
            card.className = 'card col-sm-8 col-10  ';

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body p-0 row ';

            const imgCard = document.createElement('img');
            imgCard.src = plat.image;
            imgCard.className = 'img-fluid p-0 col-12 col-md-5 ';
            imgCard.alt = plat.libelle

            const textContent = document.createElement('div');
            textContent.className = "col-12 col-md-7 p-0 m-0"


            const pTitle = document.createElement('p');
            pTitle.textContent = plat.libelle;
            pTitle.className = "d-flex justify-content-center card-title"

            const pDesc = document.createElement('p');
            pDesc.textContent = plat.description;
            pDesc.className = "card-text"

            const priceAndBtn = document.createElement('div');
            priceAndBtn.className = 'd-flex';

            const pprice = document.createElement('p');
            pprice.textContent = plat.prix + '€';
            pprice.className = 'col-6 card-price';

            const btn = document.createElement('a');
            btn.href = "commande.php?id=" + plat.id_plat
            btn.className = 'btn btn-card mb-2';
            btn.textContent = 'Commander';

            plats_cat.append(card);
            card.append(cardBody);
            cardBody.append(imgCard);
            cardBody.append(textContent);
            textContent.append(pTitle, pDesc, pprice, priceAndBtn);

            priceAndBtn.append(btn);
        });

        console.log(plats);
        console.log(libellecat)
    });
});
