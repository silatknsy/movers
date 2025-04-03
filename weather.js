// JavaScript for Weather and Seasons Animation

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
            <rect width="400" height="300" fill="#e1f5fe" />
            
            <!-- Sun -->
            <g class="sun" transform="translate(50, 50)">
                <circle cx="0" cy="0" r="20" fill="#ffeb3b" />
                <line x1="0" y1="-30" x2="0" y2="-25" stroke="#ffeb3b" stroke-width="3" />
                <line x1="0" y1="25" x2="0" y2="30" stroke="#ffeb3b" stroke-width="3" />
                <line x1="-30" y1="0" x2="-25" y2="0" stroke="#ffeb3b" stroke-width="3" />
                <line x1="25" y1="0" x2="30" y2="0" stroke="#ffeb3b" stroke-width="3" />
                <line x1="-21" y1="-21" x2="-17" y2="-17" stroke="#ffeb3b" stroke-width="3" />
                <line x1="17" y1="17" x2="21" y2="21" stroke="#ffeb3b" stroke-width="3" />
                <line x1="-21" y1="21" x2="-17" y2="17" stroke="#ffeb3b" stroke-width="3" />
                <line x1="17" y1="-17" x2="21" y2="-21" stroke="#ffeb3b" stroke-width="3" />
                <text x="0" y="45" text-anchor="middle" font-size="14" fill="#333">Sunny</text>
            </g>
            
            <!-- Cloud -->
            <g class="cloud" transform="translate(150, 50)">
                <circle cx="0" cy="0" r="15" fill="#e0e0e0" />
                <circle cx="15" cy="0" r="15" fill="#e0e0e0" />
                <circle cx="30" cy="0" r="15" fill="#e0e0e0" />
                <circle cx="7" cy="-10" r="15" fill="#e0e0e0" />
                <circle cx="23" cy="-10" r="15" fill="#e0e0e0" />
                <rect x="-5" y="-5" width="40" height="20" fill="#e0e0e0" />
                <text x="15" y="35" text-anchor="middle" font-size="14" fill="#333">Cloudy</text>
            </g>
            
            <!-- Rain -->
            <g class="rain" transform="translate(250, 50)">
                <circle cx="0" cy="0" r="15" fill="#90caf9" />
                <circle cx="15" cy="0" r="15" fill="#90caf9" />
                <circle cx="30" cy="0" r="15" fill="#90caf9" />
                <circle cx="7" cy="-10" r="15" fill="#90caf9" />
                <circle cx="23" cy="-10" r="15" fill="#90caf9" />
                <rect x="-5" y="-5" width="40" height="20" fill="#90caf9" />
                <line x1="0" y1="20" x2="-5" y2="30" stroke="#64b5f6" stroke-width="2" />
                <line x1="10" y1="20" x2="5" y2="30" stroke="#64b5f6" stroke-width="2" />
                <line x1="20" y1="20" x2="15" y2="30" stroke="#64b5f6" stroke-width="2" />
                <line x1="30" y1="20" x2="25" y2="30" stroke="#64b5f6" stroke-width="2" />
                <text x="15" y="45" text-anchor="middle" font-size="14" fill="#333">Rainy</text>
            </g>
            
            <!-- Wind -->
            <g class="wind" transform="translate(350, 50)">
                <path d="M 0,0 Q 10,-10 20,0 T 40,0" fill="none" stroke="#bdbdbd" stroke-width="3" />
                <path d="M 5,10 Q 15,0 25,10 T 45,10" fill="none" stroke="#bdbdbd" stroke-width="3" />
                <path d="M -5,20 Q 5,10 15,20 T 35,20" fill="none" stroke="#bdbdbd" stroke-width="3" />
                <text x="20" y="45" text-anchor="middle" font-size="14" fill="#333">Windy</text>
            </g>
            
            <!-- Seasons -->
            <g class="spring" transform="translate(75, 150)">
                <circle cx="0" cy="0" r="30" fill="#c5e1a5" />
                <circle cx="0" cy="0" r="25" fill="none" stroke="#8bc34a" stroke-width="2" />
                <path d="M -10,-10 Q 0,-20 10,-10 T 20,0" fill="none" stroke="#8bc34a" stroke-width="2" />
                <path d="M -15,0 Q -5,-10 5,0 T 15,10" fill="none" stroke="#8bc34a" stroke-width="2" />
                <path d="M -10,10 Q 0,0 10,10 T 20,20" fill="none" stroke="#8bc34a" stroke-width="2" />
                <text x="0" y="45" text-anchor="middle" font-size="14" fill="#333">Spring</text>
            </g>
            
            <g class="summer" transform="translate(175, 150)">
                <circle cx="0" cy="0" r="30" fill="#ffecb3" />
                <circle cx="0" cy="0" r="20" fill="#ffd54f" />
                <line x1="0" y1="-35" x2="0" y2="-30" stroke="#ffd54f" stroke-width="2" />
                <line x1="0" y1="30" x2="0" y2="35" stroke="#ffd54f" stroke-width="2" />
                <line x1="-35" y1="0" x2="-30" y2="0" stroke="#ffd54f" stroke-width="2" />
                <line x1="30" y1="0" x2="35" y2="0" stroke="#ffd54f" stroke-width="2" />
                <line x1="-25" y1="-25" x2="-20" y2="-20" stroke="#ffd54f" stroke-width="2" />
                <line x1="20" y1="20" x2="25" y2="25" stroke="#ffd54f" stroke-width="2" />
                <line x1="-25" y1="25" x2="-20" y2="20" stroke="#ffd54f" stroke-width="2" />
                <line x1="20" y1="-20" x2="25" y2="-25" stroke="#ffd54f" stroke-width="2" />
                <text x="0" y="45" text-anchor="middle" font-size="14" fill="#333">Summer</text>
            </g>
            
            <g class="autumn" transform="translate(275, 150)">
                <circle cx="0" cy="0" r="30" fill="#ffcc80" />
                <path d="M -15,-15 L -5,-5 L -15,5 L -5,15 L 5,5 L 15,15 L 15,-5 L 5,-15 Z" fill="#ef6c00" />
                <path d="M -10,0 L 0,10 L 10,0 L 0,-10 Z" fill="#e65100" />
                <text x="0" y="45" text-anchor="middle" font-size="14" fill="#333">Autumn</text>
            </g>
            
            <g class="winter" transform="translate(375, 150)">
                <circle cx="0" cy="0" r="30" fill="#e3f2fd" />
                <path d="M 0,0 L 0,20 M 0,0 L 0,-20 M 0,0 L 20,0 M 0,0 L -20,0 M 0,0 L 14,14 M 0,0 L -14,-14 M 0,0 L 14,-14 M 0,0 L -14,14" stroke="#bbdefb" stroke-width="3" />
                <circle cx="0" cy="0" r="5" fill="#bbdefb" />
                <text x="0" y="45" text-anchor="middle" font-size="14" fill="#333">Winter</text>
            </g>
            
            <!-- Seasons cycle arrow -->
            <path d="M 75,200 A 150,30 0 0 0 375,200" fill="none" stroke="#333" stroke-width="2" stroke-dasharray="5,5" />
            <polygon points="375,200 365,195 365,205" fill="#333" />
        </svg>
    `;
}

// Function to initialize the main interactive animation
function initMainAnimation() {
    const container = document.getElementById('main-animation');
    if (!container) return;
    
    // Create scenes array to hold different animation scenes
    window.scenes = [
        createWeatherTypesScene,
        createWeatherClothingScene,
        createSeasonsCycleScene,
        createWeatherActivitiesScene,
        createWeatherReportScene
    ];
    
    // Initialize with the first scene
    window.currentScene = 0;
    window.scenes[window.currentScene](container);
    
    // Update button states
    updateButtonStates();
}

// Create Scene 1: Weather Types
function createWeatherTypesScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e1f5fe" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Weather Types</text>
            
            <!-- Weather map -->
            <rect x="150" y="80" width="500" height="250" rx="10" fill="#fff" stroke="#333" stroke-width="2" />
            <text x="400" y="110" text-anchor="middle" font-size="18" fill="#333">Weather Map</text>
            
            <!-- Weather symbols -->
            <g class="sunny-symbol" transform="translate(200, 150)">
                <circle cx="0" cy="0" r="25" fill="#ffeb3b" class="weather-icon" data-weather="sunny" />
                <line x1="0" y1="-35" x2="0" y2="-30" stroke="#ffeb3b" stroke-width="3" />
                <line x1="0" y1="30" x2="0" y2="35" stroke="#ffeb3b" stroke-width="3" />
                <line x1="-35" y1="0" x2="-30" y2="0" stroke="#ffeb3b" stroke-width="3" />
                <line x1="30" y1="0" x2="35" y2="0" stroke="#ffeb3b" stroke-width="3" />
                <line x1="-25" y1="-25" x2="-20" y2="-20" stroke="#ffeb3b" stroke-width="3" />
                <line x1="20" y1="20" x2="25" y2="25" stroke="#ffeb3b" stroke-width="3" />
                <line x1="-25" y1="25" x2="-20" y2="20" stroke="#ffeb3b" stroke-width="3" />
                <line x1="20" y1="-20" x2="25" y2="-25" stroke="#ffeb3b" stroke-width="3" />
                <text x="0" y="60" text-anchor="middle" font-size="16" fill="#333">Sunny</text>
            </g>
            
            <g class="cloudy-symbol" transform="translate(350, 150)">
                <circle cx="0" cy="0" r="15" fill="#e0e0e0" class="weather-icon" data-weather="cloudy" />
                <circle cx="15" cy="0" r="15" fill="#e0e0e0" />
                <circle cx="30" cy="0" r="15" fill="#e0e0e0" />
                <circle cx="7" cy="-10" r="15" fill="#e0e0e0" />
                <circle cx="23" cy="-10" r="15" fill="#e0e0e0" />
                <rect x="-5" y="-5" width="40" height="20" fill="#e0e0e0" />
                <text x="15" y="60" text-anchor="middle" font-size="16" fill="#333">Cloudy</text>
            </g>
            
            <g class="rainy-symbol" transform="translate(500, 150)">
                <circle cx="0" cy="0" r="15" fill="#90caf9" class="weather-icon" data-weather="rainy" />
                <circle cx="15" cy="0" r="15" fill="#90caf9" />
                <circle cx="30" cy="0" r="15" fill="#90caf9" />
                <circle cx="7" cy="-10" r="15" fill="#90caf9" />
                <circle cx="23" cy="-10" r="15" fill="#90caf9" />
                <rect x="-5" y="-5" width="40" height="20" fill="#90caf9" />
                <line x1="0" y1="20" x2="-5" y2="30" stroke="#64b5f6" stroke-width="2" />
                <line x1="10" y1="20" x2="5" y2="30" stroke="#64b5f6" stroke-width="2" />
                <line x1="20" y1="20" x2="15" y2="30" stroke="#64b5f6" stroke-width="2" />
                <line x1="30" y1="20" x2="25" y2="30" stroke="#64b5f6" stroke-width="2" />
                <text x="15" y="60" text-anchor="middle" font-size="16" fill="#333">Rainy</text>
            </g>
            
            <g class="windy-symbol" transform="translate(650, 150)">
                <g class="weather-icon" data-weather="windy">
                    <path d="M 0,0 Q 10,-10 20,0 T 40,0" fill="none" stroke="#bdbdbd" stroke-width="3" />
                    <path d="M 5,10 Q 15,0 25,10 T 45,10" fill="none" stroke="#bdbdbd" stroke-width="3" />
                    <path d="M -5,20 Q 5,10 15,20 T 35,20" fill="none" stroke="#bdbdbd" stroke-width="3" />
                </g>
                <text x="20" y="60" text-anchor="middle" font-size="16" fill="#333">Windy</text>
            </g>
            
            <!-- Weather description -->
            <rect x="200" y="250" width="400" height="60" rx="10" fill="#4a6da7" />
            <text x="400" y="285" text-anchor="middle" font-size="18" fill="white" id="weather-description">
                Click on a weather symbol to learn about it
            </text>
        </svg>
    `;
    
    // Add click events for weather symbols
    const weatherIcons = container.querySelectorAll('.weather-icon');
    const description = container.querySelector('#weather-description');
    
    weatherIcons.forEach(icon => {
        icon.style.cursor = 'pointer';
        icon.addEventListener('click', function() {
            const weather = this.dataset.weather;
            let text = '';
            
            switch(weather) {
                case 'sunny':
                    text = 'When it\'s sunny, the sun shines brightly in the sky.';
                    break;
                case 'cloudy':
                    text = 'When it\'s cloudy, there are many clouds in the sky.';
                    break;
                case 'rainy':
                    text = 'When it\'s rainy, water falls from the clouds.';
                    break;
                case 'windy':
                    text = 'When it\'s windy, the air moves quickly and strongly.';
                    break;
            }
            
            description.textContent = text;
        });
    });
}

// Create Scene 2: Weather Clothing (placeholder)
function createWeatherClothingScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e1f5fe" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Weather and Clothing</text>
            
            <!-- Weather clothing placeholder -->
            <text x="400" y="200" text-anchor="middle" font-size="20" fill="#333">
                Weather and clothing animation
            </text>
            
            <!-- Instruction -->
            <text x="400" y="350" text-anchor="middle" font-size="16" fill="#333">
                Drag appropriate clothing items based on the weather
            </text>
        </svg>
    `;
}

// Create Scene 3: Seasons Cycle (placeholder)
function createSeasonsCycleScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e1f5fe" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Seasons Cycle</text>
            
            <!-- Seasons cycle placeholder -->
            <text x="400" y="200" text-anchor="middle" font-size="20" fill="#333">
                Seasons cycle animation
            </text>
            
            <!-- Instruction -->
            <text x="400" y="350" text-anchor="middle" font-size="16" fill="#333">
                Click on season names to see the transformation
            </text>
        </svg>
    `;
}

// Create Scene 4: Weather Activities (placeholder)
function createWeatherActivitiesScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e1f5fe" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Weather Activities</text>
            
            <!-- Weather activities placeholder -->
            <text x="400" y="200" text-anchor="middle" font-size="20" fill="#333">
                Weather activities animation
            </text>
            
            <!-- Instruction -->
            <text x="400" y="350" text-anchor="middle" font-size="16" fill="#333">
                Match activities to appropriate weather conditions
            </text>
        </svg>
    `;
}

// Create Scene 5: Weather Report (placeholder)
function createWeatherReportScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e1f5fe" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Weather Report Game</text>
            
            <!-- Weather report placeholder -->
            <text x="400" y="200" text-anchor="middle" font-size="20" fill="#333">
                Weather report interactive game
            </text>
            
            <!-- Instruction -->
            <text x="400" y="350" text-anchor="middle" font-size="16" fill="#333">
                Be a weather presenter! Describe the weather in different places
            </text>
        </svg>
    `;
}

// Function to initialize practice activities
function initPracticeActivities() {
    // Activity 1: Match weather words to pictures
    const activity1 = document.getElementById('activity-1');
    if (activity1) {
        activity1.innerHTML = `
            <div class="matching-weather">
                <p>Match the weather words to the correct pictures:</p>
                <div class="weather-matching-game">
                    <div class="weather-images">
                        <div class="weather-image" data-weather="sunny">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <circle cx="40" cy="40" r="20" fill="#ffeb3b" />
                                <line x1="40" y1="10" x2="40" y2="15" stroke="#ffeb3b" stroke-width="3" />
                                <line x1="40" y1="65" x2="40" y2="70" stroke="#ffeb3b" stroke-width="3" />
                                <line x1="10" y1="40" x2="15" y2="40" stroke="#ffeb3b" stroke-width="3" />
                                <line x1="65" y1="40" x2="70" y2="40" stroke="#ffeb3b" stroke-width="3" />
                                <line x1="20" y1="20" x2="25" y2="25" stroke="#ffeb3b" stroke-width="3" />
                                <line x1="55" y1="55" x2="60" y2="60" stroke="#ffeb3b" stroke-width="3" />
                                <line x1="20" y1="60" x2="25" y2="55" stroke="#ffeb3b" stroke-width="3" />
                                <line x1="55" y1="25" x2="60" y2="20" stroke="#ffeb3b" stroke-width="3" />
                            </svg>
                        </div>
                        <div class="weather-image" data-weather="cloudy">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <circle cx="30" cy="40" r="15" fill="#e0e0e0" />
                                <circle cx="45" cy="40" r="15" fill="#e0e0e0" />
                                <circle cx="60" cy="40" r="15" fill="#e0e0e0" />
                                <circle cx="37" cy="30" r="15" fill="#e0e0e0" />
                                <circle cx="53" cy="30" r="15" fill="#e0e0e0" />
                                <rect x="25" y="35" width="40" height="20" fill="#e0e0e0" />
                            </svg>
                        </div>
                        <div class="weather-image" data-weather="rainy">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <circle cx="30" cy="30" r="15" fill="#90caf9" />
                                <circle cx="45" cy="30" r="15" fill="#90caf9" />
                                <circle cx="60" cy="30" r="15" fill="#90caf9" />
                                <circle cx="37" cy="20" r="15" fill="#90caf9" />
                                <circle cx="53" cy="20" r="15" fill="#90caf9" />
                                <rect x="25" y="25" width="40" height="20" fill="#90caf9" />
                                <line x1="30" y1="50" x2="25" y2="60" stroke="#64b5f6" stroke-width="2" />
                                <line x1="40" y1="50" x2="35" y2="60" stroke="#64b5f6" stroke-width="2" />
                                <line x1="50" y1="50" x2="45" y2="60" stroke="#64b5f6" stroke-width="2" />
                                <line x1="60" y1="50" x2="55" y2="60" stroke="#64b5f6" stroke-width="2" />
                            </svg>
                        </div>
                        <div class="weather-image" data-weather="windy">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <path d="M 20,30 Q 30,20 40,30 T 60,30" fill="none" stroke="#bdbdbd" stroke-width="3" />
                                <path d="M 25,40 Q 35,30 45,40 T 65,40" fill="none" stroke="#bdbdbd" stroke-width="3" />
                                <path d="M 15,50 Q 25,40 35,50 T 55,50" fill="none" stroke="#bdbdbd" stroke-width="3" />
                            </svg>
                        </div>
                    </div>
                    
                    <div class="weather-words">
                        <button class="weather-word" data-weather="cloudy">Cloudy</button>
                        <button class="weather-word" data-weather="sunny">Sunny</button>
                        <button class="weather-word" data-weather="windy">Windy</button>
                        <button class="weather-word" data-weather="rainy">Rainy</button>
                    </div>
                </div>
                
                <div class="feedback"></div>
            </div>
            
            <style>
                .matching-weather {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .weather-matching-game {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                
                .weather-images {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .weather-image {
                    border: 2px solid #ccc;
                    border-radius: 10px;
                    padding: 10px;
                    background-color: #f5f5f5;
                }
                
                .weather-image.matched {
                    border-color: #8bc34a;
                    background-color: #f1f8e9;
                }
                
                .weather-words {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .weather-word {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: var(--border-radius);
                    cursor: pointer;
                }
                
                .weather-word.selected {
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
        
        // Add event listeners for weather matching game
        let selectedWord = null;
        const weatherWords = activity1.querySelectorAll('.weather-word');
        const weatherImages = activity1.querySelectorAll('.weather-image');
        const feedback = activity1.querySelector('.feedback');
        
        weatherWords.forEach(word => {
            word.addEventListener('click', function() {
                // Deselect previously selected word
                if (selectedWord) {
                    selectedWord.classList.remove('selected');
                }
                
                // Select this word
                this.classList.add('selected');
                selectedWord = this;
            });
        });
        
        weatherImages.forEach(image => {
            image.addEventListener('click', function() {
                if (!selectedWord) {
                    feedback.textContent = 'Please select a weather word first!';
                    feedback.style.color = '#f44336';
                    return;
                }
                
                const imageWeather = this.dataset.weather;
                const wordWeather = selectedWord.dataset.weather;
                
                if (imageWeather === wordWeather) {
                    this.classList.add('matched');
                    selectedWord.disabled = true;
                    selectedWord.classList.remove('selected');
                    selectedWord = null;
                    
                    feedback.textContent = 'Correct match!';
                    feedback.style.color = '#8bc34a';
                    
                    // Check if all are matched
                    const matchedImages = activity1.querySelectorAll('.weather-image.matched');
                    if (matchedImages.length === weatherImages.length) {
                        feedback.textContent = 'Great job! You matched all the weather words!';
                    }
                } else {
                    feedback.textContent = 'Try again! That\'s not the right match.';
                    feedback.style.color = '#f44336';
                }
            });
        });
    }
    
    // Activity 2: Weather clothing (placeholder)
    const activity2 = document.getElementById('activity-2');
    if (activity2) {
        activity2.innerHTML = `
            <div class="weather-clothing">
                <p>What do we wear in different weather? Match the clothing to the weather:</p>
                <div class="weather-clothing-placeholder">
                    <p>Interactive drag-and-drop activity would be implemented here.</p>
                    <p>Students would match clothing items to appropriate weather conditions.</p>
                </div>
            </div>
            
            <style>
                .weather-clothing-placeholder {
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
