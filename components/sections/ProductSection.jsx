import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";

const products = {
  bestSellers: [
    { id: 1, name: "Copper Water Dispenser", image: "/images/3.png" },
    { id: 2, name: "Copper Water Bottle", image: "/images/3.png" },
    { id: 3, name: "Copper Serving Dish", image: "/images/3.png" },
    { id: 4, name: "Brass Serving Bowl", image: "/images/3.png" },
    { id: 5, name: "Brass Serving Bowl", image: "/images/3.png" },
    { id: 6, name: "Brass Serving Bowl", image: "/images/3.png" },
  ],
  newlyLaunched: [
    {
      id: 5,
      name: "Rose Gold Water Bottle",
      image: "/images/3.png",
    },
    {
      id: 6,
      name: "Silver Plated Thali Set",
      image: "/images/3.png",
    },
    {
      id: 7,
      name: "Gold Plated Cutlery Set",
      image: "/images/3.png",
    },
    {
      id: 8,
      name: "Copper Hammered Jug",
      image: "/images/3.png",
    },
    {
      id: 9,
      name: "Copper Hammered Jug",
      image: "/images/3.png",
    },{
      id: 10,
      name: "Copper Hammered Jug",
      image: "/images/3.png",
    },
  ],
  setsAndCombos: [
    {
      id: 9,
      name: "Copper Dinner Set",
      image: "/images/3.png",
    },
    {
      id: 10,
      name: "Brass Pooja Set",
      image: "/images/3.png",
    },
    {
      id: 11,
      name: "Silver Plated Tea Set",
      image: "/images/3.png",
    },
    {
      id: 12,
      name: "Gold & Copper Gift Set",
      image: "/images/3.png",
    },
    {
      id: 12,
      name: "Gold & Copper Gift Set",
      image: "/images/3.png",
    },
    {
      id: 12,
      name: "Gold & Copper Gift Set",
      image: "/images/3.png",
    },
  ],
};

const FeaturedProducts = () => {
  return (
    <section className="py-16 font-pop px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            FEATURED PRODUCTS
          </h2>
          <h1 className="mt-2 text-4xl leading-tight font-bold tracking-tight text-dark-100 sm:text-5xl">
            Our All Time Favourites
          </h1>
        </div>

        <Tabs defaultValue="bestSellers" className="w-full">
          <TabsList className="grid w-full bg-primary-100 text-dark-100/50 grid-cols-3 mb-8">
            <TabsTrigger value="bestSellers" className={`body-medium p-1`}>
              Corporate Gifts
            </TabsTrigger>
            <TabsTrigger value="newlyLaunched" className={`body-medium p-1`}>
              Wedding Favours
            </TabsTrigger>
            <TabsTrigger value="setsAndCombos" className={`body-medium p-1`}>
              Inaayat Ki Rasoi
            </TabsTrigger>
          </TabsList>
          <TabsContent value="bestSellers">
            <ProductGrid products={products.bestSellers} />
          </TabsContent>
          <TabsContent value="newlyLaunched">
            <ProductGrid products={products.newlyLaunched} />
          </TabsContent>
          <TabsContent value="setsAndCombos">
            <ProductGrid products={products.setsAndCombos} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
const ProductGrid = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {products.map((product) => (
      <Card
        key={product.id}
        className="group rounded-md overflow-hidden bg-white border-0 shadow-md transition-all duration-300"
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-lg font-light text-gray-900 tracking-wide">
            {product.name}
          </h3>
          <div className="flex justify-between items-center">
            <span className="text-xl font-medium text-gray-900">₹{"1000"}</span>
            <button className="bg-primary-100 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Plus className="text-dark-100" size={20} />
            </button>
          </div>
        </div>
      </Card>
    ))}
  </div>
);

export default FeaturedProducts;
