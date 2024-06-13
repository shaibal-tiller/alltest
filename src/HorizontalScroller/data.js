  const foodData = [
    { 
      name: 'Pizza', 
      order: 1, 
      image: 'https://c4.wallpaperflare.com/wallpaper/158/311/666/pizza-wide-wallpaper-preview.jpg', 
      description: 'Ingredients: Dough, Tomato Sauce, Cheese, Pepperoni, Mushrooms, Onions' 
    },
    { 
      name: 'Burger', 
      order: 2, 
      image: 'https://www.tasteandflavors.com/wp-content/uploads/2018/11/taste-and-flavors-out-and-about-10-best-burgers-wide.jpg', 
      description: 'Ingredients: Bun, Beef Patty, Lettuce, Tomato, Onion, Pickles, Cheese' 
    },
    { 
      name: 'Sushi', 
      order: 3, 
      image: 'https://c4.wallpaperflare.com/wallpaper/760/370/355/sushi-wide-sushi-meal-wallpaper-preview.jpg', 
      description: 'Ingredients: Rice, Nori, Fish (Salmon, Tuna, etc.), Vegetables' 
    },
    { 
      name: 'Pasta', 
      order: 4, 
      image: 'https://www.tastingtable.com/img/gallery/30-types-of-pasta-and-when-you-should-be-using-them/l-intro-1659010210.jpg', 
      description: 'Ingredients: Pasta, Tomato Sauce, Garlic, Olive Oil, Parmesan Cheese' 
    },
    { 
      name: 'Salad', 
      order: 5, 
      image: 'https://www.kitchensanctuary.com/wp-content/uploads/2014/08/Quinoa-broadbean-Caprese-wide-FS-7491.jpg', 
      description: 'Ingredients: Lettuce, Tomato, Cucumber, Onion, Bell Pepper, Olives, Feta Cheese' 
    },  { 
      name: 'Tacos', 
      order: 6, 
      image: 'https://media.istockphoto.com/id/905468336/photo/homemade-mexican-taco-pizza.jpg?s=612x612&w=0&k=20&c=-z9v7xpoNaZs725GamfSJwGuS7VAqQYzwtfpc3XVnns=',
      description: 'Ingredients: Tortillas, Beef or Chicken, Lettuce, Tomato, Cheese, Salsa, Sour Cream' 
    },
    { 
      name: 'Sushi Rolls', 
      order: 7, 
      image: 'https://thumbs.dreamstime.com/b/delightful-japanese-sushi-rolls-painting-shows-appetizing-display-japanese-sushi-rolls-artist-used-wide-array-272254816.jpg',
      description: 'Ingredients: Rice, Nori, Various Fish, Avocado, Cucumber, Sesame Seeds' 
    },
    { 
      name: 'Pancakes', 
      order: 8, 
      image: 'https://noshandnourish.com/sites/default/files/styles/blog_list_page_image/public/green-smoothie-pancakes-wide-ig2.jpg?itok=t1l9tdij',
      description: 'Ingredients: Flour, Milk, Eggs, Butter, Baking Powder, Maple Syrup' 
    },
    { 
      name: 'Chicken Curry', 
      order: 9, 
      image: 'https://i0.wp.com/www.angsarap.net/wp-content/uploads/2014/05/Kari-Ayam-Wide.jpg?ssl=1',
      description: 'Ingredients: Chicken, Curry Paste, Coconut Milk, Potatoes, Carrots, Onions' 
    },
    { 
      name: 'Ice Cream', 
      order: 10, 
      image: 'https://previews.123rf.com/images/irrinn0215/irrinn02151904/irrinn0215190400185/120749679-mint-and-lemon-ice-cream-with-mint-leaves-in-ceramic-bowl-on-green-wooden-background-long-wide.jpg',
      description: 'Ingredients: Milk, Cream, Sugar, Eggs, Flavorings (Vanilla, Chocolate, etc.)' 
    },
    { 
      name: 'Chocolate Cake', 
      order: 11, 
      image: 'https://gfjules.com/wp-content/uploads/2020/02/chocolate-beer-cake-wide-1024x573.jpg',
      description: 'Ingredients: Flour, Sugar, Cocoa Powder, Eggs, Butter, Milk, Vanilla Extract' 
    },
    { 
      name: 'Sushi Platter', 
      order: 12, 
      image: 'https://media.istockphoto.com/id/1053854126/photo/all-you-can-eat-sushi.jpg?s=612x612&w=0&k=20&c=qqPJBYcxR0fgmzIFj_k2V6Mbo12hBBCucs1i5HcGYA0=',
      description: 'Ingredients: Assorted Sushi Rolls, Sashimi, Pickled Ginger, Wasabi, Soy Sauce' 
    },
    { 
      name: 'Spaghetti Carbonara', 
      order: 13, 
      image: 'https://img.freepik.com/premium-photo/spaghetti-carbonara-stone-rustic-pub-wide-panoramic-generative-ai_918839-10316.jpg',
      description: 'Ingredients: Spaghetti, Pancetta or Bacon, Eggs, Parmesan Cheese, Black Pepper' 
    },
    { 
      name: 'Caesar Salad', 
      order: 14, 
      image: 'https://img.bestrecipes.com.au/HR7kwVpb/br/2019/03/caesar-salad-950547-1.jpg',
      description: 'Ingredients: Romaine Lettuce, Croutons, Parmesan Cheese, Caesar Dressing' 
    },
    { 
      name: 'Fried Chicken', 
      order: 15, 
      image: 'https://img.freepik.com/premium-photo/fried-chicken-detailed-macro-food-shot-close-up_868749-7549.jpg',
      description: 'Ingredients: Chicken Pieces, Flour, Eggs, Bread Crumbs, Spices' 
    },
    { 
      name: 'Fruit Salad', 
      order: 16, 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1v78rH9RAKXu3JlpyvpHOfh9Bpx-TOd8hJ_9VoXZIMw&s',
      description: 'Ingredients: Assorted Fresh Fruits (Strawberries, Pineapple, Grapes, etc.)' 
    },
    { 
      name: 'Ramen', 
      order: 17, 
      image: 'https://mediavine-res.cloudinary.com/image/upload/s--54pV2hb---/ar_16:9,c_fill,f_auto,fl_lossy,q_auto/v1706563952/gro0olv6cj1bwyes5on0.jpg',
      description: 'Ingredients: Ramen Noodles, Broth, Meat (Pork, Chicken), Egg, Green Onions' 
    },
    { 
      name: 'Cheeseburger', 
      order: 18, 
      image: 'https://img.freepik.com/premium-photo/double-cheeseburger-wooden-board-long-wide-banner_399963-5307.jpg',
      description: 'Ingredients: Bun, Beef Patty, Cheese, Lettuce, Tomato, Onion, Pickles' 
    },
    { 
      name: 'Tiramisu', 
      order: 19, 
      image: 'https://res.cloudinary.com/valrhona/image/upload/c_limit,f_auto,fl_progressive,h_850,q_auto,w_850/dam/783c4ae4b0e985de',
      description: 'Ingredients: Ladyfingers, Mascarpone Cheese, Coffee, Cocoa Powder, Eggs, Sugar' 
    },
    { 
      name: 'Fish and Chips', 
      order: 20, 
      image: 'https://bakeitwithlove.com/wp-content/uploads/2023/08/fish-and-chips-h1.jpg.webp',
      description: 'Ingredients: Fish Fillets, Potatoes, Flour, Beer (for batter), Oil' 
    },
    // Add more food items as needed
  ];
  
  export default foodData