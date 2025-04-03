// JavaScript for Food and Meals Animation

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
            <rect width="400" height="300" fill="#f9fbe7" />
            
            <!-- Table -->
            <rect x="50" y="200" width="300" height="20" fill="#8d6e63" />
            <rect x="60" y="220" width="15" height="60" fill="#8d6e63" />
            <rect x="325" y="220" width="15" height="60" fill="#8d6e63" />
            
            <!-- Plate -->
            <circle cx="200" cy="180" r="70" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="3" />
            <circle cx="200" cy="180" r="60" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1" />
            
            <!-- Food items -->
            <g class="food-item" transform="translate(170, 150)">
                <rect x="0" y="0" width="20" height="40" rx="5" fill="#8bc34a" />
                <circle cx="10" cy="0" r="10" fill="#7cb342" />
            </g>
            
            <g class="food-item" transform="translate(200, 150)">
                <rect x="0" y="0" width="20" height="40" rx="5" fill="#ff9800" />
                <circle cx="10" cy="0" r="10" fill="#fb8c00" />
            </g>
            
            <g class="food-item" transform="translate(230, 160)">
                <rect x="-20" y="0" width="40" height="20" rx="5" fill="#f44336" />
            </g>
            
            <g class="food-item" transform="translate(180, 190)">
                <circle cx="0" cy="0" r="15" fill="#ffeb3b" />
            </g>
            
            <g class="food-item" transform="translate(210, 190)">
                <circle cx="0" cy="0" r="15" fill="#4caf50" />
            </g>
            
            <!-- Utensils -->
            <g class="fork" transform="translate(120, 180)">
                <rect x="0" y="0" width="5" height="40" fill="#9e9e9e" />
                <path d="M 0,0 L 5,0 L 5,-20 L 0,-20 Z" fill="#9e9e9e" />
                <path d="M 0,-20 L 5,-20 L 5,-25 L 0,-25 Z" fill="#9e9e9e" />
                <path d="M 0,-15 L 5,-15 L 5,-20 L 0,-20 Z" fill="#9e9e9e" />
                <path d="M 0,-10 L 5,-10 L 5,-15 L 0,-15 Z" fill="#9e9e9e" />
            </g>
            
            <g class="knife" transform="translate(280, 180)">
                <rect x="-5" y="0" width="5" height="40" fill="#9e9e9e" />
                <path d="M -5,0 L 0,0 L 0,-30 L -5,-20 Z" fill="#9e9e9e" />
            </g>
            
            <!-- Meal labels -->
            <g class="meal-label" transform="translate(80, 80)">
                <rect width="70" height="30" rx="15" fill="#cddc39" />
                <text x="35" y="20" text-anchor="middle" font-size="14" fill="#333">Breakfast</text>
            </g>
            
            <g class="meal-label" transform="translate(165, 50)">
                <rect width="70" height="30" rx="15" fill="#ffeb3b" />
                <text x="35" y="20" text-anchor="middle" font-size="14" fill="#333">Lunch</text>
            </g>
            
            <g class="meal-label" transform="translate(250, 80)">
                <rect width="70" height="30" rx="15" fill="#ff9800" />
                <text x="35" y="20" text-anchor="middle" font-size="14" fill="#333">Dinner</text>
            </g>
        </svg>
    `;
    
    // Add simple animation to the food items
    const foodItems = container.querySelectorAll('.food-item');
    
    foodItems.forEach((item, index) => {
        let delay = index * 200;
        setTimeout(() => {
            item.style.transform = 'scale(1.2)';
            item.style.transition = 'transform 0.3s ease-in-out';
            
            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 300);
        }, delay);
    });
    
    // Repeat the animation every 3 seconds
    setInterval(() => {
        foodItems.forEach((item, index) => {
            let delay = index * 200;
            setTimeout(() => {
                item.style.transform = 'scale(1.2)';
                
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
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
        createMealsScene,
        createFoodGroupsScene,
        createDrinksScene,
        createEatingPlacesScene,
        createFoodPreferencesScene
    ];
    
    // Initialize with the first scene
    window.currentScene = 0;
    window.scenes[window.currentScene](container);
    
    // Update button states
    updateButtonStates();
}

// Create Scene 1: Meals
function createMealsScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f9fbe7" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Meals</text>
            
            <!-- Breakfast -->
            <g class="meal-item" data-meal="breakfast" transform="translate(150, 120)">
                <rect width="120" height="120" rx="10" fill="#f0f4c3" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">Breakfast</text>
                
                <!-- Breakfast foods -->
                <circle cx="40" cy="60" r="15" fill="#ffeb3b" /> <!-- Egg -->
                <rect x="70" y="50" width="30" height="20" fill="#795548" /> <!-- Toast -->
                <path d="M 30,90 Q 60,70 90,90" fill="none" stroke="#ff9800" stroke-width="3" /> <!-- Smile -->
                
                <text x="60" y="140" text-anchor="middle" font-size="14" fill="#555">Morning meal</text>
            </g>
            
            <!-- Lunch -->
            <g class="meal-item" data-meal="lunch" transform="translate(340, 120)">
                <rect width="120" height="120" rx="10" fill="#fff9c4" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">Lunch</text>
                
                <!-- Lunch foods -->
                <rect x="30" y="50" width="60" height="10" fill="#8d6e63" /> <!-- Bread -->
                <rect x="30" y="60" width="60" height="5" fill="#4caf50" /> <!-- Lettuce -->
                <rect x="30" y="65" width="60" height="10" fill="#f44336" /> <!-- Tomato -->
                <rect x="30" y="75" width="60" height="10" fill="#ffeb3b" /> <!-- Cheese -->
                <rect x="30" y="85" width="60" height="10" fill="#8d6e63" /> <!-- Bread -->
                
                <text x="60" y="140" text-anchor="middle" font-size="14" fill="#555">Midday meal</text>
            </g>
            
            <!-- Dinner -->
            <g class="meal-item" data-meal="dinner" transform="translate(530, 120)">
                <rect width="120" height="120" rx="10" fill="#ffe0b2" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">Dinner</text>
                
                <!-- Dinner foods -->
                <rect x="30" y="50" width="30" height="20" fill="#795548" /> <!-- Meat -->
                <circle cx="80" cy="60" r="15" fill="#4caf50" /> <!-- Vegetable -->
                <ellipse cx="50" cy="90" rx="25" ry="10" fill="#ffa000" /> <!-- Potato -->
                
                <text x="60" y="140" text-anchor="middle" font-size="14" fill="#555">Evening meal</text>
            </g>
            
            <!-- Snack -->
            <g class="meal-item" data-meal="snack" transform="translate(340, 260)">
                <rect width="120" height="120" rx="10" fill="#e1f5fe" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">Snack</text>
                
                <!-- Snack foods -->
                <rect x="30" y="50" width="20" height="40" rx="5" fill="#8bc34a" /> <!-- Apple -->
                <circle cx="40" cy="50" r="10" fill="#7cb342" /> <!-- Apple top -->
                <rect x="70" y="60" width="20" height="30" rx="3" fill="#ff9800" /> <!-- Snack bar -->
                
                <text x="60" y="140" text-anchor="middle" font-size="14" fill="#555">Between meals</text>
            </g>
            
            <!-- Description box -->
            <rect x="150" y="260" width="150" height="120" rx="10" fill="#f1f8e9" stroke="#7cb342" stroke-width="2" />
            <text x="225" y="290" text-anchor="middle" font-size="18" fill="#333" id="meal-name">
                Meals
            </text>
            <text x="225" y="320" text-anchor="middle" font-size="16" fill="#555" id="meal-time">
                We eat different meals
            </text>
            <text x="225" y="350" text-anchor="middle" font-size="16" fill="#555" id="meal-example">
                at different times of day
            </text>
            
            <!-- Instructions -->
            <rect x="530" y="260" width="120" height="120" rx="10" fill="#e8f5e9" stroke="#4caf50" stroke-width="2" />
            <text x="590" y="290" text-anchor="middle" font-size="16" fill="#333">
                Click on a meal
            </text>
            <text x="590" y="320" text-anchor="middle" font-size="16" fill="#333">
                to learn more
            </text>
            <text x="590" y="350" text-anchor="middle" font-size="16" fill="#333">
                about it
            </text>
        </svg>
    `;
    
    // Add click events for meal items
    const mealItems = container.querySelectorAll('.meal-item');
    const mealName = container.querySelector('#meal-name');
    const mealTime = container.querySelector('#meal-time');
    const mealExample = container.querySelector('#meal-example');
    
    mealItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const meal = this.dataset.meal;
            
            // Reset all items
            mealItems.forEach(m => {
                m.style.transform = '';
            });
            
            // Highlight selected item
            this.style.transform = 'scale(1.1)';
            
            // Update description
            switch(meal) {
                case 'breakfast':
                    mealName.textContent = 'Breakfast';
                    mealTime.textContent = 'We eat breakfast';
                    mealExample.textContent = 'in the morning';
                    break;
                case 'lunch':
                    mealName.textContent = 'Lunch';
                    mealTime.textContent = 'We eat lunch';
                    mealExample.textContent = 'in the middle of the day';
                    break;
                case 'dinner':
                    mealName.textContent = 'Dinner';
                    mealTime.textContent = 'We eat dinner';
                    mealExample.textContent = 'in the evening';
                    break;
                case 'snack':
                    mealName.textContent = 'Snack';
                    mealTime.textContent = 'We eat snacks';
                    mealExample.textContent = 'between meals';
                    break;
            }
        });
    });
}

// Create Scene 2: Food Groups (placeholder)
function createFoodGroupsScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f9fbe7" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Food Groups</text>
            
            <!-- Fruit -->
            <g class="food-group" data-group="fruit" transform="translate(150, 120)">
                <rect width="120" height="120" rx="10" fill="#e8f5e9" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">Fruit</text>
                
                <!-- Fruit items -->
                <circle cx="40" cy="70" r="20" fill="#f44336" /> <!-- Apple -->
                <circle cx="80" cy="70" r="15" fill="#ff9800" /> <!-- Orange -->
                
                <text x="60" y="140" text-anchor="middle" font-size="14" fill="#555">apple, banana, orange</text>
            </g>
            
            <!-- Vegetables -->
            <g class="food-group" data-group="vegetables" transform="translate(340, 120)">
                <rect width="120" height="120" rx="10" fill="#f1f8e9" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">Vegetables</text>
                
                <!-- Vegetable items -->
                <circle cx="40" cy="70" r="20" fill="#4caf50" /> <!-- Broccoli -->
                <rect x="65" y="60" width="30" height="20" fill="#ff9800" /> <!-- Carrot -->
                
                <text x="60" y="140" text-anchor="middle" font-size="14" fill="#555">carrot, potato, tomato</text>
            </g>
            
            <!-- Meat -->
            <g class="food-group" data-group="meat" transform="translate(530, 120)">
                <rect width="120" height="120" rx="10" fill="#ffebee" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">Meat</text>
                
                <!-- Meat items -->
                <rect x="30" y="60" width="60" height="20" rx="5" fill="#795548" /> <!-- Meat -->
                
                <text x="60" y="140" text-anchor="middle" font-size="14" fill="#555">chicken, beef, pork</text>
            </g>
            
            <!-- Dairy -->
            <g class="food-group" data-group="dairy" transform="translate(150, 260)">
                <rect width="120" height="120" rx="10" fill="#f3e5f5" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">Dairy</text>
                
                <!-- Dairy items -->
                <rect x="30" y="60" width="20" height="30" fill="#f5f5f5" /> <!-- Milk -->
                <rect x="60" y="60" width="30" height="20" fill="#ffeb3b" /> <!-- Cheese -->
                
                <text x="60" y="140" text-anchor="middle" font-size="14" fill="#555">milk, cheese, yogurt</text>
            </g>
            
            <!-- Grains -->
            <g class="food-group" data-group="grains" transform="translate(340, 260)">
                <rect width="120" height="120" rx="10" fill="#fff8e1" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">Grains</text>
                
                <!-- Grain items -->
                <rect x="30" y="60" width="60" height="10" fill="#8d6e63" /> <!-- Bread -->
                <ellipse cx="60" cy="85" rx="30" ry="10" fill="#ffa000" /> <!-- Rice -->
                
                <text x="60" y="140" text-anchor="middle" font-size="14" fill="#555">bread, rice, pasta</text>
            </g>
            
            <!-- Fish -->
            <g class="food-group" data-group="fish" transform="translate(530, 260)">
                <rect width="120" height="120" rx="10" fill="#e0f7fa" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">Fish</text>
                
                <!-- Fish items -->
                <path d="M 30,70 Q 60,50 90,70 Q 60,90 30,70 Z" fill="#b3e5fc" /> <!-- Fish shape -->
                <circle cx="40" cy="65" r="3" fill="#333" /> <!-- Eye -->
                
                <text x="60" y="140" text-anchor="middle" font-size="14" fill="#555">fish, seafood</text>
            </g>
            
            <!-- Description box -->
            <rect x="150" y="40" width="500" height="60" rx="10" fill="#f1f8e9" stroke="#7cb342" stroke-width="2" />
            <text x="400" y="70" text-anchor="middle" font-size="18" fill="#333" id="group-description">
                Click on a food group to learn more about it
            </text>
            <text x="400" y="95" text-anchor="middle" font-size="16" fill="#555" id="group-example">
                We need to eat food from all groups for a healthy diet
            </text>
        </svg>
    `;
    
    // Add click events for food groups
    const foodGroups = container.querySelectorAll('.food-group');
    const groupDescription = container.querySelector('#group-description');
    const groupExample = container.querySelector('#group-example');
    
    foodGroups.forEach(group => {
        group.style.cursor = 'pointer';
        group.addEventListener('click', function() {
            const foodGroup = this.dataset.group;
            
            // Reset all groups
            foodGroups.forEach(g => {
                g.style.transform = '';
            });
            
            // Highlight selected group
            this.style.transform = 'scale(1.1)';
            
            // Update description
            switch(foodGroup) {
                case 'fruit':
                    groupDescription.textContent = 'Fruit: apples, bananas, oranges, strawberries';
                    groupExample.textContent = 'Fruit is sweet and healthy. We should eat fruit every day.';
                    break;
                case 'vegetables':
                    groupDescription.textContent = 'Vegetables: carrots, potatoes, tomatoes, broccoli';
                    groupExample.textContent = 'Vegetables are healthy. They help us grow strong.';
                    break;
                case 'meat':
                    groupDescription.textContent = 'Meat: chicken, beef, pork, lamb';
                    groupExample.textContent = 'Meat gives us protein to build muscles.';
                    break;
                case 'dairy':
                    groupDescription.textContent = 'Dairy: milk, cheese, yogurt, butter';
                    groupExample.textContent = 'Dairy foods have calcium for strong bones and teeth.';
                    break;
                case 'grains':
                    groupDescription.textContent = 'Grains: bread, rice, pasta, cereal';
                    groupExample.textContent = 'Grains give us energy to play and learn.';
                    break;
                case 'fish':
                    groupDescription.textContent = 'Fish: salmon, tuna, cod, prawns';
                    groupExample.textContent = 'Fish is good for our brain and helps us think.';
                    break;
            }
        });
    });
}

// Create Scene 3: Drinks (placeholder)
function createDrinksScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f9fbe7" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Drinks</text>
            
            <!-- Water -->
            <g class="drink-item" data-drink="water" transform="translate(200, 120)">
                <rect width="100" height="150" rx="5" fill="#e3f2fd" />
                <text x="50" y="30" text-anchor="middle" font-size="18" fill="#333">Water</text>
                
                <!-- Glass of water -->
                <rect x="25" y="50" width="50" height="80" fill="#bbdefb" />
                <path d="M 25,50 Q 50,60 75,50" fill="none" stroke="#90caf9" stroke-width="2" />
                
                <text x="50" y="170" text-anchor="middle" font-size="14" fill="#555">Healthy drink</text>
            </g>
            
            <!-- Milk -->
            <g class="drink-item" data-drink="milk" transform="translate(350, 120)">
                <rect width="100" height="150" rx="5" fill="#f3e5f5" />
                <text x="50" y="30" text-anchor="middle" font-size="18" fill="#333">Milk</text>
                
                <!-- Glass of milk -->
                <rect x="25" y="50" width="50" height="80" fill="#f5f5f5" />
                <path d="M 25,50 Q 50,60 75,50" fill="none" stroke="#e0e0e0" stroke-width="2" />
                
                <text x="50" y="170" text-anchor="middle" font-size="14" fill="#555">Good for bones</text>
            </g>
            
            <!-- Juice -->
            <g class="drink-item" data-drink="juice" transform="translate(500, 120)">
                <rect width="100" height="150" rx="5" fill="#fff8e1" />
                <text x="50" y="30" text-anchor="middle" font-size="18" fill="#333">Juice</text>
                
                <!-- Glass of juice -->
                <rect x="25" y="50" width="50" height="80" fill="#ffcc80" />
                <path d="M 25,50 Q 50,60 75,50" fill="none" stroke="#ffb74d" stroke-width="2" />
                
                <text x="50" y="170" text-anchor="middle" font-size="14" fill="#555">From fruit</text>
            </g>
            
            <!-- Description box -->
            <rect x="150" y="290" width="500" height="80" rx="10" fill="#e1f5fe" stroke="#03a9f4" stroke-width="2" />
            <text x="400" y="320" text-anchor="middle" font-size="18" fill="#333" id="drink-description">
                Click on a drink to learn more about it
            </text>
            <text x="400" y="350" text-anchor="middle" font-size="16" fill="#555" id="drink-example">
                We need to drink water and other healthy drinks every day
            </text>
        </svg>
    `;
    
    // Add click events for drink items
    const drinkItems = container.querySelectorAll('.drink-item');
    const drinkDescription = container.querySelector('#drink-description');
    const drinkExample = container.querySelector('#drink-example');
    
    drinkItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const drink = this.dataset.drink;
            
            // Reset all items
            drinkItems.forEach(d => {
                d.style.transform = '';
            });
            
            // Highlight selected item
            this.style.transform = 'scale(1.1)';
            
            // Update description
            switch(drink) {
                case 'water':
                    drinkDescription.textContent = 'Water is the healthiest drink.';
                    drinkExample.textContent = 'We should drink water every day to stay healthy.';
                    break;
                case 'milk':
                    drinkDescription.textContent = 'Milk has calcium for strong bones and teeth.';
                    drinkExample.textContent = 'I drink milk for breakfast and before bed.';
                    break;
                case 'juice':
                    drinkDescription.textContent = 'Juice comes from fruit like oranges and apples.';
                    drinkExample.textContent = 'I sometimes drink juice with my breakfast.';
                    break;
            }
        });
    });
}

// Create Scene 4: Eating Places (placeholder)
function createEatingPlacesScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f9fbe7" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Places to Eat</text>
            
            <!-- Home -->
            <g class="place-item" data-place="home" transform="translate(200, 120)">
                <rect width="120" height="120" rx="10" fill="#e8eaf6" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">Home</text>
                
                <!-- House shape -->
                <path d="M 30,70 L 60,50 L 90,70 L 90,100 L 30,100 Z" fill="#c5cae9" />
                <rect x="50" y="80" width="20" height="20" fill="#9fa8da" /> <!-- Door -->
                
                <text x="60" y="140" text-anchor="middle" font-size="14" fill="#555">With family</text>
            </g>
            
            <!-- Restaurant -->
            <g class="place-item" data-place="restaurant" transform="translate(480, 120)">
                <rect width="120" height="120" rx="10" fill="#ffecb3" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">Restaurant</text>
                
                <!-- Restaurant table -->
                <rect x="40" y="60" width="40" height="30" fill="#8d6e63" /> <!-- Table -->
                <circle cx="40" cy="80" r="5" fill="#5d4037" /> <!-- Table leg -->
                <circle cx="80" cy="80" r="5" fill="#5d4037" /> <!-- Table leg -->
                <rect x="45" y="50" width="30" height="10" fill="#f5f5f5" /> <!-- Plate -->
                
                <text x="60" y="140" text-anchor="middle" font-size="14" fill="#555">Special occasions</text>
            </g>
            
            <!-- School -->
            <g class="place-item" data-place="school" transform="translate(340, 260)">
                <rect width="120" height="120" rx="10" fill="#e0f2f1" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">School</text>
                
                <!-- School building -->
                <rect x="30" y="50" width="60" height="40" fill="#b2dfdb" />
                <rect x="45" y="70" width="30" height="20" fill="#80cbc4" /> <!-- Door -->
                <rect x="35" y="55" width="10" height="10" fill="#4db6ac" /> <!-- Window -->
                <rect x="75" y="55" width="10" height="10" fill="#4db6ac" /> <!-- Window -->
                
                <text x="60" y="140" text-anchor="middle" font-size="14" fill="#555">Lunch with friends</text>
            </g>
            
            <!-- Description box -->
            <rect x="150" y="260" width="150" height="120" rx="10" fill="#f1f8e9" stroke="#7cb342" stroke-width="2" />
            <text x="225" y="290" text-anchor="middle" font-size="18" fill="#333" id="place-name">
                Places to Eat
            </text>
            <text x="225" y="320" text-anchor="middle" font-size="16" fill="#555" id="place-description">
                We eat in different
            </text>
            <text x="225" y="350" text-anchor="middle" font-size="16" fill="#555" id="place-example">
                places
            </text>
            
            <!-- Instructions -->
            <rect x="530" y="260" width="120" height="120" rx="10" fill="#e8f5e9" stroke="#4caf50" stroke-width="2" />
            <text x="590" y="290" text-anchor="middle" font-size="16" fill="#333">
                Click on a place
            </text>
            <text x="590" y="320" text-anchor="middle" font-size="16" fill="#333">
                to learn more
            </text>
            <text x="590" y="350" text-anchor="middle" font-size="16" fill="#333">
                about it
            </text>
        </svg>
    `;
    
    // Add click events for place items
    const placeItems = container.querySelectorAll('.place-item');
    const placeName = container.querySelector('#place-name');
    const placeDescription = container.querySelector('#place-description');
    const placeExample = container.querySelector('#place-example');
    
    placeItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const place = this.dataset.place;
            
            // Reset all items
            placeItems.forEach(p => {
                p.style.transform = '';
            });
            
            // Highlight selected item
            this.style.transform = 'scale(1.1)';
            
            // Update description
            switch(place) {
                case 'home':
                    placeName.textContent = 'Home';
                    placeDescription.textContent = 'We eat most meals';
                    placeExample.textContent = 'at home with family';
                    break;
                case 'restaurant':
                    placeName.textContent = 'Restaurant';
                    placeDescription.textContent = 'We eat at restaurants';
                    placeExample.textContent = 'for special occasions';
                    break;
                case 'school':
                    placeName.textContent = 'School';
                    placeDescription.textContent = 'We eat lunch';
                    placeExample.textContent = 'at school with friends';
                    break;
            }
        });
    });
}

// Create Scene 5: Food Preferences (placeholder)
function createFoodPreferencesScene(container) {
    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Background -->
            <rect width="800" height="400" fill="#f9fbe7" />
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" fill="#333">Food Preferences</text>
            
            <!-- Like -->
            <g class="preference-item" data-preference="like" transform="translate(200, 120)">
                <rect width="120" height="120" rx="10" fill="#e8f5e9" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">I like</text>
                
                <!-- Happy face -->
                <circle cx="60" cy="70" r="30" fill="#c8e6c9" />
                <circle cx="45" cy="60" r="5" fill="#333" /> <!-- Eye -->
                <circle cx="75" cy="60" r="5" fill="#333" /> <!-- Eye -->
                <path d="M 40,80 Q 60,95 80,80" fill="none" stroke="#333" stroke-width="3" /> <!-- Smile -->
                
                <text x="60" y="140" text-anchor="middle" font-size="14" fill="#555">I like pizza</text>
            </g>
            
            <!-- Don't like -->
            <g class="preference-item" data-preference="dont-like" transform="translate(480, 120)">
                <rect width="120" height="120" rx="10" fill="#ffebee" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">I don't like</text>
                
                <!-- Sad face -->
                <circle cx="60" cy="70" r="30" fill="#ffcdd2" />
                <circle cx="45" cy="60" r="5" fill="#333" /> <!-- Eye -->
                <circle cx="75" cy="60" r="5" fill="#333" /> <!-- Eye -->
                <path d="M 40,85 Q 60,70 80,85" fill="none" stroke="#333" stroke-width="3" /> <!-- Frown -->
                
                <text x="60" y="140" text-anchor="middle" font-size="14" fill="#555">I don't like onions</text>
            </g>
            
            <!-- Favorite -->
            <g class="preference-item" data-preference="favorite" transform="translate(200, 260)">
                <rect width="120" height="120" rx="10" fill="#fff8e1" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">My favorite</text>
                
                <!-- Star -->
                <path d="M 60,50 L 70,70 L 90,70 L 75,85 L 80,105 L 60,95 L 40,105 L 45,85 L 30,70 L 50,70 Z" fill="#ffd54f" />
                
                <text x="60" y="140" text-anchor="middle" font-size="14" fill="#555">My favorite food is...</text>
            </g>
            
            <!-- Prefer -->
            <g class="preference-item" data-preference="prefer" transform="translate(480, 260)">
                <rect width="120" height="120" rx="10" fill="#e0f7fa" />
                <text x="60" y="30" text-anchor="middle" font-size="18" fill="#333">I prefer</text>
                
                <!-- Comparison -->
                <circle cx="40" cy="70" r="20" fill="#b2ebf2" />
                <text x="40" y="75" text-anchor="middle" font-size="16" fill="#333">A</text>
                <text x="60" y="75" text-anchor="middle" font-size="16" fill="#333">></text>
                <circle cx="80" cy="70" r="15" fill="#b2ebf2" />
                <text x="80" y="75" text-anchor="middle" font-size="16" fill="#333">B</text>
                
                <text x="60" y="140" text-anchor="middle" font-size="14" fill="#555">I prefer A to B</text>
            </g>
            
            <!-- Description box -->
            <rect x="340" y="170" width="120" height="120" rx="10" fill="#f1f8e9" stroke="#7cb342" stroke-width="2" />
            <text x="400" y="200" text-anchor="middle" font-size="18" fill="#333" id="preference-description">
                Food Preferences
            </text>
            <text x="400" y="230" text-anchor="middle" font-size="16" fill="#555" id="preference-example1">
                We can talk about
            </text>
            <text x="400" y="260" text-anchor="middle" font-size="16" fill="#555" id="preference-example2">
                food we like and
            </text>
            <text x="400" y="290" text-anchor="middle" font-size="16" fill="#555" id="preference-example3">
                don't like
            </text>
        </svg>
    `;
    
    // Add click events for preference items
    const preferenceItems = container.querySelectorAll('.preference-item');
    const preferenceDescription = container.querySelector('#preference-description');
    const preferenceExample1 = container.querySelector('#preference-example1');
    const preferenceExample2 = container.querySelector('#preference-example2');
    const preferenceExample3 = container.querySelector('#preference-example3');
    
    preferenceItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const preference = this.dataset.preference;
            
            // Reset all items
            preferenceItems.forEach(p => {
                p.style.transform = '';
            });
            
            // Highlight selected item
            this.style.transform = 'scale(1.1)';
            
            // Update description
            switch(preference) {
                case 'like':
                    preferenceDescription.textContent = 'I like';
                    preferenceExample1.textContent = 'I like apples.';
                    preferenceExample2.textContent = 'I like pizza.';
                    preferenceExample3.textContent = 'I like ice cream.';
                    break;
                case 'dont-like':
                    preferenceDescription.textContent = 'I don\'t like';
                    preferenceExample1.textContent = 'I don\'t like onions.';
                    preferenceExample2.textContent = 'I don\'t like spicy food.';
                    preferenceExample3.textContent = 'I don\'t like coffee.';
                    break;
                case 'favorite':
                    preferenceDescription.textContent = 'My favorite';
                    preferenceExample1.textContent = 'My favorite food is';
                    preferenceExample2.textContent = 'spaghetti.';
                    preferenceExample3.textContent = 'What\'s your favorite?';
                    break;
                case 'prefer':
                    preferenceDescription.textContent = 'I prefer';
                    preferenceExample1.textContent = 'I prefer chocolate';
                    preferenceExample2.textContent = 'to vanilla.';
                    preferenceExample3.textContent = 'What do you prefer?';
                    break;
            }
        });
    });
}

// Function to initialize practice activities
function initPracticeActivities() {
    // Activity 1: Match foods to food groups
    const activity1 = document.getElementById('activity-1');
    if (activity1) {
        activity1.innerHTML = `
            <div class="matching-foods">
                <p>Match each food to the correct food group:</p>
                <div class="food-matching-game">
                    <div class="food-groups">
                        <div class="food-group" data-group="fruit">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#e8f5e9" />
                                <circle cx="40" cy="40" r="20" fill="#f44336" />
                                <path d="M 40,20 L 45,15 L 50,20" fill="none" stroke="#4caf50" stroke-width="3" />
                                <text x="40" y="70" text-anchor="middle" font-size="14" fill="#333">Fruit</text>
                            </svg>
                        </div>
                        <div class="food-group" data-group="vegetables">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#f1f8e9" />
                                <circle cx="40" cy="40" r="20" fill="#4caf50" />
                                <text x="40" y="70" text-anchor="middle" font-size="14" fill="#333">Vegetables</text>
                            </svg>
                        </div>
                        <div class="food-group" data-group="dairy">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#f3e5f5" />
                                <rect x="25" y="25" width="30" height="30" fill="#f5f5f5" />
                                <text x="40" y="70" text-anchor="middle" font-size="14" fill="#333">Dairy</text>
                            </svg>
                        </div>
                        <div class="food-group" data-group="grains">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                                <rect width="80" height="80" fill="#fff8e1" />
                                <rect x="20" y="35" width="40" height="10" fill="#8d6e63" />
                                <text x="40" y="70" text-anchor="middle" font-size="14" fill="#333">Grains</text>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="food-items">
                        <button class="food-item" data-group="fruit">Banana</button>
                        <button class="food-item" data-group="vegetables">Carrot</button>
                        <button class="food-item" data-group="dairy">Cheese</button>
                        <button class="food-item" data-group="grains">Bread</button>
                    </div>
                </div>
                
                <div class="feedback"></div>
            </div>
            
            <style>
                .matching-foods {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .food-matching-game {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                
                .food-groups {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .food-group {
                    text-align: center;
                    border: 2px solid #ccc;
                    border-radius: 10px;
                    overflow: hidden;
                }
                
                .food-group.matched {
                    border-color: #8bc34a;
                    background-color: #f1f8e9;
                }
                
                .food-items {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .food-item {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: var(--border-radius);
                    cursor: pointer;
                }
                
                .food-item.selected {
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
        
        // Add event listeners for food matching game
        let selectedFood = null;
        const foodItems = activity1.querySelectorAll('.food-item');
        const foodGroups = activity1.querySelectorAll('.food-group');
        const feedback = activity1.querySelector('.feedback');
        
        foodItems.forEach(food => {
            food.addEventListener('click', function() {
                // Deselect previously selected food
                if (selectedFood) {
                    selectedFood.classList.remove('selected');
                }
                
                // Select this food
                this.classList.add('selected');
                selectedFood = this;
            });
        });
        
        foodGroups.forEach(group => {
            group.addEventListener('click', function() {
                if (!selectedFood) {
                    feedback.textContent = 'Please select a food first!';
                    feedback.style.color = '#f44336';
                    return;
                }
                
                const groupType = this.dataset.group;
                const foodGroup = selectedFood.dataset.group;
                
                if (groupType === foodGroup) {
                    this.classList.add('matched');
                    selectedFood.disabled = true;
                    selectedFood.classList.remove('selected');
                    selectedFood = null;
                    
                    feedback.textContent = 'Correct match!';
                    feedback.style.color = '#8bc34a';
                    
                    // Check if all are matched
                    const matchedGroups = activity1.querySelectorAll('.food-group.matched');
                    if (matchedGroups.length === foodGroups.length) {
                        feedback.textContent = 'Great job! You matched all the foods!';
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
                <p>Complete each sentence with the correct word:</p>
                
                <div class="sentence-completion">
                    <p>1. I have <select class="food-select" data-answer="breakfast">
                        <option value="">Choose...</option>
                        <option value="breakfast">breakfast</option>
                        <option value="lunch">lunch</option>
                        <option value="dinner">dinner</option>
                        <option value="snack">snack</option>
                    </select> in the morning.</p>
                    
                    <p>2. My favorite <select class="food-select" data-answer="fruit">
                        <option value="">Choose...</option>
                        <option value="fruit">fruit</option>
                        <option value="vegetable">vegetable</option>
                        <option value="meat">meat</option>
                        <option value="drink">drink</option>
                    </select> is banana.</p>
                    
                    <p>3. I <select class="food-select" data-answer="like">
                        <option value="">Choose...</option>
                        <option value="like">like</option>
                        <option value="don't like">don't like</option>
                        <option value="prefer">prefer</option>
                        <option value="want">want</option>
                    </select> pizza and pasta.</p>
                    
                    <p>4. We eat <select class="food-select" data-answer="lunch">
                        <option value="">Choose...</option>
                        <option value="breakfast">breakfast</option>
                        <option value="lunch">lunch</option>
                        <option value="dinner">dinner</option>
                        <option value="snack">snack</option>
                    </select> at school.</p>
                    
                    <p>5. I <select class="food-select" data-answer="don't like">
                        <option value="">Choose...</option>
                        <option value="like">like</option>
                        <option value="don't like">don't like</option>
                        <option value="prefer">prefer</option>
                        <option value="want">want</option>
                    </select> spicy food.</p>
                </div>
                
                <button class="check-answers">Check Answers</button>
                <div class="feedback"></div>
            </div>
            
            <style>
                .complete-sentences p {
                    margin-bottom: 1rem;
                    font-size: 1.1rem;
                }
                
                .food-select {
                    padding: 5px;
                    border: 2px solid #ccc;
                    border-radius: 5px;
                    font-size: 1rem;
                }
                
                .food-select.correct {
                    border-color: #8bc34a;
                    background-color: #f1f8e9;
                }
                
                .food-select.incorrect {
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
            const selects = activity2.querySelectorAll('.food-select');
            let correctCount = 0;
            
            selects.forEach(select => {
                const userAnswer = select.value;
                const correctAnswer = select.dataset.answer;
                
                if (userAnswer === correctAnswer) {
                    select.className = 'food-select correct';
                    correctCount++;
                } else {
                    select.className = 'food-select incorrect';
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
