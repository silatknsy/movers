// JavaScript for Animals and Pets Animation

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
            <!-- Background with three sections -->
            <rect x="0" y="0" width="400" height="100" fill="#ffe0b2" /> <!-- Pets section -->
            <rect x="0" y="100" width="400" height="100" fill="#c8e6c9" /> <!-- Farm section -->
            <rect x="0" y="200" width="400" height="100" fill="#bbdefb" /> <!-- Wild section -->
            
            <!-- Section labels -->
            <text x="50" y="25" font-size="16" fill="#333">Pets</text>
            <text x="50" y="125" font-size="16" fill="#333">Farm Animals</text>
            <text x="50" y="225" font-size="16" fill="#333">Wild Animals</text>
            
            <!-- Pet animals -->
            <g class="dog" transform="translate(120, 50) scale(0.7)">
                <ellipse cx="25" cy="10" rx="25" ry="15" fill="#a97c50" />
                <circle cx="45" cy="5" r="10" fill="#a97c50" />
                <circle cx="48" cy="2" r="2" fill="black" />
                <ellipse cx="40" cy="8" rx="2" ry="4" fill="black" />
                <rect x="0" y="10" width="5" height="20" fill="#a97c50" />
                <rect x="45" y="10" width="5" height="20" fill="#a97c50" />
            </g>
            
            <g class="cat" transform="translate(200, 50) scale(0.7)">
                <ellipse cx="25" cy="10" rx="20" ry="12" fill="#808080" />
                <circle cx="40" cy="5" r="8" fill="#808080" />
                <polygon points="45,0 50,5 45,10" fill="#808080" />
                <polygon points="35,0 40,5 35,10" fill="#808080" />
                <circle cx="43" cy="3" r="1.5" fill="black" />
                <ellipse cx="38" cy="7" rx="1.5" ry="3" fill="black" />
                <rect x="10" y="10" width="4" height="15" fill="#808080" />
                <rect x="35" y="10" width="4" height="15" fill="#808080" />
            </g>
            
            <g class="rabbit" transform="translate(280, 50) scale(0.7)">
                <ellipse cx="25" cy="15" rx="15" ry="10" fill="#f5f5f5" />
                <ellipse cx="25" cy="5" r="8" fill="#f5f5f5" />
                <ellipse cx="15" cy="-5" rx="3" ry="10" fill="#f5f5f5" />
                <ellipse cx="35" cy="-5" rx="3" ry="10" fill="#f5f5f5" />
                <circle cx="22" cy="3" r="1" fill="black" />
                <circle cx="28" cy="3" r="1" fill="black" />
                <ellipse cx="25" cy="7" rx="2" ry="1" fill="pink" />
            </g>
            
            <!-- Farm animals -->
            <g class="horse" transform="translate(120, 150) scale(0.7)">
                <ellipse cx="25" cy="10" rx="25" ry="15" fill="#8d6e63" />
                <rect x="0" y="10" width="5" height="25" fill="#8d6e63" />
                <rect x="45" y="10" width="5" height="25" fill="#8d6e63" />
                <ellipse cx="45" cy="0" rx="10" ry="5" fill="#8d6e63" />
                <rect x="50" y="0" width="15" height="2" fill="#8d6e63" />
            </g>
            
            <g class="cow" transform="translate(200, 150) scale(0.7)">
                <ellipse cx="25" cy="10" rx="25" ry="15" fill="#f5f5f5" />
                <rect x="5" y="10" width="5" height="25" fill="#f5f5f5" />
                <rect x="40" y="10" width="5" height="25" fill="#f5f5f5" />
                <ellipse cx="45" cy="0" rx="10" ry="8" fill="#f5f5f5" />
                <ellipse cx="40" cy="0" rx="2" ry="2" fill="black" />
                <ellipse cx="50" cy="0" rx="2" ry="2" fill="black" />
                <ellipse cx="45" cy="5" rx="3" ry="2" fill="pink" />
                <ellipse cx="25" cy="10" rx="5" ry="3" fill="black" />
                <ellipse cx="15" cy="5" rx="5" ry="3" fill="black" />
            </g>
            
            <g class="chicken" transform="translate(280, 150) scale(0.7)">
                <ellipse cx="25" cy="15" rx="15" ry="10" fill="#ffecb3" />
                <circle cx="35" cy="5" r="8" fill="#ffecb3" />
                <polygon points="38,0 42,5 38,10" fill="#ff5722" />
                <circle cx="33" cy="3" r="1.5" fill="black" />
                <rect x="20" y="15" width="3" height="15" fill="#ffecb3" />
                <rect x="30" y="15" width="3" height="15" fill="#ffecb3" />
            </g>
            
            <!-- Wild animals -->
            <g class="elephant" transform="translate(120, 250) scale(0.7)">
                <ellipse cx="25" cy="10" rx="25" ry="15" fill="#9e9e9e" />
                <rect x="5" y="10" width="8" height="20" fill="#9e9e9e" />
                <rect x="35" y="10" width="8" height="20" fill="#9e9e9e" />
                <ellipse cx="45" cy="0" rx="10" ry="8" fill="#9e9e9e" />
                <rect x="45" y="-15" width="5" height="15" fill="#9e9e9e" />
                <circle cx="40" cy="0" r="2" fill="black" />
            </g>
            
            <g class="giraffe" transform="translate(200, 250) scale(0.7)">
                <rect x="23" y="-20" width="4" height="30" fill="#f9a825" />
                <ellipse cx="25" cy="15" rx="15" ry="10" fill="#f9a825" />
                <rect x="15" y="15" width="3" height="15" fill="#f9a825" />
                <rect x="32" y="15" width="3" height="15" fill="#f9a825" />
                <circle cx="25" cy="-25" r="5" fill="#f9a825" />
                <polygon points="22,-30 25,-35 28,-30" fill="#f9a825" />
                <circle cx="27" cy="-27" r="1" fill="black" />
                <path d="M 25,15 L 40,15 L 25,5 Z" fill="#f9a825" />
                <path d="M 10,15 L 25,15 L 25,5 Z" fill="#f9a825" />
            </g>
            
            <g class="lion" transform="translate(280, 250) scale(0.7)">
                <circle cx="25" cy="10" r="15" fill="#ffa726" />
                <circle cx="25" cy="10" r="20" fill="none" stroke="#ffa726" stroke-width="5" />
                <ellipse cx="25" cy="25" rx="10" ry="5" fill="#ffa726" />
                <circle cx="20" cy="5" r="2" fill="black" />
                <circle cx="30" cy="5" r="2" fill="black" />
                <ellipse cx="25" cy="10" rx="3" ry="2" fill="#5d4037" />
                <path d="M 20,15 Q 25,20 30,15" fill="none" stroke="black" stroke-width="1" />
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
        createPetsScene,
        createFarmAnimalsScene,
        createWildAnimalsScene,
        createAnimalActionsScene,
        createAnimalHabitatsScene
    ];
    
    // Initialize with the first scene
    window.currentScene = 0;
    window.scenes[window.currentScene](container);
    
    // Update button states
    updateButtonStates();
}

// Create Scene 1: Pets
function createPetsScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#ffe0b2" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Pets</text>
            
            <!-- House outline -->
            <path d="M 150,150 L 150,350 L 650,350 L 650,150 L 400,50 Z" fill="none" stroke="#333" stroke-width="2" />
            <rect x="350" y="250" width="100" height="100" fill="none" stroke="#333" stroke-width="2" />
            
            <!-- Pets -->
            <g class="dog" transform="translate(200, 250)">
                <ellipse cx="25" cy="10" rx="25" ry="15" fill="#a97c50" />
                <circle cx="45" cy="5" r="10" fill="#a97c50" />
                <circle cx="48" cy="2" r="2" fill="black" />
                <ellipse cx="40" cy="8" rx="2" ry="4" fill="black" />
                <rect x="0" y="10" width="5" height="20" fill="#a97c50" />
                <rect x="45" y="10" width="5" height="20" fill="#a97c50" />
                <text x="25" y="50" text-anchor="middle" font-size="16" fill="#333" class="pet-label">Dog</text>
            </g>
            
            <g class="cat" transform="translate(320, 250)">
                <ellipse cx="25" cy="10" rx="20" ry="12" fill="#808080" />
                <circle cx="40" cy="5" r="8" fill="#808080" />
                <polygon points="45,0 50,5 45,10" fill="#808080" />
                <polygon points="35,0 40,5 35,10" fill="#808080" />
                <circle cx="43" cy="3" r="1.5" fill="black" />
                <ellipse cx="38" cy="7" rx="1.5" ry="3" fill="black" />
                <rect x="10" y="10" width="4" height="15" fill="#808080" />
                <rect x="35" y="10" width="4" height="15" fill="#808080" />
                <text x="25" y="50" text-anchor="middle" font-size="16" fill="#333" class="pet-label">Cat</text>
            </g>
            
            <g class="rabbit" transform="translate(440, 250)">
                <ellipse cx="25" cy="15" rx="15" ry="10" fill="#f5f5f5" />
                <ellipse cx="25" cy="5" r="8" fill="#f5f5f5" />
                <ellipse cx="15" cy="-5" rx="3" ry="10" fill="#f5f5f5" />
                <ellipse cx="35" cy="-5" rx="3" ry="10" fill="#f5f5f5" />
                <circle cx="22" cy="3" r="1" fill="black" />
                <circle cx="28" cy="3" r="1" fill="black" />
                <ellipse cx="25" cy="7" rx="2" ry="1" fill="pink" />
                <text x="25" y="50" text-anchor="middle" font-size="16" fill="#333" class="pet-label">Rabbit</text>
            </g>
            
            <g class="fish" transform="translate(560, 250)">
                <ellipse cx="25" cy="10" rx="20" ry="10" fill="#64b5f6" />
                <polygon points="45,10 55,0 55,20" fill="#64b5f6" />
                <circle cx="15" cy="7" r="2" fill="black" />
                <path d="M 30,5 Q 35,10 30,15" fill="none" stroke="#333" stroke-width="1" />
                <text x="25" y="50" text-anchor="middle" font-size="16" fill="#333" class="pet-label">Fish</text>
            </g>
            
            <!-- Instruction -->
            <text x="400" y="380" text-anchor="middle" font-size="16" fill="#333">
                Click on each pet to hear its name and sound
            </text>
        </svg>
    `;
    
    // Add click events for pets
    const pets = container.querySelectorAll('.dog, .cat, .rabbit, .fish');
    pets.forEach(pet => {
        pet.style.cursor = 'pointer';
        pet.addEventListener('click', function() {
            const petType = this.classList[0];
            let sound = '';
            
            switch(petType) {
                case 'dog':
                    sound = 'Woof woof!';
                    break;
                case 'cat':
                    sound = 'Meow!';
                    break;
                case 'rabbit':
                    sound = '*quiet munching*';
                    break;
                case 'fish':
                    sound = '*bubble bubble*';
                    break;
            }
            
            alert(`${petType.charAt(0).toUpperCase() + petType.slice(1)}: ${sound}`);
        });
    });
}

// Create Scene 2: Farm Animals (placeholder)
function createFarmAnimalsScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#c8e6c9" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Farm Animals</text>
            
            <!-- Farm outline -->
            <rect x="150" y="150" width="500" height="200" fill="#8d6e63" />
            <polygon points="150,150 400,50 650,150" fill="#a1887f" />
            <rect x="350" y="250" width="100" height="100" fill="#d7ccc8" />
            
            <!-- Farm animals placeholder -->
            <text x="400" y="200" text-anchor="middle" font-size="20" fill="#333">
                Farm animals animation
            </text>
            
            <!-- Instruction -->
            <text x="400" y="380" text-anchor="middle" font-size="16" fill="#333">
                Click on each animal to learn about it
            </text>
        </svg>
    `;
}

// Create Scene 3: Wild Animals (placeholder)
function createWildAnimalsScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#bbdefb" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Wild Animals</text>
            
            <!-- Jungle/Safari outline -->
            <rect x="0" y="300" width="800" height="100" fill="#81c784" />
            <path d="M 100,300 Q 150,250 200,300" fill="#81c784" />
            <path d="M 300,300 Q 350,200 400,300" fill="#81c784" />
            <path d="M 500,300 Q 550,250 600,300" fill="#81c784" />
            <path d="M 650,300 Q 700,220 750,300" fill="#81c784" />
            
            <!-- Wild animals placeholder -->
            <text x="400" y="200" text-anchor="middle" font-size="20" fill="#333">
                Wild animals animation
            </text>
            
            <!-- Instruction -->
            <text x="400" y="380" text-anchor="middle" font-size="16" fill="#333">
                Click on each animal to learn facts about it
            </text>
        </svg>
    `;
}

// Create Scene 4: Animal Actions (placeholder)
function createAnimalActionsScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e1f5fe" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Animal Actions</text>
            
            <!-- Animal actions placeholder -->
            <text x="400" y="200" text-anchor="middle" font-size="20" fill="#333">
                Animal actions animation
            </text>
            
            <!-- Action labels -->
            <rect x="150" y="300" width="120" height="40" rx="10" fill="#4a6da7" />
            <text x="210" y="325" text-anchor="middle" font-size="16" fill="white">flies</text>
            
            <rect x="340" y="300" width="120" height="40" rx="10" fill="#4a6da7" />
            <text x="400" y="325" text-anchor="middle" font-size="16" fill="white">swims</text>
            
            <rect x="530" y="300" width="120" height="40" rx="10" fill="#4a6da7" />
            <text x="590" y="325" text-anchor="middle" font-size="16" fill="white">jumps</text>
            
            <!-- Instruction -->
            <text x="400" y="380" text-anchor="middle" font-size="16" fill="#333">
                Drag action verbs to match with the correct animal
            </text>
        </svg>
    `;
}

// Create Scene 5: Animal Habitats (placeholder)
function createAnimalHabitatsScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e8f5e9" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Animal Habitats</text>
            
            <!-- Habitats placeholder -->
            <text x="400" y="200" text-anchor="middle" font-size="20" fill="#333">
                Animal habitats interactive game
            </text>
            
            <!-- Instruction -->
            <text x="400" y="350" text-anchor="middle" font-size="16" fill="#333">
                Drag each animal to its correct habitat
            </text>
        </svg>
    `;
}

// Function to initialize practice activities
function initPracticeActivities() {
    // Activity 1: Match animals to sounds
    const activity1 = document.getElementById('activity-1');
    if (activity1) {
        activity1.innerHTML = `
            <div class="matching-sounds">
                <div class="animals-container">
                    <div class="animal" data-sound="woof">
                        <img src="../images/dog.svg" alt="Dog" class="animal-img">
                        <p>Dog</p>
                    </div>
                    <div class="animal" data-sound="meow">
                        <img src="../images/cat.svg" alt="Cat" class="animal-img">
                        <p>Cat</p>
                    </div>
                    <div class="animal" data-sound="moo">
                        <img src="../images/cow.svg" alt="Cow" class="animal-img">
                        <p>Cow</p>
                    </div>
                    <div class="animal" data-sound="neigh">
                        <img src="../images/horse.svg" alt="Horse" class="animal-img">
                        <p>Horse</p>
                    </div>
                </div>
                
                <div class="sounds-container">
                    <button class="sound-btn" data-sound="meow">Meow</button>
                    <button class="sound-btn" data-sound="woof">Woof</button>
                    <button class="sound-btn" data-sound="neigh">Neigh</button>
                    <button class="sound-btn" data-sound="moo">Moo</button>
                </div>
                
                <div class="feedback"></div>
            </div>
            
            <style>
                .matching-sounds {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .animals-container {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .animal {
                    text-align: center;
                    width: 100px;
                }
                
                .animal-img {
                    width: 80px;
                    height: 80px;
                    background-color: #f0f0f0;
                    border-radius: 50%;
                    padding: 10px;
                }
                
                .sounds-container {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .sound-btn {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: var(--border-radius);
                    cursor: pointer;
                }
                
                .sound-btn:hover {
                    background-color: #3a5a8c;
                }
                
                .feedback {
                    text-align: center;
                    font-weight: bold;
                    margin-top: 1rem;
                    min-height: 1.5rem;
                }
            </style>
        `;
        
        // Since we don't have actual images yet, we'll use placeholders
        // In a real implementation, these would be replaced with actual SVG images
        const animalImgs = activity1.querySelectorAll('.animal-img');
        animalImgs.forEach(img => {
            img.src = '#'; // Placeholder
            img.style.backgroundColor = '#f0f0f0';
        });
        
        // Add event listeners for sound buttons
        const soundButtons = activity1.querySelectorAll('.sound-btn');
        const feedback = activity1.querySelector('.feedback');
        
        soundButtons.forEach(button => {
            button.addEventListener('click', function() {
                const sound = this.dataset.sound;
                const matchingAnimal = activity1.querySelector(`.animal[data-sound="${sound}"]`);
                
                if (matchingAnimal) {
                    feedback.textContent = `Correct! That's the sound a ${matchingAnimal.querySelector('p').textContent} makes.`;
                    feedback.style.color = '#8bc34a';
                    
                    // Highlight the matching animal
                    const animals = activity1.querySelectorAll('.animal');
                    animals.forEach(animal => {
                        animal.style.backgroundColor = '';
                    });
                    matchingAnimal.style.backgroundColor = '#e8f5e9';
                }
            });
        });
    }
    
    // Activity 2: Animal habitats (placeholder)
    const activity2 = document.getElementById('activity-2');
    if (activity2) {
        activity2.innerHTML = `
            <div class="habitats-activity">
                <p>Drag each animal to its correct habitat: farm, house, jungle, or ocean.</p>
                <div class="habitats-placeholder">
                    <p>Interactive drag-and-drop activity would be implemented here.</p>
                    <p>Students would match animals to their correct habitats.</p>
                </div>
            </div>
            
            <style>
                .habitats-placeholder {
                    background-color: #f0f0f0;
                    padding: 2rem;
                    border-radius: 10px;
                    text-align: center;
                    margin-top: 1rem;
                }
            </style>
        `;
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
