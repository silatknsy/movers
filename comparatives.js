// JavaScript for Comparatives and Superlatives Animation

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
            <rect width="400" height="300" fill="#e6f7ff" />
            
            <!-- Small house -->
            <g class="small-house" transform="translate(80, 180) scale(0.8)">
                <rect width="80" height="60" fill="#ffcccc" />
                <polygon points="0,0 80,0 40,-40" fill="#ff6666" />
                <rect x="30" y="30" width="20" height="30" fill="#663300" />
            </g>
            
            <!-- Big house -->
            <g class="big-house" transform="translate(240, 160)">
                <rect width="100" height="80" fill="#ffcccc" />
                <polygon points="0,0 100,0 50,-50" fill="#ff6666" />
                <rect x="40" y="40" width="25" height="40" fill="#663300" />
            </g>
            
            <!-- Labels -->
            <text x="120" y="260" text-anchor="middle" font-size="16" fill="#333">Small house</text>
            <text x="290" y="260" text-anchor="middle" font-size="16" fill="#333">Big house</text>
            
            <!-- Comparative -->
            <g class="comparative">
                <rect x="150" y="50" width="100" height="40" rx="10" fill="#4a6da7" class="pulse-animation" />
                <text x="200" y="75" text-anchor="middle" font-size="16" fill="white">bigger than</text>
                <path d="M 180 90 L 180 120 L 240 160" stroke="#4a6da7" stroke-width="3" fill="none" marker-end="url(#arrowhead)" />
                <path d="M 220 90 L 220 120 L 160 180" stroke="#4a6da7" stroke-width="3" fill="none" marker-end="url(#arrowhead)" />
            </g>
            
            <!-- Arrow marker definition -->
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#4a6da7" />
                </marker>
            </defs>
        </svg>
        
        <style>
            .pulse-animation {
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0% { opacity: 1; }
                50% { opacity: 0.7; }
                100% { opacity: 1; }
            }
        </style>
    `;
}

// Function to initialize the main interactive animation
function initMainAnimation() {
    const container = document.getElementById('main-animation');
    if (!container) return;
    
    // Create scenes array to hold different animation scenes
    window.scenes = [
        createHeightComparisonScene,
        createHouseComparisonScene,
        createAnimalSpeedScene,
        createBackpackWeightScene,
        createInteractiveGameScene
    ];
    
    // Initialize with the first scene
    window.currentScene = 0;
    window.scenes[window.currentScene](container);
    
    // Update button states
    updateButtonStates();
}

// Create Scene 1: Height Comparison
function createHeightComparisonScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f0f9ff" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Height Comparison</text>
            
            <!-- Character 1: Alex (taller) -->
            <g class="character" transform="translate(250, 150)">
                <rect x="-30" y="-120" width="60" height="120" fill="#8bc34a" />
                <circle cx="0" cy="-150" r="30" fill="#ffcc80" />
                <text x="0" y="-170" text-anchor="middle" font-size="18" fill="#333">Alex</text>
                
                <!-- Height measurement -->
                <line x1="-50" y1="-120" x2="-50" y2="0" stroke="#333" stroke-width="2" />
                <line x1="-55" y1="-120" x2="-50" y2="-120" stroke="#333" stroke-width="2" />
                <line x1="-55" y1="0" x2="-50" y2="0" stroke="#333" stroke-width="2" />
                <text x="-70" y="-60" text-anchor="end" font-size="16" fill="#333">150cm</text>
            </g>
            
            <!-- Character 2: Maya (shorter) -->
            <g class="character" transform="translate(550, 150)">
                <rect x="-25" y="-100" width="50" height="100" fill="#f48fb1" />
                <circle cx="0" cy="-130" r="30" fill="#ffcc80" />
                <text x="0" y="-150" text-anchor="middle" font-size="18" fill="#333">Maya</text>
                
                <!-- Height measurement -->
                <line x1="50" y1="-100" x2="50" y2="0" stroke="#333" stroke-width="2" />
                <line x1="50" y1="-100" x2="55" y2="-100" stroke="#333" stroke-width="2" />
                <line x1="50" y1="0" x2="55" y2="0" stroke="#333" stroke-width="2" />
                <text x="70" y="-50" text-anchor="start" font-size="16" fill="#333">130cm</text>
            </g>
            
            <!-- Comparative statement -->
            <g class="comparative-statement">
                <rect x="250" y="300" width="300" height="50" rx="10" fill="#4a6da7" />
                <text x="400" y="330" text-anchor="middle" font-size="20" fill="white">
                    Alex is taller than Maya.
                </text>
            </g>
            
            <!-- Instruction -->
            <text x="400" y="380" text-anchor="middle" font-size="16" fill="#666">
                Click on the comparative to hear pronunciation
            </text>
        </svg>
    `;
    
    // Add click event for pronunciation
    const statement = container.querySelector('.comparative-statement');
    if (statement) {
        statement.style.cursor = 'pointer';
        statement.addEventListener('click', function() {
            // In a real implementation, this would play audio
            alert('Audio would play: "Alex is taller than Maya."');
        });
    }
}

// Create Scene 2: House Comparison
function createHouseComparisonScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f0f9ff" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">House Size Comparison</text>
            
            <!-- Small house (Maya's) -->
            <g class="small-house" transform="translate(200, 200)">
                <rect width="100" height="80" fill="#ffcccc" />
                <polygon points="0,0 100,0 50,-50" fill="#ff6666" />
                <rect x="40" y="40" width="25" height="40" fill="#663300" />
                <text x="50" y="150" text-anchor="middle" font-size="18" fill="#333">Maya's house</text>
            </g>
            
            <!-- Medium house (Tom's) -->
            <g class="medium-house" transform="translate(350, 180)">
                <rect width="120" height="100" fill="#ccffcc" />
                <polygon points="0,0 120,0 60,-60" fill="#66ff66" />
                <rect x="45" y="50" width="30" height="50" fill="#663300" />
                <text x="60" y="170" text-anchor="middle" font-size="18" fill="#333">Tom's house</text>
            </g>
            
            <!-- Big house (Alex's) -->
            <g class="big-house" transform="translate(530, 150)">
                <rect width="150" height="130" fill="#ccccff" />
                <polygon points="0,0 150,0 75,-75" fill="#6666ff" />
                <rect x="60" y="65" width="35" height="65" fill="#663300" />
                <text x="75" y="200" text-anchor="middle" font-size="18" fill="#333">Alex's house</text>
            </g>
            
            <!-- Comparative statements -->
            <g class="comparative-statement" id="statement1">
                <rect x="150" y="300" width="500" height="40" rx="10" fill="#4a6da7" />
                <text x="400" y="325" text-anchor="middle" font-size="18" fill="white">
                    Tom's house is bigger than Maya's house.
                </text>
            </g>
            
            <g class="superlative-statement" id="statement2">
                <rect x="150" y="350" width="500" height="40" rx="10" fill="#f9a826" />
                <text x="400" y="375" text-anchor="middle" font-size="18" fill="white">
                    Alex's house is the biggest of all.
                </text>
            </g>
        </svg>
    `;
    
    // Add click events for pronunciation
    const statements = container.querySelectorAll('.comparative-statement, .superlative-statement');
    statements.forEach(statement => {
        statement.style.cursor = 'pointer';
        statement.addEventListener('click', function() {
            const text = this.querySelector('text').textContent.trim();
            alert(`Audio would play: "${text}"`);
        });
    });
}

// Create Scene 3: Animal Speed Scene (placeholder)
function createAnimalSpeedScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background with race track -->
            <rect width="800" height="400" fill="#f0f9ff" />
            <rect x="100" y="200" width="600" height="80" fill="#e0e0e0" rx="5" />
            <line x1="100" y1="240" x2="700" y2="240" stroke="#ffffff" stroke-width="5" stroke-dasharray="20,20" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Animal Speed Comparison</text>
            
            <!-- Rabbit -->
            <g class="rabbit" transform="translate(500, 220)">
                <ellipse cx="0" cy="0" rx="25" ry="15" fill="#f5f5f5" />
                <ellipse cx="-15" cy="-20" rx="8" ry="20" fill="#f5f5f5" />
                <ellipse cx="0" cy="-20" rx="8" ry="20" fill="#f5f5f5" />
                <circle cx="10" cy="-5" r="5" fill="#ffcccc" />
                <ellipse cx="15" cy="10" rx="5" ry="3" fill="#f5f5f5" />
                <text x="0" y="40" text-anchor="middle" font-size="16" fill="#333">Rabbit</text>
            </g>
            
            <!-- Cat -->
            <g class="cat" transform="translate(300, 220)">
                <ellipse cx="0" cy="0" rx="25" ry="15" fill="#a0a0a0" />
                <circle cx="15" cy="-10" r="12" fill="#a0a0a0" />
                <polygon points="5,-20 15,-25 25,-20" fill="#a0a0a0" />
                <ellipse cx="10" cy="-10" rx="2" ry="4" fill="#000000" />
                <ellipse cx="-15" cy="10" rx="5" ry="3" fill="#a0a0a0" />
                <ellipse cx="15" cy="10" rx="5" ry="3" fill="#a0a0a0" />
                <text x="0" y="40" text-anchor="middle" font-size="16" fill="#333">Cat</text>
            </g>
            
            <!-- Dog -->
            <g class="dog" transform="translate(650, 220)">
                <ellipse cx="0" cy="0" rx="30" ry="20" fill="#cd853f" />
                <circle cx="20" cy="-10" r="15" fill="#cd853f" />
                <ellipse cx="25" cy="-15" rx="3" ry="5" fill="#000000" />
                <ellipse cx="-20" cy="10" rx="8" ry="5" fill="#cd853f" />
                <ellipse cx="20" cy="10" rx="8" ry="5" fill="#cd853f" />
                <ellipse cx="-10" cy="-5" rx="5" ry="3" fill="#000000" />
                <text x="0" y="40" text-anchor="middle" font-size="16" fill="#333">Dog</text>
            </g>
            
            <!-- Speed slider -->
            <g class="speed-control">
                <rect x="250" y="100" width="300" height="30" rx="15" fill="#e0e0e0" />
                <circle cx="400" cy="115" r="15" fill="#4a6da7" class="slider-handle" />
                <text x="250" y="90" text-anchor="start" font-size="16" fill="#333">Slower</text>
                <text x="550" y="90" text-anchor="end" font-size="16" fill="#333">Faster</text>
            </g>
            
            <!-- Comparative statements -->
            <g class="comparative-statement">
                <rect x="150" y="300" width="500" height="40" rx="10" fill="#4a6da7" />
                <text x="400" y="325" text-anchor="middle" font-size="18" fill="white">
                    The rabbit runs faster than the cat.
                </text>
            </g>
            
            <g class="superlative-statement">
                <rect x="150" y="350" width="500" height="40" rx="10" fill="#f9a826" />
                <text x="400" y="375" text-anchor="middle" font-size="18" fill="white">
                    The dog runs the fastest of all.
                </text>
            </g>
        </svg>
    `;
    
    // In a full implementation, this would include animation of animals running
    // and interactive slider to control speeds
}

// Create Scene 4: Backpack Weight Scene (placeholder)
function createBackpackWeightScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f0f9ff" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Backpack Weight Comparison</text>
            
            <!-- Placeholder for backpack weight scene -->
            <text x="400" y="200" text-anchor="middle" font-size="20" fill="#666">
                Backpack weight comparison animation
            </text>
            
            <!-- Comparative statements -->
            <g class="comparative-statement">
                <rect x="150" y="300" width="500" height="40" rx="10" fill="#4a6da7" />
                <text x="400" y="325" text-anchor="middle" font-size="18" fill="white">
                    Sam's backpack is heavier than Maya's backpack.
                </text>
            </g>
            
            <g class="superlative-statement">
                <rect x="150" y="350" width="500" height="40" rx="10" fill="#f9a826" />
                <text x="400" y="375" text-anchor="middle" font-size="18" fill="white">
                    Alex's backpack is the heaviest.
                </text>
            </g>
        </svg>
    `;
}

// Create Scene 5: Interactive Game Scene (placeholder)
function createInteractiveGameScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f0f9ff" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Comparatives Game</text>
            
            <!-- Placeholder for interactive game -->
            <text x="400" y="200" text-anchor="middle" font-size="20" fill="#666">
                Interactive comparatives and superlatives game
            </text>
            
            <!-- Instructions -->
            <rect x="150" y="300" width="500" height="80" rx="10" fill="#e0e0e0" />
            <text x="400" y="330" text-anchor="middle" font-size="18" fill="#333">
                Drag objects to compare them and form sentences
            </text>
            <text x="400" y="360" text-anchor="middle" font-size="18" fill="#333">
                with comparatives and superlatives.
            </text>
        </svg>
    `;
}

// Function to initialize practice activities
function initPracticeActivities() {
    // Activity 1: Complete the sentences
    const activity1 = document.getElementById('activity-1');
    if (activity1) {
        activity1.innerHTML = `
            <div class="sentence-completion">
                <p>1. The elephant is <input type="text" data-answer="bigger than"> the dog.</p>
                <p>2. The giraffe is <input type="text" data-answer="taller than"> the zebra.</p>
                <p>3. The cheetah is <input type="text" data-answer="faster than"> the lion.</p>
                <p>4. The blue whale is <input type="text" data-answer="the biggest"> animal in the world.</p>
                <p>5. Mount Everest is <input type="text" data-answer="the highest"> mountain on Earth.</p>
            </div>
            <button class="check-answers">Check Answers</button>
            <div class="feedback"></div>
            
            <style>
                .sentence-completion p {
                    margin-bottom: 1rem;
                    font-size: 1.1rem;
                }
                
                .sentence-completion input {
                    padding: 5px;
                    border: 2px solid #ccc;
                    border-radius: 5px;
                    width: 150px;
                    font-size: 1rem;
                }
                
                .sentence-completion input.correct {
                    border-color: #8bc34a;
                    background-color: #f1f8e9;
                }
                
                .sentence-completion input.incorrect {
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
        const checkButton = activity1.querySelector('.check-answers');
        checkButton.addEventListener('click', function() {
            const inputs = activity1.querySelectorAll('input');
            let correctCount = 0;
            
            inputs.forEach(input => {
                const userAnswer = input.value.trim().toLowerCase();
                const correctAnswer = input.dataset.answer.toLowerCase();
                
                if (userAnswer === correctAnswer) {
                    input.className = 'correct';
                    correctCount++;
                } else {
                    input.className = 'incorrect';
                }
            });
            
            const feedback = activity1.querySelector('.feedback');
            if (correctCount === inputs.length) {
                feedback.textContent = 'Great job! All answers are correct!';
                feedback.style.color = '#8bc34a';
            } else {
                feedback.textContent = `You got ${correctCount} out of ${inputs.length} correct. Try again!`;
                feedback.style.color = '#f44336';
            }
        });
    }
    
    // Activity 2: Match the pictures (placeholder)
    const activity2 = document.getElementById('activity-2');
    if (activity2) {
        activity2.innerHTML = `
            <div class="matching-activity">
                <p>Match the pictures to the correct comparative or superlative sentences.</p>
                <div class="matching-placeholder">
                    <p>Interactive matching activity would be implemented here.</p>
                    <p>Students would drag and drop to match pictures with sentences.</p>
                </div>
            </div>
            
            <style>
                .matching-placeholder {
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
