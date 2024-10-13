function filterTools() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const toolsContainer = document.getElementById('tools-container');
    const cards = toolsContainer.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const title = card.textContent || card.innerText;
        if (title.toLowerCase().indexOf(searchInput) > -1) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    }
}
