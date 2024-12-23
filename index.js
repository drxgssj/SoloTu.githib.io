document.getElementById('openButton').addEventListener('click', function() {
    var button = this;
    var card = document.getElementById('card');
    
    button.style.transform = 'scale(0)';
    setTimeout(function() {
        button.style.display = 'none';
        card.style.display = 'flex';
        card.classList.add('show');
    }, 500); // Duración de la animación
});
