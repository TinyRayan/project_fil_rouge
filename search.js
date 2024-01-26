$(document).ready(function() {
   
    $('data.json',function(data) {

    
        
        function search() {
            // Get the input value
            var searchQuery = document.getElementById('searchInput').value.toLowerCase();

            // Filter the JSON data based on the search query
            var results = jsonData.filter(function (item) {
                return item.libelle.toLowerCase().includes(searchQuery) ||
                    item.description.toLowerCase().includes(searchQuery);
            });

            // Display the results
            displayResults(results);
        }

        function displayResults(results) {
            var resultContainer = document.getElementById('resultContainer');
            resultContainer.innerHTML = ''; // Clear previous results

            if (results.length === 0) {
                resultContainer.innerHTML = '<p>No results found.</p>';
                return;
            }

            // Create HTML for each result
            results.forEach(function (item) {
                var resultDiv = document.createElement('div');
                resultDiv.innerHTML = '<h3>' + item.libelle + '</h3>' +
                    '<p>' + item.description + '</p>' +
                    '<p>Price: ' + item.prix + '</p>' +
                    '<img src="' + item.image + '" alt="' + item.libelle + '" style="max-width: 100px; max-height: 100px;">';
                resultContainer.appendChild(resultDiv);
            });

    
    
        }
    
    
    });
    
});