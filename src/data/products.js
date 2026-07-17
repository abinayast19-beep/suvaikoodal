const products = [
  {
    id: 1,
    name: "Kambu Laddu",
    image: "/images/Kambu-laddu.jpg",
    description: "Healthy Pearl Millet Laddu",
    category: "Healthy Laddus",
    sizes: [
      { weight: "100g", price: 59 },
      { weight: "250g", price: 149 },
      { weight: "500g", price: 289 },
    ],
  },

  {
    id: 2,
    name: "Geti Urudai Laddu",
    image: "/images/Raagi-laddu.jpg",
    description: "Healthy Finger Laddu",
    category: "Healthy Laddus",
    sizes: [
      { weight: "100g", price: 59 },
      { weight: "250g", price: 149 },
      { weight: "500g", price: 289 },
    ],
  },

  {
    id: 3,
    name: "Dry Fruits & Dates with Honey Mix",
    image: "/images/Dry-fruits.jpg",
    description: "Premium Healthy Mix",
    category: "Healthy Mixes",
    sizes: [
      { weight: "15g", price: 15 },
      { weight: "25g", price: 30 },
      { weight: "100g", price: 99 },
      { weight: "250g", price: 299 },
    ],
  },

  {
    id: 4,
    name: "Biotin Laddu",
    image: "/images/Biotin-laddu.jpg" ,
    description: "Hair & Skin Healthy Laddu",
    category: "Healthy Laddus",
    sizes: [
      { weight: "100g", price: 99 },
      { weight: "250g", price: 179 },
      { weight: "500g", price: 350 },
    ],
  },

  {
    id: 5,
    name: "Karuppu Ulundhu Laddu",
    image: "/images/Karuppu-uluthu-laddu.jpg",
    description: "Traditional Healthy Laddu",
    category: "Healthy Laddus",
    sizes: [
      { weight: "100g", price: 99 },
      { weight: "250g", price: 247 },
      { weight: "500g", price: 489 },
    ],
  },

  {
    id: 6,
    name: "Pasi Paruppu Laddu",
    image: "/images/Pasi-paruppu-laddu.jpg",
    description: "Protein Rich Laddu",
    category: "Healthy Laddus",
    sizes: [
      { weight: "100g", price: 89 },
      { weight: "250g", price: 219 },
      { weight: "500g", price: 439 },
    ],
  },

  {
    id: 7,
    name: "Nuts Chocolate",
    image: "/images/Chocolate-nuts.jpg",
    description: "Healthy Chocolate Treat",
   category: "Healthy Treats",
    sizes: [
      { weight: "25g", price: 49 },
      { weight: "50g", price: 89 },
      { weight: "100g", price: 169 },
    ],
  },

  {
    id: 8,
    name: "Murungakeerai Mittai",
    image: "/images/Murugakeerai-Mittai.jpg",
    description: "Healthy Traditional Sweet",
    category: "Herbal Products",
    sizes: [
      { weight: "100g", price: 99},
      { weight: "250g", price: 249 },
      { weight: "500g", price: 489},
    ],
  },


  {
    id: 9,
    name: "Karuveppilai Podi",
    image: "/images/Karuvepillai-poddi.jpg",
    description: "Homemade Curry Leaves Powder",
    category: "Homemade Powders",
    sizes: [
  { weight: "100g", price: 79 },
      { weight: "250g", price: 199 },
      { weight: "500g", price: 399 },
    ],
  },

{
  id: 10,
  name: "Paruppu Podi",
  image: "/images/Paruppu-podi.jpg",
  description: "Homemade Dal Powder",
  category: "Homemade Powders",
  sizes: [
    { weight: "100g", price: 70 },
    { weight: "250g", price: 169 },
    { weight: "500g", price: 349 },
  ],
},
{
  id: 11,
  name: "Homemade Chilli Powder",
  category: "Homemade Powders",
  image: "/images/Chilli-powder.jpg",
  description:
    "Freshly ground homemade chilli powder.",
  features: [
    "Premium Quality Red Chillies",
    "No Artificial Colours",
    "No Preservatives",
    "Freshly Ground",
    "Homemade"
  ],
  sizes: [
    { weight: "100g", price: 35 },
    { weight: "250g", price: 85 },
    { weight: "500g", price: 165 },
    { weight: "1kg", price: 330 },
  ],
  badge: "New Arrival"
},
// =========================
// COMBO PACKS
// =========================

{
  id: 12,
  category: "Combo Packs",
  name: "Mini Healthy Sample Laddu Box",
  image: "/images/Mini-Laddu-Box.jpg",
  description: "Healthy Assorted Laddu Box | Perfect for First-Time Buyers",
  badge: "Starter Pack",
  features: [
    "1 Kambu Laddu",
    "1 Getti Urudhai Laddu",
    "1 Biotin Laddu",
    "1 Karuppu Ulundhu Laddu",
    "1 Pasi Paruppu Laddu",
    "5 Healthy Laddu Varieties",
  ],
  sizes: [
    { weight: "1 Box", price: 99 },
  ],
},


{
  id: 13,
  category: "Combo Packs",
  name: "Kids Healthy Combo",
  image: "/images/6-Days-Combo-laddu.jpg",
  description: "Healthy Assorted Snack Box for Kids",
  badge: "Kids Special",
  features: [
    "2 Kambu Laddus",
    "2 Getti Urudhai Laddus",
    "2 Pasi Paruppu Laddus",
    "2 Nuts Chocolates",
    "15g Dry Fruits & Dates with Honey Mix",
    "Healthy Snack Box",
  ],
  sizes: [
    { weight: "1 Box", price: 199 },
  ],
},

{
  id: 15,
  category: "Combo Packs",
  name: "Women's Wellness Combo",
  image: "/images/7-days-healthyladdu-combo.jpg",
  description: "Healthy Wellness Combo for Women",
  badge: "Women's Special",
  features: [
    "2 Biotin Laddus",
    "2 Karuppu Ulundhu Laddus",
    "2 Murungakeerai Mittai",
    "15g Dry Fruits & Dates with Honey Mix",
    "2 Kambu Laddus",
    "1 Nuts Chocolates",
    "Women's Wellness Box",
    
  ],
  sizes: [
    { weight: "1 Box", price: 219 },
  ],
},

{
  id: 16,
  category: "Combo Packs",
  name: "Family Healthy Combo",
  image: "/images/Family-Combo.jpg",
  description: "Healthy Assorted Laddu Box for the Whole Family",
  badge: "Family Pack",
  features: [
    "4 Kambu Laddus",
    "4 Getti Urudhai Laddus",
    "4 Biotin Laddus",
    "4 Karuppu Ulundhu Laddus",
    "4 Pasi Paruppu Laddus",
    "20 Healthy Laddus",
  ],
  sizes: [
    { weight: "1 Box", price: 439 },
  ],
},

{
  id: 17,
  category: "Combo Packs",
  name: "Festive Gift Box",
  image: "/images/Festive-Gift-Box.jpg",
  description: "Healthy Gift Box for Festivals & Special Occasions",
  badge: "Festival Special",
  features: [
    "2 Kambu Laddus",
    "2 Getti Urundai Laddus",
    "2 Biotin Laddus",
    "2 Karuppu Ulundhu Laddus",
    "2 Pasi Paruppu Laddus",
    "15g Dry Fruits & Dates with Honey Mix",
    "1 Nuts Chocolates",
    "Elegant Gift Box",
  ],
  sizes: [
    { weight: "1 Box", price: 249 },
  ],
},

{
  id: 18,
  category: "Combo Packs",
  name: "Suvaikoodal Signature Gift Box",
  image: "/images/Premium-Gift-Box.jpg",
  description: "Premium Healthy Gift Box with Elegant Packing",
  badge: "Premium",
  features: [
    "2 Kambu Laddus",
    "2 Getti Urundai Laddus",
    "2 Biotin Laddus",
    "2 Karuppu Ulundhu Laddus",
    "2 Pasi Paruppu Laddus",
    "2 15g Dry Fruits & Dates with Honey Mix",
    "2 Nuts Chocolates",
    "2 Murungakeerai Mittai",

    "Elegant Premium Gift Box",
    "Exclusive Signature Collection",
  ],
  sizes: [
    { weight: "1 Box", price: 499 },
  ],
},
{
  id: 19,
  category: "Return Gifts",
  name: "Varalakshmi Combo 1",
  image: "/images/Combo1.jpg",
  description: "Wire Bowl",
  sizes: [
    { weight: "1 Set", price: 99 },
  ],
},

{
  id: 20,
  category: "Return Gifts",
  name: "Varalakshmi Combo 2",
  image: "/images/Combo2.jpg",
  description: "Wire Bowl + Manjal Kumkum + Kolam Stencil + Bangle",
  sizes: [
    { weight: "1 Set", price: 199 },
  ],
},

{
  id: 21,
  category: "Return Gifts",
  name: "Varalakshmi Combo 3",
  image: "/images/Combo3.jpg",
  description: "Premium Return Gift Combo",
  sizes: [
    { weight: "1 Set", price: 299 },
  ],
},
{
  id: 22,
  name: "Karuppu Ulluthu Kali Premix",
  image: "/images/Adai-Premix.jpg",
  description: "Traditional Homemade Kali Premix",
  category: "Healthy Mixes",
  badge: "New",
  features: [
    "Ready to Cook",
    "Traditional Recipe",
    "High Protein",
    "No Preservatives",
    "Easy to Prepare",
  ],
  sizes: [
    { weight: "250g", price: 199 },
    { weight: "500g", price: 398 },
    { weight: "1kg", price: 796 },
  ],
},
{
  id: 23,
  category: "Return Gifts",
  name: "Aadivelli/Return Gift Combo 1",
  image: "/images/Combo4.jpg",
  description: "Festival Return Gift Combo",
  badge: "Popular",
  features: [
    "Net cloth Pouch",
    "2 Bangles",
    "Manjal Kumkum",
    "Thalikayaru",
    "15g Dry Fruits & Dates with Honey Mix",
  ],
  sizes: [
    { weight: "1 Set", price: 59 },
  ],
},
{
  id: 24,
  category: "Return Gifts",
  name: "Return Gift Combo2",
  image: "/images/Combo5.jpg",
  description: "Premium Festival Return Gift",
  badge: "Popular",
  features: [
    "Premium Cotton Pouch",
    "2 Bangles",
    "Manjal Kumkum",
    "Thalikayaru",
    "15g Dry Fruits & Dates with Honey Mix",
    "Decorative Packing",
  ],
  sizes: [
    { weight: "1 Set", price: 49 },
  ],
},
{
  id: 25,
  name: "Karisalankanni Balls",
  image: "/images/Karusallamkanii-Balls.jpg",
  description: "Traditional Herbal Wellness Balls",
  category: "Herbal Products",
  badge: "New",
  features: [
    "Made with Karisalankanni",
    "Traditional Herbal Recipe",
    "No Artificial Colours",
    "No Preservatives",
    "Best consumed with Pure Coconut Oil",
  ],
  sizes: [
    { weight: "100g", price: 149 },
    { weight: "250g", price: 349 },
    { weight: "500g", price: 649 },
  ],
},

];


export default products;