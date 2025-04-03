// JavaScript for Time Expressions Animation

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
            
            <!-- Clock -->
            <circle cx="200" cy="120" r="60" fill="white" stroke="#2e7d32" stroke-width="3" />
            <circle cx="200" cy="120" r="5" fill="#2e7d32" />
            
            <!-- Clock hands -->
            <line x1="200" y1="120" x2="200" y2="80" stroke="#2e7d32" stroke-width="3" class="hour-hand" />
            <line x1="200" y1="120" x2="230" y2="120" stroke="#2e7d32" stroke-width="2" class="minute-hand" />
            
            <!-- Clock numbers -->
            <text x="200" y="70" text-anchor="middle" font-size="14" fill="#333">12</text>
            <text x="250" y="120" text-anchor="middle" font-size="14" fill="#333">3</text>
            <text x="200" y="170" text-anchor="middle" font-size="14" fill="#333">6</text>
            <text x="150" y="120" text-anchor="middle" font-size="14" fill="#333">9</text>
            
            <!-- Time expressions -->
            <g class="time-expression" transform="translate(80, 220)">
                <rect width="80" height="30" rx="15" fill="#a5d6a7" />
                <text x="40" y="20" text-anchor="middle" font-size="14" fill="#333">on Monday</text>
            </g>
            
            <g class="time-expression" transform="translate(170, 220)">
                <rect width="80" height="30" rx="15" fill="#a5d6a7" />
                <text x="40" y="20" text-anchor="middle" font-size="14" fill="#333">at 3 o'clock</text>
            </g>
            
            <g class="time-expression" transform="translate(260, 220)">
                <rect width="80" height="30" rx="15" fill="#a5d6a7" />
                <text x="40" y="20" text-anchor="middle" font-size="14" fill="#333">after school</text>
            </g>
        </svg>
    `;
    
    // Add animation to clock hands
    const hourHand = container.querySelector('.hour-hand');
    const minuteHand = container.querySelector('.minute-hand');
    
    // Set animation with CSS
    hourHand.style.animation = 'rotate 12s linear infinite';
    minuteHand.style.animation = 'rotate 1s linear infinite';
    
    // Add styles for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rotate {
            from { transform: rotate(0deg); transform-origin: bottom; }
            to { transform: rotate(360deg); transform-origin: bottom; }
        }
    `;
    document.head.appendChild(style);
    
    // Add simple animation to the time expressions
    const timeExpressions = container.querySelectorAll('.time-expression');
    
    timeExpressions.forEach((expression, index) => {
        let delay = index * 300;
        setTimeout(() => {
            expression.style.transform = 'scale(1.2)';
            expression.style.transition = 'transform 0.3s ease-in-out';
            
            setTimeout(() => {
                expression.style.transform = 'scale(1)';
            }, 300);
        }, delay);
    });
    
    // Repeat the animation every 3 seconds
    setInterval(() => {
        timeExpressions.forEach((expression, index) => {
            let delay = index * 300;
            setTimeout(() => {
                expression.style.transform = 'scale(1.2)';
                
                setTimeout(() => {
                    expression.style.transform = 'scale(1)';
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
        createDaysOfWeekScene,
        createPartsOfDayScene,
        createSpecificTimesScene,
        createTimeClausesScene
    ];
    
    // Initialize with the first scene
    window.currentScene = 0;
    window.scenes[window.currentScene](container);
    
    // Update button states
    updateButtonStates();
}

// Create Scene 1: Days of the Week
function createDaysOfWeekScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e8f5e9" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Days of the Week</text>
            
            <!-- Explanation -->
            <rect x="50" y="70" width="700" height="60" rx="10" fill="#a5d6a7" />
            <text x="400" y="100" text-anchor="middle" font-size="18" fill="#333">
                We use 'on' with days of the week
            </text>
            <text x="400" y="125" text-anchor="middle" font-size="16" fill="#555">
                Example: I go to school on Monday. We play football on Saturday.
            </text>
            
            <!-- Calendar -->
            <rect x="150" y="150" width="500" height="150" fill="#c8e6c9" stroke="#2e7d32" stroke-width="2" />
            
            <!-- Days of the week -->
            <g class="day" data-day="monday" transform="translate(150, 150)">
                <rect width="71.4" height="30" fill="#81c784" />
                <text x="35.7" y="20" text-anchor="middle" font-size="16" fill="#333">Monday</text>
            </g>
            
            <g class="day" data-day="tuesday" transform="translate(221.4, 150)">
                <rect width="71.4" height="30" fill="#81c784" />
                <text x="35.7" y="20" text-anchor="middle" font-size="16" fill="#333">Tuesday</text>
            </g>
            
            <g class="day" data-day="wednesday" transform="translate(292.8, 150)">
                <rect width="71.4" height="30" fill="#81c784" />
                <text x="35.7" y="20" text-anchor="middle" font-size="16" fill="#333">Wednesday</text>
            </g>
            
            <g class="day" data-day="thursday" transform="translate(364.2, 150)">
                <rect width="71.4" height="30" fill="#81c784" />
                <text x="35.7" y="20" text-anchor="middle" font-size="16" fill="#333">Thursday</text>
            </g>
            
            <g class="day" data-day="friday" transform="translate(435.6, 150)">
                <rect width="71.4" height="30" fill="#81c784" />
                <text x="35.7" y="20" text-anchor="middle" font-size="16" fill="#333">Friday</text>
            </g>
            
            <g class="day" data-day="saturday" transform="translate(507, 150)">
                <rect width="71.4" height="30" fill="#81c784" />
                <text x="35.7" y="20" text-anchor="middle" font-size="16" fill="#333">Saturday</text>
            </g>
            
            <g class="day" data-day="sunday" transform="translate(578.4, 150)">
                <rect width="71.4" height="30" fill="#81c784" />
                <text x="35.7" y="20" text-anchor="middle" font-size="16" fill="#333">Sunday</text>
            </g>
            
            <!-- Calendar dates -->
            <g class="calendar-row" transform="translate(150, 180)">
                <rect width="71.4" height="30" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="71.4" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="142.8" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="214.2" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="285.6" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="357" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="428.4" fill="white" stroke="#c8e6c9" stroke-width="1" />
            </g>
            
            <g class="calendar-row" transform="translate(150, 210)">
                <rect width="71.4" height="30" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="71.4" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="142.8" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="214.2" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="285.6" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="357" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="428.4" fill="white" stroke="#c8e6c9" stroke-width="1" />
            </g>
            
            <g class="calendar-row" transform="translate(150, 240)">
                <rect width="71.4" height="30" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="71.4" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="142.8" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="214.2" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="285.6" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="357" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="428.4" fill="white" stroke="#c8e6c9" stroke-width="1" />
            </g>
            
            <g class="calendar-row" transform="translate(150, 270)">
                <rect width="71.4" height="30" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="71.4" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="142.8" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="214.2" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="285.6" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="357" fill="white" stroke="#c8e6c9" stroke-width="1" />
                <rect width="71.4" height="30" x="428.4" fill="white" stroke="#c8e6c9" stroke-width="1" />
            </g>
            
            <!-- Sentence builder -->
            <rect x="150" y="330" width="500" height="50" rx="10" fill="#c8e6c9" />
            <text x="200" y="360" text-anchor="middle" font-size="18" fill="#333">I go to school</text>
            <text x="320" y="360" text-anchor="middle" font-size="18" fill="#333" id="day-expression">on Monday</text>
            <text x="450" y="360" text-anchor="middle" font-size="18" fill="#333">every week.</text>
        </svg>
    `;
    
    // Add click events for days
    const days = container.querySelectorAll('.day');
    const dayExpression = container.querySelector('#day-expression');
    
    days.forEach(day => {
        day.style.cursor = 'pointer';
        day.addEventListener('click', function() {
            const dayName = this.dataset.day;
            
            // Reset all days
            days.forEach(d => {
                d.querySelector('rect').setAttribute('fill', '#81c784');
            });
            
            // Highlight selected day
            this.querySelector('rect').setAttribute('fill', '#4caf50');
            
            // Update sentence
            dayExpression.textContent = `on ${dayName.charAt(0).toUpperCase() + dayName.slice(1)}`;
        });
    });
}

// Create Scene 2: Parts of the Day
function createPartsOfDayScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e8f5e9" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Parts of the Day</text>
            
            <!-- Explanation -->
            <rect x="50" y="70" width="700" height="60" rx="10" fill="#a5d6a7" />
            <text x="400" y="100" text-anchor="middle" font-size="18" fill="#333">
                We use 'in the' with morning, afternoon, evening and 'at' with night
            </text>
            <text x="400" y="125" text-anchor="middle" font-size="16" fill="#555">
                Example: I have breakfast in the morning. We watch TV at night.
            </text>
            
            <!-- Day cycle illustration -->
            <g class="day-part" data-part="morning" transform="translate(150, 180)">
                <rect width="120" height="120" rx="10" fill="#ffecb3" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">Morning</text>
                
                <!-- Sun rising -->
                <circle cx="60" cy="80" r="20" fill="#ffeb3b" />
                <path d="M 60,50 L 60,40" stroke="#ffeb3b" stroke-width="3" />
                <path d="M 40,60 L 30,60" stroke="#ffeb3b" stroke-width="3" />
                <path d="M 80,60 L 90,60" stroke="#ffeb3b" stroke-width="3" />
                <path d="M 45,45 L 38,38" stroke="#ffeb3b" stroke-width="3" />
                <path d="M 75,45 L 82,38" stroke="#ffeb3b" stroke-width="3" />
                
                <text x="60" y="140" text-anchor="middle" font-size="16" fill="#333">in the morning</text>
            </g>
            
            <g class="day-part" data-part="afternoon" transform="translate(290, 180)">
                <rect width="120" height="120" rx="10" fill="#ffe0b2" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">Afternoon</text>
                
                <!-- Sun high -->
                <circle cx="60" cy="60" r="20" fill="#ffc107" />
                <path d="M 60,30 L 60,20" stroke="#ffc107" stroke-width="3" />
                <path d="M 30,60 L 20,60" stroke="#ffc107" stroke-width="3" />
                <path d="M 90,60 L 100,60" stroke="#ffc107" stroke-width="3" />
                <path d="M 40,40 L 33,33" stroke="#ffc107" stroke-width="3" />
                <path d="M 80,40 L 87,33" stroke="#ffc107" stroke-width="3" />
                
                <text x="60" y="140" text-anchor="middle" font-size="16" fill="#333">in the afternoon</text>
            </g>
            
            <g class="day-part" data-part="evening" transform="translate(430, 180)">
                <rect width="120" height="120" rx="10" fill="#ffccbc" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">Evening</text>
                
                <!-- Sun setting -->
                <circle cx="60" cy="90" r="20" fill="#ff9800" />
                <rect x="20" y="90" width="80" height="20" fill="#ffccbc" />
                
                <text x="60" y="140" text-anchor="middle" font-size="16" fill="#333">in the evening</text>
            </g>
            
            <g class="day-part" data-part="night" transform="translate(570, 180)">
                <rect width="120" height="120" rx="10" fill="#b0bec5" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">Night</text>
                
                <!-- Moon and stars -->
                <circle cx="60" cy="70" r="15" fill="#f5f5f5" />
                <circle cx="50" cy="65" r="15" fill="#b0bec5" />
                <circle cx="40" cy="50" r="3" fill="#f5f5f5" />
                <circle cx="80" cy="50" r="3" fill="#f5f5f5" />
                <circle cx="90" cy="70" r="3" fill="#f5f5f5" />
                
                <text x="60" y="140" text-anchor="middle" font-size="16" fill="#333">at night</text>
            </g>
            
            <!-- Sentence builder -->
            <rect x="150" y="330" width="500" height="50" rx="10" fill="#c8e6c9" />
            <text x="200" y="360" text-anchor="middle" font-size="18" fill="#333">I have breakfast</text>
            <text x="400" y="360" text-anchor="middle" font-size="18" fill="#333" id="time-expression">in the morning</text>
            <text x="550" y="360" text-anchor="middle" font-size="18" fill="#333">every day.</text>
        </svg>
    `;
    
    // Add click events for day parts
    const dayParts = container.querySelectorAll('.day-part');
    const timeExpression = container.querySelector('#time-expression');
    
    dayParts.forEach(part => {
        part.style.cursor = 'pointer';
        part.addEventListener('click', function() {
            const partName = this.dataset.part;
            
            // Reset all parts
            dayParts.forEach(p => {
                p.style.transform = '';
            });
            
            // Highlight selected part
            this.style.transform = 'scale(1.1)';
            
            // Update sentence
            switch(partName) {
                case 'morning':
                    timeExpression.textContent = 'in the morning';
                    break;
                case 'afternoon':
                    timeExpression.textContent = 'in the afternoon';
                    break;
                case 'evening':
                    timeExpression.textContent = 'in the evening';
                    break;
                case 'night':
                    timeExpression.textContent = 'at night';
                    break;
            }
        });
    });
}

// Create Scene 3: Specific Times
function createSpecificTimesScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e8f5e9" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Specific Times</text>
            
            <!-- Explanation -->
            <rect x="50" y="70" width="700" height="60" rx="10" fill="#a5d6a7" />
            <text x="400" y="100" text-anchor="middle" font-size="18" fill="#333">
                We use 'at' with specific times of the day
            </text>
            <text x="400" y="125" text-anchor="middle" font-size="16" fill="#555">
                Example: School starts at 9 o'clock. I go to bed at half past eight.
            </text>
            
            <!-- Clocks -->
            <g class="clock" data-time="oclock" transform="translate(150, 180)">
                <circle cx="60" cy="60" r="50" fill="white" stroke="#2e7d32" stroke-width="3" />
                <circle cx="60" cy="60" r="3" fill="#2e7d32" />
                
                <!-- Clock hands -->
                <line x1="60" y1="60" x2="60" y2="30" stroke="#2e7d32" stroke-width="3" /> <!-- Hour hand -->
                <line x1="60" y1="60" x2="60" y2="15" stroke="#2e7d32" stroke-width="2" /> <!-- Minute hand -->
                
                <!-- Clock numbers -->
                <text x="60" y="20" text-anchor="middle" font-size="12" fill="#333">12</text>
                <text x="100" y="60" text-anchor="middle" font-size="12" fill="#333">3</text>
                <text x="60" y="100" text-anchor="middle" font-size="12" fill="#333">6</text>
                <text x="20" y="60" text-anchor="middle" font-size="12" fill="#333">9</text>
                
                <text x="60" y="130" text-anchor="middle" font-size="16" fill="#333">at 12 o'clock</text>
            </g>
            
            <g class="clock" data-time="half-past" transform="translate(300, 180)">
                <circle cx="60" cy="60" r="50" fill="white" stroke="#2e7d32" stroke-width="3" />
                <circle cx="60" cy="60" r="3" fill="#2e7d32" />
                
                <!-- Clock hands -->
                <line x1="60" y1="60" x2="40" y2="40" stroke="#2e7d32" stroke-width="3" /> <!-- Hour hand -->
                <line x1="60" y1="60" x2="100" y2="60" stroke="#2e7d32" stroke-width="2" /> <!-- Minute hand -->
                
                <!-- Clock numbers -->
                <text x="60" y="20" text-anchor="middle" font-size="12" fill="#333">12</text>
                <text x="100" y="60" text-anchor="middle" font-size="12" fill="#333">3</text>
                <text x="60" y="100" text-anchor="middle" font-size="12" fill="#333">6</text>
                <text x="20" y="60" text-anchor="middle" font-size="12" fill="#333">9</text>
                
                <text x="60" y="130" text-anchor="middle" font-size="16" fill="#333">at half past 6</text>
            </g>
            
            <g class="clock" data-time="quarter-past" transform="translate(450, 180)">
                <circle cx="60" cy="60" r="50" fill="white" stroke="#2e7d32" stroke-width="3" />
                <circle cx="60" cy="60" r="3" fill="#2e7d32" />
                
                <!-- Clock hands -->
                <line x1="60" y1="60" x2="60" y2="30" stroke="#2e7d32" stroke-width="3" /> <!-- Hour hand -->
                <line x1="60" y1="60" x2="90" y2="60" stroke="#2e7d32" stroke-width="2" /> <!-- Minute hand -->
                
                <!-- Clock numbers -->
                <text x="60" y="20" text-anchor="middle" font-size="12" fill="#333">12</text>
                <text x="100" y="60" text-anchor="middle" font-size="12" fill="#333">3</text>
                <text x="60" y="100" text-anchor="middle" font-size="12" fill="#333">6</text>
                <text x="20" y="60" text-anchor="middle" font-size="12" fill="#333">9</text>
                
                <text x="60" y="130" text-anchor="middle" font-size="16" fill="#333">at quarter past 3</text>
            </g>
            
            <g class="clock" data-time="quarter-to" transform="translate(600, 180)">
                <circle cx="60" cy="60" r="50" fill="white" stroke="#2e7d32" stroke-width="3" />
                <circle cx="60" cy="60" r="3" fill="#2e7d32" />
                
                <!-- Clock hands -->
                <line x1="60" y1="60" x2="80" y2="40" stroke="#2e7d32" stroke-width="3" /> <!-- Hour hand -->
                <line x1="60" y1="60" x2="30" y2="60" stroke="#2e7d32" stroke-width="2" /> <!-- Minute hand -->
                
                <!-- Clock numbers -->
                <text x="60" y="20" text-anchor="middle" font-size="12" fill="#333">12</text>
                <text x="100" y="60" text-anchor="middle" font-size="12" fill="#333">3</text>
                <text x="60" y="100" text-anchor="middle" font-size="12" fill="#333">6</text>
                <text x="20" y="60" text-anchor="middle" font-size="12" fill="#333">9</text>
                
                <text x="60" y="130" text-anchor="middle" font-size="16" fill="#333">at quarter to 2</text>
            </g>
            
            <!-- Sentence builder -->
            <rect x="150" y="330" width="500" height="50" rx="10" fill="#c8e6c9" />
            <text x="250" y="360" text-anchor="middle" font-size="18" fill="#333">School starts</text>
            <text x="400" y="360" text-anchor="middle" font-size="18" fill="#333" id="time-expression">at 9 o'clock</text>
            <text x="550" y="360" text-anchor="middle" font-size="18" fill="#333">every day.</text>
        </svg>
    `;
    
    // Add click events for clocks
    const clocks = container.querySelectorAll('.clock');
    const timeExpression = container.querySelector('#time-expression');
    
    clocks.forEach(clock => {
        clock.style.cursor = 'pointer';
        clock.addEventListener('click', function() {
            const timeType = this.dataset.time;
            
            // Reset all clocks
            clocks.forEach(c => {
                c.style.transform = '';
                c.querySelector('circle').setAttribute('stroke', '#2e7d32');
            });
            
            // Highlight selected clock
            this.style.transform = 'scale(1.1)';
            this.querySelector('circle').setAttribute('stroke', '#4caf50');
            
            // Update sentence
            switch(timeType) {
                case 'oclock':
                    timeExpression.textContent = 'at 12 o\'clock';
                    break;
                case 'half-past':
                    timeExpression.textContent = 'at half past 6';
                    break;
                case 'quarter-past':
                    timeExpression.textContent = 'at quarter past 3';
                    break;
                case 'quarter-to':
                    timeExpression.textContent = 'at quarter to 2';
                    break;
            }
        });
    });
}

// Create Scene 4: Time Clauses
function createTimeClausesScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#e8f5e9" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Time Clauses</text>
            
            <!-- Explanation -->
            <rect x="50" y="70" width="700" height="60" rx="10" fill="#a5d6a7" />
            <text x="400" y="100" text-anchor="middle" font-size="18" fill="#333">
                We use time clauses to say when something happens in relation to something else
            </text>
            <text x="400" y="125" text-anchor="middle" font-size="16" fill="#555">
                Example: I do my homework when I get home. We play after school.
            </text>
            
            <!-- Time clauses -->
            <g class="time-clause" data-clause="when" transform="translate(150, 180)">
                <rect width="120" height="120" rx="10" fill="#c8e6c9" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">when</text>
                
                <!-- Illustration -->
                <circle cx="40" cy="60" r="20" fill="#ffcc80" /> <!-- Head -->
                <rect x="35" y="80" width="10" height="30" fill="#4fc3f7" /> <!-- Body -->
                <rect x="25" y="85" width="10" height="5" fill="#4fc3f7" /> <!-- Left arm -->
                <rect x="45" y="85" width="10" height="5" fill="#4fc3f7" /> <!-- Right arm -->
                <rect x="35" y="110" width="5" height="10" fill="#4fc3f7" /> <!-- Left leg -->
                <rect x="40" y="110" width="5" height="10" fill="#4fc3f7" /> <!-- Right leg -->
                
                <rect x="70" y="70" width="30" height="20" fill="#ffecb3" /> <!-- House -->
                <polygon points="70,70 85,50 100,70" fill="#ffe082" /> <!-- Roof -->
                <rect x="80" y="80" width="10" height="10" fill="#ffe082" /> <!-- Door -->
                
                <text x="60" y="140" text-anchor="middle" font-size="16" fill="#333">when I get home</text>
            </g>
            
            <g class="time-clause" data-clause="after" transform="translate(290, 180)">
                <rect width="120" height="120" rx="10" fill="#c8e6c9" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">after</text>
                
                <!-- Illustration -->
                <rect x="30" y="50" width="60" height="40" fill="#ffecb3" /> <!-- School building -->
                <rect x="50" y="70" width="20" height="20" fill="#ffe082" /> <!-- Door -->
                <rect x="35" y="55" width="10" height="10" fill="#ffe082" /> <!-- Window -->
                <rect x="75" y="55" width="10" height="10" fill="#ffe082" /> <!-- Window -->
                
                <circle cx="40" cy="100" r="10" fill="#ffcc80" /> <!-- Head -->
                <rect x="37.5" y="110" width="5" height="10" fill="#4fc3f7" /> <!-- Body -->
                <rect x="32.5" y="112" width="5" height="3" fill="#4fc3f7" /> <!-- Left arm -->
                <rect x="42.5" y="112" width="5" height="3" fill="#4fc3f7" /> <!-- Right arm -->
                <rect x="37.5" y="120" width="2.5" height="5" fill="#4fc3f7" /> <!-- Left leg -->
                <rect x="40" y="120" width="2.5" height="5" fill="#4fc3f7" /> <!-- Right leg -->
                
                <text x="60" y="140" text-anchor="middle" font-size="16" fill="#333">after school</text>
            </g>
            
            <g class="time-clause" data-clause="before" transform="translate(430, 180)">
                <rect width="120" height="120" rx="10" fill="#c8e6c9" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">before</text>
                
                <!-- Illustration -->
                <rect x="30" y="60" width="60" height="10" fill="#a1887f" /> <!-- Table -->
                <rect x="35" y="70" width="5" height="20" fill="#a1887f" /> <!-- Table leg -->
                <rect x="80" y="70" width="5" height="20" fill="#a1887f" /> <!-- Table leg -->
                <rect x="40" y="50" width="40" height="10" fill="#ef9a9a" /> <!-- Plate -->
                <rect x="45" y="40" width="30" height="10" fill="#ef9a9a" /> <!-- Food -->
                
                <circle cx="40" cy="100" r="10" fill="#ffcc80" /> <!-- Head -->
                <rect x="37.5" y="110" width="5" height="10" fill="#4fc3f7" /> <!-- Body -->
                <rect x="32.5" y="112" width="5" height="3" fill="#4fc3f7" /> <!-- Left arm -->
                <rect x="42.5" y="112" width="5" height="3" fill="#4fc3f7" /> <!-- Right arm -->
                <rect x="37.5" y="120" width="2.5" height="5" fill="#4fc3f7" /> <!-- Left leg -->
                <rect x="40" y="120" width="2.5" height="5" fill="#4fc3f7" /> <!-- Right leg -->
                
                <text x="60" y="140" text-anchor="middle" font-size="16" fill="#333">before dinner</text>
            </g>
            
            <g class="time-clause" data-clause="until" transform="translate(570, 180)">
                <rect width="120" height="120" rx="10" fill="#c8e6c9" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">until</text>
                
                <!-- Illustration -->
                <circle cx="60" cy="60" r="20" fill="#ffeb3b" /> <!-- Sun -->
                <rect x="20" y="80" width="80" height="20" fill="#c8e6c9" /> <!-- Ground -->
                
                <circle cx="40" cy="100" r="10" fill="#ffcc80" /> <!-- Head -->
                <rect x="37.5" y="110" width="5" height="10" fill="#4fc3f7" /> <!-- Body -->
                <rect x="32.5" y="112" width="5" height="3" fill="#4fc3f7" /> <!-- Left arm -->
                <rect x="42.5" y="112" width="5" height="3" fill="#4fc3f7" /> <!-- Right arm -->
                <rect x="37.5" y="120" width="2.5" height="5" fill="#4fc3f7" /> <!-- Left leg -->
                <rect x="40" y="120" width="2.5" height="5" fill="#4fc3f7" /> <!-- Right leg -->
                
                <text x="60" y="140" text-anchor="middle" font-size="16" fill="#333">until 5 o'clock</text>
            </g>
            
            <!-- Sentence builder -->
            <rect x="150" y="330" width="500" height="50" rx="10" fill="#c8e6c9" />
            <text x="250" y="360" text-anchor="middle" font-size="18" fill="#333">I do my homework</text>
            <text x="450" y="360" text-anchor="middle" font-size="18" fill="#333" id="time-clause">when I get home</text>
        </svg>
    `;
    
    // Add click events for time clauses
    const timeClauses = container.querySelectorAll('.time-clause');
    const timeClauseText = container.querySelector('#time-clause');
    
    timeClauses.forEach(clause => {
        clause.style.cursor = 'pointer';
        clause.addEventListener('click', function() {
            const clauseType = this.dataset.clause;
            
            // Reset all clauses
            timeClauses.forEach(c => {
                c.style.transform = '';
                c.querySelector('rect').setAttribute('fill', '#c8e6c9');
            });
            
            // Highlight selected clause
            this.style.transform = 'scale(1.1)';
            this.querySelector('rect').setAttribute('fill', '#81c784');
            
            // Update sentence
            switch(clauseType) {
                case 'when':
                    timeClauseText.textContent = 'when I get home';
                    break;
                case 'after':
                    timeClauseText.textContent = 'after school';
                    break;
                case 'before':
                    timeClauseText.textContent = 'before dinner';
                    break;
                case 'until':
                    timeClauseText.textContent = 'until 5 o\'clock';
                    break;
            }
        });
    });
}

// Function to initialize practice activities
function initPracticeActivities() {
    // Activity 1: Match time expressions
    const activity1 = document.getElementById('activity-1');
    if (activity1) {
        activity1.innerHTML = `
            <div class="matching-time-expressions">
                <p>Match each time expression to the correct category:</p>
                <div class="time-matching-game">
                    <div class="categories">
                        <div class="category" data-category="days">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#e8f5e9" />
                                <rect x="20" y="20" width="40" height="40" fill="#a5d6a7" />
                                <text x="40" y="40" text-anchor="middle" font-size="14" fill="#333">Mon</text>
                                <text x="40" y="70" text-anchor="middle" font-size="14" fill="#333">Days</text>
                            </svg>
                        </div>
                        <div class="category" data-category="parts">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#e8f5e9" />
                                <circle cx="40" cy="30" r="15" fill="#ffeb3b" />
                                <text x="40" y="70" text-anchor="middle" font-size="14" fill="#333">Parts of Day</text>
                            </svg>
                        </div>
                        <div class="category" data-category="times">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#e8f5e9" />
                                <circle cx="40" cy="30" r="15" fill="white" stroke="#2e7d32" stroke-width="2" />
                                <line x1="40" y1="30" x2="40" y2="20" stroke="#2e7d32" stroke-width="2" />
                                <line x1="40" y1="30" x2="50" y2="30" stroke="#2e7d32" stroke-width="1" />
                                <text x="40" y="70" text-anchor="middle" font-size="14" fill="#333">Specific Times</text>
                            </svg>
                        </div>
                        <div class="category" data-category="clauses">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#e8f5e9" />
                                <rect x="20" y="25" width="40" height="15" fill="#c8e6c9" />
                                <text x="40" y="35" text-anchor="middle" font-size="10" fill="#333">when/after</text>
                                <text x="40" y="70" text-anchor="middle" font-size="14" fill="#333">Time Clauses</text>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="expressions">
                        <button class="expression" data-category="days">on Monday</button>
                        <button class="expression" data-category="parts">in the morning</button>
                        <button class="expression" data-category="times">at 3 o'clock</button>
                        <button class="expression" data-category="clauses">after school</button>
                        <button class="expression" data-category="days">on Saturday</button>
                        <button class="expression" data-category="parts">at night</button>
                        <button class="expression" data-category="times">at half past two</button>
                        <button class="expression" data-category="clauses">when I get home</button>
                    </div>
                </div>
                
                <div class="feedback"></div>
            </div>
            
            <style>
                .matching-time-expressions {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .time-matching-game {
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
                
                .expressions {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .expression {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: var(--border-radius);
                    cursor: pointer;
                }
                
                .expression.selected {
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
        
        // Add event listeners for time expression matching game
        let selectedExpression = null;
        const expressions = activity1.querySelectorAll('.expression');
        const categories = activity1.querySelectorAll('.category');
        const feedback = activity1.querySelector('.feedback');
        
        expressions.forEach(expression => {
            expression.addEventListener('click', function() {
                // Deselect previously selected expression
                if (selectedExpression) {
                    selectedExpression.classList.remove('selected');
                }
                
                // Select this expression
                this.classList.add('selected');
                selectedExpression = this;
            });
        });
        
        categories.forEach(category => {
            category.addEventListener('click', function() {
                if (!selectedExpression) {
                    feedback.textContent = 'Please select a time expression first!';
                    feedback.style.color = '#f44336';
                    return;
                }
                
                const categoryType = this.dataset.category;
                const expressionCategory = selectedExpression.dataset.category;
                
                if (categoryType === expressionCategory) {
                    this.classList.add('matched');
                    selectedExpression.disabled = true;
                    selectedExpression.classList.remove('selected');
                    selectedExpression = null;
                    
                    feedback.textContent = 'Correct match!';
                    feedback.style.color = '#8bc34a';
                    
                    // Check if all are matched
                    const matchedCategories = activity1.querySelectorAll('.category.matched');
                    if (matchedCategories.length === categories.length) {
                        feedback.textContent = 'Great job! You matched all the time expressions!';
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
                <p>Complete each sentence with the correct time expression:</p>
                
                <div class="sentence-completion">
                    <p>1. I go to school <select class="time-select" data-answer="on Monday">
                        <option value="">Choose...</option>
                        <option value="on Monday">on Monday</option>
                        <option value="in the morning">in the morning</option>
                        <option value="at 3 o'clock">at 3 o'clock</option>
                        <option value="after school">after school</option>
                    </select>.</p>
                    
                    <p>2. We have breakfast <select class="time-select" data-answer="in the morning">
                        <option value="">Choose...</option>
                        <option value="on Monday">on Monday</option>
                        <option value="in the morning">in the morning</option>
                        <option value="at 3 o'clock">at 3 o'clock</option>
                        <option value="after school">after school</option>
                    </select>.</p>
                    
                    <p>3. The film starts <select class="time-select" data-answer="at 3 o'clock">
                        <option value="">Choose...</option>
                        <option value="on Monday">on Monday</option>
                        <option value="in the morning">in the morning</option>
                        <option value="at 3 o'clock">at 3 o'clock</option>
                        <option value="after school">after school</option>
                    </select>.</p>
                    
                    <p>4. I do my homework <select class="time-select" data-answer="after school">
                        <option value="">Choose...</option>
                        <option value="on Monday">on Monday</option>
                        <option value="in the morning">in the morning</option>
                        <option value="at 3 o'clock">at 3 o'clock</option>
                        <option value="after school">after school</option>
                    </select>.</p>
                    
                    <p>5. We go to the park <select class="time-select" data-answer="on Saturday">
                        <option value="">Choose...</option>
                        <option value="on Saturday">on Saturday</option>
                        <option value="in the morning">in the morning</option>
                        <option value="at 3 o'clock">at 3 o'clock</option>
                        <option value="after school">after school</option>
                    </select>.</p>
                </div>
                
                <button class="check-answers">Check Answers</button>
                <div class="feedback"></div>
            </div>
            
            <style>
                .complete-sentences p {
                    margin-bottom: 1rem;
                    font-size: 1.1rem;
                }
                
                .time-select {
                    padding: 5px;
                    border: 2px solid #ccc;
                    border-radius: 5px;
                    font-size: 1rem;
                }
                
                .time-select.correct {
                    border-color: #8bc34a;
                    background-color: #f1f8e9;
                }
                
                .time-select.incorrect {
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
            const selects = activity2.querySelectorAll('.time-select');
            let correctCount = 0;
            
            selects.forEach(select => {
                const userAnswer = select.value;
                const correctAnswer = select.dataset.answer;
                
                if (userAnswer === correctAnswer) {
                    select.className = 'time-select correct';
                    correctCount++;
                } else {
                    select.className = 'time-select incorrect';
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
