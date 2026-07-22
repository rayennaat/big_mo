export type MenuCategory =
  | "Burgers"
  | "Shawarma"
  | "Sides"
  | "Kids"
  | "Drinks"
  | "Desserts";

export type MenuPrice = {
  label?: string;
  value: string;
};

export type MenuItem = {
  name: string;
  description?: string;
  category: MenuCategory;
  tag?: string;
  prices: MenuPrice[];
};

export const menuItems: MenuItem[] = [
  // BURGERS
  {
    name: "Hamburger",
    description: "Beef burger with your choice of free sauces and toppings.",
    category: "Burgers",
    prices: [
      { label: "Simple", value: "12.0" },
      { label: "Double", value: "15.0" },
    ],
  },
  {
    name: "Cheese Burger",
    description: "Beef burger with American cheese and your choice of toppings.",
    category: "Burgers",
    prices: [
      { label: "Simple", value: "13.5" },
      { label: "Double", value: "16.5" },
    ],
  },
  {
    name: "Bacon Burger",
    description: "Beef burger topped with crispy bacon.",
    category: "Burgers",
    prices: [
      { label: "Simple", value: "15.0" },
      { label: "Double", value: "18.0" },
    ],
  },
  {
    name: "Bacon Cheese Burger",
    description: "Beef burger with American cheese and crispy bacon.",
    category: "Burgers",
    prices: [
      { label: "Simple", value: "16.0" },
      { label: "Double", value: "19.0" },
    ],
  },
  {
    name: "Crispy Chicken Burger",
    description: "Crispy chicken burger with your choice of sauces and toppings.",
    category: "Burgers",
    prices: [{ value: "13.5" }],
  },
  {
    name: "Egg & Cheese Burger",
    description: "Beef burger topped with egg and American cheese.",
    category: "Burgers",
    prices: [{ value: "14.0" }],
  },
  {
    name: "Mega Cheese Burger",
    description: "BIG MO burger loaded with three cheeses.",
    category: "Burgers",
    tag: "New",
    prices: [{ value: "15.5" }],
  },

  // SHAWARMA
  {
    name: "Chicken Shawarma",
    description: "Chicken shawarma with your choice of free sauces and toppings.",
    category: "Shawarma",
    prices: [{ value: "12.5" }],
  },
  {
    name: "Double Cheese Chicken Shawarma",
    description: "Chicken shawarma loaded with double cheese.",
    category: "Shawarma",
    prices: [{ value: "14.5" }],
  },
  {
    name: "Beef Shawarma",
    description: "Beef shawarma with your choice of free sauces and toppings.",
    category: "Shawarma",
    prices: [{ value: "19.0" }],
  },
  {
    name: "Double Cheese Beef Shawarma",
    description: "Beef shawarma loaded with double cheese.",
    category: "Shawarma",
    prices: [{ value: "21.0" }],
  },

  // SIDES
  {
    name: "Crispy Strips",
    description: "Four crispy chicken strips. Add one extra piece for 2.5 DT.",
    category: "Sides",
    prices: [
      { label: "4 pieces", value: "11.5" },
      { label: "Menu", value: "13.5" },
    ],
  },
  {
    name: "French Fries",
    description: "Golden fries served hot and crispy.",
    category: "Sides",
    prices: [
      { label: "Medium", value: "1.5" },
      { label: "Big", value: "2.5" },
    ],
  },

  // KIDS
  {
    name: "Beef Kids Burger",
    description: "Beef burger, fries and a 25 cl drink.",
    category: "Kids",
    prices: [{ value: "12.0" }],
  },
  {
    name: "Chicken Kids Burger",
    description: "Chicken burger, fries and a 25 cl drink.",
    category: "Kids",
    prices: [{ value: "12.0" }],
  },

  // DRINKS
  {
    name: "Coca-Cola",
    category: "Drinks",
    prices: [{ label: "33 cl", value: "1.5" }],
  },
  {
    name: "Fanta",
    category: "Drinks",
    prices: [{ label: "33 cl", value: "1.5" }],
  },
  {
    name: "Boga Lim",
    category: "Drinks",
    prices: [{ label: "33 cl", value: "1.5" }],
  },
  {
    name: "Canette",
    category: "Drinks",
    prices: [{ value: "2.0" }],
  },
  {
    name: "Water",
    category: "Drinks",
    prices: [{ label: "0.5 L", value: "1.5" }],
  },

  // DESSERTS
  {
    name: "Mokie Chocolat au Lait",
    category: "Desserts",
    tag: "New",
    prices: [{ value: "4.0" }],
  },
  {
    name: "Mokie Nutella",
    category: "Desserts",
    tag: "New",
    prices: [{ value: "5.0" }],
  },
  {
    name: "Ice Mokie Chocolat au Lait",
    description: "Vanilla ice cream with milk chocolate.",
    category: "Desserts",
    tag: "New",
    prices: [{ value: "6.0" }],
  },
  {
    name: "Ice Mokie Nutella",
    description: "Vanilla ice cream with a Nutella cookie.",
    category: "Desserts",
    tag: "New",
    prices: [{ value: "7.0" }],
  },
];

export const burgerFreeToppings = [
  "Mayonnaise",
  "Ketchup",
  "BBQ",
  "Mustard",
  "Onions",
  "Caramelized onions",
  "Lettuce",
  "Tomato",
  "Pickles",
];

export const burgerSupplements = [
  { name: "Jalapeño", price: "1.5" },
  { name: "American cheese", price: "2.0" },
  { name: "Egg", price: "1.5" },
  { name: "Bacon", price: "3.5" },
  { name: "Beef patty", price: "5.0" },
  { name: "Mushrooms", price: "1.5" },
  { name: "BIG MO sauce", price: "1.5" },
  { name: "Spicy MO sauce", price: "1.5" },
];

export const shawarmaFreeToppings = [
  "Mayonnaise",
  "Harissa",
  "Onions",
  "Lettuce",
  "Tomato",
  "Barbecue",
  "Ketchup",
  "Tahina sauce",
  "Garlic sauce",
];

export const shawarmaSupplements = [
  { name: "American cheese", price: "2.0" },
  { name: "Beef shawarma portion", price: "5.0" },
  { name: "Chicken shawarma portion", price: "3.0" },
];