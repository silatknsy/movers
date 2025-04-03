// JavaScript for Daily Activities Animation

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
            <rect width="400" height="300" fill="#fff8e1" />
            
            <!-- Clock face -->
            <circle cx="200" cy="150" r="100" fill="#ffecb3" stroke="#ffa000" stroke-width="3" />
            <circle cx="200" cy="150" r="5" fill="#ffa000" />
            
            <!-- Clock numbers -->
            <text x="200" y="70" text-anchor="middle" font-size="16" fill="#ffa000">12</text>
            <text x="280" y="155" text-anchor="middle" font-size="16" fill="#ffa000">3</text>
            <text x="200" y="235" text-anchor="middle" font-size="16" fill="#ffa000">6</text>
            <text x="120" y="155" text-anchor="middle" font-size="16" fill="#ffa000">9</text>
            
            <!-- Clock hands -->
            <line x1="200" y1="150" x2="200" y2="90" stroke="#ff6f00" stroke-width="3" class="hour-hand" />
            <line x1="200" y1="150" x2="250" y2="150" stroke="#ff6f00" stroke-width="2" class="minute-hand" />
            
            <!-- Daily activities -->
            <g class="morning-activity" transform="translate(80, 50)">
                <rect x="0" y="0" width="40" height="40" rx="5" fill="#b3e5fc" />
                <text x="20" y="25" text-anchor="middle" font-size="10" fill="#333">Wake up</text>
            </g>
            
            <g class="school-activity" transform="translate(280, 100)">
                <rect x="0" y="0" width="40" height="40" rx="5" fill="#c8e6c9" />
                <text x="20" y="25" text-anchor="middle" font-size="10" fill="#333">Study</text>
            </g>
            
            <g class="afternoon-activity" transform="translate(280, 200)">
                <rect x="0" y="0" width="40" height="40" rx="5" fill="#ffccbc" />
                <text x="20" y="25" text-anchor="middle" font-size="10" fill="#333">Play</text>
            </g>
            
            <g class="evening-activity" transform="translate(80, 200)">
                <rect x="0" y="0" width="40" height="40" rx="5" fill="#d1c4e9" />
                <text x="20" y="25" text-anchor="middle" font-size="10" fill="#333">Sleep</text>
            </g>
        </svg>
    `;
    
    // Add simple animation to the clock hands
    const hourHand = container.querySelector('.hour-hand');
    const minuteHand = container.querySelector('.minute-hand');
    
    let hourAngle = 0;
    let minuteAngle = 0;
    
    setInterval(() => {
        hourAngle = (hourAngle + 0.5) % 360;
        minuteAngle = (minuteAngle + 6) % 360;
        
        hourHand.style.transform = `rotate(${hourAngle}deg)`;
        hourHand.style.transformOrigin = 'center';
        
        minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
        minuteHand.style.transformOrigin = 'center';
    }, 1000);
}

// Function to initialize the main interactive animation
function initMainAnimation() {
    const container = document.getElementById('main-animation');
    if (!container) return;
    
    // Create scenes array to hold different animation scenes
    window.scenes = [
        createMorningActivitiesScene,
        createSchoolActivitiesScene,
        createAfternoonActivitiesScene,
        createEveningActivitiesScene,
        createDailyRoutineScene
    ];
    
    // Initialize with the first scene
    window.currentScene = 0;
    window.scenes[window.currentScene](container);
    
    // Update button states
    updateButtonStates();
}

// Create Scene 1: Morning Activities
function createMorningActivitiesScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#fff8e1" />
            
            <!-- Sun rising -->
            <circle cx="100" cy="100" r="50" fill="#ffeb3b" />
            <text x="100" y="50" text-anchor="middle" font-size="20" fill="#ff6f00">Morning</text>
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Morning Activities</text>
            
            <!-- Morning activities -->
            <g class="activity-item" data-activity="wake-up" transform="translate(200, 120)">
                <rect width="120" height="80" rx="10" fill="#b3e5fc" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Wake up</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">7:00</text>
            </g>
            
            <g class="activity-item" data-activity="brush-teeth" transform="translate(340, 120)">
                <rect width="120" height="80" rx="10" fill="#b3e5fc" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Brush teeth</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">7:15</text>
            </g>
            
            <g class="activity-item" data-activity="breakfast" transform="translate(480, 120)">
                <rect width="120" height="80" rx="10" fill="#b3e5fc" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Have breakfast</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">7:30</text>
            </g>
            
            <g class="activity-item" data-activity="get-dressed" transform="translate(200, 220)">
                <rect width="120" height="80" rx="10" fill="#b3e5fc" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Get dressed</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">7:45</text>
            </g>
            
            <g class="activity-item" data-activity="pack-bag" transform="translate(340, 220)">
                <rect width="120" height="80" rx="10" fill="#b3e5fc" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Pack school bag</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">8:00</text>
            </g>
            
            <g class="activity-item" data-activity="go-to-school" transform="translate(480, 220)">
                <rect width="120" height="80" rx="10" fill="#b3e5fc" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Go to school</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">8:15</text>
            </g>
            
            <!-- Description box -->
            <rect x="150" y="320" width="500" height="60" rx="10" fill="#e1f5fe" stroke="#0288d1" stroke-width="2" />
            <text x="400" y="350" text-anchor="middle" font-size="18" fill="#333" id="activity-description">
                Click on an activity to learn about it
            </text>
            <text x="400" y="375" text-anchor="middle" font-size="16" fill="#555" id="activity-time">
                Morning activities happen from when we wake up until we go to school
            </text>
        </svg>
    `;
    
    // Add click events for activity items
    const activityItems = container.querySelectorAll('.activity-item');
    const description = container.querySelector('#activity-description');
    const time = container.querySelector('#activity-time');
    
    activityItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const activity = this.dataset.activity;
            
            // Reset all items
            activityItems.forEach(a => {
                a.style.transform = '';
            });
            
            // Highlight selected item
            this.style.transform = 'scale(1.1)';
            
            // Update description
            switch(activity) {
                case 'wake-up':
                    description.textContent = 'I wake up at 7 o\'clock in the morning.';
                    time.textContent = 'We use "wake up" to talk about stopping sleeping.';
                    break;
                case 'brush-teeth':
                    description.textContent = 'I brush my teeth after I wake up.';
                    time.textContent = 'We use "brush teeth" to talk about cleaning our teeth.';
                    break;
                case 'breakfast':
                    description.textContent = 'I have breakfast at 7:30.';
                    time.textContent = 'We use "have breakfast" to talk about eating in the morning.';
                    break;
                case 'get-dressed':
                    description.textContent = 'I get dressed after breakfast.';
                    time.textContent = 'We use "get dressed" to talk about putting on clothes.';
                    break;
                case 'pack-bag':
                    description.textContent = 'I pack my school bag at 8 o\'clock.';
                    time.textContent = 'We use "pack" to talk about putting things in a bag.';
                    break;
                case 'go-to-school':
                    description.textContent = 'I go to school at 8:15.';
                    time.textContent = 'We use "go to" to talk about traveling to a place.';
                    break;
            }
        });
    });
}

// Create Scene 2: School Activities (placeholder)
function createSchoolActivitiesScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#fff8e1" />
            
            <!-- Sun high in sky -->
            <circle cx="100" cy="80" r="50" fill="#ffc107" />
            <text x="100" y="30" text-anchor="middle" font-size="20" fill="#ff6f00">School Time</text>
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">School Activities</text>
            
            <!-- School activities -->
            <g class="activity-item" data-activity="study" transform="translate(200, 120)">
                <rect width="120" height="80" rx="10" fill="#c8e6c9" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Study</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">9:00</text>
            </g>
            
            <g class="activity-item" data-activity="read" transform="translate(340, 120)">
                <rect width="120" height="80" rx="10" fill="#c8e6c9" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Read</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">10:00</text>
            </g>
            
            <g class="activity-item" data-activity="write" transform="translate(480, 120)">
                <rect width="120" height="80" rx="10" fill="#c8e6c9" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Write</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">11:00</text>
            </g>
            
            <g class="activity-item" data-activity="lunch" transform="translate(200, 220)">
                <rect width="120" height="80" rx="10" fill="#c8e6c9" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Have lunch</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">12:00</text>
            </g>
            
            <g class="activity-item" data-activity="play" transform="translate(340, 220)">
                <rect width="120" height="80" rx="10" fill="#c8e6c9" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Play with friends</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">12:30</text>
            </g>
            
            <g class="activity-item" data-activity="learn" transform="translate(480, 220)">
                <rect width="120" height="80" rx="10" fill="#c8e6c9" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Learn</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">1:30</text>
            </g>
            
            <!-- Description box -->
            <rect x="150" y="320" width="500" height="60" rx="10" fill="#e8f5e9" stroke="#388e3c" stroke-width="2" />
            <text x="400" y="350" text-anchor="middle" font-size="18" fill="#333" id="activity-description">
                Click on an activity to learn about it
            </text>
            <text x="400" y="375" text-anchor="middle" font-size="16" fill="#555" id="activity-time">
                School activities happen during the school day
            </text>
        </svg>
    `;
    
    // Add click events for activity items
    const activityItems = container.querySelectorAll('.activity-item');
    const description = container.querySelector('#activity-description');
    const time = container.querySelector('#activity-time');
    
    activityItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const activity = this.dataset.activity;
            
            // Reset all items
            activityItems.forEach(a => {
                a.style.transform = '';
            });
            
            // Highlight selected item
            this.style.transform = 'scale(1.1)';
            
            // Update description
            switch(activity) {
                case 'study':
                    description.textContent = 'I study English and Math in the morning.';
                    time.textContent = 'We use "study" to talk about learning subjects at school.';
                    break;
                case 'read':
                    description.textContent = 'I read books in class.';
                    time.textContent = 'We use "read" to talk about looking at and understanding written words.';
                    break;
                case 'write':
                    description.textContent = 'I write in my notebook.';
                    time.textContent = 'We use "write" to talk about creating words on paper.';
                    break;
                case 'lunch':
                    description.textContent = 'I have lunch at 12 o\'clock.';
                    time.textContent = 'We use "have lunch" to talk about eating in the middle of the day.';
                    break;
                case 'play':
                    description.textContent = 'I play with my friends at break time.';
                    time.textContent = 'We use "play" to talk about having fun with friends.';
                    break;
                case 'learn':
                    description.textContent = 'I learn new things every day.';
                    time.textContent = 'We use "learn" to talk about getting new knowledge or skills.';
                    break;
            }
        });
    });
}

// Create Scene 3: Afternoon Activities (placeholder)
function createAfternoonActivitiesScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#fff8e1" />
            
            <!-- Sun setting -->
            <circle cx="100" cy="150" r="50" fill="#ff9800" />
            <text x="100" y="100" text-anchor="middle" font-size="20" fill="#ff6f00">Afternoon</text>
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Afternoon Activities</text>
            
            <!-- Afternoon activities -->
            <g class="activity-item" data-activity="go-home" transform="translate(200, 120)">
                <rect width="120" height="80" rx="10" fill="#ffccbc" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Go home</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">3:30</text>
            </g>
            
            <g class="activity-item" data-activity="snack" transform="translate(340, 120)">
                <rect width="120" height="80" rx="10" fill="#ffccbc" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Have a snack</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">4:00</text>
            </g>
            
            <g class="activity-item" data-activity="homework" transform="translate(480, 120)">
                <rect width="120" height="80" rx="10" fill="#ffccbc" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Do homework</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">4:30</text>
            </g>
            
            <g class="activity-item" data-activity="play-sports" transform="translate(200, 220)">
                <rect width="120" height="80" rx="10" fill="#ffccbc" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Play sports</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">5:00</text>
            </g>
            
            <g class="activity-item" data-activity="watch-tv" transform="translate(340, 220)">
                <rect width="120" height="80" rx="10" fill="#ffccbc" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Watch TV</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">5:30</text>
            </g>
            
            <g class="activity-item" data-activity="computer" transform="translate(480, 220)">
                <rect width="120" height="80" rx="10" fill="#ffccbc" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Use computer</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">6:00</text>
            </g>
            
            <!-- Description box -->
            <rect x="150" y="320" width="500" height="60" rx="10" fill="#ffebee" stroke="#d32f2f" stroke-width="2" />
            <text x="400" y="350" text-anchor="middle" font-size="18" fill="#333" id="activity-description">
                Click on an activity to learn about it
            </text>
            <text x="400" y="375" text-anchor="middle" font-size="16" fill="#555" id="activity-time">
                Afternoon activities happen after school until dinner time
            </text>
        </svg>
    `;
    
    // Add click events for activity items
    const activityItems = container.querySelectorAll('.activity-item');
    const description = container.querySelector('#activity-description');
    const time = container.querySelector('#activity-time');
    
    activityItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const activity = this.dataset.activity;
            
            // Reset all items
            activityItems.forEach(a => {
                a.style.transform = '';
            });
            
            // Highlight selected item
            this.style.transform = 'scale(1.1)';
            
            // Update description
            switch(activity) {
                case 'go-home':
                    description.textContent = 'I go home at half past three.';
                    time.textContent = 'We use "go home" to talk about returning to our house.';
                    break;
                case 'snack':
                    description.textContent = 'I have a snack when I get home.';
                    time.textContent = 'We use "have a snack" to talk about eating a small amount of food.';
                    break;
                case 'homework':
                    description.textContent = 'I do my homework in the afternoon.';
                    time.textContent = 'We use "do homework" to talk about school work at home.';
                    break;
                case 'play-sports':
                    description.textContent = 'I play sports after I finish my homework.';
                    time.textContent = 'We use "play sports" to talk about physical activities like football.';
                    break;
                case 'watch-tv':
                    description.textContent = 'I watch TV for thirty minutes.';
                    time.textContent = 'We use "watch TV" to talk about looking at television programs.';
                    break;
                case 'computer':
                    description.textContent = 'I use the computer to play games.';
                    time.textContent = 'We use "use the computer" to talk about working or playing on a computer.';
                    break;
            }
        });
    });
}

// Create Scene 4: Evening Activities (placeholder)
function createEveningActivitiesScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#fff8e1" />
            
            <!-- Moon -->
            <circle cx="100" cy="80" r="40" fill="#f5f5f5" stroke="#bdbdbd" stroke-width="2" />
            <circle cx="85" cy="70" r="10" fill="#e0e0e0" />
            <circle cx="110" cy="90" r="8" fill="#e0e0e0" />
            <text x="100" y="30" text-anchor="middle" font-size="20" fill="#ff6f00">Evening</text>
            
            <!-- Stars -->
            <circle cx="50" cy="50" r="2" fill="white" />
            <circle cx="150" cy="40" r="2" fill="white" />
            <circle cx="180" cy="70" r="2" fill="white" />
            <circle cx="70" cy="100" r="2" fill="white" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Evening Activities</text>
            
            <!-- Evening activities -->
            <g class="activity-item" data-activity="dinner" transform="translate(200, 120)">
                <rect width="120" height="80" rx="10" fill="#d1c4e9" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Have dinner</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">6:30</text>
            </g>
            
            <g class="activity-item" data-activity="help" transform="translate(340, 120)">
                <rect width="120" height="80" rx="10" fill="#d1c4e9" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Help at home</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">7:00</text>
            </g>
            
            <g class="activity-item" data-activity="read-book" transform="translate(480, 120)">
                <rect width="120" height="80" rx="10" fill="#d1c4e9" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Read a book</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">7:30</text>
            </g>
            
            <g class="activity-item" data-activity="shower" transform="translate(200, 220)">
                <rect width="120" height="80" rx="10" fill="#d1c4e9" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Take a shower</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">8:00</text>
            </g>
            
            <g class="activity-item" data-activity="teeth" transform="translate(340, 220)">
                <rect width="120" height="80" rx="10" fill="#d1c4e9" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Brush teeth</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">8:30</text>
            </g>
            
            <g class="activity-item" data-activity="bed" transform="translate(480, 220)">
                <rect width="120" height="80" rx="10" fill="#d1c4e9" />
                <text x="60" y="45" text-anchor="middle" font-size="16" fill="#333">Go to bed</text>
                <text x="60" y="65" text-anchor="middle" font-size="14" fill="#555">9:00</text>
            </g>
            
            <!-- Description box -->
            <rect x="150" y="320" width="500" height="60" rx="10" fill="#ede7f6" stroke="#4527a0" stroke-width="2" />
            <text x="400" y="350" text-anchor="middle" font-size="18" fill="#333" id="activity-description">
                Click on an activity to learn about it
            </text>
            <text x="400" y="375" text-anchor="middle" font-size="16" fill="#555" id="activity-time">
                Evening activities happen from dinner time until bedtime
            </text>
        </svg>
    `;
    
    // Add click events for activity items
    const activityItems = container.querySelectorAll('.activity-item');
    const description = container.querySelector('#activity-description');
    const time = container.querySelector('#activity-time');
    
    activityItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const activity = this.dataset.activity;
            
            // Reset all items
            activityItems.forEach(a => {
                a.style.transform = '';
            });
            
            // Highlight selected item
            this.style.transform = 'scale(1.1)';
            
            // Update description
            switch(activity) {
                case 'dinner':
                    description.textContent = 'I have dinner with my family at half past six.';
                    time.textContent = 'We use "have dinner" to talk about eating in the evening.';
                    break;
                case 'help':
                    description.textContent = 'I help my parents at home after dinner.';
                    time.textContent = 'We use "help" to talk about doing things for other people.';
                    break;
                case 'read-book':
                    description.textContent = 'I read a book in the evening.';
                    time.textContent = 'We use "read a book" to talk about looking at and understanding a book.';
                    break;
                case 'shower':
                    description.textContent = 'I take a shower at 8 o\'clock.';
                    time.textContent = 'We use "take a shower" to talk about washing our body.';
                    break;
                case 'teeth':
                    description.textContent = 'I brush my teeth before bed.';
                    time.textContent = 'We use "brush teeth" to talk about cleaning our teeth.';
                    break;
                case 'bed':
                    description.textContent = 'I go to bed at 9 o\'clock.';
                    time.textContent = 'We use "go to bed" to talk about getting into bed to sleep.';
                    break;
            }
        });
    });
}

// Create Scene 5: Daily Routine (placeholder)
function createDailyRoutineScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#fff8e1" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">My Daily Routine</text>
            
            <!-- Timeline -->
            <line x1="100" y1="200" x2="700" y2="200" stroke="#ffa000" stroke-width="4" />
            
            <!-- Time points -->
            <circle cx="100" cy="200" r="10" fill="#ffa000" />
            <text x="100" y="230" text-anchor="middle" font-size="14" fill="#333">7:00</text>
            <text x="100" y="250" text-anchor="middle" font-size="12" fill="#555">Wake up</text>
            
            <circle cx="200" cy="200" r="10" fill="#ffa000" />
            <text x="200" y="230" text-anchor="middle" font-size="14" fill="#333">8:30</text>
            <text x="200" y="250" text-anchor="middle" font-size="12" fill="#555">Go to school</text>
            
            <circle cx="300" cy="200" r="10" fill="#ffa000" />
            <text x="300" y="230" text-anchor="middle" font-size="14" fill="#333">12:00</text>
            <text x="300" y="250" text-anchor="middle" font-size="12" fill="#555">Have lunch</text>
            
            <circle cx="400" cy="200" r="10" fill="#ffa000" />
            <text x="400" y="230" text-anchor="middle" font-size="14" fill="#333">3:30</text>
            <text x="400" y="250" text-anchor="middle" font-size="12" fill="#555">Go home</text>
            
            <circle cx="500" cy="200" r="10" fill="#ffa000" />
            <text x="500" y="230" text-anchor="middle" font-size="14" fill="#333">6:30</text>
            <text x="500" y="250" text-anchor="middle" font-size="12" fill="#555">Have dinner</text>
            
            <circle cx="600" cy="200" r="10" fill="#ffa000" />
            <text x="600" y="230" text-anchor="middle" font-size="14" fill="#333">8:00</text>
            <text x="600" y="250" text-anchor="middle" font-size="12" fill="#555">Take a shower</text>
            
            <circle cx="700" cy="200" r="10" fill="#ffa000" />
            <text x="700" y="230" text-anchor="middle" font-size="14" fill="#333">9:00</text>
            <text x="700" y="250" text-anchor="middle" font-size="12" fill="#555">Go to bed</text>
            
            <!-- Time periods -->
            <rect x="100" y="150" width="100" height="30" fill="#b3e5fc" opacity="0.7" />
            <text x="150" y="170" text-anchor="middle" font-size="14" fill="#333">Morning</text>
            
            <rect x="200" y="150" width="200" height="30" fill="#c8e6c9" opacity="0.7" />
            <text x="300" y="170" text-anchor="middle" font-size="14" fill="#333">School time</text>
            
            <rect x="400" y="150" width="100" height="30" fill="#ffccbc" opacity="0.7" />
            <text x="450" y="170" text-anchor="middle" font-size="14" fill="#333">Afternoon</text>
            
            <rect x="500" y="150" width="200" height="30" fill="#d1c4e9" opacity="0.7" />
            <text x="600" y="170" text-anchor="middle" font-size="14" fill="#333">Evening</text>
            
            <!-- Description -->
            <rect x="150" y="280" width="500" height="100" rx="10" fill="#fff3e0" stroke="#ff6f00" stroke-width="2" />
            <text x="400" y="310" text-anchor="middle" font-size="18" fill="#333">
                My Daily Routine
            </text>
            <text x="400" y="340" text-anchor="middle" font-size="16" fill="#555">
                Every day, I wake up, go to school, come home,
            </text>
            <text x="400" y="365" text-anchor="middle" font-size="16" fill="#555">
                do activities, and then go to bed.
            </text>
        </svg>
    `;
}

// Function to initialize practice activities
function initPracticeActivities() {
    // Activity 1: Match activities to times of day
    const activity1 = document.getElementById('activity-1');
    if (activity1) {
        activity1.innerHTML = `
            <div class="matching-activities">
                <p>Match each activity to the correct time of day:</p>
                <div class="activity-matching-game">
                    <div class="time-periods">
                        <div class="time-period" data-time="morning">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#b3e5fc" />
                                <circle cx="20" cy="20" r="15" fill="#ffeb3b" />
                                <text x="40" y="50" text-anchor="middle" font-size="14" fill="#333">Morning</text>
                            </svg>
                        </div>
                        <div class="time-period" data-time="school">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#c8e6c9" />
                                <rect x="20" y="20" width="40" height="30" fill="#795548" />
                                <rect x="30" y="35" width="20" height="15" fill="#ffc107" />
                                <text x="40" y="60" text-anchor="middle" font-size="14" fill="#333">School</text>
                            </svg>
                        </div>
                        <div class="time-period" data-time="afternoon">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#ffccbc" />
                                <circle cx="60" cy="20" r="15" fill="#ff9800" />
                                <text x="40" y="50" text-anchor="middle" font-size="14" fill="#333">Afternoon</text>
                            </svg>
                        </div>
                        <div class="time-period" data-time="evening">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#d1c4e9" />
                                <circle cx="60" cy="20" r="15" fill="#f5f5f5" />
                                <text x="40" y="50" text-anchor="middle" font-size="14" fill="#333">Evening</text>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="daily-activities">
                        <button class="daily-activity" data-time="morning">Wake up</button>
                        <button class="daily-activity" data-time="school">Study</button>
                        <button class="daily-activity" data-time="afternoon">Do homework</button>
                        <button class="daily-activity" data-time="evening">Go to bed</button>
                    </div>
                </div>
                
                <div class="feedback"></div>
            </div>
            
            <style>
                .matching-activities {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .activity-matching-game {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                
                .time-periods {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .time-period {
                    text-align: center;
                    border: 2px solid #ccc;
                    border-radius: 10px;
                    overflow: hidden;
                }
                
                .time-period.matched {
                    border-color: #8bc34a;
                    background-color: #f1f8e9;
                }
                
                .daily-activities {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .daily-activity {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: var(--border-radius);
                    cursor: pointer;
                }
                
                .daily-activity.selected {
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
        
        // Add event listeners for activity matching game
        let selectedActivity = null;
        const dailyActivities = activity1.querySelectorAll('.daily-activity');
        const timePeriods = activity1.querySelectorAll('.time-period');
        const feedback = activity1.querySelector('.feedback');
        
        dailyActivities.forEach(activity => {
            activity.addEventListener('click', function() {
                // Deselect previously selected activity
                if (selectedActivity) {
                    selectedActivity.classList.remove('selected');
                }
                
                // Select this activity
                this.classList.add('selected');
                selectedActivity = this;
            });
        });
        
        timePeriods.forEach(period => {
            period.addEventListener('click', function() {
                if (!selectedActivity) {
                    feedback.textContent = 'Please select an activity first!';
                    feedback.style.color = '#f44336';
                    return;
                }
                
                const periodTime = this.dataset.time;
                const activityTime = selectedActivity.dataset.time;
                
                if (periodTime === activityTime) {
                    this.classList.add('matched');
                    selectedActivity.disabled = true;
                    selectedActivity.classList.remove('selected');
                    selectedActivity = null;
                    
                    feedback.textContent = 'Correct match!';
                    feedback.style.color = '#8bc34a';
                    
                    // Check if all are matched
                    const matchedPeriods = activity1.querySelectorAll('.time-period.matched');
                    if (matchedPeriods.length === timePeriods.length) {
                        feedback.textContent = 'Great job! You matched all the activities!';
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
                <p>Complete each sentence with the correct activity:</p>
                
                <div class="sentence-completion">
                    <p>1. I <select class="activity-select" data-answer="wake up">
                        <option value="">Choose...</option>
                        <option value="wake up">wake up</option>
                        <option value="go to school">go to school</option>
                        <option value="have lunch">have lunch</option>
                        <option value="go to bed">go to bed</option>
                    </select> at 7 o'clock in the morning.</p>
                    
                    <p>2. I <select class="activity-select" data-answer="go to school">
                        <option value="">Choose...</option>
                        <option value="wake up">wake up</option>
                        <option value="go to school">go to school</option>
                        <option value="have lunch">have lunch</option>
                        <option value="go to bed">go to bed</option>
                    </select> at half past eight.</p>
                    
                    <p>3. I <select class="activity-select" data-answer="have lunch">
                        <option value="">Choose...</option>
                        <option value="wake up">wake up</option>
                        <option value="go to school">go to school</option>
                        <option value="have lunch">have lunch</option>
                        <option value="go to bed">go to bed</option>
                    </select> at 12 o'clock.</p>
                    
                    <p>4. I <select class="activity-select" data-answer="do homework">
                        <option value="">Choose...</option>
                        <option value="do homework">do homework</option>
                        <option value="have dinner">have dinner</option>
                        <option value="take a shower">take a shower</option>
                        <option value="go to bed">go to bed</option>
                    </select> in the afternoon.</p>
                    
                    <p>5. I <select class="activity-select" data-answer="go to bed">
                        <option value="">Choose...</option>
                        <option value="wake up">wake up</option>
                        <option value="have dinner">have dinner</option>
                        <option value="take a shower">take a shower</option>
                        <option value="go to bed">go to bed</option>
                    </select> at 9 o'clock at night.</p>
                </div>
                
                <button class="check-answers">Check Answers</button>
                <div class="feedback"></div>
            </div>
            
            <style>
                .complete-sentences p {
                    margin-bottom: 1rem;
                    font-size: 1.1rem;
                }
                
                .activity-select {
                    padding: 5px;
                    border: 2px solid #ccc;
                    border-radius: 5px;
                    font-size: 1rem;
                }
                
                .activity-select.correct {
                    border-color: #8bc34a;
                    background-color: #f1f8e9;
                }
                
                .activity-select.incorrect {
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
            const selects = activity2.querySelectorAll('.activity-select');
            let correctCount = 0;
            
            selects.forEach(select => {
                const userAnswer = select.value;
                const correctAnswer = select.dataset.answer;
                
                if (userAnswer === correctAnswer) {
                    select.className = 'activity-select correct';
                    correctCount++;
                } else {
                    select.className = 'activity-select incorrect';
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
