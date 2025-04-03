// Main JavaScript for Cambridge Movers Animations

document.addEventListener('DOMContentLoaded', function() {
    // Initialize preview animations for topic cards
    initializePreviewAnimations();
    
    // Add smooth scrolling for navigation links
    addSmoothScrolling();
});

// Function to initialize preview animations in topic cards
function initializePreviewAnimations() {
    // Comparatives preview animation
    const comparativesContainer = document.querySelector('#comparatives .animation-container');
    if (comparativesContainer) {
        createComparativesPreview(comparativesContainer);
    }
    
    // Animals preview animation
    const animalsContainer = document.querySelector('#animals .animation-container');
    if (animalsContainer) {
        createAnimalsPreview(animalsContainer);
    }
    
    // Initialize other preview animations as they are developed
    // These will be simple versions of the full animations
}

// Create a simple preview animation for comparatives
function createComparativesPreview(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 300 200">
            <!-- Background -->
            <rect width="300" height="200" fill="#e6f7ff" />
            
            <!-- Small house -->
            <g class="small-house" transform="translate(50, 120) scale(0.6)">
                <rect width="80" height="60" fill="#ffcccc" />
                <polygon points="0,0 80,0 40,-40" fill="#ff6666" />
                <rect x="30" y="30" width="20" height="30" fill="#663300" />
            </g>
            
            <!-- Big house -->
            <g class="big-house" transform="translate(170, 100)">
                <rect width="80" height="60" fill="#ffcccc" />
                <polygon points="0,0 80,0 40,-40" fill="#ff6666" />
                <rect x="30" y="30" width="20" height="30" fill="#663300" />
            </g>
            
            <!-- Text -->
            <text x="150" y="30" text-anchor="middle" font-size="16" fill="#333">Comparatives</text>
            <text x="70" y="90" text-anchor="middle" font-size="12" fill="#333">small</text>
            <text x="210" y="70" text-anchor="middle" font-size="12" fill="#333">big</text>
            <text x="150" y="180" text-anchor="middle" font-size="14" fill="#333" class="comparative-text">bigger than</text>
        </svg>
    `;
    
    // Add simple animation
    const comparativeText = container.querySelector('.comparative-text');
    setInterval(() => {
        comparativeText.style.fill = comparativeText.style.fill === 'red' ? '#333' : 'red';
    }, 1000);
}

// Create a simple preview animation for animals
function createAnimalsPreview(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 300 200">
            <!-- Background -->
            <rect width="300" height="200" fill="#e8f5e9" />
            
            <!-- Dog -->
            <g class="dog" transform="translate(50, 120)">
                <ellipse cx="25" cy="10" rx="25" ry="15" fill="#a97c50" />
                <circle cx="45" cy="5" r="10" fill="#a97c50" />
                <circle cx="48" cy="2" r="2" fill="black" />
                <ellipse cx="40" cy="8" rx="2" ry="4" fill="black" />
                <rect x="0" y="10" width="5" height="20" fill="#a97c50" />
                <rect x="45" y="10" width="5" height="20" fill="#a97c50" />
            </g>
            
            <!-- Cat -->
            <g class="cat" transform="translate(170, 120)">
                <ellipse cx="25" cy="10" rx="20" ry="12" fill="#808080" />
                <circle cx="40" cy="5" r="8" fill="#808080" />
                <polygon points="45,0 50,5 45,10" fill="#808080" />
                <polygon points="35,0 40,5 35,10" fill="#808080" />
                <circle cx="43" cy="3" r="1.5" fill="black" />
                <ellipse cx="38" cy="7" rx="1.5" ry="3" fill="black" />
                <rect x="10" y="10" width="4" height="15" fill="#808080" />
                <rect x="35" y="10" width="4" height="15" fill="#808080" />
            </g>
            
            <!-- Text -->
            <text x="150" y="30" text-anchor="middle" font-size="16" fill="#333">Animals</text>
            <text x="75" y="160" text-anchor="middle" font-size="14" fill="#333">dog</text>
            <text x="195" y="160" text-anchor="middle" font-size="14" fill="#333">cat</text>
        </svg>
    `;
    
    // Add simple animation
    const dog = container.querySelector('.dog');
    const cat = container.querySelector('.cat');
    
    let dogDirection = 1;
    let catDirection = -1;
    
    setInterval(() => {
        const dogTransform = dog.getAttribute('transform');
        const dogX = parseInt(dogTransform.split('(')[1].split(',')[0]) + (dogDirection * 2);
        
        const catTransform = cat.getAttribute('transform');
        const catX = parseInt(catTransform.split('(')[1].split(',')[0]) + (catDirection * 2);
        
        if (dogX > 100 || dogX < 50) dogDirection *= -1;
        if (catX > 170 || catX < 120) catDirection *= -1;
        
        dog.setAttribute('transform', `translate(${dogX}, 120)`);
        cat.setAttribute('transform', `translate(${catX}, 120)`);
    }, 100);
}

// Add smooth scrolling for navigation links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
