const iphones = [
    {
      model: "iPhone 13",
      price: 799,
      inStock: true,
      colors: ["black", "white", "blue"],
      releaseYear: 2021,
      rating: 4.8,
      discount: null,
    },
    {
      model: "iPhone 14",
      price: 999,
      inStock: true,
      colors: ["purple", "red", "yellow"],
      releaseYear: 2022,
      rating: 4.9,
      discount: 50,
    },
    {
      model: "iPhone 12",
      price: 699,
      inStock: false,
      colors: ["green", "black", "white"],
      releaseYear: 2020,
      rating: 4.6,
      discount: 100,
    },
    {
      model: "iPhone SE (2022)",
      price: 429,
      inStock: true,
      colors: ["black", "white", "red"],
      releaseYear: 2022,
      rating: 4.5,
      discount: null,
    },
    {
      model: "iPhone 13 Pro",
      price: 999,
      inStock: true,
      colors: ["blue", "silver", "gold"],
      releaseYear: 2021,
      rating: 4.8,
      discount: 70,
    },
    {
      model: "iPhone 14 Pro",
      price: 1199,
      inStock: false,
      colors: ["purple", "gold", "black"],
      releaseYear: 2022,
      rating: 4.9,
      discount: 100,
    },
    {
      model: "iPhone 11",
      price: 599,
      inStock: true,
      colors: ["white", "black", "yellow"],
      releaseYear: 2019,
      rating: 4.4,
      discount: 50,
    },
    {
      model: "iPhone XR",
      price: 499,
      inStock: false,
      colors: ["coral", "blue", "black"],
      releaseYear: 2018,
      rating: 4.3,
      discount: 30,
    },
    {
      model: "iPhone 15",
      price: 1099,
      inStock: true,
      colors: ["black", "white", "pink"],
      releaseYear: 2023,
      rating: 5.0,
      discount: 100,
    },
    {
      model: "iPhone 15 Pro Max",
      price: 1499,
      inStock: true,
      colors: ["blue", "titanium", "black"],
      releaseYear: 2023,
      rating: 4.9,
      discount: 200,
    }
  ];
  
  
  const totalPrice = iphones
    .filter(iphone => iphone.inStock) 
    .reduce((sum, iphone) => {
      const finalPrice = iphone.price - (iphone.discount || 0); 
      return sum + finalPrice;
    }, 0);
  
  console.log(`Загальна ціна всіх айфонів в наявності: $${totalPrice}`);
  
  const totalInStock = iphones.filter(iphone => iphone.inStock).length; 

  console.log(`Кількість телефонів у наявності: ${totalInStock}`);

  const affordablePhones = iphones.filter(iphone => iphone.inStock && iphone.price < 800); 
  const countAffordablePhones = affordablePhones.length; 
  console.log(`В нашому магазині ${countAffordablePhones} телефонів які коштують менше $800.`);