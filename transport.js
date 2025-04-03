// JavaScript for Transport Animation

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the introduction animation
    initIntroAnimation();
    
    // Initialize the main interactive animation
    initMainAnimation();
    
    // Initialize practice activities
    initPracticeActivities();
    
    // Set up navigation controls
    setupControls();
});

// Function to initialize the introduction animation
function initIntroAnimation() {
    const container = document.getElementById('intro-animation');
    if (!container) return;
    
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 400 300">
            <!-- Background -->
            <rect width="400" height="300" fill="#e8f5e9" />
            
            <!-- Road -->
            <rect x="0" y="200" width="400" height="50" fill="#90a4ae" />
            <line x1="20" y1="225" x2="60" y2="225" stroke="white" stroke-width="4" stroke-dasharray="10,10" />
            <line x1="80" y1="225" x2="120" y2="225" stroke="white" stroke-width="4" stroke-dasharray="10,10" />
            <line x1="140" y1="225" x2="180" y2="225" stroke="white" stroke-width="4" stroke-dasharray="10,10" />
            <line x1="200" y1="225" x2="240" y2="225" stroke="white" stroke-width="4" stroke-dasharray="10,10" />
            <line x1="260" y1="225" x2="300" y2="225" stroke="white" stroke-width="4" stroke-dasharray="10,10" />
            <line x1="320" y1="225" x2="360" y2="225" stroke="white" stroke-width="4" stroke-dasharray="10,10" />
            <line x1="380" y1="225" x2="400" y2="225" stroke="white" stroke-width="4" stroke-dasharray="10,10" />
            
            <!-- Rail -->
            <rect x="0" y="150" width="400" height="10" fill="#5d4037" />
            <rect x="0" y="170" width="400" height="10" fill="#5d4037" />
            <line x1="20" y1="150" x2="20" y2="180" stroke="#5d4037" stroke-width="4" />
            <line x1="60" y1="150" x2="60" y2="180" stroke="#5d4037" stroke-width="4" />
            <line x1="100" y1="150" x2="100" y2="180" stroke="#5d4037" stroke-width="4" />
            <line x1="140" y1="150" x2="140" y2="180" stroke="#5d4037" stroke-width="4" />
            <line x1="180" y1="150" x2="180" y2="180" stroke="#5d4037" stroke-width="4" />
            <line x1="220" y1="150" x2="220" y2="180" stroke="#5d4037" stroke-width="4" />
            <line x1="260" y1="150" x2="260" y2="180" stroke="#5d4037" stroke-width="4" />
            <line x1="300" y1="150" x2="300" y2="180" stroke="#5d4037" stroke-width="4" />
            <line x1="340" y1="150" x2="340" y2="180" stroke="#5d4037" stroke-width="4" />
            <line x1="380" y1="150" x2="380" y2="180" stroke="#5d4037" stroke-width="4" />
            
            <!-- Sky -->
            <rect x="0" y="0" width="400" height="100" fill="#bbdefb" />
            
            <!-- Water -->
            <rect x="0" y="250" width="400" height="50" fill="#81d4fa" />
            <path d="M 10,270 Q 20,260 30,270 Q 40,280 50,270 Q 60,260 70,270 Q 80,280 90,270" fill="none" stroke="#4fc3f7" stroke-width="2" />
            <path d="M 110,270 Q 120,260 130,270 Q 140,280 150,270 Q 160,260 170,270 Q 180,280 190,270" fill="none" stroke="#4fc3f7" stroke-width="2" />
            <path d="M 210,270 Q 220,260 230,270 Q 240,280 250,270 Q 260,260 270,270 Q 280,280 290,270" fill="none" stroke="#4fc3f7" stroke-width="2" />
            <path d="M 310,270 Q 320,260 330,270 Q 340,280 350,270 Q 360,260 370,270 Q 380,280 390,270" fill="none" stroke="#4fc3f7" stroke-width="2" />
            
            <!-- Car -->
            <g class="car" transform="translate(50, 190)">
                <rect x="0" y="0" width="40" height="15" rx="5" fill="#ef5350" />
                <rect x="5" y="-10" width="30" height="10" rx="3" fill="#ef5350" />
                <circle cx="10" cy="15" r="5" fill="#212121" />
                <circle cx="30" cy="15" r="5" fill="#212121" />
                <rect x="7" y="-7" width="8" height="7" fill="#bbdefb" />
                <rect x="25" y="-7" width="8" height="7" fill="#bbdefb" />
                <text x="20" y="30" text-anchor="middle" font-size="12" fill="#333">Car</text>
            </g>
            
            <!-- Train -->
            <g class="train" transform="translate(150, 140)">
                <rect x="0" y="0" width="50" height="20" rx="3" fill="#5c6bc0" />
                <rect x="50" y="5" width="30" height="15" fill="#5c6bc0" />
                <rect x="5" y="5" width="10" height="10" fill="#bbdefb" />
                <rect x="25" y="5" width="10" height="10" fill="#bbdefb" />
                <circle cx="10" cy="20" r="5" fill="#212121" />
                <circle cx="25" cy="20" r="5" fill="#212121" />
                <circle cx="40" cy="20" r="5" fill="#212121" />
                <circle cx="55" cy="20" r="5" fill="#212121" />
                <circle cx="70" cy="20" r="5" fill="#212121" />
                <text x="40" y="35" text-anchor="middle" font-size="12" fill="#333">Train</text>
            </g>
            
            <!-- Airplane -->
            <g class="airplane" transform="translate(250, 50)">
                <path d="M 0,0 L 50,0 L 60,10 L 50,20 L 0,20 L 10,10 Z" fill="#9e9e9e" />
                <path d="M 20,0 L 20,-10 L 40,-10 L 40,0" fill="#9e9e9e" />
                <path d="M 10,10 L -10,15 L -10,5 Z" fill="#9e9e9e" />
                <path d="M 30,20 L 20,30 L 40,30 L 30,20" fill="#9e9e9e" />
                <rect x="5" y="5" width="5" height="5" rx="1" fill="#bbdefb" />
                <rect x="15" y="5" width="5" height="5" rx="1" fill="#bbdefb" />
                <rect x="25" y="5" width="5" height="5" rx="1" fill="#bbdefb" />
                <rect x="35" y="5" width="5" height="5" rx="1" fill="#bbdefb" />
                <text x="30" y="45" text-anchor="middle" font-size="12" fill="#333">Airplane</text>
            </g>
            
            <!-- Boat -->
            <g class="boat" transform="translate(350, 260)">
                <path d="M -30,0 L 0,-15 L 30,0 Z" fill="#8d6e63" />
                <rect x="-25" y="-30" width="5" height="30" fill="#a1887f" />
                <path d="M -25,-30 L -10,-20 L -25,-10 Z" fill="#d7ccc8" />
                <text x="0" y="15" text-anchor="middle" font-size="12" fill="#333">Boat</text>
            </g>
        </svg>
    `;
}

// Function to initialize the main interactive animation
function initMainAnimation() {
    const container = document.getElementById('main-animation');
    if (!container) return;
    
    // Create scenes array to hold different animation scenes
    window.scenes = [
        createRoadTransportScene,
        createRailTransportScene,
        createAirTransportScene,
        createWaterTransportScene,
        createTransportVerbsScene
    ];
    
    // Initialize with the first scene
    window.currentScene = 0;
    window.scenes[window.currentScene](container);
    
    // Update button states
    updateButtonStates();
}

// Create Scene 1: Road Transport
function createRoadTransportScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e8f5e9" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Road Transport</text>
            
            <!-- Road -->
            <rect x="50" y="250" width="700" height="100" fill="#90a4ae" />
            <line x1="100" y1="300" x2="150" y2="300" stroke="white" stroke-width="5" stroke-dasharray="20,20" />
            <line x1="200" y1="300" x2="250" y2="300" stroke="white" stroke-width="5" stroke-dasharray="20,20" />
            <line x1="300" y1="300" x2="350" y2="300" stroke="white" stroke-width="5" stroke-dasharray="20,20" />
            <line x1="400" y1="300" x2="450" y2="300" stroke="white" stroke-width="5" stroke-dasharray="20,20" />
            <line x1="500" y1="300" x2="550" y2="300" stroke="white" stroke-width="5" stroke-dasharray="20,20" />
            <line x1="600" y1="300" x2="650" y2="300" stroke="white" stroke-width="5" stroke-dasharray="20,20" />
            <line x1="700" y1="300" x2="750" y2="300" stroke="white" stroke-width="5" stroke-dasharray="20,20" />
            
            <!-- Car -->
            <g class="car transport-item" data-transport="car" transform="translate(150, 280)">
                <rect x="0" y="0" width="60" height="25" rx="8" fill="#ef5350" />
                <rect x="10" y="-15" width="40" height="15" rx="5" fill="#ef5350" />
                <circle cx="15" cy="25" r="8" fill="#212121" />
                <circle cx="45" cy="25" r="8" fill="#212121" />
                <rect x="12" y="-10" width="10" height="10" fill="#bbdefb" />
                <rect x="38" y="-10" width="10" height="10" fill="#bbdefb" />
                <text x="30" y="50" text-anchor="middle" font-size="16" fill="#333">Car</text>
            </g>
            
            <!-- Bus -->
            <g class="bus transport-item" data-transport="bus" transform="translate(300, 270)">
                <rect x="0" y="0" width="100" height="35" rx="5" fill="#4caf50" />
                <rect x="5" y="10" width="10" height="10" fill="#bbdefb" />
                <rect x="25" y="10" width="10" height="10" fill="#bbdefb" />
                <rect x="45" y="10" width="10" height="10" fill="#bbdefb" />
                <rect x="65" y="10" width="10" height="10" fill="#bbdefb" />
                <rect x="85" y="10" width="10" height="10" fill="#bbdefb" />
                <circle cx="20" cy="35" r="8" fill="#212121" />
                <circle cx="80" cy="35" r="8" fill="#212121" />
                <text x="50" y="60" text-anchor="middle" font-size="16" fill="#333">Bus</text>
            </g>
            
            <!-- Bicycle -->
            <g class="bicycle transport-item" data-transport="bicycle" transform="translate(500, 290)">
                <circle cx="15" cy="15" r="15" fill="none" stroke="#9c27b0" stroke-width="3" />
                <circle cx="60" cy="15" r="15" fill="none" stroke="#9c27b0" stroke-width="3" />
                <line x1="15" y1="15" x2="40" y2="-10" stroke="#9c27b0" stroke-width="3" />
                <line x1="40" y1="-10" x2="60" y2="15" stroke="#9c27b0" stroke-width="3" />
                <line x1="40" y1="-10" x2="30" y2="-20" stroke="#9c27b0" stroke-width="3" />
                <line x1="15" y1="15" x2="60" y2="15" stroke="#9c27b0" stroke-width="3" />
                <text x="40" y="50" text-anchor="middle" font-size="16" fill="#333">Bicycle</text>
            </g>
            
            <!-- Motorbike -->
            <g class="motorbike transport-item" data-transport="motorbike" transform="translate(650, 290)">
                <circle cx="15" cy="15" r="15" fill="none" stroke="#ff9800" stroke-width="3" />
                <circle cx="60" cy="15" r="15" fill="none" stroke="#ff9800" stroke-width="3" />
                <rect x="15" y="-10" width="45" height="10" fill="#ff9800" />
                <rect x="30" y="-20" width="15" height="10" fill="#ff9800" />
                <line x1="15" y1="15" x2="60" y2="15" stroke="#ff9800" stroke-width="3" />
                <text x="40" y="50" text-anchor="middle" font-size="16" fill="#333">Motorbike</text>
            </g>
            
            <!-- Description box -->
            <rect x="150" y="100" width="500" height="100" rx="10" fill="#e0f2f1" stroke="#26a69a" stroke-width="2" />
            <text x="400" y="130" text-anchor="middle" font-size="18" fill="#333" id="transport-description">
                Click on a vehicle to learn about it
            </text>
            <text x="400" y="170" text-anchor="middle" font-size="16" fill="#333" id="transport-verb">
                Road transport helps us travel on roads and streets
            </text>
        </svg>
    `;
    
    // Add click events for transport items
    const transportItems = container.querySelectorAll('.transport-item');
    const description = container.querySelector('#transport-description');
    const verb = container.querySelector('#transport-verb');
    
    transportItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const transport = this.dataset.transport;
            
            // Reset all items
            transportItems.forEach(t => {
                t.style.transform = '';
            });
            
            // Highlight selected item
            this.style.transform = 'scale(1.1)';
            
            // Update description
            switch(transport) {
                case 'car':
                    description.textContent = 'A car is a road vehicle with four wheels.';
                    verb.textContent = 'We drive a car.';
                    break;
                case 'bus':
                    description.textContent = 'A bus is a large vehicle that carries many passengers.';
                    verb.textContent = 'We catch a bus or take a bus.';
                    break;
                case 'bicycle':
                    description.textContent = 'A bicycle is a vehicle with two wheels that you ride by pushing the pedals.';
                    verb.textContent = 'We ride a bicycle.';
                    break;
                case 'motorbike':
                    description.textContent = 'A motorbike is a two-wheeled vehicle with an engine.';
                    verb.textContent = 'We ride a motorbike.';
                    break;
            }
        });
    });
}

// Create Scene 2: Rail Transport (placeholder)
function createRailTransportScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e8f5e9" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Rail Transport</text>
            
            <!-- Rail tracks -->
            <rect x="50" y="300" width="700" height="10" fill="#5d4037" />
            <rect x="50" y="320" width="700" height="10" fill="#5d4037" />
            <line x1="100" y1="300" x2="100" y2="330" stroke="#5d4037" stroke-width="4" />
            <line x1="150" y1="300" x2="150" y2="330" stroke="#5d4037" stroke-width="4" />
            <line x1="200" y1="300" x2="200" y2="330" stroke="#5d4037" stroke-width="4" />
            <line x1="250" y1="300" x2="250" y2="330" stroke="#5d4037" stroke-width="4" />
            <line x1="300" y1="300" x2="300" y2="330" stroke="#5d4037" stroke-width="4" />
            <line x1="350" y1="300" x2="350" y2="330" stroke="#5d4037" stroke-width="4" />
            <line x1="400" y1="300" x2="400" y2="330" stroke="#5d4037" stroke-width="4" />
            <line x1="450" y1="300" x2="450" y2="330" stroke="#5d4037" stroke-width="4" />
            <line x1="500" y1="300" x2="500" y2="330" stroke="#5d4037" stroke-width="4" />
            <line x1="550" y1="300" x2="550" y2="330" stroke="#5d4037" stroke-width="4" />
            <line x1="600" y1="300" x2="600" y2="330" stroke="#5d4037" stroke-width="4" />
            <line x1="650" y1="300" x2="650" y2="330" stroke="#5d4037" stroke-width="4" />
            <line x1="700" y1="300" x2="700" y2="330" stroke="#5d4037" stroke-width="4" />
            
            <!-- Train -->
            <g class="train transport-item" data-transport="train" transform="translate(200, 280)">
                <rect x="0" y="0" width="80" height="30" rx="5" fill="#5c6bc0" />
                <rect x="80" y="5" width="50" height="25" fill="#5c6bc0" />
                <rect x="130" y="5" width="50" height="25" fill="#5c6bc0" />
                <rect x="10" y="10" width="15" height="10" fill="#bbdefb" />
                <rect x="35" y="10" width="15" height="10" fill="#bbdefb" />
                <rect x="60" y="10" width="15" height="10" fill="#bbdefb" />
                <rect x="95" y="10" width="15" height="10" fill="#bbdefb" />
                <rect x="145" y="10" width="15" height="10" fill="#bbdefb" />
                <circle cx="20" cy="30" r="5" fill="#212121" />
                <circle cx="60" cy="30" r="5" fill="#212121" />
                <circle cx="100" cy="30" r="5" fill="#212121" />
                <circle cx="140" cy="30" r="5" fill="#212121" />
                <text x="90" y="50" text-anchor="middle" font-size="16" fill="#333">Train</text>
            </g>
            
            <!-- Underground/Subway -->
            <g class="underground transport-item" data-transport="underground" transform="translate(500, 280)">
                <rect x="0" y="0" width="100" height="30" rx="10" fill="#e53935" />
                <rect x="10" y="10" width="15" height="10" fill="#bbdefb" />
                <rect x="35" y="10" width="15" height="10" fill="#bbdefb" />
                <rect x="60" y="10" width="15" height="10" fill="#bbdefb" />
                <rect x="85" y="10" width="15" height="10" fill="#bbdefb" />
                <circle cx="25" cy="30" r="5" fill="#212121" />
                <circle cx="75" cy="30" r="5" fill="#212121" />
                <text x="50" y="50" text-anchor="middle" font-size="16" fill="#333">Underground</text>
            </g>
            
            <!-- Description box -->
            <rect x="150" y="100" width="500" height="100" rx="10" fill="#e0f2f1" stroke="#26a69a" stroke-width="2" />
            <text x="400" y="130" text-anchor="middle" font-size="18" fill="#333" id="transport-description">
                Click on a train to learn about it
            </text>
            <text x="400" y="170" text-anchor="middle" font-size="16" fill="#333" id="transport-verb">
                Rail transport runs on tracks
            </text>
        </svg>
    `;
    
    // Add click events for transport items
    const transportItems = container.querySelectorAll('.transport-item');
    const description = container.querySelector('#transport-description');
    const verb = container.querySelector('#transport-verb');
    
    transportItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const transport = this.dataset.transport;
            
            // Reset all items
            transportItems.forEach(t => {
                t.style.transform = '';
            });
            
            // Highlight selected item
            this.style.transform = 'scale(1.1)';
            
            // Update description
            switch(transport) {
                case 'train':
                    description.textContent = 'A train is a connected series of vehicles that runs on railways.';
                    verb.textContent = 'We catch a train or take a train.';
                    break;
                case 'underground':
                    description.textContent = 'An underground or subway is a railway system that runs under the ground in a city.';
                    verb.textContent = 'We take the underground or subway.';
                    break;
            }
        });
    });
}

// Create Scene 3: Air Transport (placeholder)
function createAirTransportScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e8f5e9" />
            
            <!-- Sky -->
            <rect x="0" y="0" width="800" height="300" fill="#bbdefb" />
            
            <!-- Clouds -->
            <ellipse cx="100" cy="100" rx="30" ry="20" fill="white" />
            <ellipse cx="130" cy="100" rx="30" ry="25" fill="white" />
            <ellipse cx="160" cy="100" rx="30" ry="20" fill="white" />
            
            <ellipse cx="600" cy="150" rx="30" ry="20" fill="white" />
            <ellipse cx="630" cy="150" rx="30" ry="25" fill="white" />
            <ellipse cx="660" cy="150" rx="30" ry="20" fill="white" />
            
            <!-- Ground -->
            <rect x="0" y="300" width="800" height="100" fill="#8d6e63" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Air Transport</text>
            
            <!-- Airplane -->
            <g class="airplane transport-item" data-transport="airplane" transform="translate(300, 150)">
                <path d="M 0,0 L 100,0 L 120,20 L 100,40 L 0,40 L 20,20 Z" fill="#9e9e9e" />
                <path d="M 40,0 L 40,-20 L 80,-20 L 80,0" fill="#9e9e9e" />
                <path d="M 20,20 L -20,30 L -20,10 Z" fill="#9e9e9e" />
                <path d="M 60,40 L 40,60 L 80,60 L 60,40" fill="#9e9e9e" />
                <rect x="10" y="10" width="10" height="10" rx="2" fill="#bbdefb" />
                <rect x="30" y="10" width="10" height="10" rx="2" fill="#bbdefb" />
                <rect x="50" y="10" width="10" height="10" rx="2" fill="#bbdefb" />
                <rect x="70" y="10" width="10" height="10" rx="2" fill="#bbdefb" />
                <text x="60" y="80" text-anchor="middle" font-size="16" fill="#333">Airplane</text>
            </g>
            
            <!-- Helicopter -->
            <g class="helicopter transport-item" data-transport="helicopter" transform="translate(600, 200)">
                <rect x="0" y="0" width="60" height="20" rx="5" fill="#607d8b" />
                <rect x="20" y="-10" width="20" height="10" fill="#607d8b" />
                <rect x="60" y="5" width="30" height="5" fill="#607d8b" />
                <line x1="30" y1="-10" x2="30" y2="-30" stroke="#607d8b" stroke-width="3" />
                <line x1="0" y1="-30" x2="60" y2="-30" stroke="#607d8b" stroke-width="3" />
                <rect x="10" y="5" width="10" height="10" rx="2" fill="#bbdefb" />
                <rect x="40" y="5" width="10" height="10" rx="2" fill="#bbdefb" />
                <text x="30" y="40" text-anchor="middle" font-size="16" fill="#333">Helicopter</text>
            </g>
            
            <!-- Description box -->
            <rect x="150" y="300" width="500" height="80" rx="10" fill="#e0f2f1" stroke="#26a69a" stroke-width="2" />
            <text x="400" y="330" text-anchor="middle" font-size="18" fill="#333" id="transport-description">
                Click on an aircraft to learn about it
            </text>
            <text x="400" y="360" text-anchor="middle" font-size="16" fill="#333" id="transport-verb">
                Air transport flies in the sky
            </text>
        </svg>
    `;
    
    // Add click events for transport items
    const transportItems = container.querySelectorAll('.transport-item');
    const description = container.querySelector('#transport-description');
    const verb = container.querySelector('#transport-verb');
    
    transportItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const transport = this.dataset.transport;
            
            // Reset all items
            transportItems.forEach(t => {
                t.style.transform = '';
            });
            
            // Highlight selected item
            this.style.transform = 'scale(1.1)';
            
            // Update description
            switch(transport) {
                case 'airplane':
                    description.textContent = 'An airplane is a vehicle with wings and engines that can fly.';
                    verb.textContent = 'We fly in an airplane.';
                    break;
                case 'helicopter':
                    description.textContent = 'A helicopter is an aircraft with large blades on top that spin to make it fly.';
                    verb.textContent = 'We fly in a helicopter.';
                    break;
            }
        });
    });
}

// Create Scene 4: Water Transport (placeholder)
function createWaterTransportScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e8f5e9" />
            
            <!-- Sky -->
            <rect x="0" y="0" width="800" height="150" fill="#bbdefb" />
            
            <!-- Water -->
            <rect x="0" y="150" width="800" height="250" fill="#81d4fa" />
            <path d="M 0,170 Q 50,160 100,170 Q 150,180 200,170 Q 250,160 300,170 Q 350,180 400,170" fill="none" stroke="#4fc3f7" stroke-width="2" />
            <path d="M 400,170 Q 450,160 500,170 Q 550,180 600,170 Q 650,160 700,170 Q 750,180 800,170" fill="none" stroke="#4fc3f7" stroke-width="2" />
            <path d="M 0,200 Q 50,190 100,200 Q 150,210 200,200 Q 250,190 300,200 Q 350,210 400,200" fill="none" stroke="#4fc3f7" stroke-width="2" />
            <path d="M 400,200 Q 450,190 500,200 Q 550,210 600,200 Q 650,190 700,200 Q 750,210 800,200" fill="none" stroke="#4fc3f7" stroke-width="2" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Water Transport</text>
            
            <!-- Boat -->
            <g class="boat transport-item" data-transport="boat" transform="translate(200, 250)">
                <path d="M -40,0 L 0,-30 L 40,0 Z" fill="#8d6e63" />
                <rect x="-35" y="-60" width="5" height="30" fill="#a1887f" />
                <path d="M -35,-60 L -15,-40 L -35,-20 Z" fill="#d7ccc8" />
                <text x="0" y="20" text-anchor="middle" font-size="16" fill="#333">Boat</text>
            </g>
            
            <!-- Ship -->
            <g class="ship transport-item" data-transport="ship" transform="translate(500, 220)">
                <rect x="-60" y="0" width="120" height="30" rx="5" fill="#546e7a" />
                <rect x="-40" y="-30" width="80" height="30" fill="#78909c" />
                <rect x="-20" y="-60" width="40" height="30" fill="#90a4ae" />
                <rect x="-50" y="10" width="10" height="10" fill="#bbdefb" />
                <rect x="-30" y="10" width="10" height="10" fill="#bbdefb" />
                <rect x="-10" y="10" width="10" height="10" fill="#bbdefb" />
                <rect x="10" y="10" width="10" height="10" fill="#bbdefb" />
                <rect x="30" y="10" width="10" height="10" fill="#bbdefb" />
                <rect x="-30" y="-20" width="10" height="10" fill="#bbdefb" />
                <rect x="-10" y="-20" width="10" height="10" fill="#bbdefb" />
                <rect x="10" y="-20" width="10" height="10" fill="#bbdefb" />
                <rect x="-10" y="-50" width="10" height="10" fill="#bbdefb" />
                <text x="0" y="50" text-anchor="middle" font-size="16" fill="#333">Ship</text>
            </g>
            
            <!-- Description box -->
            <rect x="150" y="300" width="500" height="80" rx="10" fill="#e0f2f1" stroke="#26a69a" stroke-width="2" />
            <text x="400" y="330" text-anchor="middle" font-size="18" fill="#333" id="transport-description">
                Click on a water vehicle to learn about it
            </text>
            <text x="400" y="360" text-anchor="middle" font-size="16" fill="#333" id="transport-verb">
                Water transport moves on water
            </text>
        </svg>
    `;
    
    // Add click events for transport items
    const transportItems = container.querySelectorAll('.transport-item');
    const description = container.querySelector('#transport-description');
    const verb = container.querySelector('#transport-verb');
    
    transportItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const transport = this.dataset.transport;
            
            // Reset all items
            transportItems.forEach(t => {
                t.style.transform = '';
            });
            
            // Highlight selected item
            this.style.transform = 'scale(1.1)';
            
            // Update description
            switch(transport) {
                case 'boat':
                    description.textContent = 'A boat is a small vehicle that travels on water.';
                    verb.textContent = 'We sail on a boat.';
                    break;
                case 'ship':
                    description.textContent = 'A ship is a large boat that can travel on the sea.';
                    verb.textContent = 'We sail on a ship.';
                    break;
            }
        });
    });
}

// Create Scene 5: Transport Verbs (placeholder)
function createTransportVerbsScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e8f5e9" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Transport Verbs</text>
            
            <!-- Verb boxes -->
            <g class="verb-box" transform="translate(150, 100)">
                <rect width="200" height="80" rx="10" fill="#e1bee7" />
                <text x="100" y="35" text-anchor="middle" font-size="18" fill="#333">drive</text>
                <text x="100" y="65" text-anchor="middle" font-size="16" fill="#333">a car, a van, a truck</text>
            </g>
            
            <g class="verb-box" transform="translate(450, 100)">
                <rect width="200" height="80" rx="10" fill="#c5e1a5" />
                <text x="100" y="35" text-anchor="middle" font-size="18" fill="#333">ride</text>
                <text x="100" y="65" text-anchor="middle" font-size="16" fill="#333">a bicycle, a motorbike</text>
            </g>
            
            <g class="verb-box" transform="translate(150, 220)">
                <rect width="200" height="80" rx="10" fill="#bbdefb" />
                <text x="100" y="35" text-anchor="middle" font-size="18" fill="#333">catch / take</text>
                <text x="100" y="65" text-anchor="middle" font-size="16" fill="#333">a bus, a train, a taxi</text>
            </g>
            
            <g class="verb-box" transform="translate(450, 220)">
                <rect width="200" height="80" rx="10" fill="#ffcc80" />
                <text x="100" y="35" text-anchor="middle" font-size="18" fill="#333">fly</text>
                <text x="100" y="65" text-anchor="middle" font-size="16" fill="#333">in an airplane, a helicopter</text>
            </g>
            
            <g class="verb-box" transform="translate(300, 340)">
                <rect width="200" height="40" rx="10" fill="#80deea" />
                <text x="100" y="25" text-anchor="middle" font-size="18" fill="#333">sail on a boat/ship</text>
            </g>
        </svg>
    `;
}

// Function to initialize practice activities
function initPracticeActivities() {
    // Activity 1: Match transport to places
    const activity1 = document.getElementById('activity-1');
    if (activity1) {
        activity1.innerHTML = `
            <div class="matching-transport">
                <p>Match each type of transport to the place where you would find it:</p>
                <div class="transport-matching-game">
                    <div class="transport-places">
                        <div class="transport-place" data-place="road">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#90a4ae" />
                                <line x1="10" y1="40" x2="30" y2="40" stroke="white" stroke-width="3" stroke-dasharray="5,5" />
                                <line x1="40" y1="40" x2="60" y2="40" stroke="white" stroke-width="3" stroke-dasharray="5,5" />
                            </svg>
                            <p>Road</p>
                        </div>
                        <div class="transport-place" data-place="rail">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#f5f5f5" />
                                <rect x="10" y="30" width="60" height="5" fill="#5d4037" />
                                <rect x="10" y="45" width="60" height="5" fill="#5d4037" />
                                <line x1="20" y1="30" x2="20" y2="50" stroke="#5d4037" stroke-width="2" />
                                <line x1="40" y1="30" x2="40" y2="50" stroke="#5d4037" stroke-width="2" />
                                <line x1="60" y1="30" x2="60" y2="50" stroke="#5d4037" stroke-width="2" />
                            </svg>
                            <p>Rail</p>
                        </div>
                        <div class="transport-place" data-place="air">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#bbdefb" />
                                <ellipse cx="20" cy="30" rx="15" ry="10" fill="white" />
                                <ellipse cx="60" cy="20" rx="15" ry="10" fill="white" />
                            </svg>
                            <p>Air</p>
                        </div>
                        <div class="transport-place" data-place="water">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#81d4fa" />
                                <path d="M 10,30 Q 20,20 30,30 Q 40,40 50,30 Q 60,20 70,30" fill="none" stroke="#4fc3f7" stroke-width="2" />
                                <path d="M 10,50 Q 20,40 30,50 Q 40,60 50,50 Q 60,40 70,50" fill="none" stroke="#4fc3f7" stroke-width="2" />
                            </svg>
                            <p>Water</p>
                        </div>
                    </div>
                    
                    <div class="transport-items">
                        <button class="transport-item" data-place="water">Ship</button>
                        <button class="transport-item" data-place="road">Bus</button>
                        <button class="transport-item" data-place="air">Airplane</button>
                        <button class="transport-item" data-place="rail">Train</button>
                    </div>
                </div>
                
                <div class="feedback"></div>
            </div>
            
            <style>
                .matching-transport {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .transport-matching-game {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                
                .transport-places {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .transport-place {
                    text-align: center;
                    border: 2px solid #ccc;
                    border-radius: 10px;
                    padding: 10px;
                }
                
                .transport-place.matched {
                    border-color: #8bc34a;
                    background-color: #f1f8e9;
                }
                
                .transport-items {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .transport-item {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: var(--border-radius);
                    cursor: pointer;
                }
                
                .transport-item.selected {
                    background-color: var(--secondary-color);
                }
                
                .feedback {
                    text-align: center;
                    font-weight: bold;
                    margin-top: 1rem;
                    min-height: 1.5rem;
                }
            </style>
        `;
        
        // Add event listeners for transport matching game
        let selectedItem = null;
        const transportItems = activity1.querySelectorAll('.transport-item');
        const transportPlaces = activity1.querySelectorAll('.transport-place');
        const feedback = activity1.querySelector('.feedback');
        
        transportItems.forEach(item => {
            item.addEventListener('click', function() {
                // Deselect previously selected item
                if (selectedItem) {
                    selectedItem.classList.remove('selected');
                }
                
                // Select this item
                this.classList.add('selected');
                selectedItem = this;
            });
        });
        
        transportPlaces.forEach(place => {
            place.addEventListener('click', function() {
                if (!selectedItem) {
                    feedback.textContent = 'Please select a transport item first!';
                    feedback.style.color = '#f44336';
                    return;
                }
                
                const placeType = this.dataset.place;
                const itemPlace = selectedItem.dataset.place;
                
                if (placeType === itemPlace) {
                    this.classList.add('matched');
                    selectedItem.disabled = true;
                    selectedItem.classList.remove('selected');
                    selectedItem = null;
                    
                    feedback.textContent = 'Correct match!';
                    feedback.style.color = '#8bc34a';
                    
                    // Check if all are matched
                    const matchedPlaces = activity1.querySelectorAll('.transport-place.matched');
                    if (matchedPlaces.length === transportPlaces.length) {
                        feedback.textContent = 'Great job! You matched all the transport items!';
                    }
                } else {
                    feedback.textContent = 'Try again! That\'s not the right match.';
                    feedback.style.color = '#f44336';
                }
            });
        });
    }
    
    // Activity 2: Complete the sentences
    const activity2 = document.getElementById('activity-2');
    if (activity2) {
        activity2.innerHTML = `
            <div class="complete-sentences">
                <p>Complete each sentence with the correct verb:</p>
                
                <div class="sentence-completion">
                    <p>1. We <select class="verb-select" data-answer="drive">
                        <option value="">Choose...</option>
                        <option value="drive">drive</option>
                        <option value="ride">ride</option>
                        <option value="take">take</option>
                        <option value="fly">fly</option>
                        <option value="sail">sail</option>
                    </select> a car to school.</p>
                    
                    <p>2. My brother <select class="verb-select" data-answer="rides">
                        <option value="">Choose...</option>
                        <option value="drives">drives</option>
                        <option value="rides">rides</option>
                        <option value="takes">takes</option>
                        <option value="flies">flies</option>
                        <option value="sails">sails</option>
                    </select> his bicycle every day.</p>
                    
                    <p>3. We <select class="verb-select" data-answer="take">
                        <option value="">Choose...</option>
                        <option value="drive">drive</option>
                        <option value="ride">ride</option>
                        <option value="take">take</option>
                        <option value="fly">fly</option>
                        <option value="sail">sail</option>
                    </select> the bus to the city center.</p>
                    
                    <p>4. They <select class="verb-select" data-answer="fly">
                        <option value="">Choose...</option>
                        <option value="drive">drive</option>
                        <option value="ride">ride</option>
                        <option value="take">take</option>
                        <option value="fly">fly</option>
                        <option value="sail">sail</option>
                    </select> in an airplane to visit their grandparents.</p>
                    
                    <p>5. We <select class="verb-select" data-answer="sail">
                        <option value="">Choose...</option>
                        <option value="drive">drive</option>
                        <option value="ride">ride</option>
                        <option value="take">take</option>
                        <option value="fly">fly</option>
                        <option value="sail">sail</option>
                    </select> on a boat across the lake.</p>
                </div>
                
                <button class="check-answers">Check Answers</button>
                <div class="feedback"></div>
            </div>
            
            <style>
                .complete-sentences p {
                    margin-bottom: 1rem;
                    font-size: 1.1rem;
                }
                
                .verb-select {
                    padding: 5px;
                    border: 2px solid #ccc;
                    border-radius: 5px;
                    font-size: 1rem;
                }
                
                .verb-select.correct {
                    border-color: #8bc34a;
                    background-color: #f1f8e9;
                }
                
                .verb-select.incorrect {
                    border-color: #f44336;
                    background-color: #ffebee;
                }
                
                .check-answers {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 0.8rem 1.5rem;
                    border-radius: var(--border-radius);
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: bold;
                    margin-top: 1rem;
                }
                
                .feedback {
                    margin-top: 1rem;
                    font-weight: bold;
                }
            </style>
        `;
        
        // Add event listener for checking answers
        const checkButton = activity2.querySelector('.check-answers');
        checkButton.addEventListener('click', function() {
            const selects = activity2.querySelectorAll('.verb-select');
            let correctCount = 0;
            
            selects.forEach(select => {
                const userAnswer = select.value;
                const correctAnswer = select.dataset.answer;
                
                if (userAnswer === correctAnswer) {
                    select.className = 'verb-select correct';
                    correctCount++;
                } else {
                    select.className = 'verb-select incorrect';
                }
            });
            
            const feedback = activity2.querySelector('.feedback');
            if (correctCount === selects.length) {
                feedback.textContent = 'Great job! All answers are correct!';
                feedback.style.color = '#8bc34a';
            } else {
                feedback.textContent = `You got ${correctCount} out of ${selects.length} correct. Try again!`;
                feedback.style.color = '#f44336';
            }
        });
    }
}

// Function to set up navigation controls
function setupControls() {
    const prevButton = document.getElementById('prev-scene');
    const nextButton = document.getElementById('next-scene');
    
    if (!prevButton || !nextButton) return;
    
    prevButton.addEventListener('click', function() {
        if (window.currentScene > 0) {
            window.currentScene--;
            const container = document.getElementById('main-animation');
            window.scenes[window.currentScene](container);
            updateButtonStates();
        }
    });
    
    nextButton.addEventListener('click', function() {
        if (window.currentScene < window.scenes.length - 1) {
            window.currentScene++;
            const container = document.getElementById('main-animation');
            window.scenes[window.currentScene](container);
            updateButtonStates();
        }
    });
}

// Function to update button states
function updateButtonStates() {
    const prevButton = document.getElementById('prev-scene');
    const nextButton = document.getElementById('next-scene');
    
    if (!prevButton || !nextButton) return;
    
    prevButton.disabled = window.currentScene === 0;
    nextButton.disabled = window.currentScene === window.scenes.length - 1;
}
