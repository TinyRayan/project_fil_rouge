
$(document).ready(function() {
    // Charger le fichier JSON
    $.getJSON('data.json', function(data) {
      // Gérer l'événement de saisie dans le champ de recherche
      $('#search-input').on('input', function() {
        var searchTerm = $(this).val().toLowerCase();
        var results = [];
  
        // Filtrer les catégories
        data.categorie.forEach(function(categorie) {
          if (categorie.libelle.toLowerCase().includes(searchTerm)) {
            results.push(categorie);
          }
        });
  
        // Filtrer les plats
        data.plat.forEach(function(plat) {
          if (plat.libelle.toLowerCase().includes(searchTerm) || plat.description.toLowerCase().includes(searchTerm)) {
            results.push(plat);
          }
        });
  
        // Afficher les résultats
        displayResults(results);
      });
    });
  
    // Fonction pour afficher les résultats
    function displayResults(results) {
      var resultsContainer = $('#results-container');
      resultsContainer.empty();
  
      if (results.length === 0) {
        resultsContainer.hide();
      } else {
        results.forEach(function(result) {
          var resultHtml = '<div>';
          resultHtml += '<h3>' + result.libelle + '</h3>';
          resultHtml += '<p>' + result.description + '</p>';
          // Ajouter d'autres informations à afficher, selon vos besoins
          resultHtml += '</div>';
          resultsContainer.append(resultHtml);
        });
  
        resultsContainer.show();
      }
    }
  
    // Gérer la sélection d'un résultat
    $(document).on('click', '#results-container div', function() {
      var selectedResult = $(this).find('h3').text();
      $('#search-input').val(selectedResult);
      
      // Rediriger l'utilisateur vers la section sélectionnée
      var selectedElementId = selectedResult.toLowerCase().replace(/\s/g, '-');
      window.location.href = '#selected-element';
      
      // Vous pouvez également remplir la carte avec les détails de l'élément sélectionné ici
      // Exemple: $('#selected-element').html('<h3>' + selectedResult + '</h3><p>Description de l\'élément</p>');
    });
  
    // Masquer le menu déroulant lorsque l'utilisateur clique en dehors de la zone de résultats
    $(document).on('click', function(e) {
      if (!$(e.target).closest('#results-container, #search-input').length) {
        $('#results-container').hide();
      }
    });
  });
  
  
 




//   commande //

// test
function search() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
  
    fetch('data.json')
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
  }
  