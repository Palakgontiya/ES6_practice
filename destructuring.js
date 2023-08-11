const order = {
  id: 1011,
  productName: "iPhone 14 Pro Max",
  brandDetails: {
    brandName: "Apple",
    origin: "USA",
    assembledIn: "India",
  },
  price: 145000,
  condition: "New",
};

const generateMessage = (data) => {
  const {
    id,
    productName,
    brandDetails: { brandName, origin, assembledIn },
    price,
    condition,
  } = data;
  let msg = `Hello Team, I have ordered a new ${brandName} ${productName} which cost me ${price}.
  Let me know when will i get it?`;
  return msg;
};

console.log(generateMessage(order));
