export type MenuItem = {
  name: string;
  description: string;
  category: "Burgers" | "Chicken" | "Sides" | "Shakes";
  tag: string;
  image: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "The Big Mo",
    description: "Double smashed beef, American cheese, grilled onions, lettuce and signature Mo sauce.",
    category: "Burgers",
    tag: "House signature",
    image: "/images/signature-burger.jpg",
  },
  {
    name: "Smoky Stack",
    description: "Smashed beef, crispy smoked strips, cheddar, pickles and smoky pepper sauce.",
    category: "Burgers",
    tag: "Smoky",
    image: "/images/signature-burger.jpg",
  },
  {
    name: "Classic Mo",
    description: "Single smashed beef, cheese, lettuce, tomato, onion, pickles and house sauce.",
    category: "Burgers",
    tag: "The classic",
    image: "/images/tray.jpg",
  },
  {
    name: "Hot Chick",
    description: "Crispy chicken, spicy glaze, crunchy slaw, pickles and cool ranch sauce.",
    category: "Chicken",
    tag: "Spicy",
    image: "/images/guest.jpg",
  },
  {
    name: "Crunch Bird",
    description: "Crispy chicken fillet, cheddar, lettuce and creamy pepper sauce.",
    category: "Chicken",
    tag: "Crunchy",
    image: "/images/tray.jpg",
  },
  {
    name: "Loaded Mo Fries",
    description: "Crinkle fries, cheese sauce, chopped beef, grilled onions and Mo sauce.",
    category: "Sides",
    tag: "Share it",
    image: "/images/tray.jpg",
  },
  {
    name: "Crinkle Fries",
    description: "Golden, seasoned crinkle fries served hot and extra crispy.",
    category: "Sides",
    tag: "Essential",
    image: "/images/tray.jpg",
  },
  {
    name: "Vanilla Mo Shake",
    description: "Thick vanilla shake finished with a soft, creamy foam.",
    category: "Shakes",
    tag: "Ice cold",
    image: "/images/tray.jpg",
  },
];
