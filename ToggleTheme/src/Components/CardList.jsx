import React from "react";
import Card from "./Card";

export default function CardList() {
  // Example product data – you can replace with your own items
  const products = [
    {
      id: 1,
      title: "Apple Watch Series 7 GPS, Aluminium Case",
      price: "$599",
      image:
        "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      title: "MacBook Air M2, 13-inch, Silver",
      price: "$999",
      image:
        "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      title: "iPhone 14 Pro, Space Black",
      price: "$1199",
      image:
        "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 transition duration-300 py-10 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  </div>
  );
}
