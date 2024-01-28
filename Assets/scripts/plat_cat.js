$(document).ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const categoryId = urlParams.get('id');
    console.log(categoryId);

    const title_cat_plat = $('#title');
    const plats_cat = $('#plats');

    $.get('Assets/json/data.json', function(data) {
        const plats = data.plat.filter(plat => plat.id_categorie == categoryId);

        plats.forEach(plat => {
            title_cat_plat.html(plat);

            const elem_plat = document.createElement('div');
            elem_plat.className = "card col-10 col-md-8";

            const img_plat = document.createElement('img');
            img_plat.src = plat.image;
            img_plat.className = "img-fluid";

            const text_plat = document.createElement('div');
            text_plat.className = "card-body";

            const title_plat = document.createElement('p');
            title_plat.textContent = plat.libelle;

            const desc_plat = document.createElement('p');
            desc_plat.textContent = plat.description;

            const btn = document.createElement('a');
            btn.href = "commande.html?id=" + plat.id_plat;
            btn.className = 'btn mb-2';
            btn.textContent = 'Commander';

            plats_cat.append(elem_plat);
            elem_plat.append(img_plat, text_plat);
            text_plat.append(title_plat, desc_plat);
            text_plat.append(btn);
        });

        console.log(plats);
    });
});
