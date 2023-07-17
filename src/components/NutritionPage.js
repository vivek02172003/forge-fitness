import React, { useState } from 'react';
import NutritionSearch from './NutritionSearch';
import clean from './Images/cleanLean.jpg';
import musclemaximizer from './Images/musclemaximizer.jpg';
import keto from './Images/keto.jpg';
import protein from './Images/protein.jpg';
import fit from './Images/fit.jpg';
import paleo from './Images/paleo.jpg';
import loss from './Images/loss.jpg';
import vegetarian from './Images/vegetarian.png';
import Whole from './Images/Whole30.jpg';
import Mediterranean from './Images/Mediterranean.jpg';
import './Nutrition.css';
import GoogleFormButton from './GoogleFormButton';

const NutritionPage = () => {
  const dietPlans = [
    {
      name: 'Muscle Maximizer',
      fitnessGoal: 'muscle-gain',
      dietaryRestriction: 'omnivore',
      image: musclemaximizer,
      description: 'A balanced diet plan designed to maximize muscle growth and strength gains.',
      recipes: [
        {
          name: 'Grilled Chicken with Brown Rice and Broccoli',
          ingredients: [
            '8 oz chicken breast',
            '1 cup cooked brown rice',
            '1 cup steamed broccoli',
            '1 tablespoon olive oil',
            '1 teaspoon garlic powder',
            'Salt and pepper to taste',
          ],
          instructions: [
            'Preheat the oven to 400°F (200°C).',
            'Season the chicken breast with garlic powder, salt, and pepper.',
            'Drizzle olive oil on the chicken breast and rub it to coat evenly.',
            'Bake the chicken breast for 25-30 minutes or until cooked through.',
            'In a separate pot, cook brown rice according to package instructions.',
            'Steam broccoli until tender.',
            'Serve the baked chicken breast with cooked brown rice and steamed broccoli.',
            'Enjoy your muscle-building meal!',
          ],
        },
        {
          name: 'Spiced Salmon',
          ingredients: [
            '8 oz salmon fillet',
            '1 tablespoon lemon juice',
            '1 tablespoon Dijon mustard',
            '1 teaspoon dried dill',
            '1/2 teaspoon garlic powder',
            'Salt and pepper to taste',
          ],
          instructions: [
            'Preheat the oven to 400°F (200°C).',
            'In a small bowl, whisk together lemon juice, Dijon mustard, dried dill, garlic powder, salt, and pepper.',
            'Place the salmon fillet on a baking sheet lined with foil.',
            'Brush the mustard mixture over the salmon, ensuring it is evenly coated.',
            'Bake for 12-15 minutes or until the salmon is cooked to your desired doneness.',
            'Remove from the oven and let it rest for a few minutes before serving.',
            'Pair the salmon with your choice of steamed vegetables or a side salad for a protein-packed meal.',
          ],
        },
        {
          name: 'Steak Dinner',
          ingredients: [
            '6 oz sirloin steak',
            '1 tablespoon olive oil',
            '1 teaspoon minced garlic',
            '1/2 teaspoon dried rosemary',
            '1/2 teaspoon dried thyme',
            'Salt and pepper to taste',
          ],
          instructions: [
            'Preheat a grill or grill pan over medium-high heat.',
            'Rub the sirloin steak with olive oil, minced garlic, dried rosemary, dried thyme, salt, and pepper.',
            'Grill the steak for 4-6 minutes per side, or until it reaches your desired level of doneness.',
            'Remove the steak from the grill and let it rest for a few minutes before slicing.',
            'Serve the grilled steak with roasted potatoes and steamed vegetables for a hearty muscle-building meal.',
          ],
        },
        {
          name: 'Quinoa and Chicken Salad',
          ingredients: [
            '1 cup cooked quinoa',
            '8 oz grilled chicken breast',
            '1 cup mixed salad greens',
            '1/4 cup cherry tomatoes, halved',
            '1/4 cup sliced cucumber',
            '2 tablespoons balsamic vinaigrette',
            'Salt and pepper to taste',
          ],
          instructions: [
            'In a bowl, combine cooked quinoa, mixed salad greens, cherry tomatoes, and sliced cucumber.',
            'Slice the grilled chicken breast into strips and add it to the salad.',
            'Drizzle balsamic vinaigrette over the salad and toss to coat all the ingredients.',
            'Season with salt and pepper to taste.',
            'Enjoy a protein-packed salad as a satisfying and nutritious meal.',
          ],
        },
        {
          name: 'Tofu Stir Fry',
          ingredients: [
            '6 oz tofu, drained and pressed',
            '2 tablespoons soy sauce',
            '1 tablespoon sesame oil',
            '1 teaspoon minced ginger',
            '1 clove garlic, minced',
            '1/2 teaspoon chili flakes (optional)',
            '1/4 cup sliced green onions',
            '1 tablespoon sesame seeds',
          ],
          instructions: [
            'Slice the tofu into cubes or desired shape.',
            'In a bowl, whisk together soy sauce, sesame oil, minced ginger, minced garlic, and chili flakes (if using).',
            'Heat a non-stick pan over medium heat and add the tofu cubes.',
            'Pour the sauce mixture over the tofu and stir-fry for 5-7 minutes until the tofu is heated through and well coated with the sauce.',
            'Sprinkle sliced green onions and sesame seeds over the tofu.',
            'Serve the tofu stir-fry over a bed of brown rice or quinoa for a vegetarian muscle-building meal.',
          ],
        },
        
      ],
    },
    {
      name: 'Flexi Fit',
      fitnessGoal: 'weight-loss',
      dietaryRestriction: 'flexitarian',
      image: fit,
      description: 'A flexible eating plan that combines plant-based meals with occasional lean proteins.',
      recipes: [
        {
          name: 'Quinoa Salad',
          ingredients: [
            '1 cup cooked quinoa',
            '1 cup mixed vegetables (broccoli, bell peppers, carrots)',
            '1/2 cup black beans',
            '1/4 cup diced avocado',
            '2 tablespoons lime juice',
            '2 tablespoons chopped fresh cilantro',
            'Salt and pepper to taste',
          ],
          instructions: [
            'In a bowl, combine cooked quinoa, mixed vegetables, and black beans.',
            'Add diced avocado, lime juice, chopped cilantro, salt, and pepper to the bowl. Toss well to mix all the ingredients.',
            'Adjust the seasoning according to your taste preferences.',
            'Serve the quinoa salad as a healthy and filling meal.',
          ],
        },
        {
          name: 'Marinara Pasta',
          ingredients: [
            '1 cup whole wheat pasta',
            '1 cup marinara sauce',
            '1/2 cup sliced mushrooms',
            '1/4 cup diced onion',
            '1/4 cup diced bell peppers',
            '2 cloves garlic, minced',
            '1 tablespoon olive oil',
            'Salt and pepper to taste',
            'Grated Parmesan cheese for garnish',
          ],
          instructions: [
            'Cook whole wheat pasta according to package instructions. Drain and set aside.',
            'In a pan, heat olive oil over medium heat. Add minced garlic, diced onion, and sliced mushrooms. Sauté until the vegetables are tender.',
            'Add diced bell peppers to the pan and cook for a few more minutes.',
            'Pour marinara sauce into the pan and simmer for 5-10 minutes.',
            'Add cooked pasta to the sauce and toss well to coat the pasta with the sauce.',
            'Season with salt and pepper to taste.',
            'Serve the pasta dish with a sprinkle of grated Parmesan cheese on top.',
          ],
        },
        {
          name: 'Mushroom Melt',
          ingredients: [
            '2 large portobello mushroom caps',
            '1/4 cup balsamic vinegar',
            '2 tablespoons olive oil',
            '2 cloves garlic, minced',
            '1/2 teaspoon dried thyme',
            'Salt and pepper to taste',
            '4 slices mozzarella cheese',
            '4 slices tomato',
            'Fresh basil leaves for garnish',
          ],
          instructions: [
            'Preheat the oven to 400°F (200°C).',
            'Clean the portobello mushroom caps and remove the stems.',
            'In a small bowl, whisk together balsamic vinegar, olive oil, minced garlic, dried thyme, salt, and pepper.',
            'Brush the mushroom caps with the balsamic marinade, making sure to coat both sides.',
            'Place the mushroom caps on a baking sheet lined with foil.',
            'Bake for 10 minutes, then flip the mushrooms and bake for an additional 10 minutes.',
            'Remove the mushrooms from the oven and top each cap with a slice of mozzarella cheese.',
            'Place a slice of tomato on top of the cheese.',
            'Return the mushrooms to the oven and bake for another 5 minutes until the cheese is melted.',
            'Garnish with fresh basil leaves and serve as a delicious and satisfying meal.',
          ],
        },
      ],
    },
    {
      name: 'Clean & Lean',
      fitnessGoal: 'weight-loss',
      dietaryRestriction: 'vegan',
      image: clean,
      description: 'A plant-based diet plan focused on clean eating to support weight loss goals.',
      recipes: [
        {
          name: 'Herb Roasted Chicken with Roasted Vegetables',
          ingredients: [
            '4 bone-in, skin-on chicken thighs',
            '1 tablespoon olive oil',
            '1 teaspoon dried thyme',
            '1 teaspoon dried rosemary',
            '1 teaspoon dried oregano',
            'Salt and pepper to taste',
            '2 cups mixed vegetables (bell peppers, zucchini, carrots)',
          ],
          instructions: [
            'Preheat the oven to 400°F (200°C).',
            'Rub the chicken thighs with olive oil, dried thyme, dried rosemary, dried oregano, salt, and pepper.',
            'Place the chicken thighs on a baking sheet, skin-side up.',
            'Arrange the mixed vegetables around the chicken thighs.',
            'Roast for 25-30 minutes or until the chicken is cooked through and the vegetables are tender.',
            'Serve the herb-roasted chicken with the roasted vegetables for a delicious and nutritious meal.',
          ],
        },
        {
          name: 'Grilled Salmon with Mango Salsa',
          ingredients: [
            '2 salmon fillets',
            '1 tablespoon olive oil',
            '1 teaspoon paprika',
            '1/2 teaspoon garlic powder',
            'Salt and pepper to taste',
            '1 ripe mango, diced',
            '1/4 cup diced red onion',
            '1/4 cup chopped fresh cilantro',
            '1 jalapeño, seeded and minced',
            'Juice of 1 lime',
          ],
          instructions: [
            'Preheat the grill to medium heat.',
            'Brush the salmon fillets with olive oil and season with paprika, garlic powder, salt, and pepper.',
            'Grill the salmon for 4-6 minutes per side, or until it flakes easily with a fork.',
            'In a bowl, combine diced mango, red onion, chopped cilantro, minced jalapeño, and lime juice to make the salsa.',
            'Serve the grilled salmon with the mango salsa on top for a refreshing and flavorful meal.',
          ],
        },
        {
          name: 'Beef and Broccoli Stir-Fry',
          ingredients: [
            '1 lb flank steak, thinly sliced',
            '2 tablespoons coconut aminos',
            '1 tablespoon arrowroot starch',
            '2 tablespoons coconut oil',
            '2 cloves garlic, minced',
            '1 tablespoon minced ginger',
            '2 cups broccoli florets',
            '1/4 cup beef broth',
            '1 tablespoon sesame oil',
            'Salt and pepper to taste',
          ],
          instructions: [
            'In a bowl, combine coconut aminos and arrowroot starch. Add the sliced flank steak and toss to coat.',
            'Heat coconut oil in a wok or large skillet over medium-high heat.',
            'Add minced garlic and minced ginger, and stir-fry for 1 minute.',
            'Add broccoli florets and stir-fry for 2-3 minutes until crisp-tender.',
            'Push the broccoli to the side and add the marinated flank steak to the center of the pan. Stir-fry for 2-3 minutes until the steak is browned.',
            'Pour in beef broth and cook for an additional 1-2 minutes until the sauce thickens.',
            'Drizzle sesame oil over the stir-fry and season with salt and pepper.',
            'Serve the beef and broccoli stir-fry over cauliflower rice for a satisfying and Paleo-friendly meal.',
          ],
        },
        {
          name: 'Zucchini Noodles with Bolognese Sauce',
          ingredients: [
            '2 medium zucchini',
            '1 lb ground beef',
            '1/2 cup diced onion',
            '1/2 cup diced bell peppers',
            '2 cloves garlic, minced',
            '1 can (14 oz) crushed tomatoes',
            '1 tablespoon tomato paste',
            '1 teaspoon dried oregano',
            '1 teaspoon dried basil',
            'Salt and pepper to taste',
            'Fresh basil leaves, for garnish',
          ],
          instructions: [
            'Using a spiralizer or vegetable peeler, create zucchini noodles from the zucchini.',
            'In a large skillet, brown the ground beef over medium heat.',
            'Add diced onion, diced bell peppers, and minced garlic to the skillet. Cook until the vegetables are tender.',
            'Stir in crushed tomatoes, tomato paste, dried oregano, dried basil, salt, and pepper. Simmer for 15-20 minutes to allow the flavors to meld.',
            'In a separate pan, sauté the zucchini noodles until they are heated through but still slightly crisp.',
            'Serve the zucchini noodles topped with the Bolognese sauce.',
            'Garnish with fresh basil leaves for added freshness.',
          ],
        },
        {
          name: 'Paleo Banana Pancakes',
          ingredients: [
            '2 ripe bananas',
            '4 eggs',
            '1/4 cup almond flour',
            '1/2 teaspoon baking powder',
            '1/2 teaspoon cinnamon',
            'Coconut oil for cooking',
            'Fresh berries, for serving',
            'Maple syrup or honey, for serving',
          ],
          instructions: [
            'In a bowl, mash the ripe bananas until smooth.',
            'Add eggs, almond flour, baking powder, and cinnamon to the bowl. Whisk until well combined.',
            'Heat coconut oil in a non-stick skillet over medium heat.',
            'Pour about 1/4 cup of the pancake batter onto the skillet to form each pancake.',
            'Cook for 2-3 minutes until bubbles form on the surface. Flip and cook for an additional 1-2 minutes until golden brown.',
            'Repeat with the remaining batter to make more pancakes.',
            'Serve the Paleo banana pancakes with fresh berries and a drizzle of maple syrup or honey.',
            'Enjoy a delicious and grain-free breakfast!',
          ],
        },
      ],
    },
    {
      name: 'Balance Boost',
      fitnessGoal: 'weight-loss',
      dietaryRestriction: 'omnivore',
      image: loss,
      description: 'A well-balanced diet plan to support weight loss while maintaining overall health and nutrition.',
      recipes: [
        {
          name: 'Grilled Chicken with Quinoa and Steamed Vegetables',
          ingredients: [
            '2 boneless, skinless chicken breasts',
            '1 tablespoon olive oil',
            '1 teaspoon dried Italian seasoning',
            'Salt and pepper to taste',
            '1 cup cooked quinoa',
            '2 cups mixed steamed vegetables (broccoli, carrots, cauliflower)',
          ],
          instructions: [
            'Preheat a grill or grill pan over medium-high heat.',
            'Brush the chicken breasts with olive oil and season with dried Italian seasoning, salt, and pepper.',
            'Grill the chicken for 4-6 minutes per side, or until it reaches an internal temperature of 165°F (74°C).',
            'Let the chicken rest for a few minutes before slicing.',
            'Serve the grilled chicken with cooked quinoa and steamed vegetables for a balanced and nutritious meal.',
          ],
        },
        {
          name: 'Baked Cod with Herbed Quinoa Pilaf',
          ingredients: [
            '2 cod fillets',
            '1 tablespoon lemon juice',
            '1 tablespoon olive oil',
            '1 teaspoon dried dill',
            'Salt and pepper to taste',
            '1 cup cooked quinoa',
            '2 tablespoons chopped fresh parsley',
            '2 tablespoons chopped fresh mint',
            '2 tablespoons chopped fresh dill',
          ],
          instructions: [
            'Preheat the oven to 400°F (200°C).',
            'Place the cod fillets in a baking dish.',
            'Drizzle lemon juice and olive oil over the cod.',
            'Sprinkle dried dill, salt, and pepper over the cod.',
            'Bake for 12-15 minutes or until the cod is opaque and flakes easily with a fork.',
            'In a bowl, combine cooked quinoa, chopped parsley, chopped mint, and chopped dill to make the herbed quinoa pilaf.',
            'Serve the baked cod over the herbed quinoa pilaf for a flavorful and nourishing meal.',
          ],
        },
        {
          name: 'Turkey Chili with Mixed Beans',
          ingredients: [
            '1 lb ground turkey',
            '1 tablespoon olive oil',
            '1 onion, diced',
            '2 cloves garlic, minced',
            '1 bell pepper, diced',
            '1 can (14 oz) diced tomatoes',
            '1 can (14 oz) kidney beans, drained and rinsed',
            '1 can (14 oz) black beans, drained and rinsed',
            '1 can (14 oz) pinto beans, drained and rinsed',
            '2 tablespoons chili powder',
            '1 teaspoon cumin',
            '1/2 teaspoon paprika',
            'Salt and pepper to taste',
          ],
          instructions: [
            'In a large pot, heat olive oil over medium heat.',
            'Add ground turkey and cook until browned.',
            'Add diced onion, minced garlic, and diced bell pepper to the pot. Cook until the vegetables are tender.',
            'Stir in diced tomatoes, kidney beans, black beans, pinto beans, chili powder, cumin, paprika, salt, and pepper.',
            'Bring the chili to a boil, then reduce the heat and simmer for 20-30 minutes to allow the flavors to meld.',
            'Serve the turkey chili hot with your choice of toppings, such as shredded cheese or diced avocado.',
          ],
        },
        {
          name: 'Mediterranean Salad with Grilled Shrimp',
          ingredients: [
            '8 oz shrimp, peeled and deveined',
            '1 tablespoon olive oil',
            '1 teaspoon dried oregano',
            'Salt and pepper to taste',
            '4 cups mixed salad greens',
            '1 cup cherry tomatoes, halved',
            '1/2 cup diced cucumber',
            '1/4 cup sliced red onion',
            '1/4 cup Kalamata olives',
            '2 tablespoons crumbled feta cheese',
            '2 tablespoons lemon juice',
            '2 tablespoons extra virgin olive oil',
          ],
          instructions: [
            'Preheat a grill or grill pan over medium-high heat.',
            'In a bowl, toss the shrimp with olive oil, dried oregano, salt, and pepper.',
            'Grill the shrimp for 2-3 minutes per side, or until pink and cooked through.',
            'In a large salad bowl, combine mixed salad greens, cherry tomatoes, diced cucumber, sliced red onion, Kalamata olives, and crumbled feta cheese.',
            'In a small bowl, whisk together lemon juice and extra virgin olive oil to make the dressing.',
            'Drizzle the dressing over the salad and toss to coat.',
            'Top the salad with grilled shrimp and serve as a refreshing and nutritious meal.',
          ],
        },
        {
          name: 'Spinach and Mushroom Stuffed Chicken Breast',
          ingredients: [
            '2 boneless, skinless chicken breasts',
            '2 cups fresh spinach leaves',
            '1 cup sliced mushrooms',
            '2 cloves garlic, minced',
            '2 tablespoons grated Parmesan cheese',
            '1 tablespoon olive oil',
            'Salt and pepper to taste',
          ],
          instructions: [
            'Preheat the oven to 400°F (200°C).',
            'Butterfly the chicken breasts by making a lengthwise cut through the center, without cutting all the way through, and then opening them like a book.',
            'In a skillet, heat olive oil over medium heat.',
            'Add minced garlic and sliced mushrooms to the skillet. Sauté until the mushrooms are tender.',
            'Add fresh spinach leaves to the skillet and cook until wilted.',
            'Remove the skillet from the heat and stir in grated Parmesan cheese. Season with salt and pepper.',
            'Stuff the spinach and mushroom mixture into the butterflied chicken breasts.',
            'Secure the chicken breasts with toothpicks to hold the stuffing in place.',
            'Place the stuffed chicken breasts in a baking dish and bake for 25-30 minutes or until the chicken is cooked through.',
            'Remove the toothpicks before serving.',
            'Serve the spinach and mushroom stuffed chicken breasts with a side of steamed vegetables for a balanced and satisfying meal.',
          ],
        },
      ],
    },
    {
      name: 'Veggie Vitality',
      fitnessGoal: 'muscle-gain',
      dietaryRestriction: 'vegetarian',
      image: vegetarian,
      description: 'A vegetarian diet plan packed with plant-based protein sources and nutrient-dense foods.',
      recipes: [
        {
          name: 'Black Bean and Vegetable Quesadillas',
          ingredients: [
            '1 can (14 oz) black beans, drained and rinsed',
            '1 bell pepper, diced',
            '1/2 cup diced red onion',
            '1/2 cup corn kernels',
            '1 teaspoon cumin',
            '1/2 teaspoon chili powder',
            'Salt and pepper to taste',
            '4 whole wheat tortillas',
            '1 cup shredded cheese (cheddar or Monterey Jack)',
            'Salsa and Greek yogurt, for serving',
          ],
          instructions: [
            'In a bowl, combine black beans, diced bell pepper, diced red onion, corn kernels, cumin, chili powder, salt, and pepper.',
            'Place a tortilla on a heated skillet or griddle over medium heat.',
            'Sprinkle one-quarter of the shredded cheese on half of the tortilla.',
            'Spoon one-quarter of the black bean and vegetable mixture over the cheese.',
            'Fold the tortilla in half, pressing down gently to seal the quesadilla.',
            'Cook for 2-3 minutes per side, or until the tortilla is crispy and the cheese is melted.',
            'Repeat with the remaining tortillas and filling to make more quesadillas.',
            'Serve the black bean and vegetable quesadillas with salsa and Greek yogurt for dipping.',
          ],
        },
        {
          name: 'Lentil Curry with Brown Rice',
          ingredients: [
            '1 cup dried lentils',
            '3 cups vegetable broth',
            '1 onion, diced',
            '2 cloves garlic, minced',
            '1 bell pepper, diced',
            '1 can (14 oz) diced tomatoes',
            '2 tablespoons curry powder',
            '1 teaspoon turmeric',
            '1 teaspoon cumin',
            '1/2 teaspoon paprika',
            'Salt and pepper to taste',
            'Cooked brown rice, for serving',
            'Fresh cilantro, for garnish',
          ],
          instructions: [
            'In a large pot, combine dried lentils and vegetable broth.',
            'Bring to a boil, then reduce the heat and simmer for 20-25 minutes or until the lentils are tender.',
            'In a skillet, sauté diced onion, minced garlic, and diced bell pepper until the vegetables are softened.',
            'Add diced tomatoes, curry powder, turmeric, cumin, paprika, salt, and pepper to the skillet. Cook for 2-3 minutes to allow the flavors to meld.',
            'Stir the vegetable mixture into the cooked lentils and simmer for an additional 5-10 minutes to thicken the curry.',
            'Serve the lentil curry over cooked brown rice.',
            'Garnish with fresh cilantro for added freshness.',
          ],
        },
        {
          name: 'Chickpea Salad with Feta Cheese',
          ingredients: [
            '2 cans (14 oz each) chickpeas, drained and rinsed',
            '1 cucumber, diced',
            '1 bell pepper, diced',
            '1/4 cup diced red onion',
            '1/4 cup chopped fresh parsley',
            '1/4 cup crumbled feta cheese',
            '2 tablespoons lemon juice',
            '2 tablespoons extra virgin olive oil',
            'Salt and pepper to taste',
          ],
          instructions: [
            'In a large bowl, combine chickpeas, diced cucumber, diced bell pepper, diced red onion, chopped parsley, and crumbled feta cheese.',
            'In a small bowl, whisk together lemon juice and extra virgin olive oil to make the dressing.',
            'Drizzle the dressing over the chickpea salad and toss to coat.',
            'Season with salt and pepper to taste.',
            'Serve the chickpea salad as a protein-packed and refreshing dish.',
          ],
        },
        {
          name: 'Caprese Stuffed Portobello Mushrooms',
          ingredients: [
            '4 large Portobello mushrooms',
            '4 slices mozzarella cheese',
            '4 slices tomato',
            '4 tablespoons chopped fresh basil',
            '2 tablespoons balsamic glaze',
            'Salt and pepper to taste',
          ],
          instructions: [
            'Preheat the oven to 400°F (200°C).',
            'Remove the stems from the Portobello mushrooms and scrape out the gills using a spoon.',
            'Place the mushroom caps on a baking sheet, gill-side up.',
            'Layer each mushroom cap with a slice of mozzarella cheese and a slice of tomato.',
            'Sprinkle chopped fresh basil over the tomato slices.',
            'Drizzle balsamic glaze over the stuffed mushrooms.',
            'Season with salt and pepper to taste.',
            'Bake for 15-20 minutes or until the mushrooms are tender and the cheese is melted and bubbly.',
            'Serve the Caprese stuffed Portobello mushrooms as a flavorful and satisfying vegetarian dish.',
          ],
        },
        {
          name: 'Grilled Tofu Skewers with Peanut Sauce',
          ingredients: [
            '1 block (14 oz) firm tofu',
            '2 tablespoons soy sauce',
            '1 tablespoon olive oil',
            '1 teaspoon sesame oil',
            '1/2 teaspoon garlic powder',
            '1/2 teaspoon ginger powder',
            'Salt and pepper to taste',
            'Peanut Sauce:',
            '1/4 cup creamy peanut butter',
            '2 tablespoons soy sauce',
            '1 tablespoon maple syrup',
            '1 tablespoon rice vinegar',
            '1/2 teaspoon sesame oil',
            'Water (as needed for desired consistency)',
          ],
          instructions: [
            'Preheat a grill or grill pan over medium-high heat.',
            'Drain and press the tofu to remove excess moisture. Cut the tofu into cubes.',
            'In a bowl, whisk together soy sauce, olive oil, sesame oil, garlic powder, ginger powder, salt, and pepper.',
            'Add the tofu cubes to the bowl and toss to coat in the marinade.',
            'Thread the marinated tofu cubes onto skewers.',
            'Grill the tofu skewers for 3-4 minutes per side, or until grill marks appear.',
            'In a separate bowl, whisk together peanut butter, soy sauce, maple syrup, rice vinegar, sesame oil, and water to make the peanut sauce. Add water gradually until desired consistency is reached.',
            'Serve the grilled tofu skewers with peanut sauce for dipping.',
            'Enjoy the flavorful and protein-rich meal!',
          ],
        },
      ],
    },
    {
      name: 'Whole30 Reset',
      fitnessGoal: 'weight-loss',
      dietaryRestriction: 'whole30',
      image: Whole,
      description: 'A 30-day reset diet plan that focuses on whole, unprocessed foods to eliminate inflammation and improve overall health.',
      recipes: [
        {
          name: 'Herb Roasted Pork Tenderloin with Roasted Sweet Potatoes',
          ingredients: [
            '1 lb pork tenderloin',
            '1 tablespoon olive oil',
            '1 teaspoon dried rosemary',
            '1 teaspoon dried thyme',
            '1/2 teaspoon garlic powder',
            'Salt and pepper to taste',
            '2 medium sweet potatoes, peeled and diced',
            '1 tablespoon melted ghee',
            '1/2 teaspoon paprika',
          ],
          instructions: [
            'Preheat the oven to 400°F (200°C).',
            'Rub the pork tenderloin with olive oil, dried rosemary, dried thyme, garlic powder, salt, and pepper.',
            'Place the seasoned pork tenderloin in a baking dish.',
            'In a separate bowl, toss the diced sweet potatoes with melted ghee, paprika, salt, and pepper.',
            'Spread the sweet potatoes around the pork tenderloin in the baking dish.',
            'Roast for 25-30 minutes or until the pork is cooked through and the sweet potatoes are tender.',
            'Let the pork rest for a few minutes before slicing.',
            'Serve the herb-roasted pork tenderloin with roasted sweet potatoes for a satisfying and nourishing meal.',
          ],
        },
        {
          name: 'Baked Chicken Thighs with Cauliflower Rice',
          ingredients: [
            '4 bone-in, skin-on chicken thighs',
            '1 tablespoon olive oil',
            '1 teaspoon dried thyme',
            '1 teaspoon paprika',
            '1/2 teaspoon garlic powder',
            'Salt and pepper to taste',
            '1 head cauliflower, cut into florets',
            '2 tablespoons ghee',
            '2 cloves garlic, minced',
            '1/4 cup chopped fresh parsley',
          ],
          instructions: [
            'Preheat the oven to 400°F (200°C).',
            'Rub the chicken thighs with olive oil, dried thyme, paprika, garlic powder, salt, and pepper.',
            'Place the chicken thighs on a baking sheet, skin-side up.',
            'Bake for 25-30 minutes or until the chicken is cooked through and the skin is crispy.',
            'While the chicken is baking, prepare the cauliflower rice.',
            'In a food processor, pulse the cauliflower florets until they resemble rice grains.',
            'In a large skillet, heat ghee over medium heat.',
            'Add minced garlic and sauté for 1 minute.',
            'Add the cauliflower rice to the skillet and cook for 5-7 minutes until tender.',
            'Stir in chopped parsley and season with salt and pepper.',
            'Serve the baked chicken thighs with cauliflower rice for a satisfying and grain-free meal.',
          ],
        },
        {
          name: 'Mexican Beef Lettuce Wraps',
          ingredients: [
            '1 lb ground beef',
            '1 tablespoon olive oil',
            '1 onion, diced',
            '2 cloves garlic, minced',
            '1 bell pepper, diced',
            '1 can (14 oz) diced tomatoes',
            '1 tablespoon chili powder',
            '1 teaspoon cumin',
            '1/2 teaspoon paprika',
            'Salt and pepper to taste',
            'Iceberg lettuce leaves',
            'Toppings: diced avocado, chopped cilantro, lime wedges',
          ],
          instructions: [
            'In a skillet, heat olive oil over medium heat.',
            'Add diced onion and minced garlic to the skillet. Sauté until the vegetables are softened.',
            'Add ground beef to the skillet and cook until browned.',
            'Stir in diced bell pepper, diced tomatoes, chili powder, cumin, paprika, salt, and pepper.',
            'Simmer for 10-15 minutes to allow the flavors to meld and the mixture to thicken.',
            'Spoon the beef mixture onto iceberg lettuce leaves.',
            'Top with diced avocado, chopped cilantro, and a squeeze of lime juice.',
            'Wrap the lettuce leaves around the filling to make lettuce wraps.',
            'Enjoy the Mexican beef lettuce wraps as a flavorful and Whole30-compliant meal.',
          ],
        },
        {
          name: 'Coconut Curry Shrimp with Cauliflower Rice',
          ingredients: [
            '1 lb shrimp, peeled and deveined',
            '1 tablespoon coconut oil',
            '1 onion, diced',
            '2 cloves garlic, minced',
            '1 bell pepper, diced',
            '1 can (14 oz) coconut milk',
            '2 tablespoons curry powder',
            '1 teaspoon turmeric',
            '1/2 teaspoon ginger powder',
            'Salt and pepper to taste',
            '1 head cauliflower, cut into florets',
            '2 tablespoons chopped fresh cilantro',
          ],
          instructions: [
            'In a large skillet, heat coconut oil over medium heat.',
            'Add diced onion and minced garlic to the skillet. Sauté until the vegetables are softened.',
            'Add diced bell pepper to the skillet and cook for 2-3 minutes.',
            'Stir in coconut milk, curry powder, turmeric, ginger powder, salt, and pepper.',
            'Bring the mixture to a simmer and add the shrimp.',
            'Cook for 4-5 minutes or until the shrimp is pink and cooked through.',
            'While the shrimp is cooking, prepare the cauliflower rice.',
            'In a food processor, pulse the cauliflower florets until they resemble rice grains.',
            'In a separate pan, heat a drizzle of coconut oil over medium heat.',
            'Add the cauliflower rice to the pan and sauté for 5-7 minutes until tender.',
            'Stir in chopped fresh cilantro and season with salt and pepper.',
            'Serve the coconut curry shrimp over cauliflower rice for a flavorful and satisfying meal.',
          ],
        },
        {
          name: 'Roasted Brussels Sprouts with Bacon',
          ingredients: [
            '1 lb Brussels sprouts, trimmed and halved',
            '4 slices bacon, chopped',
            '1 tablespoon olive oil',
            '1 teaspoon garlic powder',
            'Salt and pepper to taste',
          ],
          instructions: [
            'Preheat the oven to 400°F (200°C).',
            'Place the halved Brussels sprouts and chopped bacon on a baking sheet.',
            'Drizzle olive oil over the Brussels sprouts and bacon.',
            'Sprinkle garlic powder, salt, and pepper over the mixture.',
            'Toss everything together to coat the Brussels sprouts and bacon evenly.',
            'Spread the Brussels sprouts and bacon in a single layer on the baking sheet.',
            'Roast for 25-30 minutes or until the Brussels sprouts are tender and golden brown.',
            'Serve the roasted Brussels sprouts with bacon as a delicious and nutrient-rich side dish.',
          ],
        },
      ],
    },
    {
      name: 'Mediterranean Magic',
      fitnessGoal: 'muscle-gain',
      dietaryRestriction: 'omnivore',
      image: Mediterranean,
      description: 'A diet plan inspired by the Mediterranean cuisine, known for its heart-healthy and flavorful dishes.',
      recipes: [
        {
          name: 'Greek Chicken Gyro Salad',
          ingredients: [
            '8 oz chicken breast, grilled and sliced',
            '4 cups mixed salad greens',
            '1/2 cup sliced cucumbers',
            '1/2 cup cherry tomatoes, halved',
            '1/4 cup sliced red onion',
            '1/4 cup Kalamata olives',
            '2 tablespoons crumbled feta cheese',
            '2 tablespoons Greek yogurt dressing',
          ],
          instructions: [
            'In a large salad bowl, combine mixed salad greens, sliced cucumbers, halved cherry tomatoes, sliced red onion, Kalamata olives, and crumbled feta cheese.',
            'Top the salad with grilled and sliced chicken breast.',
            'Drizzle Greek yogurt dressing over the salad.',
            'Toss to coat the ingredients with the dressing.',
            'Enjoy the Greek chicken gyro salad as a fresh and protein-rich meal.',
          ],
        },
        {
          name: 'Mediterranean Baked Cod with Quinoa',
          ingredients: [
            '2 cod fillets',
            '1 tablespoon olive oil',
            '1 teaspoon dried oregano',
            '1 teaspoon dried basil',
            '1/2 teaspoon garlic powder',
            'Salt and pepper to taste',
            '1 cup cooked quinoa',
            '2 tablespoons chopped fresh parsley',
            '2 tablespoons lemon juice',
          ],
          instructions: [
            'Preheat the oven to 400°F (200°C).',
            'Place the cod fillets in a baking dish.',
            'Drizzle olive oil over the cod.',
            'Sprinkle dried oregano, dried basil, garlic powder, salt, and pepper over the cod.',
            'Bake for 12-15 minutes or until the cod is opaque and flakes easily with a fork.',
            'In a bowl, combine cooked quinoa, chopped fresh parsley, and lemon juice.',
            'Serve the baked cod over the quinoa for a nourishing and flavorful meal.',
          ],
        },
        {
          name: 'Greek Salad with Grilled Shrimp',
          ingredients: [
            '8 oz shrimp, peeled and deveined',
            '1 tablespoon olive oil',
            '1 teaspoon dried oregano',
            'Salt and pepper to taste',
            '4 cups mixed salad greens',
            '1/2 cup sliced cucumbers',
            '1/2 cup cherry tomatoes, halved',
            '1/4 cup sliced red onion',
            '1/4 cup Kalamata olives',
            '2 tablespoons crumbled feta cheese',
            '2 tablespoons lemon juice',
            '2 tablespoons extra virgin olive oil',
          ],
          instructions: [
            'Preheat a grill or grill pan over medium-high heat.',
            'In a bowl, toss the shrimp with olive oil, dried oregano, salt, and pepper.',
            'Grill the shrimp for 2-3 minutes per side, or until pink and cooked through.',
            'In a large salad bowl, combine mixed salad greens, sliced cucumbers, halved cherry tomatoes, sliced red onion, Kalamata olives, and crumbled feta cheese.',
            'In a small bowl, whisk together lemon juice and extra virgin olive oil to make the dressing.',
            'Drizzle the dressing over the salad and toss to coat.',
            'Top the salad with grilled shrimp.',
            'Enjoy the Greek salad with grilled shrimp as a light and flavorful meal.',
          ],
        },
        {
          name: 'Lemon Herb Grilled Chicken with Couscous',
          ingredients: [
            '8 oz chicken breast, grilled and sliced',
            '1 tablespoon olive oil',
            '1 tablespoon lemon juice',
            '1 teaspoon dried oregano',
            '1 teaspoon dried thyme',
            'Salt and pepper to taste',
            '1 cup cooked couscous',
            '2 tablespoons chopped fresh parsley',
            '2 tablespoons chopped fresh mint',
          ],
          instructions: [
            'Preheat a grill or grill pan over medium-high heat.',
            'Brush the chicken breast with olive oil and season with lemon juice, dried oregano, dried thyme, salt, and pepper.',
            'Grill the chicken for 4-6 minutes per side, or until it reaches an internal temperature of 165°F (74°C).',
            'Let the chicken rest for a few minutes before slicing.',
            'In a bowl, combine cooked couscous, chopped fresh parsley, and chopped fresh mint.',
            'Serve the grilled chicken over the couscous for a Mediterranean-inspired meal.',
          ],
        },
        {
          name: 'Roasted Eggplant and Tomato Pasta',
          ingredients: [
            '8 oz whole wheat pasta',
            '1 medium eggplant, diced',
            '2 cups cherry tomatoes',
            '4 cloves garlic, minced',
            '2 tablespoons olive oil',
            '1 teaspoon dried basil',
            '1/2 teaspoon dried oregano',
            'Salt and pepper to taste',
            '2 tablespoons chopped fresh basil',
            '2 tablespoons grated Parmesan cheese',
          ],
          instructions: [
            'Cook the whole wheat pasta according to the package instructions. Drain and set aside.',
            'Preheat the oven to 400°F (200°C).',
            'In a baking dish, combine diced eggplant, cherry tomatoes, minced garlic, olive oil, dried basil, dried oregano, salt, and pepper.',
            'Toss to coat the vegetables with the seasonings and olive oil.',
            'Roast for 25-30 minutes or until the eggplant is tender and the tomatoes are bursting.',
            'In a large bowl, combine the roasted eggplant and tomato mixture with the cooked pasta.',
            'Stir in chopped fresh basil and grated Parmesan cheese.',
            'Serve the roasted eggplant and tomato pasta as a satisfying and flavorful Mediterranean dish.',
          ],
        },
      ],
    },
    {
      name: 'Paleo Performance',
      fitnessGoal: 'muscle-gain',
      dietaryRestriction: 'paleo',
      image: paleo,
      description: 'A diet plan based on the principles of the Paleolithic era, emphasizing whole foods and natural ingredients.',
      recipes: [
        {
          name: 'Herb Roasted Chicken with Roasted Vegetables',
          ingredients: [
            '2 chicken breasts',
            '1 tablespoon olive oil',
            '1 teaspoon dried rosemary',
            '1 teaspoon dried thyme',
            '1 teaspoon dried oregano',
            '1 teaspoon garlic powder',
            '1/2 teaspoon salt',
            '1/4 teaspoon black pepper',
            'Assorted vegetables for roasting (such as carrots, Brussels sprouts, and sweet potatoes)',
          ],
          instructions: [
            'Preheat the oven to 400°F (200°C).',
            'In a small bowl, mix together dried rosemary, dried thyme, dried oregano, garlic powder, salt, and black pepper to make the herb seasoning.',
            'Place chicken breasts on a baking sheet and rub them with olive oil.',
            'Sprinkle the herb seasoning over the chicken breasts, coating them evenly.',
            'Arrange the assorted vegetables around the chicken on the baking sheet.',
            'Roast in the oven for about 25-30 minutes or until the chicken is cooked through and the vegetables are tender.',
            'Serve the herb roasted chicken with the roasted vegetables.',
            'Enjoy a delicious and Paleo-friendly meal!',
          ],
        },
        {
          name: 'Grilled Salmon with Mango Salsa',
          ingredients: [
            '2 salmon fillets',
            '1 tablespoon olive oil',
            'Salt and pepper to taste',
            '1 ripe mango, diced',
            '1/2 red bell pepper, diced',
            '1/4 red onion, finely chopped',
            '1 jalapeño pepper, seeded and minced',
            'Juice of 1 lime',
            '2 tablespoons chopped fresh cilantro',
          ],
          instructions: [
            'Preheat the grill to medium-high heat.',
            'Brush the salmon fillets with olive oil and season with salt and pepper.',
            'Grill the salmon for about 4-5 minutes per side or until cooked through and flaky.',
            'In a bowl, combine diced mango, diced red bell pepper, finely chopped red onion, minced jalapeño pepper, lime juice, and chopped fresh cilantro to make the mango salsa.',
            'Serve the grilled salmon with the mango salsa on top.',
            'Enjoy a flavorful and nutritious Paleo meal!',
          ],
        },
        {
          name: 'Beef and Broccoli Stir-Fry',
          ingredients: [
            '8 oz beef sirloin, sliced into thin strips',
            '2 tablespoons coconut aminos (or soy sauce)',
            '1 tablespoon arrowroot powder (or cornstarch)',
            '1 tablespoon olive oil',
            '2 cloves garlic, minced',
            '1 teaspoon grated fresh ginger',
            '2 cups broccoli florets',
            '1/2 cup sliced mushrooms',
            '1/2 cup sliced bell peppers',
            'Salt and pepper to taste',
          ],
          instructions: [
            'In a small bowl, whisk together coconut aminos and arrowroot powder to make the stir-fry sauce.',
            'Heat olive oil in a large pan or wok over medium-high heat.',
            'Add minced garlic and grated ginger to the pan and stir-fry for about 1 minute until fragrant.',
            'Add sliced beef sirloin to the pan and cook until browned.',
            'Add broccoli florets, sliced mushrooms, and sliced bell peppers to the pan. Stir-fry for about 3-4 minutes until the vegetables are crisp-tender.',
            'Pour the stir-fry sauce over the beef and vegetables in the pan. Stir well to coat everything in the sauce.',
            'Cook for an additional 1-2 minutes until the sauce thickens.',
            'Season with salt and pepper to taste.',
            'Serve the beef and broccoli stir-fry hot.',
            'Enjoy a delicious and Paleo-friendly stir-fry!',
          ],
        },
        {
          name: 'Zucchini Noodles with Bolognese Sauce',
          ingredients: [
            '2 medium zucchini',
            '1 lb ground beef',
            '1/2 onion, finely chopped',
            '2 cloves garlic, minced',
            '1 can crushed tomatoes',
            '1 tablespoon tomato paste',
            '1 teaspoon dried basil',
            '1 teaspoon dried oregano',
            'Salt and pepper to taste',
            'Fresh basil leaves for garnish',
          ],
          instructions: [
            'Using a spiralizer or vegetable peeler, create zucchini noodles from the zucchini. Set aside.',
            'In a large pan, brown the ground beef over medium heat.',
            'Add finely chopped onion and minced garlic to the pan. Sauté until the onion is translucent.',
            'Stir in crushed tomatoes, tomato paste, dried basil, dried oregano, salt, and pepper. Simmer for about 20 minutes to allow the flavors to meld together.',
            'In a separate pan, sauté the zucchini noodles over medium heat for 2-3 minutes until they are slightly softened.',
            'Serve the zucchini noodles with the Bolognese sauce on top.',
            'Garnish with fresh basil leaves.',
            'Enjoy a Paleo-friendly twist on a classic pasta dish!',
          ],
        },
        {
          name: 'Paleo Banana Pancakes',
          ingredients: [
            '2 ripe bananas',
            '4 eggs',
            '1/4 cup almond flour',
            '1/4 cup coconut flour',
            '1/2 teaspoon baking powder',
            '1/2 teaspoon ground cinnamon',
            'Coconut oil for cooking',
            'Fresh berries and maple syrup for serving',
          ],
          instructions: [
            'In a mixing bowl, mash the ripe bananas with a fork until smooth.',
            'Add eggs to the bowl and whisk together with the mashed bananas.',
            'In a separate bowl, combine almond flour, coconut flour, baking powder, and ground cinnamon.',
            'Pour the dry ingredients into the banana-egg mixture and stir until well combined.',
            'Heat coconut oil in a skillet over medium heat.',
            'Scoop about 1/4 cup of the pancake batter onto the skillet for each pancake.',
            'Cook until bubbles form on the surface, then flip and cook for another minute or until golden brown.',
            'Repeat with the remaining batter to make more pancakes.',
            'Serve the Paleo banana pancakes with fresh berries and a drizzle of maple syrup.',
            'Enjoy a delicious and grain-free breakfast!',
          ],
        },
      ],
    },
    
    {
      name: 'Keto Fuel',
      fitnessGoal: 'weight-loss',
      dietaryRestriction: 'ketogenic',
      image: keto,
      description: 'A high-fat, low-carb diet plan that promotes fat burning and ketosis.',
      recipes: [
        {
          name: 'Avocado and Bacon Salad',
          ingredients: [
            '2 cups mixed greens',
            '1/2 avocado, sliced',
            '4 slices cooked bacon, crumbled',
            '2 tablespoons olive oil',
            '1 tablespoon lemon juice',
            'Salt and pepper to taste',
          ],
          instructions: [
            'In a bowl, combine mixed greens, sliced avocado, and crumbled bacon.',
            'In a separate small bowl, whisk together olive oil, lemon juice, salt, and pepper to make the dressing.',
            'Drizzle the dressing over the salad and toss to coat evenly.',
            'Enjoy a keto-friendly and delicious salad!',
          ],
        },
        
      ],
    },
    {
      name: 'Power Protein',
      fitnessGoal: 'muscle-gain',
      dietaryRestriction: 'omnivore',
      image: protein,
      description: 'A protein-rich diet plan to fuel muscle growth, repair, and recovery.',
      recipes: [
        {
          name: 'Grilled Steak with Quinoa and Asparagus',
          ingredients: [
            '8 oz steak',
            '1 cup cooked quinoa',
            '1 bunch asparagus',
            '1 tablespoon olive oil',
            'Salt and pepper to taste',
          ],
          instructions: [
            'Preheat the grill to medium-high heat.',
            'Season the steak with salt and pepper.',
            'Grill the steak for about 4-6 minutes per side for medium-rare, or adjust the cooking time to your desired level of doneness.',
            'While the steak is grilling, cook the quinoa according to package instructions.',
            'Trim the ends of the asparagus and toss with olive oil, salt, and pepper.',
            'Grill the asparagus for about 5 minutes, turning occasionally, until tender and lightly charred.',
            'Let the steak rest for a few minutes before slicing.',
            'Serve the sliced steak with cooked quinoa and grilled asparagus.',
            'Enjoy a protein-packed and nutritious meal!',
          ],
        },
        {
          name: 'Baked Salmon with Lemon Dill Sauce',
          ingredients: [
            '2 salmon fillets',
            '2 tablespoons lemon juice',
            '1 tablespoon chopped fresh dill',
            '1 tablespoon olive oil',
            'Salt and pepper to taste',
          ],
          instructions: [
            'Preheat the oven to 400°F (200°C).',
            'Place the salmon fillets on a baking sheet lined with parchment paper.',
            'Drizzle lemon juice and olive oil over the salmon fillets.',
            'Sprinkle chopped dill, salt, and pepper over the salmon.',
            'Bake for about 12-15 minutes or until the salmon is cooked through and flakes easily with a fork.',
            'While the salmon is baking, prepare the lemon dill sauce by combining lemon juice, chopped dill, olive oil, salt, and pepper in a small bowl.',
            'Serve the baked salmon with the lemon dill sauce.',
            'Enjoy a delicious and protein-rich meal!',
          ],
        },
        {
          name: 'Protein Pancakes with Berries',
          ingredients: [
            '1 cup oats',
            '1 cup cottage cheese',
            '2 eggs',
            '1 teaspoon vanilla extract',
            '1/2 teaspoon baking powder',
            '1/4 cup milk (dairy or plant-based)',
            '1 cup mixed berries',
            'Maple syrup for serving',
          ],
          instructions: [
            'In a blender, combine oats, cottage cheese, eggs, vanilla extract, baking powder, and milk. Blend until smooth.',
            'Heat a non-stick skillet or griddle over medium heat.',
            'Pour about 1/4 cup of the pancake batter onto the skillet for each pancake.',
            'Cook until bubbles form on the surface, then flip and cook for another minute or until golden brown.',
            'Repeat with the remaining batter to make more pancakes.',
            'Serve the protein pancakes with mixed berries and a drizzle of maple syrup.',
            'Enjoy a protein-packed and delicious breakfast!',
          ],
        },
        {
          name: 'Greek Turkey Meatballs with Tzatziki Sauce',
          ingredients: [
            '1 lb ground turkey',
            '1/2 cup breadcrumbs',
            '1/4 cup grated Parmesan cheese',
            '1/4 cup chopped fresh parsley',
            '1/4 cup chopped fresh mint',
            '2 cloves garlic, minced',
            '1/2 teaspoon dried oregano',
            '1/2 teaspoon ground cumin',
            'Salt and pepper to taste',
            '1 cup Greek yogurt',
            '1/2 cucumber, grated and squeezed to remove excess moisture',
            '1 tablespoon lemon juice',
            '1 tablespoon chopped fresh dill',
            '1 tablespoon olive oil',
          ],
          instructions: [
            'Preheat the oven to 400°F (200°C).',
            'In a large bowl, combine ground turkey, breadcrumbs, Parmesan cheese, parsley, mint, minced garlic, dried oregano, ground cumin, salt, and pepper. Mix well.',
            'Shape the mixture into meatballs, about 1-2 tablespoons each.',
            'Place the meatballs on a baking sheet lined with parchment paper.',
            'Bake for about 20 minutes or until cooked through and browned.',
            'While the meatballs are baking, prepare the tzatziki sauce by combining Greek yogurt, grated cucumber, lemon juice, chopped dill, olive oil, salt, and pepper in a bowl. Mix well.',
            'Serve the Greek turkey meatballs with the tzatziki sauce.',
            'Enjoy a protein-packed and flavorful meal!',
          ],
        },
        {
          name: 'Chicken and Vegetable Stir-Fry',
          ingredients: [
            '2 chicken breasts, sliced',
            '2 tablespoons soy sauce (or tamari for gluten-free option)',
            '1 tablespoon honey',
            '1 tablespoon cornstarch',
            '1/4 cup water',
            '2 tablespoons vegetable oil',
            '2 cloves garlic, minced',
            '1 tablespoon grated fresh ginger',
            '1 bell pepper, sliced',
            '1 cup snap peas',
            '1 carrot, sliced',
            '1/2 cup sliced mushrooms',
            'Salt and pepper to taste',
          ],
          instructions: [
            'In a small bowl, whisk together soy sauce, honey, cornstarch, and water to make the sauce.',
            'Heat vegetable oil in a large pan or wok over medium-high heat.',
            'Add minced garlic and grated ginger to the pan and stir-fry for about 1 minute until fragrant.',
            'Add sliced chicken breasts to the pan and cook until browned and cooked through.',
            'Add sliced bell pepper, snap peas, carrot, and mushrooms to the pan. Stir-fry for about 3-4 minutes until the vegetables are tender-crisp.',
            'Pour the sauce over the chicken and vegetables. Stir well to coat everything in the sauce.',
            'Cook for an additional 2-3 minutes until the sauce thickens.',
            'Season with salt and pepper to taste.',
            'Serve the chicken and vegetable stir-fry hot.',
            'Enjoy a protein-packed and flavorful stir-fry!',
          ],
        },
        {
          name: 'Protein-Packed Smoothie',
          ingredients: [
            '1 cup unsweetened almond milk (or milk of your choice)',
            '1 scoop protein powder (vanilla or chocolate)',
            '1/2 frozen banana',
            '1/2 cup frozen berries (such as blueberries, raspberries, or strawberries)',
            '1 tablespoon almond butter',
            '1 tablespoon chia seeds',
            'Ice cubes (optional)',
          ],
          instructions: [
            'In a blender, combine almond milk, protein powder, frozen banana, frozen berries, almond butter, and chia seeds.',
            'Blend until smooth and creamy.',
            'If desired, add ice cubes and blend again to make the smoothie colder and thicker.',
            'Pour the protein-packed smoothie into a glass.',
            'Enjoy a nutritious and energizing smoothie!',
          ],
        },
      ],
    },
  ];

  const [filteredPlans, setFilteredPlans] = useState(dietPlans);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSearch = (filteredPlans) => {
    setFilteredPlans(filteredPlans);
  };

  const openPopup = (plan) => {
    setSelectedPlan(plan);
  };

  const closePopup = () => {
    setSelectedPlan(null);
  };

  const DietPlanCard = ({ plan }) => {
    return (
      <div className="card3" onClick={() => openPopup(plan)}>
        <img src={plan.image} alt={plan.name} className="card-image" />
        <h3>{plan.name}</h3>
        <p>{plan.description}</p>
      </div>
    );
  };

  const RecipePopup = ({ plan }) => {
    return (
      <div className="popup-overlay">
        <div className="popup">
          <button className="popup-close" onClick={closePopup}>
            Close
          </button>
          <h2>{plan.name}</h2>
          <p>{plan.description}</p>
          <h3>Recipes:</h3>
          {plan.recipes.map((recipe, index) => (
            <div key={index} className="recipe">
              <h4>{recipe.name}</h4>
              <h5>Ingredients:</h5>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h5>Instructions:</h5>
              <ol>
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="nutrition-colour">
      <div className="background-image-nutrition"></div>
      <h1 className="nutrition-title">Nutrition</h1>
      <div className="nutrition-container">
        <div className="search-container">
          <NutritionSearch dietPlans={dietPlans} onSearch={handleSearch} />
        </div>
        <div className="filtered-plans">
          <h2 style={{ marginTop: 0, justifyContent: 'left', paddingLeft: 70 }}>Matching Diet Plans</h2>
          <div className="card-container">
            {filteredPlans.length > 0 ? (
              filteredPlans.map((plan) => (
                <DietPlanCard key={plan.name} plan={plan} />
              ))
            ) : (
              <p>No matching diet plans found.</p>
            )}
          </div>
        </div>
      </div>
      {selectedPlan && <RecipePopup plan={selectedPlan} />}
      <GoogleFormButton />
    </div>
  );
};

export default NutritionPage;
