
import news_ccm from './images/ccm.jpg'
import news_job_placement from './images/ccm1.jpg'
import basis from './images/basis.jpg'
import news_lged from './images/contract_lged.jpg'
import news_umcc from './images/UMCC.jpg'
import news_cuet from './images/news_cuet.jpg'
import news_risk_sens_database from './images/inaguration Risk-Sensitive Database for the Core Area of Rangpur and Sylhet District Town.jpg'


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
  }, {
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

export const news_content_list =
  [
    {
      name: `The inauguration of the "Preparation of a Risk-Sensitive Database for the Core Area of Rangpur and Sylhet District Town"`,
      photo: news_risk_sens_database,
      description: `The inauguration of the "Preparation of a Risk-Sensitive Database for the Core Area of Rangpur
             and Sylhet District Town" project took place last Thursday, implemented by the Urban Development Directorate
              (UDD) under the Ministry of Housing and Public Works in Sylhet. The inauguration occurred at the Sylhet DC office,
             in front of the mural of the Father of the Nation, Bangabandhu Sheikh Mujibur Rahman.`,
      status: "published",
      date: "2024-01-25",
    },
    {
      name: "PLIS & CCM Workshop",
      photo: news_ccm,
      description: `Climate Change এর কথা মাথায় রেখে DPP (Development Project Proforma) -এর প্রণয়ন এবং মূল্যায়ণ আরো সহজ ও কার্যক্ষম করার লক্ষ্যে,Bangladesh Planning Commission এর অধীনে GIZ ফান্ডেড Adaptation to Climate Change into the National and Local Development Planning - II (ACCNLDP II) প্রকল্পে কাজ করছে Tiller। বাংলাদেশ সরকারের প্ল্যানিং কমিশনের সকল সেক্টর ডিভিশন এবং বিভিন্ন মন্ত্রণালয় ও ২০টা এজেন্সীর প্রায় ৪০জন অংশগ্রহণকারীদের ,প্রজেক্টের ২টি মেজর আউটপুট Planning Information System (PLIS) এবং Climate Check Method (CCM) এর সাথে পরিচয় করিয়ে দিতে,বঙ্গবন্ধু আন্তর্জাতিক সম্মেলন কেন্দ্রে গত ১৬ই মার্চ আয়োজন করা হয় “Workshop on Planning Information System (PLIS) and Climate Check Method (CCM)” শীর্ষক একটি ইনসেপশন ওয়ার্কশপ।
            প্রকল্প পরিচালক জনাবা নুসরাত নোমান, যুগ্মপ্রধাণ, প্ল্যানিং কমিশন -এর সভাপতিত্বে ওয়ার্কশপে বিশেষ অতিথি ও প্রধাণ অতিথি হিসাবে উপস্থিত ছিলেন যথাক্রমে জনাব খন্দকার আহসান হোসেন, প্রধান (অতিরিক্ত সচিব) এবং জনাব সত্যজিত কর্মকার, সদস্য (সচিব), কার্যক্রম বিভাগ। অংশগ্রণকারীদের প্রতি প্রকল্প পরিচালক, বিশেষ অতিথি ও প্রধান অতিথির এর পাশাপাশি GIZ এর প্রিন্সিপাল অ্যাডভাইজর জনাব মাহমুদুর রহমান এর স্বাগত বক্তব্যের পর, Tiller -এর চীফ এক্সিকিউটিভ ও উক্ত প্রজেক্টের আইসিটি এক্সপার্ট জনাব তামজিদুল ইসলাম PLIS ও CCM এর উপর পরিচিতিমূলক বক্তব্য রাখেন।
            Tiller এর ট্রেইনিং এক্সপার্ট জনাবা তামান্না সালামের সঞ্চালনায়, ওয়ার্কশপের দ্বিতীয় অংশে প্রকল্পের ক্লাইমেট চেঞ্জ এক্সপার্ট জনাব তৌফিক মহিউদ্দিন অংশগ্রণকারীদের কাছে বিস্তারিতভাবে তুলে ধরেন CCM কী, এর উপযোগিতা ও CCM তৈরির পটভূমি। এ সেশনের পরের অংশে অংশগ্রহণকারীদের কাছ থেকে গ্রুপ ওয়ার্কের মাধ্যমে CCM সংক্রান্ত মতামত, উপদেশ ও সংশোধনী গ্রহণ করা হয়। ওয়ার্কশপের সর্বশেষ সেশনে PLIS সম্পর্কে বিস্তারিত আলোচনা করেন Tiller এর চীফ এক্সিকিউটিভ জনাব তামজিদুল ইসলাম এবং সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার জনাব মোঃ আহসান ইকবাল; যেখানে প্রশ্নোত্তর ও আলোচনার মাধ্যমে তাঁরা অংশগ্রহণকারীদের দেখান কীভাবে PLIS ব্যবহার করে Climate Change এর আলোকে DPP প্রণয়ন ও মূল্যায়ণ খুব সহজেই করা যায়।`,
      status: "published",
      date: "2023-06-21",
    },
    {
      name: `Job Placement and business mentoring services for skills training graduates in five partner cities`,
      photo: news_job_placement,
      description: `Today's kickoff meeting was held for “𝐉𝐨𝐛 placement and business mentoring support services for skills training
            graduates in five partner cities" project with Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) team.
            Our honorable CEO sir Mr. Tamzidul Islam, Director of MAWTS Institute of Technology Mr. James Gomes along with the subject matter experts were present in the meeting. 
            #SkillsTraining #JobPlacement #TVET`,
      status: "published",
      date: "2023-06-18",
    },
    {
      name: "Job Fair at MIST",
      photo: basis,
      description: `We are glad to represent our organization at MIST Job Fair 2022. We believe in equity to recruit the right person in the right place.`,

      date: "2022-03-31",
      staus: 'hidden'
    },
    {
      name: "Orientation for Leading LGED Officials",
      photo: news_lged,
      description: `Orientation for Leading LGED Officials on
            “Application of 
           Modern GIS technologies using Drones and Sub-surface/geological Data for 
           Urban and Infrastructure Development Planning”
           #GIS #drone #tiller #giz
           #LGED`,
      status: "published",
      date: "2023-01-06",
    }, {
      name: "Workshop on Photogrammetry technology for 3rd year student of CUET",
      photo: news_cuet,
      description: `Day long workshop on Photogrammetry technology for 3rd year student of CUET.
             Organised by CUET planners alumni association.`,
      status: "published",
      date: "2023-11-12",
    }, {
      name: "Urban Management of Internal migration due to Climate change (UMCC)",
      photo: news_umcc,
      description: `Successfully completed the Urban Management of Internal migration due to Climate change (UMCC)/ Urban Management of Migration and Livelihoods (UMML)
            Thank you BMZ, European Union and GIZ for your support`,
      status: "published",
      date: "2023-09-27",
    },

  ];

export default foodData