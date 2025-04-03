// JavaScript for Verb Forms and Tenses Animation

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
            <rect width="400" height="300" fill="#e3f2fd" />
            
            <!-- Timeline -->
            <line x1="50" y1="150" x2="350" y2="150" stroke="#1976d2" stroke-width="3" />
            
            <!-- Past -->
            <circle cx="100" cy="150" r="10" fill="#1976d2" />
            <text x="100" y="180" text-anchor="middle" font-size="14" fill="#333">Past</text>
            <text x="100" y="200" text-anchor="middle" font-size="12" fill="#555">played</text>
            
            <!-- Present -->
            <circle cx="200" cy="150" r="10" fill="#1976d2" />
            <text x="200" y="180" text-anchor="middle" font-size="14" fill="#333">Present</text>
            <text x="200" y="200" text-anchor="middle" font-size="12" fill="#555">play/playing</text>
            
            <!-- Future -->
            <circle cx="300" cy="150" r="10" fill="#1976d2" />
            <text x="300" y="180" text-anchor="middle" font-size="14" fill="#333">Future</text>
            <text x="300" y="200" text-anchor="middle" font-size="12" fill="#555">will play</text>
            
            <!-- Verb forms -->
            <rect x="50" y="50" width="100" height="40" rx="5" fill="#bbdefb" />
            <text x="100" y="75" text-anchor="middle" font-size="14" fill="#333">Verb Tenses</text>
            
            <rect x="250" y="50" width="100" height="40" rx="5" fill="#bbdefb" />
            <text x="300" y="75" text-anchor="middle" font-size="14" fill="#333">Verb Patterns</text>
            
            <!-- Connecting lines -->
            <line x1="100" y1="90" x2="100" y2="140" stroke="#1976d2" stroke-width="2" />
            <line x1="300" y1="90" x2="300" y2="140" stroke="#1976d2" stroke-width="2" />
        </svg>
    `;
}

// Function to initialize the main interactive animation
function initMainAnimation() {
    const container = document.getElementById('main-animation');
    if (!container) return;
    
    // Create scenes array to hold different animation scenes
    window.scenes = [
        createPresentSimpleScene,
        createPresentContinuousScene,
        createPastSimpleScene,
        createFutureScene,
        createVerbPatternsScene
    ];
    
    // Initialize with the first scene
    window.currentScene = 0;
    window.scenes[window.currentScene](container);
    
    // Update button states
    updateButtonStates();
}

// Create Scene 1: Present Simple
function createPresentSimpleScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e3f2fd" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Present Simple</text>
            
            <!-- Explanation -->
            <rect x="50" y="70" width="700" height="60" rx="10" fill="#bbdefb" />
            <text x="400" y="100" text-anchor="middle" font-size="18" fill="#333">
                We use the present simple for habits, routines, and facts
            </text>
            <text x="400" y="125" text-anchor="middle" font-size="16" fill="#555">
                Example: I play football every day. She likes ice cream.
            </text>
            
            <!-- Character -->
            <g class="character" transform="translate(150, 200)">
                <circle cx="40" cy="40" r="30" fill="#ffcc80" /> <!-- Head -->
                <rect x="30" y="70" width="20" height="60" fill="#4fc3f7" /> <!-- Body -->
                <rect x="10" y="80" width="20" height="10" fill="#4fc3f7" /> <!-- Left arm -->
                <rect x="50" y="80" width="20" height="10" fill="#4fc3f7" /> <!-- Right arm -->
                <rect x="30" y="130" width="10" height="30" fill="#4fc3f7" /> <!-- Left leg -->
                <rect x="40" y="130" width="10" height="30" fill="#4fc3f7" /> <!-- Right leg -->
                <circle cx="30" cy="35" r="5" fill="#333" /> <!-- Left eye -->
                <circle cx="50" cy="35" r="5" fill="#333" /> <!-- Right eye -->
                <path d="M 30,50 Q 40,60 50,50" fill="none" stroke="#333" stroke-width="2" /> <!-- Smile -->
            </g>
            
            <!-- Football -->
            <circle cx="250" cy="250" r="20" fill="white" stroke="#333" stroke-width="2" />
            <path d="M 250,230 L 250,270 M 230,250 L 270,250" stroke="#333" stroke-width="2" />
            
            <!-- Time expressions -->
            <g class="time-expression" data-time="every-day" transform="translate(400, 180)">
                <rect width="120" height="40" rx="5" fill="#90caf9" />
                <text x="60" y="25" text-anchor="middle" font-size="16" fill="#333">every day</text>
            </g>
            
            <g class="time-expression" data-time="usually" transform="translate(400, 230)">
                <rect width="120" height="40" rx="5" fill="#90caf9" />
                <text x="60" y="25" text-anchor="middle" font-size="16" fill="#333">usually</text>
            </g>
            
            <g class="time-expression" data-time="always" transform="translate(400, 280)">
                <rect width="120" height="40" rx="5" fill="#90caf9" />
                <text x="60" y="25" text-anchor="middle" font-size="16" fill="#333">always</text>
            </g>
            
            <!-- Sentence builder -->
            <rect x="100" y="330" width="600" height="50" rx="10" fill="#e1f5fe" />
            <text x="150" y="360" text-anchor="middle" font-size="18" fill="#333" id="subject">I</text>
            <text x="250" y="360" text-anchor="middle" font-size="18" fill="#333" id="verb">play</text>
            <text x="350" y="360" text-anchor="middle" font-size="18" fill="#333" id="object">football</text>
            <text x="500" y="360" text-anchor="middle" font-size="18" fill="#333" id="time-expression">every day</text>
        </svg>
    `;
    
    // Add click events for time expressions
    const timeExpressions = container.querySelectorAll('.time-expression');
    const timeExpressionText = container.querySelector('#time-expression');
    
    timeExpressions.forEach(expression => {
        expression.style.cursor = 'pointer';
        expression.addEventListener('click', function() {
            const time = this.dataset.time;
            
            // Reset all expressions
            timeExpressions.forEach(e => {
                e.style.transform = '';
                e.querySelector('rect').setAttribute('fill', '#90caf9');
            });
            
            // Highlight selected expression
            this.style.transform = 'scale(1.1)';
            this.querySelector('rect').setAttribute('fill', '#42a5f5');
            
            // Update sentence
            switch(time) {
                case 'every-day':
                    timeExpressionText.textContent = 'every day';
                    break;
                case 'usually':
                    timeExpressionText.textContent = 'usually';
                    break;
                case 'always':
                    timeExpressionText.textContent = 'always';
                    break;
            }
        });
    });
}

// Create Scene 2: Present Continuous
function createPresentContinuousScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e3f2fd" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Present Continuous</text>
            
            <!-- Explanation -->
            <rect x="50" y="70" width="700" height="60" rx="10" fill="#bbdefb" />
            <text x="400" y="100" text-anchor="middle" font-size="18" fill="#333">
                We use the present continuous for actions happening now
            </text>
            <text x="400" y="125" text-anchor="middle" font-size="16" fill="#555">
                Example: I am playing football now. She is reading a book.
            </text>
            
            <!-- Character with animation -->
            <g class="character" transform="translate(150, 200)">
                <circle cx="40" cy="40" r="30" fill="#ffcc80" /> <!-- Head -->
                <rect x="30" y="70" width="20" height="60" fill="#4fc3f7" /> <!-- Body -->
                <rect x="10" y="80" width="20" height="10" fill="#4fc3f7" class="left-arm" /> <!-- Left arm -->
                <rect x="50" y="80" width="20" height="10" fill="#4fc3f7" class="right-arm" /> <!-- Right arm -->
                <rect x="30" y="130" width="10" height="30" fill="#4fc3f7" class="left-leg" /> <!-- Left leg -->
                <rect x="40" y="130" width="10" height="30" fill="#4fc3f7" class="right-leg" /> <!-- Right leg -->
                <circle cx="30" cy="35" r="5" fill="#333" /> <!-- Left eye -->
                <circle cx="50" cy="35" r="5" fill="#333" /> <!-- Right eye -->
                <path d="M 30,50 Q 40,60 50,50" fill="none" stroke="#333" stroke-width="2" /> <!-- Smile -->
            </g>
            
            <!-- Football -->
            <circle cx="250" cy="250" r="20" fill="white" stroke="#333" stroke-width="2" class="football" />
            
            <!-- Time expressions -->
            <g class="time-expression" data-time="now" transform="translate(400, 180)">
                <rect width="120" height="40" rx="5" fill="#90caf9" />
                <text x="60" y="25" text-anchor="middle" font-size="16" fill="#333">now</text>
            </g>
            
            <g class="time-expression" data-time="at-the-moment" transform="translate(400, 230)">
                <rect width="120" height="40" rx="5" fill="#90caf9" />
                <text x="60" y="25" text-anchor="middle" font-size="16" fill="#333">at the moment</text>
            </g>
            
            <g class="time-expression" data-time="today" transform="translate(400, 280)">
                <rect width="120" height="40" rx="5" fill="#90caf9" />
                <text x="60" y="25" text-anchor="middle" font-size="16" fill="#333">today</text>
            </g>
            
            <!-- Sentence builder -->
            <rect x="100" y="330" width="600" height="50" rx="10" fill="#e1f5fe" />
            <text x="150" y="360" text-anchor="middle" font-size="18" fill="#333" id="subject">I</text>
            <text x="250" y="360" text-anchor="middle" font-size="18" fill="#333" id="verb">am playing</text>
            <text x="350" y="360" text-anchor="middle" font-size="18" fill="#333" id="object">football</text>
            <text x="500" y="360" text-anchor="middle" font-size="18" fill="#333" id="time-expression">now</text>
        </svg>
    `;
    
    // Add animation to character
    const leftArm = container.querySelector('.left-arm');
    const rightArm = container.querySelector('.right-arm');
    const leftLeg = container.querySelector('.left-leg');
    const rightLeg = container.querySelector('.right-leg');
    const football = container.querySelector('.football');
    
    // Set animation with CSS
    leftArm.style.animation = 'swing 1s infinite alternate';
    rightArm.style.animation = 'swing 1s infinite alternate-reverse';
    leftLeg.style.animation = 'swing 0.5s infinite alternate';
    rightLeg.style.animation = 'swing 0.5s infinite alternate-reverse';
    football.style.animation = 'bounce 1s infinite alternate';
    
    // Add styles for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes swing {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(20deg); }
        }
        
        @keyframes bounce {
            0% { transform: translateY(0); }
            100% { transform: translateY(-20px); }
        }
    `;
    document.head.appendChild(style);
    
    // Add click events for time expressions
    const timeExpressions = container.querySelectorAll('.time-expression');
    const timeExpressionText = container.querySelector('#time-expression');
    
    timeExpressions.forEach(expression => {
        expression.style.cursor = 'pointer';
        expression.addEventListener('click', function() {
            const time = this.dataset.time;
            
            // Reset all expressions
            timeExpressions.forEach(e => {
                e.style.transform = '';
                e.querySelector('rect').setAttribute('fill', '#90caf9');
            });
            
            // Highlight selected expression
            this.style.transform = 'scale(1.1)';
            this.querySelector('rect').setAttribute('fill', '#42a5f5');
            
            // Update sentence
            switch(time) {
                case 'now':
                    timeExpressionText.textContent = 'now';
                    break;
                case 'at-the-moment':
                    timeExpressionText.textContent = 'at the moment';
                    break;
                case 'today':
                    timeExpressionText.textContent = 'today';
                    break;
            }
        });
    });
}

// Create Scene 3: Past Simple
function createPastSimpleScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e3f2fd" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Past Simple</text>
            
            <!-- Explanation -->
            <rect x="50" y="70" width="700" height="60" rx="10" fill="#bbdefb" />
            <text x="400" y="100" text-anchor="middle" font-size="18" fill="#333">
                We use the past simple for completed actions in the past
            </text>
            <text x="400" y="125" text-anchor="middle" font-size="16" fill="#555">
                Example: I played football yesterday. She visited her grandmother.
            </text>
            
            <!-- Timeline -->
            <line x1="100" y1="200" x2="600" y2="200" stroke="#1976d2" stroke-width="3" />
            <circle cx="200" cy="200" r="10" fill="#1976d2" />
            <text x="200" y="230" text-anchor="middle" font-size="16" fill="#333">Past</text>
            <circle cx="400" cy="200" r="10" fill="#1976d2" />
            <text x="400" y="230" text-anchor="middle" font-size="16" fill="#333">Present</text>
            <circle cx="600" cy="200" r="10" fill="#1976d2" />
            <text x="600" y="230" text-anchor="middle" font-size="16" fill="#333">Future</text>
            
            <!-- Action in past -->
            <g class="past-action" transform="translate(150, 150)">
                <circle cx="40" cy="40" r="20" fill="#ffcc80" /> <!-- Head -->
                <rect x="35" y="60" width="10" height="30" fill="#4fc3f7" /> <!-- Body -->
                <rect x="25" y="65" width="10" height="5" fill="#4fc3f7" /> <!-- Left arm -->
                <rect x="45" y="65" width="10" height="5" fill="#4fc3f7" /> <!-- Right arm -->
                <rect x="35" y="90" width="5" height="15" fill="#4fc3f7" /> <!-- Left leg -->
                <rect x="40" y="90" width="5" height="15" fill="#4fc3f7" /> <!-- Right leg -->
                <circle cx="35" cy="35" r="3" fill="#333" /> <!-- Left eye -->
                <circle cx="45" cy="35" r="3" fill="#333" /> <!-- Right eye -->
                <path d="M 35,45 Q 40,50 45,45" fill="none" stroke="#333" stroke-width="1" /> <!-- Smile -->
                
                <circle cx="70" cy="80" r="10" fill="white" stroke="#333" stroke-width="1" /> <!-- Football -->
            </g>
            
            <!-- Time expressions -->
            <g class="time-expression" data-time="yesterday" transform="translate(150, 280)">
                <rect width="120" height="40" rx="5" fill="#90caf9" />
                <text x="60" y="25" text-anchor="middle" font-size="16" fill="#333">yesterday</text>
            </g>
            
            <g class="time-expression" data-time="last-week" transform="translate(300, 280)">
                <rect width="120" height="40" rx="5" fill="#90caf9" />
                <text x="60" y="25" text-anchor="middle" font-size="16" fill="#333">last week</text>
            </g>
            
            <g class="time-expression" data-time="ago" transform="translate(450, 280)">
                <rect width="120" height="40" rx="5" fill="#90caf9" />
                <text x="60" y="25" text-anchor="middle" font-size="16" fill="#333">two days ago</text>
            </g>
            
            <!-- Sentence builder -->
            <rect x="100" y="330" width="600" height="50" rx="10" fill="#e1f5fe" />
            <text x="150" y="360" text-anchor="middle" font-size="18" fill="#333" id="subject">I</text>
            <text x="250" y="360" text-anchor="middle" font-size="18" fill="#333" id="verb">played</text>
            <text x="350" y="360" text-anchor="middle" font-size="18" fill="#333" id="object">football</text>
            <text x="500" y="360" text-anchor="middle" font-size="18" fill="#333" id="time-expression">yesterday</text>
        </svg>
    `;
    
    // Add click events for time expressions
    const timeExpressions = container.querySelectorAll('.time-expression');
    const timeExpressionText = container.querySelector('#time-expression');
    
    timeExpressions.forEach(expression => {
        expression.style.cursor = 'pointer';
        expression.addEventListener('click', function() {
            const time = this.dataset.time;
            
            // Reset all expressions
            timeExpressions.forEach(e => {
                e.style.transform = '';
                e.querySelector('rect').setAttribute('fill', '#90caf9');
            });
            
            // Highlight selected expression
            this.style.transform = 'scale(1.1)';
            this.querySelector('rect').setAttribute('fill', '#42a5f5');
            
            // Update sentence
            switch(time) {
                case 'yesterday':
                    timeExpressionText.textContent = 'yesterday';
                    break;
                case 'last-week':
                    timeExpressionText.textContent = 'last week';
                    break;
                case 'ago':
                    timeExpressionText.textContent = 'two days ago';
                    break;
            }
        });
    });
}

// Create Scene 4: Future (Going to)
function createFutureScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e3f2fd" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Future (Going to)</text>
            
            <!-- Explanation -->
            <rect x="50" y="70" width="700" height="60" rx="10" fill="#bbdefb" />
            <text x="400" y="100" text-anchor="middle" font-size="18" fill="#333">
                We use 'going to' for future plans and intentions
            </text>
            <text x="400" y="125" text-anchor="middle" font-size="16" fill="#555">
                Example: I am going to play football tomorrow. She is going to visit her friend.
            </text>
            
            <!-- Timeline -->
            <line x1="100" y1="200" x2="600" y2="200" stroke="#1976d2" stroke-width="3" />
            <circle cx="200" cy="200" r="10" fill="#1976d2" />
            <text x="200" y="230" text-anchor="middle" font-size="16" fill="#333">Past</text>
            <circle cx="400" cy="200" r="10" fill="#1976d2" />
            <text x="400" y="230" text-anchor="middle" font-size="16" fill="#333">Present</text>
            <circle cx="600" cy="200" r="10" fill="#1976d2" />
            <text x="600" y="230" text-anchor="middle" font-size="16" fill="#333">Future</text>
            
            <!-- Action in future -->
            <g class="future-action" transform="translate(550, 150)">
                <circle cx="40" cy="40" r="20" fill="#ffcc80" /> <!-- Head -->
                <rect x="35" y="60" width="10" height="30" fill="#4fc3f7" /> <!-- Body -->
                <rect x="25" y="65" width="10" height="5" fill="#4fc3f7" /> <!-- Left arm -->
                <rect x="45" y="65" width="10" height="5" fill="#4fc3f7" /> <!-- Right arm -->
                <rect x="35" y="90" width="5" height="15" fill="#4fc3f7" /> <!-- Left leg -->
                <rect x="40" y="90" width="5" height="15" fill="#4fc3f7" /> <!-- Right leg -->
                <circle cx="35" cy="35" r="3" fill="#333" /> <!-- Left eye -->
                <circle cx="45" cy="35" r="3" fill="#333" /> <!-- Right eye -->
                <path d="M 35,45 Q 40,50 45,45" fill="none" stroke="#333" stroke-width="1" /> <!-- Smile -->
                
                <circle cx="70" cy="80" r="10" fill="white" stroke="#333" stroke-width="1" /> <!-- Football -->
            </g>
            
            <!-- Thought bubble -->
            <path d="M 500,150 Q 520,130 540,140" fill="none" stroke="#333" stroke-width="2" />
            <circle cx="500" cy="150" r="5" fill="white" stroke="#333" stroke-width="2" />
            <circle cx="490" cy="140" r="3" fill="white" stroke="#333" stroke-width="2" />
            <ellipse cx="450" cy="120" rx="40" ry="30" fill="white" stroke="#333" stroke-width="2" />
            <text x="450" y="125" text-anchor="middle" font-size="12" fill="#333">I'm going to play</text>
            
            <!-- Time expressions -->
            <g class="time-expression" data-time="tomorrow" transform="translate(150, 280)">
                <rect width="120" height="40" rx="5" fill="#90caf9" />
                <text x="60" y="25" text-anchor="middle" font-size="16" fill="#333">tomorrow</text>
            </g>
            
            <g class="time-expression" data-time="next-week" transform="translate(300, 280)">
                <rect width="120" height="40" rx="5" fill="#90caf9" />
                <text x="60" y="25" text-anchor="middle" font-size="16" fill="#333">next week</text>
            </g>
            
            <g class="time-expression" data-time="weekend" transform="translate(450, 280)">
                <rect width="120" height="40" rx="5" fill="#90caf9" />
                <text x="60" y="25" text-anchor="middle" font-size="16" fill="#333">this weekend</text>
            </g>
            
            <!-- Sentence builder -->
            <rect x="100" y="330" width="600" height="50" rx="10" fill="#e1f5fe" />
            <text x="150" y="360" text-anchor="middle" font-size="18" fill="#333" id="subject">I</text>
            <text x="280" y="360" text-anchor="middle" font-size="18" fill="#333" id="verb">am going to play</text>
            <text x="400" y="360" text-anchor="middle" font-size="18" fill="#333" id="object">football</text>
            <text x="550" y="360" text-anchor="middle" font-size="18" fill="#333" id="time-expression">tomorrow</text>
        </svg>
    `;
    
    // Add click events for time expressions
    const timeExpressions = container.querySelectorAll('.time-expression');
    const timeExpressionText = container.querySelector('#time-expression');
    
    timeExpressions.forEach(expression => {
        expression.style.cursor = 'pointer';
        expression.addEventListener('click', function() {
            const time = this.dataset.time;
            
            // Reset all expressions
            timeExpressions.forEach(e => {
                e.style.transform = '';
                e.querySelector('rect').setAttribute('fill', '#90caf9');
            });
            
            // Highlight selected expression
            this.style.transform = 'scale(1.1)';
            this.querySelector('rect').setAttribute('fill', '#42a5f5');
            
            // Update sentence
            switch(time) {
                case 'tomorrow':
                    timeExpressionText.textContent = 'tomorrow';
                    break;
                case 'next-week':
                    timeExpressionText.textContent = 'next week';
                    break;
                case 'weekend':
                    timeExpressionText.textContent = 'this weekend';
                    break;
            }
        });
    });
}

// Create Scene 5: Verb Patterns
function createVerbPatternsScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e3f2fd" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Verb Patterns</text>
            
            <!-- Explanation -->
            <rect x="50" y="70" width="700" height="60" rx="10" fill="#bbdefb" />
            <text x="400" y="100" text-anchor="middle" font-size="18" fill="#333">
                Different verbs follow different patterns
            </text>
            <text x="400" y="125" text-anchor="middle" font-size="16" fill="#555">
                Example: I want to play. I enjoy playing. I can swim.
            </text>
            
            <!-- Verb + infinitive -->
            <g class="verb-pattern" data-pattern="infinitive" transform="translate(150, 180)">
                <rect width="150" height="150" rx="10" fill="#e1f5fe" />
                <text x="75" y="30" text-anchor="middle" font-size="18" fill="#333">Verb + to + verb</text>
                
                <rect x="25" y="50" width="100" height="40" rx="5" fill="#b3e5fc" />
                <text x="75" y="75" text-anchor="middle" font-size="16" fill="#333">want to play</text>
                
                <rect x="25" y="100" width="100" height="40" rx="5" fill="#b3e5fc" />
                <text x="75" y="125" text-anchor="middle" font-size="16" fill="#333">need to eat</text>
            </g>
            
            <!-- Verb + -ing -->
            <g class="verb-pattern" data-pattern="ing" transform="translate(325, 180)">
                <rect width="150" height="150" rx="10" fill="#e1f5fe" />
                <text x="75" y="30" text-anchor="middle" font-size="18" fill="#333">Verb + -ing</text>
                
                <rect x="25" y="50" width="100" height="40" rx="5" fill="#b3e5fc" />
                <text x="75" y="75" text-anchor="middle" font-size="16" fill="#333">enjoy playing</text>
                
                <rect x="25" y="100" width="100" height="40" rx="5" fill="#b3e5fc" />
                <text x="75" y="125" text-anchor="middle" font-size="16" fill="#333">like swimming</text>
            </g>
            
            <!-- Modal verbs -->
            <g class="verb-pattern" data-pattern="modal" transform="translate(500, 180)">
                <rect width="150" height="150" rx="10" fill="#e1f5fe" />
                <text x="75" y="30" text-anchor="middle" font-size="18" fill="#333">Modal + verb</text>
                
                <rect x="25" y="50" width="100" height="40" rx="5" fill="#b3e5fc" />
                <text x="75" y="75" text-anchor="middle" font-size="16" fill="#333">can swim</text>
                
                <rect x="25" y="100" width="100" height="40" rx="5" fill="#b3e5fc" />
                <text x="75" y="125" text-anchor="middle" font-size="16" fill="#333">must go</text>
            </g>
            
            <!-- Sentence builder -->
            <rect x="100" y="350" width="600" height="40" rx="10" fill="#e1f5fe" />
            <text x="400" y="375" text-anchor="middle" font-size="18" fill="#333" id="pattern-sentence">
                Click on a pattern to see examples
            </text>
        </svg>
    `;
    
    // Add click events for verb patterns
    const verbPatterns = container.querySelectorAll('.verb-pattern');
    const patternSentence = container.querySelector('#pattern-sentence');
    
    verbPatterns.forEach(pattern => {
        pattern.style.cursor = 'pointer';
        pattern.addEventListener('click', function() {
            const verbPattern = this.dataset.pattern;
            
            // Reset all patterns
            verbPatterns.forEach(p => {
                p.style.transform = '';
                p.querySelector('rect').setAttribute('fill', '#e1f5fe');
            });
            
            // Highlight selected pattern
            this.style.transform = 'scale(1.05)';
            this.querySelector('rect').setAttribute('fill', '#81d4fa');
            
            // Update sentence
            switch(verbPattern) {
                case 'infinitive':
                    patternSentence.textContent = 'I want to play football with my friends.';
                    break;
                case 'ing':
                    patternSentence.textContent = 'I enjoy playing football in the park.';
                    break;
                case 'modal':
                    patternSentence.textContent = 'I can play football very well.';
                    break;
            }
        });
    });
}

// Function to initialize practice activities
function initPracticeActivities() {
    // Activity 1: Match tenses to time expressions
    const activity1 = document.getElementById('activity-1');
    if (activity1) {
        activity1.innerHTML = `
            <div class="matching-tenses">
                <p>Match each tense to the correct time expression:</p>
                <div class="tense-matching-game">
                    <div class="time-expressions">
                        <div class="time-expression" data-tense="present-simple">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#e3f2fd" />
                                <text x="40" y="30" text-anchor="middle" font-size="14" fill="#333">every day</text>
                                <line x1="20" y1="50" x2="60" y2="50" stroke="#1976d2" stroke-width="2" />
                                <circle cx="40" cy="50" r="5" fill="#1976d2" />
                            </svg>
                        </div>
                        <div class="time-expression" data-tense="present-continuous">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#e3f2fd" />
                                <text x="40" y="30" text-anchor="middle" font-size="14" fill="#333">now</text>
                                <line x1="20" y1="50" x2="60" y2="50" stroke="#1976d2" stroke-width="2" />
                                <circle cx="40" cy="50" r="5" fill="#1976d2" />
                            </svg>
                        </div>
                        <div class="time-expression" data-tense="past-simple">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#e3f2fd" />
                                <text x="40" y="30" text-anchor="middle" font-size="14" fill="#333">yesterday</text>
                                <line x1="20" y1="50" x2="60" y2="50" stroke="#1976d2" stroke-width="2" />
                                <circle cx="40" cy="50" r="5" fill="#1976d2" />
                            </svg>
                        </div>
                        <div class="time-expression" data-tense="future">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#e3f2fd" />
                                <text x="40" y="30" text-anchor="middle" font-size="14" fill="#333">tomorrow</text>
                                <line x1="20" y1="50" x2="60" y2="50" stroke="#1976d2" stroke-width="2" />
                                <circle cx="40" cy="50" r="5" fill="#1976d2" />
                            </svg>
                        </div>
                    </div>
                    
                    <div class="tenses">
                        <button class="tense" data-tense="present-simple">Present Simple</button>
                        <button class="tense" data-tense="present-continuous">Present Continuous</button>
                        <button class="tense" data-tense="past-simple">Past Simple</button>
                        <button class="tense" data-tense="future">Future (going to)</button>
                    </div>
                </div>
                
                <div class="feedback"></div>
            </div>
            
            <style>
                .matching-tenses {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .tense-matching-game {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                
                .time-expressions {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .time-expression {
                    border: 2px solid #ccc;
                    border-radius: 10px;
                    overflow: hidden;
                }
                
                .time-expression.matched {
                    border-color: #8bc34a;
                    background-color: #f1f8e9;
                }
                
                .tenses {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .tense {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: var(--border-radius);
                    cursor: pointer;
                }
                
                .tense.selected {
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
        
        // Add event listeners for tense matching game
        let selectedTense = null;
        const tenses = activity1.querySelectorAll('.tense');
        const timeExpressions = activity1.querySelectorAll('.time-expression');
        const feedback = activity1.querySelector('.feedback');
        
        tenses.forEach(tense => {
            tense.addEventListener('click', function() {
                // Deselect previously selected tense
                if (selectedTense) {
                    selectedTense.classList.remove('selected');
                }
                
                // Select this tense
                this.classList.add('selected');
                selectedTense = this;
            });
        });
        
        timeExpressions.forEach(expression => {
            expression.addEventListener('click', function() {
                if (!selectedTense) {
                    feedback.textContent = 'Please select a tense first!';
                    feedback.style.color = '#f44336';
                    return;
                }
                
                const expressionTense = this.dataset.tense;
                const selectedTenseValue = selectedTense.dataset.tense;
                
                if (expressionTense === selectedTenseValue) {
                    this.classList.add('matched');
                    selectedTense.disabled = true;
                    selectedTense.classList.remove('selected');
                    selectedTense = null;
                    
                    feedback.textContent = 'Correct match!';
                    feedback.style.color = '#8bc34a';
                    
                    // Check if all are matched
                    const matchedExpressions = activity1.querySelectorAll('.time-expression.matched');
                    if (matchedExpressions.length === timeExpressions.length) {
                        feedback.textContent = 'Great job! You matched all the tenses!';
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
                <p>Complete each sentence with the correct verb form:</p>
                
                <div class="sentence-completion">
                    <p>1. I <select class="verb-select" data-answer="play">
                        <option value="">Choose...</option>
                        <option value="play">play</option>
                        <option value="am playing">am playing</option>
                        <option value="played">played</option>
                        <option value="am going to play">am going to play</option>
                    </select> football every Saturday.</p>
                    
                    <p>2. Look! She <select class="verb-select" data-answer="is reading">
                        <option value="">Choose...</option>
                        <option value="reads">reads</option>
                        <option value="is reading">is reading</option>
                        <option value="read">read</option>
                        <option value="is going to read">is going to read</option>
                    </select> a book now.</p>
                    
                    <p>3. We <select class="verb-select" data-answer="visited">
                        <option value="">Choose...</option>
                        <option value="visit">visit</option>
                        <option value="are visiting">are visiting</option>
                        <option value="visited">visited</option>
                        <option value="are going to visit">are going to visit</option>
                    </select> our grandparents yesterday.</p>
                    
                    <p>4. They <select class="verb-select" data-answer="are going to watch">
                        <option value="">Choose...</option>
                        <option value="watch">watch</option>
                        <option value="are watching">are watching</option>
                        <option value="watched">watched</option>
                        <option value="are going to watch">are going to watch</option>
                    </select> a movie tomorrow.</p>
                    
                    <p>5. I <select class="verb-select" data-answer="want to play">
                        <option value="">Choose...</option>
                        <option value="want play">want play</option>
                        <option value="want playing">want playing</option>
                        <option value="want to play">want to play</option>
                        <option value="wanting to play">wanting to play</option>
                    </select> with my new computer game.</p>
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
