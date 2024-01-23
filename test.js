$.get('data.json' ,function (data){
    
    const cat= $('#cat')
    for(i=0 ; i<6 ;i++){
        const elem = document.createElement('div')
        elem.className= 'col-12 col-sm-6 col-lg-4 p-0 d-flex justify-content-center p-0 m-0'
       
        
        

        const img =document.createElement('img')
        img.src =data.categorie[i].image
        img.className='img-thumbnail  mt-3 image-hover-effect'
        
        const lien =document.createElement('a')
        lien.href = "categorie.html"
        lien.className='image-container'
        lien.append(img)
        
        const p = document.createElement('p')
        p.className='image-text'
        p.textContent=data.categorie[i].libelle

       

        lien.appendChild(img);
        cat.append(elem)
        elem.append(lien)
        lien.append(p)
        
    }
    



    const plat = $('#plat');

    for (let i = 0; i < 2; i++) {
        const card = document.createElement('div');
        card.className = "card col-sm-8 col-10";
    
        const cardBody = document.createElement('div');
        cardBody.className = "card-body d-flex";
    
        const imgCard = document.createElement('img');
        imgCard.src = data.plat[i].image;
        imgCard.className = "img-fluid rounded-start col-6"; // Adjust the col-6 as needed
    
        const textContent = document.createElement('div');
        textContent.className = "col-6"; // Takes up the remaining space
    
        const pTitle = document.createElement('p');
        pTitle.textContent = data.plat[i].libelle;
    
        const pDesc = document.createElement('p');
        pDesc.textContent = data.plat[i].description;
    
        plat.append(card);
        card.append(cardBody);
        cardBody.append(imgCard);
        cardBody.append(textContent);
        textContent.append(pTitle);
        textContent.append(pDesc);
    }
    
    

})