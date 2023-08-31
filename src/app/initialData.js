const initialData = {
  type: "monthly",
  plans: [
    {
      id: 0,
      name: "Arcade",
      img: "icon-arcade.svg",
      mo: 9,
      yr: 90,
    },
    {
      id: 1,
      name: "Advanced",
      img: "icon-advanced.svg",
      mo: 12,
      yr: 120,
    },
    {
      id: 2,
      name: "Pro",
      img: "icon-pro.svg",
      mo: 15,
      yr: 150,
    },
  ],
  addons: [
    {
      id: 0,
      name: "Online Services",
      description: "Access to multiplayer games",
      img: "icon-checkmark.svg",
      mo: 1,
      yr: 10,
      selected: false,
    },
    {
      id: 1,
      name: "Larger Profit",
      description: "Extra 1TB of cloud save",
      img: "icon-checkmark.svg",
      mo: 2,
      yr: 20,
      selected: false,
    },
    {
      id: 2,
      name: "Customizable Profile",
      description: "Custome theme to your profile",
      img: "icon-checkmark.svg",
      mo: 2,
      yr: 20,
      selected: false,
    },
  ],
};

export default initialData;
