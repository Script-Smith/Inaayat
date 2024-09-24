"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "DR SHALU GOEL",
    image: "/images/utensils1.png",
    rating: 5,
    text: "I was looking in the market for brass dinner sets but was not able to find something that looked genuine. When I stumbled upon Inaayat, I thought of giving it a try and I am so happy with their brass dinnerware. Absolutely love the quality and the cause of the brand!",
  },
  {
    id: 2,
    name: "HARBHAJAN KAUR",
    image: "/images/utensils2.png",
    rating: 5,
    text: "I don't remember when was the last time I saw brass utensils, so when my daughter told me about Inaayat, I had an instant sense of nostalgia looking at their products. I feel so thankful to them for reviving and bringing back our traditional utensils in our kitchens, rab raakha!",
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying, nextTestimonial]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            THOUSANDS OF 5 STAR REVIEWS
          </h2>
          <h1 className="mt-2 text-4xl sm:text-5xl text-dark-100 leading-tight">
            Chefs Love Our Product!
          </h1>
        </motion.div>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8"
            >
              <div className="w-full md:w-1/2">
                <motion.img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className=""
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex justify-center md:justify-start mb-4"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-gray-700 mb-6 body-medium leading-relaxed"
                >
                  {testimonials[currentIndex].text}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-dark-100 base-modeium"
                >
                  ~ {testimonials[currentIndex].name}
                </motion.p>
              </div>
            </motion.div>
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="bg-white p-2 rounded-full shadow-lg text-gray-800 hover:text-red-800 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="bg-white p-2 rounded-full shadow-lg text-gray-800 hover:text-red-800 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;