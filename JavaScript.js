//-----------------------CAT & PLATS ACCUEIL----------------------------//

$(document).ready(function(){



$.get('data.json' ,function (data){
    
  const catindex= $('#catindex')
  for(i=0 ; i<6 ;i++){
      const elem = document.createElement('div')
      elem.className= 'col-12 col-md-6 col-lg-4 p-0 d-flex justify-content-center p-0 m-0'
     
      
      

      const img =document.createElement('img')
      img.src =data.categorie[i].image
      img.className='img-thumbnail  mt-3 image-hover-effect'
      
  
    

      const lien =document.createElement('a')
      lien.href = "plat_cat.html?id="+data.categorie[i].id_categorie
      lien.className='image-container'
      lien.append(img)
      
      const p = document.createElement('p')
      p.className='image-text'
      p.textContent=data.categorie[i].libelle

        
    




      lien.appendChild(img);
      catindex.append(elem)
      elem.append(lien)
      lien.append(p)
      
  }
  




  const platindex = $('#platindex');

  for (let i = 0; i <2 ; i++) {
      const card = document.createElement('div');
      card.className = "card col-8 col-md-10";
  
      const cardBody = document.createElement('div');
      cardBody.className = "card-body d-flex m-0 p-0";
  
      const imgCard = document.createElement('img');
      imgCard.src = data.plat[i].image;
      imgCard.className = "img-fluid rounded-start col-12  col-md-4"; 
  
      const textContent = document.createElement('div');
      textContent.className = "text d-none d-md-block"; 
  
      const pTitle = document.createElement('p');
      pTitle.textContent = data.plat[i].libelle;
      pTitle.className ="d-none d-md-flex justify-content-center "; 
      
      const pDesc = document.createElement('p');
      pDesc.textContent = data.plat[i].description;
      pDesc.className ="d-none d-md-flex justify-content-center";  
      
      const title = document.createElement('p')
      title.className='image-text d-block d-md-none'
      title.textContent=data.categorie[i].libelle
  
      platindex.append(card);
      card.append(cardBody);
      cardBody.append(imgCard);
      cardBody.append(textContent);
      textContent.append(pTitle);
      textContent.append(pDesc);
      card.append(title);
  }
  
  

})


//-----------------PAGE DES PLATS---------------------//


$.get('data.json', function (data) {
  const plat = $('#plat');
  const cardsPerPage = 4;
  let currentPage = 1;

  function renderCards(startIndex, endIndex) {
    plat.empty();

    for (let i = startIndex; i < endIndex; i++) {
      if (i >= data.plat.length) {
        break;
      }

      const card = document.createElement('div');
      card.className = 'card col-sm-8 col-10  ';

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body p-0 row ';

      const imgCard = document.createElement('img');
      imgCard.src = data.plat[i].image;
      imgCard.className = 'img-fluid p-0 col-12 col-md-5';
      imgCard.alt =data.plat[i].libelle

      const textContent = document.createElement('div');
      textContent.className = "col-12 col-md-7"
      

      const pTitle = document.createElement('p');
      pTitle.textContent = data.plat[i].libelle;
      pTitle.className = "d-flex justify-content-center card-title"

      const pDesc = document.createElement('p');
      pDesc.textContent = data.plat[i].description;
      pDesc.className = ("card-text")

      const priceAndBtn = document.createElement('div');
      priceAndBtn.className = 'd-flex';

      const pprice = document.createElement('p');
      pprice.textContent = data.plat[i].prix + '€';
      pprice.className = 'col-6 card-price';

      const btn = document.createElement('a');
      btn.className = 'btn mb-2';
      btn.textContent = 'Commander';

      plat.append(card);
      card.append(cardBody);
      cardBody.append(imgCard);
      cardBody.append(textContent);
      textContent.append(pTitle);
      textContent.append(pDesc);
      textContent.append(priceAndBtn);
      priceAndBtn.append(pprice);
      priceAndBtn.append(btn);
    }
  }

  function updatePageButtons() {
    const totalPages = Math.ceil(data.plat.length / cardsPerPage);
    $('#prev-btn').prop('disabled', currentPage === 1);
    $('#next-btn').prop('disabled', currentPage === totalPages);
  }

  $('#prev-btn').on('click', function () {
    if (currentPage > 1) {
      currentPage--;
      renderCards((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);
      updatePageButtons();
    }
  });

  $('#next-btn').on('click', function () {
    const totalPages = Math.ceil(data.plat.length / cardsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderCards((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);
      updatePageButtons();
    }
  });

  renderCards(0, cardsPerPage);
  updatePageButtons();
});













//---------------PAGE CAT----------------


$.get('data.json', function (data) {
  const  cat= $('#cat');
  const cardsPerPage = 4;
  let currentPage = 1;

  function renderCards(startIndex, endIndex) {
    cat.empty();

    for (let i = startIndex; i < endIndex; i++) {
      if (i >= data.categorie.length) {
        break;
      }
      const card = document.createElement('div');
      card.className = "card col-10 col-md-8 mx-auto mt-4 m-0";
  
      const cardBody = document.createElement('div');
      cardBody.className = "card-body d-flex p-0";
  
      const imgCard = document.createElement('img');
      imgCard.src = data.categorie[i].image;
      imgCard.className = "img-fluid rounded-start col-12 col-md-4 "; 
  
      const textContent = document.createElement('div');
      textContent.className = "text"; 
  
      const pTitle = document.createElement('p');
      pTitle.textContent = data.categorie[i].libelle;
      pTitle.className = "d-none d-md-flex justify-content-center card-title"
  
      const pDesc = document.createElement('p');
      pDesc.textContent = data.categorie[i].description;
      pDesc.className = "card-text d-none d-md-block"

      const title = document.createElement('p')
      title.className='image-text d-block d-md-none'
      title.textContent=data.categorie[i].libelle
  
      cat.append(card);
      card.append(cardBody);
      cardBody.append(imgCard);
      cardBody.append(textContent);
      textContent.append(pTitle);
      textContent.append(pDesc);
      card.append(title);
  }
     
    
  }

  function updatePageButtons() {
    const totalPages = Math.ceil(data.categorie.length / cardsPerPage);
    $('#prev-btn').prop('disabled', currentPage === 1);
    $('#next-btn').prop('disabled', currentPage === totalPages);
  }

  $('#prev-btn').on('click', function () {
    if (currentPage > 1) {
      currentPage--;
      renderCards((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);
      updatePageButtons();
    }
  });

  $('#next-btn').on('click', function () {
    const totalPages = Math.ceil(data.categorie.length / cardsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderCards((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);
      updatePageButtons();
    }
  });

  renderCards(0, cardsPerPage);
  updatePageButtons();
});




});

























