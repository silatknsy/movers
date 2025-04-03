// JavaScript for Question Forms Animation

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
            
            <!-- Question mark background -->
            <text x="200" y="150" text-anchor="middle" font-size="200" fill="#e1bee7" opacity="0.3">?</text>
            
            <!-- Question words -->
            <g class="question-word" transform="translate(70, 80)">
                <rect width="60" height="30" rx="15" fill="#9c27b0" />
                <text x="30" y="20" text-anchor="middle" font-size="16" fill="white">What</text>
            </g>
            
            <g class="question-word" transform="translate(150, 50)">
                <rect width="60" height="30" rx="15" fill="#9c27b0" />
                <text x="30" y="20" text-anchor="middle" font-size="16" fill="white">Where</text>
            </g>
            
            <g class="question-word" transform="translate(230, 80)">
                <rect width="60" height="30" rx="15" fill="#9c27b0" />
                <text x="30" y="20" text-anchor="middle" font-size="16" fill="white">When</text>
            </g>
            
            <g class="question-word" transform="translate(70, 200)">
                <rect width="60" height="30" rx="15" fill="#9c27b0" />
                <text x="30" y="20" text-anchor="middle" font-size="16" fill="white">Why</text>
            </g>
            
            <g class="question-word" transform="translate(150, 230)">
                <rect width="60" height="30" rx="15" fill="#9c27b0" />
                <text x="30" y="20" text-anchor="middle" font-size="16" fill="white">Who</text>
            </g>
            
            <g class="question-word" transform="translate(230, 200)">
                <rect width="60" height="30" rx="15" fill="#9c27b0" />
                <text x="30" y="20" text-anchor="middle" font-size="16" fill="white">How</text>
            </g>
            
            <!-- Yes/No questions -->
            <g class="yes-no-question" transform="translate(320, 140)">
                <rect width="60" height="100" rx="10" fill="#7b1fa2" />
                <text x="30" y="30" text-anchor="middle" font-size="14" fill="white">Do</text>
                <text x="30" y="50" text-anchor="middle" font-size="14" fill="white">Is</text>
                <text x="30" y="70" text-anchor="middle" font-size="14" fill="white">Can</text>
                <text x="30" y="90" text-anchor="middle" font-size="14" fill="white">Yes/No</text>
            </g>
            
            <!-- Central question mark -->
            <g class="central-question-mark">
                <circle cx="150" cy="140" r="40" fill="#ce93d8" />
                <text x="150" y="160" text-anchor="middle" font-size="60" fill="white">?</text>
            </g>
        </svg>
    `;
    
    // Add simple animation to the central question mark
    const questionMark = container.querySelector('.central-question-mark');
    let scale = 1;
    let growing = true;
    
    setInterval(() => {
        if (growing) {
            scale += 0.01;
            if (scale >= 1.1) growing = false;
        } else {
            scale -= 0.01;
            if (scale <= 0.9) growing = true;
        }
        
        questionMark.style.transform = `scale(${scale})`;
    }, 50);
}

// Function to initialize the main interactive animation
function initMainAnimation() {
    const container = document.getElementById('main-animation');
    if (!container) return;
    
    // Create scenes array to hold different animation scenes
    window.scenes = [
        createWhatWhereWhenScene,
        createWhyWhoHowScene,
        createYesNoQuestionsScene,
        createQuestionOrderScene,
        createQuestionGameScene
    ];
    
    // Initialize with the first scene
    window.currentScene = 0;
    window.scenes[window.currentScene](container);
    
    // Update button states
    updateButtonStates();
}

// Create Scene 1: What, Where, When
function createWhatWhereWhenScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f3e5f5" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">What, Where, When Questions</text>
            
            <!-- What section -->
            <g class="what-section" transform="translate(150, 120)">
                <rect width="120" height="40" rx="20" fill="#9c27b0" />
                <text x="60" y="25" text-anchor="middle" font-size="20" fill="white">What</text>
                
                <rect x="-30" y="60" width="180" height="80" rx="10" fill="#e1bee7" class="question-box" data-question="what" />
                <text x="60" y="90" text-anchor="middle" font-size="16" fill="#333">What is your favorite color?</text>
                <text x="60" y="120" text-anchor="middle" font-size="16" fill="#333">What are you doing?</text>
                
                <text x="60" y="160" text-anchor="middle" font-size="14" fill="#555">Use "what" to ask about things</text>
            </g>
            
            <!-- Where section -->
            <g class="where-section" transform="translate(400, 120)">
                <rect width="120" height="40" rx="20" fill="#9c27b0" />
                <text x="60" y="25" text-anchor="middle" font-size="20" fill="white">Where</text>
                
                <rect x="-30" y="60" width="180" height="80" rx="10" fill="#e1bee7" class="question-box" data-question="where" />
                <text x="60" y="90" text-anchor="middle" font-size="16" fill="#333">Where do you live?</text>
                <text x="60" y="120" text-anchor="middle" font-size="16" fill="#333">Where is the library?</text>
                
                <text x="60" y="160" text-anchor="middle" font-size="14" fill="#555">Use "where" to ask about places</text>
            </g>
            
            <!-- When section -->
            <g class="when-section" transform="translate(650, 120)">
                <rect width="120" height="40" rx="20" fill="#9c27b0" />
                <text x="60" y="25" text-anchor="middle" font-size="20" fill="white">When</text>
                
                <rect x="-30" y="60" width="180" height="80" rx="10" fill="#e1bee7" class="question-box" data-question="when" />
                <text x="60" y="90" text-anchor="middle" font-size="16" fill="#333">When is your birthday?</text>
                <text x="60" y="120" text-anchor="middle" font-size="16" fill="#333">When does the film start?</text>
                
                <text x="60" y="160" text-anchor="middle" font-size="14" fill="#555">Use "when" to ask about time</text>
            </g>
            
            <!-- Example area -->
            <rect x="200" y="250" width="400" height="100" rx="10" fill="#ce93d8" />
            <text x="400" y="280" text-anchor="middle" font-size="18" fill="white" id="example-text">
                Click on a question word to see examples
            </text>
            <text x="400" y="320" text-anchor="middle" font-size="16" fill="white" id="example-explanation">
                Learn how to use different question words
            </text>
        </svg>
    `;
    
    // Add click events for question boxes
    const questionBoxes = container.querySelectorAll('.question-box');
    const exampleText = container.querySelector('#example-text');
    const exampleExplanation = container.querySelector('#example-explanation');
    
    questionBoxes.forEach(box => {
        box.style.cursor = 'pointer';
        box.addEventListener('click', function() {
            const questionType = this.dataset.question;
            
            // Reset all boxes
            questionBoxes.forEach(b => {
                b.style.fill = '#e1bee7';
            });
            
            // Highlight selected box
            this.style.fill = '#ba68c8';
            
            // Update example area
            switch(questionType) {
                case 'what':
                    exampleText.textContent = 'What is in your bag?';
                    exampleExplanation.textContent = 'We use "what" to ask about things and information';
                    break;
                case 'where':
                    exampleText.textContent = 'Where are you going?';
                    exampleExplanation.textContent = 'We use "where" to ask about places and locations';
                    break;
                case 'when':
                    exampleText.textContent = 'When do you go to school?';
                    exampleExplanation.textContent = 'We use "when" to ask about time and dates';
                    break;
            }
        });
    });
}

// Create Scene 2: Why, Who, How (placeholder)
function createWhyWhoHowScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f3e5f5" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Why, Who, How Questions</text>
            
            <!-- Why, Who, How sections placeholder -->
            <text x="400" y="200" text-anchor="middle" font-size="20" fill="#333">
                Why, Who, How questions animation
            </text>
            
            <!-- Instruction -->
            <text x="400" y="350" text-anchor="middle" font-size="16" fill="#333">
                Click on question words to see examples and explanations
            </text>
        </svg>
    `;
}

// Create Scene 3: Yes/No Questions (placeholder)
function createYesNoQuestionsScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f3e5f5" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Yes/No Questions</text>
            
            <!-- Yes/No questions placeholder -->
            <text x="400" y="200" text-anchor="middle" font-size="20" fill="#333">
                Yes/No questions animation
            </text>
            
            <!-- Instruction -->
            <text x="400" y="350" text-anchor="middle" font-size="16" fill="#333">
                Learn how to form questions that can be answered with Yes or No
            </text>
        </svg>
    `;
}

// Create Scene 4: Question Order (placeholder)
function createQuestionOrderScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f3e5f5" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Question Word Order</text>
            
            <!-- Question order placeholder -->
            <text x="400" y="200" text-anchor="middle" font-size="20" fill="#333">
                Question word order animation
            </text>
            
            <!-- Instruction -->
            <text x="400" y="350" text-anchor="middle" font-size="16" fill="#333">
                Learn the correct order of words in questions
            </text>
        </svg>
    `;
}

// Create Scene 5: Question Game (placeholder)
function createQuestionGameScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f3e5f5" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Question Game</text>
            
            <!-- Question game placeholder -->
            <text x="400" y="200" text-anchor="middle" font-size="20" fill="#333">
                Interactive question formation game
            </text>
            
            <!-- Instruction -->
            <text x="400" y="350" text-anchor="middle" font-size="16" fill="#333">
                Create questions by dragging the correct question words
            </text>
        </svg>
    `;
}

// Function to initialize practice activities
function initPracticeActivities() {
    // Activity 1: Match question words to pictures
    const activity1 = document.getElementById('activity-1');
    if (activity1) {
        activity1.innerHTML = `
            <div class="matching-questions">
                <p>Match each question word to the correct picture:</p>
                <div class="question-matching-game">
                    <div class="question-images">
                        <div class="question-image" data-question="what">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#f5f5f5" />
                                <circle cx="40" cy="40" r="20" fill="#e1bee7" />
                                <text x="40" y="45" text-anchor="middle" font-size="16" fill="#333">?</text>
                                <rect x="20" y="20" width="10" height="10" fill="#9c27b0" />
                                <rect x="35" y="20" width="10" height="10" fill="#9c27b0" />
                                <rect x="50" y="20" width="10" height="10" fill="#9c27b0" />
                            </svg>
                        </div>
                        <div class="question-image" data-question="where">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#f5f5f5" />
                                <polygon points="40,20 60,50 20,50" fill="#e1bee7" />
                                <text x="40" y="45" text-anchor="middle" font-size="16" fill="#333">?</text>
                                <circle cx="40" cy="30" r="5" fill="#9c27b0" />
                            </svg>
                        </div>
                        <div class="question-image" data-question="when">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#f5f5f5" />
                                <circle cx="40" cy="40" r="25" fill="#e1bee7" />
                                <line x1="40" y1="20" x2="40" y2="40" stroke="#9c27b0" stroke-width="3" />
                                <line x1="40" y1="40" x2="55" y2="50" stroke="#9c27b0" stroke-width="3" />
                                <text x="40" y="65" text-anchor="middle" font-size="16" fill="#333">?</text>
                            </svg>
                        </div>
                        <div class="question-image" data-question="who">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#f5f5f5" />
                                <circle cx="40" cy="30" r="15" fill="#e1bee7" />
                                <rect x="25" y="45" width="30" height="25" fill="#e1bee7" />
                                <text x="40" y="60" text-anchor="middle" font-size="16" fill="#333">?</text>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="question-words">
                        <button class="question-word" data-question="where">Where</button>
                        <button class="question-word" data-question="what">What</button>
                        <button class="question-word" data-question="who">Who</button>
                        <button class="question-word" data-question="when">When</button>
                    </div>
                </div>
                
                <div class="feedback"></div>
            </div>
            
            <style>
                .matching-questions {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .question-matching-game {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                
                .question-images {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .question-image {
                    border: 2px solid #ccc;
                    border-radius: 10px;
                    overflow: hidden;
                }
                
                .question-image.matched {
                    border-color: #8bc34a;
                    background-color: #f1f8e9;
                }
                
                .question-words {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .question-word {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: var(--border-radius);
                    cursor: pointer;
                }
                
                .question-word.selected {
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
        
        // Add event listeners for question matching game
        let selectedWord = null;
        const questionWords = activity1.querySelectorAll('.question-word');
        const questionImages = activity1.querySelectorAll('.question-image');
        const feedback = activity1.querySelector('.feedback');
        
        questionWords.forEach(word => {
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
        
        questionImages.forEach(image => {
            image.addEventListener('click', function() {
                if (!selectedWord) {
                    feedback.textContent = 'Please select a question word first!';
                    feedback.style.color = '#f44336';
                    return;
                }
                
                const imageQuestion = this.dataset.question;
                const wordQuestion = selectedWord.dataset.question;
                
                if (imageQuestion === wordQuestion) {
                    this.classList.add('matched');
                    selectedWord.disabled = true;
                    selectedWord.classList.remove('selected');
                    selectedWord = null;
                    
                    feedback.textContent = 'Correct match!';
                    feedback.style.color = '#8bc34a';
                    
                    // Check if all are matched
                    const matchedImages = activity1.querySelectorAll('.question-image.matched');
                    if (matchedImages.length === questionImages.length) {
                        feedback.textContent = 'Great job! You matched all the question words!';
                    }
                } else {
                    feedback.textContent = 'Try again! That\'s not the right match.';
                    feedback.style.color = '#f44336';
                }
            });
        });
    }
    
    // Activity 2: Complete the questions
    const activity2 = document.getElementById('activity-2');
    if (activity2) {
        activity2.innerHTML = `
            <div class="complete-questions">
                <p>Complete each question with the correct question word:</p>
                
                <div class="question-completion">
                    <p>1. <select class="question-select" data-answer="Where">
                        <option value="">Choose...</option>
                        <option value="What">What</option>
                        <option value="Where">Where</option>
                        <option value="When">When</option>
                        <option value="Why">Why</option>
                        <option value="Who">Who</option>
                        <option value="How">How</option>
                    </select> do you live?</p>
                    
                    <p>2. <select class="question-select" data-answer="What">
                        <option value="">Choose...</option>
                        <option value="What">What</option>
                        <option value="Where">Where</option>
                        <option value="When">When</option>
                        <option value="Why">Why</option>
                        <option value="Who">Who</option>
                        <option value="How">How</option>
                    </select> is your favorite food?</p>
                    
                    <p>3. <select class="question-select" data-answer="When">
                        <option value="">Choose...</option>
                        <option value="What">What</option>
                        <option value="Where">Where</option>
                        <option value="When">When</option>
                        <option value="Why">Why</option>
                        <option value="Who">Who</option>
                        <option value="How">How</option>
                    </select> is your birthday?</p>
                    
                    <p>4. <select class="question-select" data-answer="Who">
                        <option value="">Choose...</option>
                        <option value="What">What</option>
                        <option value="Where">Where</option>
                        <option value="When">When</option>
                        <option value="Why">Why</option>
                        <option value="Who">Who</option>
                        <option value="How">How</option>
                    </select> is your best friend?</p>
                    
                    <p>5. <select class="question-select" data-answer="Why">
                        <option value="">Choose...</option>
                        <option value="What">What</option>
                        <option value="Where">Where</option>
                        <option value="When">When</option>
                        <option value="Why">Why</option>
                        <option value="Who">Who</option>
                        <option value="How">How</option>
                    </select> are you crying?</p>
                </div>
                
                <button class="check-answers">Check Answers</button>
                <div class="feedback"></div>
            </div>
            
            <style>
                .complete-questions p {
                    margin-bottom: 1rem;
                    font-size: 1.1rem;
                }
                
                .question-select {
                    padding: 5px;
                    border: 2px solid #ccc;
                    border-radius: 5px;
                    font-size: 1rem;
                }
                
                .question-select.correct {
                    border-color: #8bc34a;
                    background-color: #f1f8e9;
                }
                
                .question-select.incorrect {
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
            const selects = activity2.querySelectorAll('.question-select');
            let correctCount = 0;
            
            selects.forEach(select => {
                const userAnswer = select.value;
                const correctAnswer = select.dataset.answer;
                
                if (userAnswer === correctAnswer) {
                    select.className = 'question-select correct';
                    correctCount++;
                } else {
                    select.className = 'question-select incorrect';
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
