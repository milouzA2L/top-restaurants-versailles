// JavaScript pour ajouter des interactions et animations

document.addEventListener('DOMContentLoaded', () => {
    // Animation pour les cartes de restaurants au scroll
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    
    // Fonction pour vérifier si un élément est visible dans le viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Fonction pour ajouter une classe lorsque l'élément est visible
    function handleScroll() {
        restaurantCards.forEach(card => {
            if (isElementInViewport(card)) {
                card.classList.add('visible');
            }
        });
    }
    
    // Écouteur d'événement pour le scroll
    window.addEventListener('scroll', handleScroll);
    // Vérifier les éléments visibles au chargement initial
    handleScroll();
    
    // Animation du bouton de réservation
    const reservationButtons = document.querySelectorAll('.restaurant-button');
    
    reservationButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
        
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('La réservation sera bientôt disponible!');
        });
    });
    
    // Filtrage des restaurants (fonctionnalité future)
    const filterButtons = document.querySelectorAll('.filter-button');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filterValue = button.getAttribute('data-filter');
                
                // Réinitialiser tous les boutons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Activer le bouton cliqué
                button.classList.add('active');
                
                // Filtrer les restaurants
                restaurantCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                    } else {
                        const tags = card.querySelectorAll('.restaurant-tag');
                        let hasTag = false;
                        
                        tags.forEach(tag => {
                            if (tag.textContent.toLowerCase().includes(filterValue.toLowerCase())) {
                                hasTag = true;
                            }
                        });
                        
                        card.style.display = hasTag ? 'block' : 'none';
                    }
                });
            });
        });
    }
});