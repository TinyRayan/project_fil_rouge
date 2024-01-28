
//     function userInput() {
    
//     var saisieUtilisateur = document.querySelector("#searchInput").value;

    
//     console.log("L'utilisateur a saisi : " + saisieUtilisateur);
// }$(document).ready(function() {
    
//  $.get('data.json', function(data){

   
//     const plats = data.plat.filter(plat => plat.active === 'Yes');




//  console.log(plats)








// });



 

// });


document.addEventListener('click', function(event) {
    const resultsContainer = document.getElementById('results');
    const isClickInsideResults = resultsContainer.contains(event.target);
  
    if (!isClickInsideResults) {
        // Cacher la barre de résultats avec une transition
        resultsContainer.style.opacity = '0';
        setTimeout(() => {
            resultsContainer.style.display = 'none';
        }, 300); // Ajustez la durée de la transition en millisecondes selon vos besoins
    }
  });
  
  function search() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const resultsContainer = document.getElementById('results');
  
    resultsContainer.style.backgroundColor = 'grey';
    resultsContainer.style.border = '1px solid #ccc';
  
    // Ajout d'un style pour permettre le défilement
    resultsContainer.style.overflowY = 'auto';
    resultsContainer.style.maxHeight = '300px';  // Ajustez la hauteur maximale selon vos besoins
  
    resultsContainer.innerHTML = '';
  
    fetch('Assets/json/data.json')
        .then(response => response.json())
        .then(data => {
            data.plat.forEach(item => {
                if (item.libelle.toUpperCase().includes(filter) || item.description.toUpperCase().includes(filter)) {
                    const resultDiv = document.createElement('div');
                    resultDiv.innerHTML = `<h3>${item.libelle}</h3><p>${item.description}</p><p>Prix: ${item.prix} €</p><img src="${item.image}" alt="${item.libelle}" width="100">`;
                    resultsContainer.appendChild(resultDiv);
                }
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
  
    // Afficher la barre de résultats avec une transition
    resultsContainer.style.display = 'block';
    setTimeout(() => {
        resultsContainer.style.opacity = '1';
    }, 10); // Ajoutez une petite temporisation pour permettre la transition
  }
  