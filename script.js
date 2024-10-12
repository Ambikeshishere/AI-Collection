document.addEventListener('DOMContentLoaded', function() {
    let tabLinks = document.querySelectorAll('.tab-link');
    let tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let tabId = this.getAttribute('data-tab');

            tabContents.forEach(function(content) {
                content.classList.remove('active');
            });

            document.getElementById(tabId).classList.add('active');
        });
    });

    document.getElementById('search-bar').addEventListener('keyup', function() {
        let input = this.value.toLowerCase();
        let items = document.querySelectorAll('#search-results li');
        
        items.forEach(function(item) {
            if (item.textContent.toLowerCase().includes(input)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Sample data for search results
    let searchResults = ['AI Chatbot', 'Image Recognition', 'Text Analysis', 'Speech to Text', 'Machine Translation'];
    let resultsContainer = document.getElementById('search-results');

    searchResults.forEach(function(result) {
        let li = document.createElement('li');
        li.textContent = result;
        resultsContainer.appendChild(li);
    });
});
