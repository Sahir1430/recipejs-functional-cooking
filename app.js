// Recipe data - Foundation for all 4 parts
const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        time: 25,
        difficulty: "easy",
        description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        category: "pasta",
        ingredients: ["400g spaghetti", "200g pancetta", "4 eggs", "100g Pecorino Romano cheese", "Black pepper", "Salt"],
        steps: [
            "Bring a large pot of salted water to boil",
            "Cut pancetta into small cubes and fry until crispy",
            "Cook spaghetti according to package instructions",
            "Whisk eggs with grated cheese and black pepper",
            "Drain pasta, reserving 1 cup pasta water",
            "Mix hot pasta with pancetta and fat",
            "Add egg mixture while tossing constantly",
            "Add pasta water as needed for creamy sauce"
        ]
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        time: 45,
        difficulty: "medium",
        description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
        category: "curry",
        ingredients: ["700g chicken breast", "200ml yogurt", "2 tbsp tikka paste", "400ml coconut milk", "2 onions", "4 cloves garlic", "2 tbsp ginger", "400ml tomatoes", "Cilantro"],
        steps: [
            {
                text: "Marinate chicken",
                substeps: [
                    "Cut chicken into 2-inch pieces",
                    "Mix yogurt with 1 tbsp tikka paste",
                    "Coat chicken and marinate for 30 minutes"
                ]
            },
            "Heat oil in large pan and cook marinated chicken until golden",
            {
                text: "Prepare sauce base",
                substeps: [
                    "Sauté diced onions until soft",
                    "Add minced garlic and ginger",
                    "Add remaining tikka paste and cook for 1 minute"
                ]
            },
            "Add tomatoes and simmer for 10 minutes",
            "Stir in coconut milk and cooked chicken",
            "Simmer for 15 minutes until sauce thickens",
            "Garnish with fresh cilantro and serve with rice"
        ]
    },
    {
        id: 3,
        title: "Homemade Croissants",
        time: 180,
        difficulty: "hard",
        description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
        category: "baking",
        ingredients: ["500g all-purpose flour", "300g cold butter", "10g salt", "50g sugar", "7g instant yeast", "250ml milk", "1 egg"],
        steps: [
            "Mix flour, salt, and sugar in a bowl",
            "Activate yeast with warm milk and let sit 10 minutes",
            "Combine flour mixture with yeast mixture and knead",
            "Let dough rise for 1 hour until doubled",
            "Pound cold butter between plastic wrap into a 20x20cm square",
            "Roll out dough into a 40x20cm rectangle",
            "Place butter in center and fold dough to encase it",
            "Fold dough in thirds, rotate, and repeat 3 more times",
            "Chill between folds for 30 minutes each",
            "Final shape into crescent molds",
            "Let proof for 2 hours",
            "Brush with egg wash and bake at 200°C for 20-25 minutes"
        ]
    },
    {
        id: 4,
        title: "Greek Salad",
        time: 15,
        difficulty: "easy",
        description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
        category: "salad",
        ingredients: ["4 tomatoes", "1 cucumber", "1 red onion", "250g feta cheese", "150g kalamata olives", "Extra virgin olive oil", "Oregano", "Salt and pepper"],
        steps: [
            "Dice tomatoes and cucumber into chunks",
            "Slice red onion thinly",
            "Cut feta cheese into cubes",
            "Combine all vegetables and cheese in large bowl",
            "Add kalamata olives",
            "Drizzle with extra virgin olive oil",
            "Sprinkle with oregano, salt, and pepper",
            "Toss gently and serve immediately"
        ]
    },
    {
        id: 5,
        title: "Beef Wellington",
        time: 120,
        difficulty: "hard",
        description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
        category: "meat",
        ingredients: ["1.5kg beef fillet", "500g mushrooms", "2 shallots", "300g pâté", "1 sheet puff pastry", "50g prosciutto", "2 tbsp Dijon mustard", "Egg for wash"],
        steps: [
            "Sear beef fillet on all sides until browned, then cool",
            "Brush beef with Dijon mustard",
            "Wrap beef with slices of prosciutto",
            {
                text: "Prepare mushroom duxelles",
                substeps: [
                    "Finely chop mushrooms and shallots",
                    "Cook in butter until all moisture evaporates",
                    "Season with salt and pepper"
                ]
            },
            "Spread pâté on cooled beef",
            "Cover pâté with mushroom duxelles",
            "Wrap entire beef in puff pastry",
            "Brush pastry with egg wash",
            "Bake at 200°C for 25-30 minutes until golden",
            "Rest for 5 minutes before slicing"
        ]
    },
    {
        id: 6,
        title: "Vegetable Stir Fry",
        time: 20,
        difficulty: "easy",
        description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
        category: "vegetarian",
        ingredients: ["2 cups broccoli florets", "1 bell pepper", "2 carrots", "1 cup snap peas", "3 cloves garlic", "2 tbsp soy sauce", "1 tbsp sesame oil", "1 tbsp cornstarch", "Ginger"],
        steps: [
            "Chop all vegetables into uniform bite-sized pieces",
            "Mince garlic and ginger",
            "Mix soy sauce, sesame oil, and cornstarch in a bowl",
            "Heat oil in a wok or large pan over high heat",
            "Add garlic and ginger, cook for 30 seconds",
            "Add harder vegetables first (carrots, broccoli)",
            "Stir-fry for 3-4 minutes",
            "Add remaining vegetables and stir-fry for 2-3 minutes",
            "Pour sauce over vegetables and toss to coat",
            "Serve immediately over rice or noodles"
        ]
    },
    {
        id: 7,
        title: "Pad Thai",
        time: 30,
        difficulty: "medium",
        description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
        category: "noodles",
        ingredients: ["250g rice noodles", "300g shrimp", "3 eggs", "2 cups beansprouts", "3 green onions", "100g peanuts", "3 tbsp tamarind paste", "2 tbsp fish sauce", "3 cloves garlic"],
        steps: [
            "Soak rice noodles in warm water for 30 minutes until soft",
            "Peel and devein shrimp",
            "Combine tamarind paste, fish sauce, and 2 tbsp sugar",
            "Heat oil in a wok and stir-fry garlic for 10 seconds",
            "Add shrimp and cook until pink, about 2 minutes",
            "Push shrimp to side and scramble eggs in the wok",
            "Add drained noodles and sauce, toss to combine",
            "Add green onions and half the peanuts",
            "Toss everything together for 1-2 minutes",
            "Serve topped with remaining peanuts and beansprouts"
        ]
    },
    {
        id: 8,
        title: "Margherita Pizza",
        time: 60,
        difficulty: "medium",
        description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
        category: "pizza",
        ingredients: ["500g pizza dough", "200ml tomato sauce", "250g fresh mozzarella", "4 tomatoes", "Fresh basil leaves", "Olive oil", "Salt", "Oregano"],
        steps: [
            "Preheat oven to 250°C (or highest setting)",
            "Let pizza dough come to room temperature",
            "Stretch dough into a thin 12-inch circle",
            "Place on a pizza pan or stone",
            "Spread tomato sauce evenly, leaving border for crust",
            "Tear fresh mozzarella into chunks and distribute",
            "Slice tomatoes and place on top",
            "Drizzle with olive oil",
            "Sprinkle with salt and oregano",
            "Bake for 12-15 minutes until crust is golden and cheese bubbles",
            "Remove and top with fresh basil",
            "Let rest 2 minutes before slicing"
        ]
    }
];

// IIFE - Module Pattern for encapsulation
const RecipeApp = (() => {
    let currentFilter = 'all';
    let currentSort = 'none';

    const recipeContainer = document.querySelector('#recipe-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortButtons = document.querySelectorAll('.sort-btn');

    // Recursive render steps (FIXED)
    const renderSteps = (steps, level = 0) => {
        return steps.map((step, index) => {
            const indent = `padding-left:${level * 20}px`;
            if (typeof step === 'string') {
                return `
                    <li style="${indent}">
                        <strong>Step ${index + 1}:</strong> ${step}
                    </li>
                `;
            } else {
                return `
                    <li style="${indent}">
                        <strong>Step ${index + 1}:</strong> ${step.text}
                        <ul>${renderSteps(step.substeps, level + 1)}</ul>
                    </li>
                `;
            }
        }).join('');
    };

    const createIngredientsHTML = (recipe) => `
        <div class="ingredients-container" data-recipe-id="${recipe.id}">
            <h4>🥗 Ingredients:</h4>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
            </ul>
        </div>
    `;

    const createStepsHTML = (recipe) => `
        <div class="steps-container" data-recipe-id="${recipe.id}">
            <h4>🍳 Cooking Steps:</h4>
            <ol class="steps-list">
                ${renderSteps(recipe.steps)}
            </ol>
        </div>
    `;

    const createRecipeCard = (recipe) => `
        <div class="recipe-card" data-recipe-id="${recipe.id}">
            <h3>${recipe.title}</h3>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.time} min</span>
                <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
            </div>
            <p>${recipe.description}</p>
            <div class="toggle-buttons">
                <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="steps">📋 Show Steps</button>
                <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="ingredients">🥗 Show Ingredients</button>
            </div>
            ${createStepsHTML(recipe)}
            ${createIngredientsHTML(recipe)}
        </div>
    `;

    const renderRecipes = (list) => {
        recipeContainer.innerHTML = list.map(createRecipeCard).join('');
    };

    const updateDisplay = () => {
        let list = [...recipes];
        renderRecipes(list);
        console.log(`Displaying ${list.length} recipes`);
    };

    const handleToggleClick = (e) => {
        const btn = e.target.closest('.toggle-btn');
        if (!btn) return;

        const id = btn.dataset.recipeId;
        const type = btn.dataset.toggle;
        const box = document.querySelector(`.${type}-container[data-recipe-id="${id}"]`);

        box.classList.toggle('visible');
        btn.textContent = box.classList.contains('visible')
            ? `Hide ${type}`
            : `Show ${type}`;
    };

    return {
        init() {
            updateDisplay();
            recipeContainer.addEventListener('click', handleToggleClick);
        }
    };
})();

RecipeApp.init();
