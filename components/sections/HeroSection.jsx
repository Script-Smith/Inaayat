"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://cdn.pixabay.com/photo/2017/11/02/19/14/saucepans-2912191_1280.jpg",
    title: "Copper Drinkware",
    subtitle: "Handcraft for your Health",
    cta1: "SHOP COPPER",
    cta2: "SHOP ALL PRODUCTS",
  },
  {
    image:
      "https://images.unsplash.com/photo-1630396427043-c0fe3fb0d228?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Elegant Designs",
    subtitle: "Timeless beauty in every piace",
    cta1: "EXPLORE COLLECTION",
    cta2: "CUSTOM ORDERS",
  },
];

export default function HeroSection () {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );

  return (
    <div className="relative h-[50vh] xl:h-screen w-full  overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={currentSlide}>
        <motion.img
          key={currentSlide}
          src={slides[currentSlide].image}
          alt="Copper drinkware"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="absolute inset-0 flex flex-col items-start justify-center md:justify-center md:p-12 text-white">
        <motion.h2
          key={`subtitle-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-2 text-xl font-light"
        >
          {slides[currentSlide].subtitle}
        </motion.h2>
        <motion.h1
          key={`title-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-6 text-6xl font-viaoda"
        >
          {slides[currentSlide].title}
        </motion.h1>
        <div className="flex space-x-4">
          <motion.button
            key={`cta1-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="rounded-full hidden md:block bg-white px-6 py-2 text-sm font-semibold text-black transition-colors hover:bg-opacity-90"
          >
            {slides[currentSlide].cta1}
          </motion.button>
          <motion.button
            key={`cta2-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="rounded-full hidden md:block border border-white px-6 py-2 text-sm font-semibold transition-colors hover:bg-white hover:text-black"
          >
            {slides[currentSlide].cta2}
          </motion.button>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute hidden md:block left-4 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white transition-colors hover:bg-opacity-75"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute hidden md:block right-4 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white transition-colors hover:bg-opacity-75"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
