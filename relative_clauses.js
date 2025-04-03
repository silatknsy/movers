// JavaScript for Relative Clauses Animation

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
            <rect width="400" height="300" fill="#f3e5f5" />
            
            <!-- Person -->
            <g class="person" transform="translate(80, 150)">
                <circle cx="30" cy="30" r="25" fill="#ce93d8" /> <!-- Head -->
                <rect x="20" y="55" width="20" height="50" fill="#ba68c8" /> <!-- Body -->
                <rect x="5" y="65" width="15" height="10" fill="#ba68c8" /> <!-- Left arm -->
                <rect x="40" y="65" width="15" height="10" fill="#ba68c8" /> <!-- Right arm -->
                <rect x="20" y="105" width="10" height="30" fill="#ba68c8" /> <!-- Left leg -->
                <rect x="30" y="105" width="10" height="30" fill="#ba68c8" /> <!-- Right leg -->
                <circle cx="20" cy="25" r="5" fill="#333" /> <!-- Left eye -->
                <circle cx="40" cy="25" r="5" fill="#333" /> <!-- Right eye -->
                <path d="M 20,40 Q 30,50 40,40" fill="none" stroke="#333" stroke-width="2" /> <!-- Smile -->
                <rect x="10" y="10" width="40" height="10" fill="#9c27b0" /> <!-- Hat -->
            </g>
            
            <!-- Thing -->
            <g class="thing" transform="translate(200, 150)">
                <rect x="10" y="40" width="60" height="40" fill="#ffcc80" /> <!-- Book -->
                <rect x="10" y="40" width="60" height="5" fill="#ffb74d" /> <!-- Book top -->
                <rect x="10" y="75" width="60" height="5" fill="#ffb74d" /> <!-- Book bottom -->
                <path d="M 40,50 L 50,60 L 40,70 L 30,60 Z" fill="#ff9800" /> <!-- Book decoration -->
            </g>
            
            <!-- Place -->
            <g class="place" transform="translate(320, 150)">
                <rect x="0" y="40" width="60" height="40" fill="#a5d6a7" /> <!-- Park -->
                <rect x="10" y="60" width="10" height="20" fill="#66bb6a" /> <!-- Tree trunk -->
                <circle cx="15" cy="50" r="10" fill="#66bb6a" /> <!-- Tree top -->
                <rect x="40" y="70" width="10" height="10" fill="#66bb6a" /> <!-- Bush -->
                <circle cx="45" cy="65" r="5" fill="#66bb6a" /> <!-- Bush top -->
            </g>
            
            <!-- Relative pronouns -->
            <g class="relative-pronoun" transform="translate(80, 100)">
                <rect width="60" height="30" rx="15" fill="#e1bee7" />
                <text x="30" y="20" text-anchor="middle" font-size="16" fill="#333">who</text>
            </g>
            
            <g class="relative-pronoun" transform="translate(200, 100)">
                <rect width="60" height="30" rx="15" fill="#e1bee7" />
                <text x="30" y="20" text-anchor="middle" font-size="16" fill="#333">which</text>
            </g>
            
            <g class="relative-pronoun" transform="translate(320, 100)">
                <rect width="60" height="30" rx="15" fill="#e1bee7" />
                <text x="30" y="20" text-anchor="middle" font-size="16" fill="#333">where</text>
            </g>
            
            <!-- Connecting lines -->
            <line x1="80" y1="115" x2="80" y2="140" stroke="#9c27b0" stroke-width="2" />
            <line x1="200" y1="115" x2="200" y2="140" stroke="#9c27b0" stroke-width="2" />
            <line x1="320" y1="115" x2="320" y2="140" stroke="#9c27b0" stroke-width="2" />
            
            <!-- Labels -->
            <text x="80" y="220" text-anchor="middle" font-size="14" fill="#333">People</text>
            <text x="200" y="220" text-anchor="middle" font-size="14" fill="#333">Things</text>
            <text x="320" y="220" text-anchor="middle" font-size="14" fill="#333">Places</text>
        </svg>
    `;
    
    // Add simple animation to the relative pronouns
    const relativePronouns = container.querySelectorAll('.relative-pronoun');
    
    relativePronouns.forEach((pronoun, index) => {
        let delay = index * 300;
        setTimeout(() => {
            pronoun.style.transform = 'scale(1.2)';
            pronoun.style.transition = 'transform 0.3s ease-in-out';
            
            setTimeout(() => {
                pronoun.style.transform = 'scale(1)';
            }, 300);
        }, delay);
    });
    
    // Repeat the animation every 3 seconds
    setInterval(() => {
        relativePronouns.forEach((pronoun, index) => {
            let delay = index * 300;
            setTimeout(() => {
                pronoun.style.transform = 'scale(1.2)';
                
                setTimeout(() => {
                    pronoun.style.transform = 'scale(1)';
                }, 300);
            }, delay);
        });
    }, 3000);
}

// Function to initialize the main interactive animation
function initMainAnimation() {
    const container = document.getElementById('main-animation');
    if (!container) return;
    
    // Create scenes array to hold different animation scenes
    window.scenes = [
        createWhoScene,
        createWhichScene,
        createWhereScene,
        createCombinedScene
    ];
    
    // Initialize with the first scene
    window.currentScene = 0;
    window.scenes[window.currentScene](container);
    
    // Update button states
    updateButtonStates();
}

// Create Scene 1: Who (for people)
function createWhoScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f3e5f5" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Who - For People</text>
            
            <!-- Explanation -->
            <rect x="50" y="70" width="700" height="60" rx="10" fill="#e1bee7" />
            <text x="400" y="100" text-anchor="middle" font-size="18" fill="#333">
                We use 'who' to give more information about people
            </text>
            <text x="400" y="125" text-anchor="middle" font-size="16" fill="#555">
                Example: The boy who is wearing a red hat is my friend.
            </text>
            
            <!-- Characters -->
            <g class="character" data-character="boy-red-hat" transform="translate(150, 200)">
                <circle cx="40" cy="40" r="30" fill="#ffcc80" /> <!-- Head -->
                <rect x="30" y="70" width="20" height="60" fill="#4fc3f7" /> <!-- Body -->
                <rect x="10" y="80" width="20" height="10" fill="#4fc3f7" /> <!-- Left arm -->
                <rect x="50" y="80" width="20" height="10" fill="#4fc3f7" /> <!-- Right arm -->
                <rect x="30" y="130" width="10" height="30" fill="#4fc3f7" /> <!-- Left leg -->
                <rect x="40" y="130" width="10" height="30" fill="#4fc3f7" /> <!-- Right leg -->
                <circle cx="30" cy="35" r="5" fill="#333" /> <!-- Left eye -->
                <circle cx="50" cy="35" r="5" fill="#333" /> <!-- Right eye -->
                <path d="M 30,50 Q 40,60 50,50" fill="none" stroke="#333" stroke-width="2" /> <!-- Smile -->
                <rect x="20" y="10" width="40" height="15" fill="#f44336" /> <!-- Red hat -->
            </g>
            
            <g class="character" data-character="girl-blue-dress" transform="translate(300, 200)">
                <circle cx="40" cy="40" r="30" fill="#ffcc80" /> <!-- Head -->
                <path d="M 20,70 L 60,70 L 50,130 L 30,130 Z" fill="#2196f3" /> <!-- Blue dress -->
                <rect x="30" y="130" width="10" height="30" fill="#ffcc80" /> <!-- Left leg -->
                <rect x="40" y="130" width="10" height="30" fill="#ffcc80" /> <!-- Right leg -->
                <circle cx="30" cy="35" r="5" fill="#333" /> <!-- Left eye -->
                <circle cx="50" cy="35" r="5" fill="#333" /> <!-- Right eye -->
                <path d="M 30,50 Q 40,60 50,50" fill="none" stroke="#333" stroke-width="2" /> <!-- Smile -->
            </g>
            
            <g class="character" data-character="boy-glasses" transform="translate(450, 200)">
                <circle cx="40" cy="40" r="30" fill="#ffcc80" /> <!-- Head -->
                <rect x="30" y="70" width="20" height="60" fill="#81c784" /> <!-- Body -->
                <rect x="10" y="80" width="20" height="10" fill="#81c784" /> <!-- Left arm -->
                <rect x="50" y="80" width="20" height="10" fill="#81c784" /> <!-- Right arm -->
                <rect x="30" y="130" width="10" height="30" fill="#81c784" /> <!-- Left leg -->
                <rect x="40" y="130" width="10" height="30" fill="#81c784" /> <!-- Right leg -->
                <circle cx="30" cy="35" r="5" fill="#333" /> <!-- Left eye -->
                <circle cx="50" cy="35" r="5" fill="#333" /> <!-- Right eye -->
                <path d="M 30,50 Q 40,60 50,50" fill="none" stroke="#333" stroke-width="2" /> <!-- Smile -->
                <path d="M 20,35 L 60,35" fill="none" stroke="#333" stroke-width="2" /> <!-- Glasses -->
                <path d="M 30,35 C 30,30 40,30 40,35" fill="none" stroke="#333" stroke-width="2" /> <!-- Left lens -->
                <path d="M 40,35 C 40,30 50,30 50,35" fill="none" stroke="#333" stroke-width="2" /> <!-- Right lens -->
            </g>
            
            <g class="character" data-character="teacher" transform="translate(600, 200)">
                <circle cx="40" cy="40" r="30" fill="#ffcc80" /> <!-- Head -->
                <rect x="30" y="70" width="20" height="60" fill="#a1887f" /> <!-- Body -->
                <rect x="10" y="80" width="20" height="10" fill="#a1887f" /> <!-- Left arm -->
                <rect x="50" y="80" width="20" height="10" fill="#a1887f" /> <!-- Right arm -->
                <rect x="30" y="130" width="10" height="30" fill="#a1887f" /> <!-- Left leg -->
                <rect x="40" y="130" width="10" height="30" fill="#a1887f" /> <!-- Right leg -->
                <circle cx="30" cy="35" r="5" fill="#333" /> <!-- Left eye -->
                <circle cx="50" cy="35" r="5" fill="#333" /> <!-- Right eye -->
                <path d="M 30,50 Q 40,60 50,50" fill="none" stroke="#333" stroke-width="2" /> <!-- Smile -->
                <rect x="20" y="20" width="40" height="5" fill="#333" /> <!-- Hair -->
            </g>
            
            <!-- Sentence builder -->
            <rect x="100" y="330" width="600" height="50" rx="10" fill="#f8bbd0" />
            <text x="150" y="360" text-anchor="middle" font-size="18" fill="#333">The</text>
            <text x="200" y="360" text-anchor="middle" font-size="18" fill="#333">boy</text>
            <text x="270" y="360" text-anchor="middle" font-size="18" fill="#333" class="relative-pronoun">who</text>
            <text x="400" y="360" text-anchor="middle" font-size="18" fill="#333" id="description">is wearing a red hat</text>
            <text x="550" y="360" text-anchor="middle" font-size="18" fill="#333">is my friend.</text>
        </svg>
    `;
    
    // Add click events for characters
    const characters = container.querySelectorAll('.character');
    const description = container.querySelector('#description');
    const relativePronoun = container.querySelector('.relative-pronoun');
    
    characters.forEach(character => {
        character.style.cursor = 'pointer';
        character.addEventListener('click', function() {
            const characterType = this.dataset.character;
            
            // Reset all characters
            characters.forEach(c => {
                c.style.transform = '';
            });
            
            // Highlight selected character
            this.style.transform = 'scale(1.1)';
            
            // Update sentence
            switch(characterType) {
                case 'boy-red-hat':
                    description.textContent = 'is wearing a red hat';
                    relativePronoun.textContent = 'who';
                    break;
                case 'girl-blue-dress':
                    description.textContent = 'is wearing a blue dress';
                    relativePronoun.textContent = 'who';
                    break;
                case 'boy-glasses':
                    description.textContent = 'is wearing glasses';
                    relativePronoun.textContent = 'who';
                    break;
                case 'teacher':
                    description.textContent = 'is teaching us English';
                    relativePronoun.textContent = 'who';
                    break;
            }
        });
    });
}

// Create Scene 2: Which (for things)
function createWhichScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f3e5f5" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Which - For Things</text>
            
            <!-- Explanation -->
            <rect x="50" y="70" width="700" height="60" rx="10" fill="#e1bee7" />
            <text x="400" y="100" text-anchor="middle" font-size="18" fill="#333">
                We use 'which' to give more information about things
            </text>
            <text x="400" y="125" text-anchor="middle" font-size="16" fill="#555">
                Example: The book which is on the table is mine.
            </text>
            
            <!-- Objects -->
            <g class="object" data-object="red-book" transform="translate(150, 200)">
                <rect x="10" y="40" width="60" height="40" fill="#ef9a9a" /> <!-- Red book -->
                <rect x="10" y="40" width="60" height="5" fill="#e57373" /> <!-- Book top -->
                <rect x="10" y="75" width="60" height="5" fill="#e57373" /> <!-- Book bottom -->
                <path d="M 40,50 L 50,60 L 40,70 L 30,60 Z" fill="#ef5350" /> <!-- Book decoration -->
            </g>
            
            <g class="object" data-object="blue-ball" transform="translate(300, 200)">
                <circle cx="40" cy="60" r="30" fill="#90caf9" /> <!-- Blue ball -->
                <path d="M 20,50 Q 40,30 60,50" fill="none" stroke="#64b5f6" stroke-width="2" /> <!-- Ball decoration -->
                <path d="M 20,70 Q 40,90 60,70" fill="none" stroke="#64b5f6" stroke-width="2" /> <!-- Ball decoration -->
            </g>
            
            <g class="object" data-object="green-pencil" transform="translate(450, 200)">
                <rect x="30" y="30" width="10" height="60" fill="#a5d6a7" /> <!-- Green pencil -->
                <polygon points="25,30 45,30 35,20" fill="#66bb6a" /> <!-- Pencil tip -->
                <rect x="30" y="90" width="10" height="5" fill="#ffcc80" /> <!-- Eraser -->
            </g>
            
            <g class="object" data-object="yellow-toy" transform="translate(600, 200)">
                <rect x="20" y="50" width="40" height="30" fill="#fff59d" /> <!-- Yellow toy body -->
                <circle cx="30" cy="50" r="10" fill="#fff59d" /> <!-- Toy head -->
                <circle cx="50" cy="50" r="10" fill="#fff59d" /> <!-- Toy head -->
                <rect x="25" y="80" width="10" height="20" fill="#fff59d" /> <!-- Toy leg -->
                <rect x="45" y="80" width="10" height="20" fill="#fff59d" /> <!-- Toy leg -->
                <circle cx="27" cy="47" r="3" fill="#333" /> <!-- Eye -->
                <circle cx="33" cy="47" r="3" fill="#333" /> <!-- Eye -->
                <circle cx="47" cy="47" r="3" fill="#333" /> <!-- Eye -->
                <circle cx="53" cy="47" r="3" fill="#333" /> <!-- Eye -->
            </g>
            
            <!-- Sentence builder -->
            <rect x="100" y="330" width="600" height="50" rx="10" fill="#f8bbd0" />
            <text x="150" y="360" text-anchor="middle" font-size="18" fill="#333">The</text>
            <text x="200" y="360" text-anchor="middle" font-size="18" fill="#333" id="object-name">book</text>
            <text x="270" y="360" text-anchor="middle" font-size="18" fill="#333" class="relative-pronoun">which</text>
            <text x="400" y="360" text-anchor="middle" font-size="18" fill="#333" id="description">is on the table</text>
            <text x="550" y="360" text-anchor="middle" font-size="18" fill="#333">is mine.</text>
        </svg>
    `;
    
    // Add click events for objects
    const objects = container.querySelectorAll('.object');
    const objectName = container.querySelector('#object-name');
    const description = container.querySelector('#description');
    const relativePronoun = container.querySelector('.relative-pronoun');
    
    objects.forEach(object => {
        object.style.cursor = 'pointer';
        object.addEventListener('click', function() {
            const objectType = this.dataset.object;
            
            // Reset all objects
            objects.forEach(o => {
                o.style.transform = '';
            });
            
            // Highlight selected object
            this.style.transform = 'scale(1.1)';
            
            // Update sentence
            switch(objectType) {
                case 'red-book':
                    objectName.textContent = 'book';
                    description.textContent = 'is on the table';
                    relativePronoun.textContent = 'which';
                    break;
                case 'blue-ball':
                    objectName.textContent = 'ball';
                    description.textContent = 'is blue';
                    relativePronoun.textContent = 'which';
                    break;
                case 'green-pencil':
                    objectName.textContent = 'pencil';
                    description.textContent = 'is in my pencil case';
                    relativePronoun.textContent = 'which';
                    break;
                case 'yellow-toy':
                    objectName.textContent = 'toy';
                    description.textContent = 'has four eyes';
                    relativePronoun.textContent = 'which';
                    break;
            }
        });
    });
}

// Create Scene 3: Where (for places)
function createWhereScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f3e5f5" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Where - For Places</text>
            
            <!-- Explanation -->
            <rect x="50" y="70" width="700" height="60" rx="10" fill="#e1bee7" />
            <text x="400" y="100" text-anchor="middle" font-size="18" fill="#333">
                We use 'where' to give more information about places
            </text>
            <text x="400" y="125" text-anchor="middle" font-size="16" fill="#555">
                Example: The park where we play is near my house.
            </text>
            
            <!-- Places -->
            <g class="place" data-place="park" transform="translate(150, 180)">
                <rect x="0" y="40" width="80" height="60" fill="#a5d6a7" /> <!-- Park -->
                <rect x="10" y="60" width="10" height="40" fill="#66bb6a" /> <!-- Tree trunk -->
                <circle cx="15" cy="50" r="15" fill="#66bb6a" /> <!-- Tree top -->
                <rect x="60" y="80" width="10" height="20" fill="#66bb6a" /> <!-- Bush -->
                <circle cx="65" cy="75" r="10" fill="#66bb6a" /> <!-- Bush top -->
                <rect x="30" y="90" width="20" height="10" fill="#795548" /> <!-- Bench -->
                <rect x="30" y="80" width="5" height="10" fill="#795548" /> <!-- Bench leg -->
                <rect x="45" y="80" width="5" height="10" fill="#795548" /> <!-- Bench leg -->
            </g>
            
            <g class="place" data-place="school" transform="translate(300, 180)">
                <rect x="10" y="40" width="80" height="60" fill="#ffecb3" /> <!-- School building -->
                <rect x="40" y="80" width="20" height="20" fill="#ffd54f" /> <!-- Door -->
                <rect x="20" y="50" width="15" height="15" fill="#ffd54f" /> <!-- Window -->
                <rect x="65" y="50" width="15" height="15" fill="#ffd54f" /> <!-- Window -->
                <rect x="20" y="70" width="15" height="15" fill="#ffd54f" /> <!-- Window -->
                <rect x="65" y="70" width="15" height="15" fill="#ffd54f" /> <!-- Window -->
                <rect x="40" y="20" width="20" height="20" fill="#ffd54f" /> <!-- Clock tower -->
                <circle cx="50" cy="30" r="5" fill="#fff" stroke="#333" stroke-width="1" /> <!-- Clock -->
            </g>
            
            <g class="place" data-place="beach" transform="translate(450, 180)">
                <rect x="0" y="70" width="80" height="30" fill="#ffd54f" /> <!-- Sand -->
                <rect x="0" y="40" width="80" height="30" fill="#81d4fa" /> <!-- Water -->
                <path d="M 0,70 Q 40,60 80,70" fill="none" stroke="#29b6f6" stroke-width="2" /> <!-- Wave -->
                <circle cx="60" cy="50" r="10" fill="#ffeb3b" /> <!-- Sun -->
                <rect x="20" y="80" width="5" height="20" fill="#a1887f" /> <!-- Umbrella pole -->
                <path d="M 5,80 Q 20,65 35,80" fill="#ef9a9a" /> <!-- Umbrella top -->
            </g>
            
            <g class="place" data-place="home" transform="translate(600, 180)">
                <rect x="10" y="50" width="60" height="50" fill="#e1bee7" /> <!-- House -->
                <polygon points="10,50 40,20 70,50" fill="#ce93d8" /> <!-- Roof -->
                <rect x="30" y="70" width="20" height="30" fill="#ba68c8" /> <!-- Door -->
                <rect x="20" y="60" width="10" height="10" fill="#ce93d8" /> <!-- Window -->
                <rect x="50" y="60" width="10" height="10" fill="#ce93d8" /> <!-- Window -->
                <rect x="35" y="75" width="5" height="5" fill="#ffcc80" /> <!-- Doorknob -->
            </g>
            
            <!-- Sentence builder -->
            <rect x="100" y="330" width="600" height="50" rx="10" fill="#f8bbd0" />
            <text x="150" y="360" text-anchor="middle" font-size="18" fill="#333">The</text>
            <text x="200" y="360" text-anchor="middle" font-size="18" fill="#333" id="place-name">park</text>
            <text x="270" y="360" text-anchor="middle" font-size="18" fill="#333" class="relative-pronoun">where</text>
            <text x="400" y="360" text-anchor="middle" font-size="18" fill="#333" id="description">we play</text>
            <text x="550" y="360" text-anchor="middle" font-size="18" fill="#333">is near my house.</text>
        </svg>
    `;
    
    // Add click events for places
    const places = container.querySelectorAll('.place');
    const placeName = container.querySelector('#place-name');
    const description = container.querySelector('#description');
    const relativePronoun = container.querySelector('.relative-pronoun');
    
    places.forEach(place => {
        place.style.cursor = 'pointer';
        place.addEventListener('click', function() {
            const placeType = this.dataset.place;
            
            // Reset all places
            places.forEach(p => {
                p.style.transform = '';
            });
            
            // Highlight selected place
            this.style.transform = 'scale(1.1)';
            
            // Update sentence
            switch(placeType) {
                case 'park':
                    placeName.textContent = 'park';
                    description.textContent = 'we play';
                    relativePronoun.textContent = 'where';
                    break;
                case 'school':
                    placeName.textContent = 'school';
                    description.textContent = 'I learn English';
                    relativePronoun.textContent = 'where';
                    break;
                case 'beach':
                    placeName.textContent = 'beach';
                    description.textContent = 'we swim';
                    relativePronoun.textContent = 'where';
                    break;
                case 'home':
                    placeName.textContent = 'house';
                    description.textContent = 'I live';
                    relativePronoun.textContent = 'where';
                    break;
            }
        });
    });
}

// Create Scene 4: Combined examples
function createCombinedScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f3e5f5" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Combining Sentences</text>
            
            <!-- Explanation -->
            <rect x="50" y="70" width="700" height="60" rx="10" fill="#e1bee7" />
            <text x="400" y="100" text-anchor="middle" font-size="18" fill="#333">
                Relative clauses help us join two sentences together
            </text>
            <text x="400" y="125" text-anchor="middle" font-size="16" fill="#555">
                Click on the examples to see how we can combine sentences
            </text>
            
            <!-- Examples -->
            <g class="example" data-example="who" transform="translate(150, 180)">
                <rect width="150" height="150" rx="10" fill="#e1bee7" />
                <text x="75" y="30" text-anchor="middle" font-size="18" fill="#333">who</text>
                
                <rect x="25" y="50" width="100" height="40" rx="5" fill="#d1c4e9" />
                <text x="75" y="70" text-anchor="middle" font-size="14" fill="#333">The boy is my friend.</text>
                <text x="75" y="90" text-anchor="middle" font-size="14" fill="#333">He has a red hat.</text>
                
                <rect x="25" y="100" width="100" height="40" rx="5" fill="#d1c4e9" />
                <text x="75" y="120" text-anchor="middle" font-size="14" fill="#333">The boy who has</text>
                <text x="75" y="140" text-anchor="middle" font-size="14" fill="#333">a red hat is my friend.</text>
            </g>
            
            <g class="example" data-example="which" transform="translate(325, 180)">
                <rect width="150" height="150" rx="10" fill="#e1bee7" />
                <text x="75" y="30" text-anchor="middle" font-size="18" fill="#333">which</text>
                
                <rect x="25" y="50" width="100" height="40" rx="5" fill="#d1c4e9" />
                <text x="75" y="70" text-anchor="middle" font-size="14" fill="#333">The book is mine.</text>
                <text x="75" y="90" text-anchor="middle" font-size="14" fill="#333">It is on the table.</text>
                
                <rect x="25" y="100" width="100" height="40" rx="5" fill="#d1c4e9" />
                <text x="75" y="120" text-anchor="middle" font-size="14" fill="#333">The book which is</text>
                <text x="75" y="140" text-anchor="middle" font-size="14" fill="#333">on the table is mine.</text>
            </g>
            
            <g class="example" data-example="where" transform="translate(500, 180)">
                <rect width="150" height="150" rx="10" fill="#e1bee7" />
                <text x="75" y="30" text-anchor="middle" font-size="18" fill="#333">where</text>
                
                <rect x="25" y="50" width="100" height="40" rx="5" fill="#d1c4e9" />
                <text x="75" y="70" text-anchor="middle" font-size="14" fill="#333">The park is nice.</text>
                <text x="75" y="90" text-anchor="middle" font-size="14" fill="#333">We play in the park.</text>
                
                <rect x="25" y="100" width="100" height="40" rx="5" fill="#d1c4e9" />
                <text x="75" y="120" text-anchor="middle" font-size="14" fill="#333">The park where we</text>
                <text x="75" y="140" text-anchor="middle" font-size="14" fill="#333">play is nice.</text>
            </g>
            
            <!-- Sentence builder -->
            <rect x="100" y="350" width="600" height="40" rx="10" fill="#f8bbd0" />
            <text x="400" y="375" text-anchor="middle" font-size="18" fill="#333" id="combined-sentence">
                Click on an example to see how to combine sentences
            </text>
        </svg>
    `;
    
    // Add click events for examples
    const examples = container.querySelectorAll('.example');
    const combinedSentence = container.querySelector('#combined-sentence');
    
    examples.forEach(example => {
        example.style.cursor = 'pointer';
        example.addEventListener('click', function() {
            const exampleType = this.dataset.example;
            
            // Reset all examples
            examples.forEach(e => {
                e.style.transform = '';
                e.querySelector('rect').setAttribute('fill', '#e1bee7');
            });
            
            // Highlight selected example
            this.style.transform = 'scale(1.05)';
            this.querySelector('rect').setAttribute('fill', '#ce93d8');
            
            // Update sentence
            switch(exampleType) {
                case 'who':
                    combinedSentence.textContent = 'The boy who has a red hat is my friend.';
                    break;
                case 'which':
                    combinedSentence.textContent = 'The book which is on the table is mine.';
                    break;
                case 'where':
                    combinedSentence.textContent = 'The park where we play is nice.';
                    break;
            }
        });
    });
}

// Function to initialize practice activities
function initPracticeActivities() {
    // Activity 1: Match relative pronouns
    const activity1 = document.getElementById('activity-1');
    if (activity1) {
        activity1.innerHTML = `
            <div class="matching-pronouns">
                <p>Match each relative pronoun to the correct category:</p>
                <div class="pronoun-matching-game">
                    <div class="categories">
                        <div class="category" data-pronoun="who">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#f3e5f5" />
                                <circle cx="40" cy="40" r="20" fill="#ce93d8" /> <!-- Person -->
                                <text x="40" y="70" text-anchor="middle" font-size="14" fill="#333">People</text>
                            </svg>
                        </div>
                        <div class="category" data-pronoun="which">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#f3e5f5" />
                                <rect x="20" y="30" width="40" height="30" fill="#ce93d8" /> <!-- Thing -->
                                <text x="40" y="70" text-anchor="middle" font-size="14" fill="#333">Things</text>
                            </svg>
                        </div>
                        <div class="category" data-pronoun="where">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#f3e5f5" />
                                <polygon points="20,60 40,30 60,60" fill="#ce93d8" /> <!-- Place -->
                                <rect x="30" y="50" width="20" height="10" fill="#ce93d8" /> <!-- Door -->
                                <text x="40" y="70" text-anchor="middle" font-size="14" fill="#333">Places</text>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="pronouns">
                        <button class="pronoun" data-pronoun="who">who</button>
                        <button class="pronoun" data-pronoun="which">which</button>
                        <button class="pronoun" data-pronoun="where">where</button>
                    </div>
                </div>
                
                <div class="feedback"></div>
            </div>
            
            <style>
                .matching-pronouns {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .pronoun-matching-game {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                
                .categories {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .category {
                    border: 2px solid #ccc;
                    border-radius: 10px;
                    overflow: hidden;
                }
                
                .category.matched {
                    border-color: #8bc34a;
                    background-color: #f1f8e9;
                }
                
                .pronouns {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .pronoun {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: var(--border-radius);
                    cursor: pointer;
                }
                
                .pronoun.selected {
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
        
        // Add event listeners for pronoun matching game
        let selectedPronoun = null;
        const pronouns = activity1.querySelectorAll('.pronoun');
        const categories = activity1.querySelectorAll('.category');
        const feedback = activity1.querySelector('.feedback');
        
        pronouns.forEach(pronoun => {
            pronoun.addEventListener('click', function() {
                // Deselect previously selected pronoun
                if (selectedPronoun) {
                    selectedPronoun.classList.remove('selected');
                }
                
                // Select this pronoun
                this.classList.add('selected');
                selectedPronoun = this;
            });
        });
        
        categories.forEach(category => {
            category.addEventListener('click', function() {
                if (!selectedPronoun) {
                    feedback.textContent = 'Please select a relative pronoun first!';
                    feedback.style.color = '#f44336';
                    return;
                }
                
                const categoryPronoun = this.dataset.pronoun;
                const selectedPronounValue = selectedPronoun.dataset.pronoun;
                
                if (categoryPronoun === selectedPronounValue) {
                    this.classList.add('matched');
                    selectedPronoun.disabled = true;
                    selectedPronoun.classList.remove('selected');
                    selectedPronoun = null;
                    
                    feedback.textContent = 'Correct match!';
                    feedback.style.color = '#8bc34a';
                    
                    // Check if all are matched
                    const matchedCategories = activity1.querySelectorAll('.category.matched');
                    if (matchedCategories.length === categories.length) {
                        feedback.textContent = 'Great job! You matched all the pronouns!';
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
                <p>Complete each sentence with the correct relative pronoun:</p>
                
                <div class="sentence-completion">
                    <p>1. The boy <select class="pronoun-select" data-answer="who">
                        <option value="">Choose...</option>
                        <option value="who">who</option>
                        <option value="which">which</option>
                        <option value="where">where</option>
                    </select> is wearing a red hat is my friend.</p>
                    
                    <p>2. The book <select class="pronoun-select" data-answer="which">
                        <option value="">Choose...</option>
                        <option value="who">who</option>
                        <option value="which">which</option>
                        <option value="where">where</option>
                    </select> is on the table is mine.</p>
                    
                    <p>3. The park <select class="pronoun-select" data-answer="where">
                        <option value="">Choose...</option>
                        <option value="who">who</option>
                        <option value="which">which</option>
                        <option value="where">where</option>
                    </select> we play is near my house.</p>
                    
                    <p>4. The teacher <select class="pronoun-select" data-answer="who">
                        <option value="">Choose...</option>
                        <option value="who">who</option>
                        <option value="which">which</option>
                        <option value="where">where</option>
                    </select> teaches us English is very nice.</p>
                    
                    <p>5. The toy <select class="pronoun-select" data-answer="which">
                        <option value="">Choose...</option>
                        <option value="who">who</option>
                        <option value="which">which</option>
                        <option value="where">where</option>
                    </select> I got for my birthday is my favorite.</p>
                </div>
                
                <button class="check-answers">Check Answers</button>
                <div class="feedback"></div>
            </div>
            
            <style>
                .complete-sentences p {
                    margin-bottom: 1rem;
                    font-size: 1.1rem;
                }
                
                .pronoun-select {
                    padding: 5px;
                    border: 2px solid #ccc;
                    border-radius: 5px;
                    font-size: 1rem;
                }
                
                .pronoun-select.correct {
                    border-color: #8bc34a;
                    background-color: #f1f8e9;
                }
                
                .pronoun-select.incorrect {
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
            const selects = activity2.querySelectorAll('.pronoun-select');
            let correctCount = 0;
            
            selects.forEach(select => {
                const userAnswer = select.value;
                const correctAnswer = select.dataset.answer;
                
                if (userAnswer === correctAnswer) {
                    select.className = 'pronoun-select correct';
                    correctCount++;
                } else {
                    select.className = 'pronoun-select incorrect';
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
