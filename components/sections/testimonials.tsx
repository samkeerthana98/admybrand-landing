"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "ADmyBRAND AI Suite transformed our marketing completely. We've seen a 340% increase in lead generation and our campaign ROI has never been better. The AI-powered content creation saves us 20+ hours per week.",
      rating: 5,
      results: "340% increase in leads",
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "GrowthHacker Inc",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The automation features are incredible. Our team can now focus on strategy while the AI handles execution. We've scaled our campaigns 5x without increasing headcount. It's like having a marketing team of 50 people.",
      rating: 5,
      results: "5x campaign scaling",
    },
    {
      name: "Emily Watson",
      role: "VP of Marketing",
      company: "InnovateLabs",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The insights and analytics are game-changing. We can predict campaign performance before we even launch. The AI recommendations have improved our conversion rates by over 280%. Absolutely essential tool.",
      rating: 5,
      results: "280% conversion improvement",
    },
    {
      name: "David Kim",
      role: "Digital Marketing Manager",
      company: "EcoCommerce",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "From content generation to audience targeting, everything just works seamlessly. Our cost per acquisition dropped by 45% in the first month. The platform pays for itself many times over.",
      rating: 5,
      results: "45% lower CPA",
    },
    {
      name: "Lisa Thompson",
      role: "CMO",
      company: "StartupSuccess",
      avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "We went from startup to scale-up largely thanks to ADmyBRAND. The AI understands our brand voice perfectly and creates content that converts. Revenue attribution has increased by 400% since implementation.",
      rating: 5,
      results: "400% revenue attribution",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of marketers who have transformed their campaigns 
            and achieved extraordinary results with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-12">
                      <div className="text-center">
                        {/* Quote Icon */}
                        <div className="mb-6">
                          <Quote className="w-12 h-12 text-blue-500 mx-auto opacity-50" />
                        </div>

                        {/* Rating */}
                        <div className="flex justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Testimonial Content */}
                        <blockquote className="text-2xl font-medium text-gray-900 mb-8 leading-relaxed">
                          "{testimonial.content}"
                        </blockquote>

                        {/* Results Badge */}
                        <div className="mb-8">
                          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 font-semibold">
                            🚀 {testimonial.results}
                          </span>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center justify-center gap-4">
                          <div className="relative">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100"
                            />
                          </div>
                          <div className="text-left">
                            <div className="text-lg font-bold text-gray-900">
                              {testimonial.name}
                            </div>
                            <div className="text-blue-600 font-medium">
                              {testimonial.role}
                            </div>
                            <div className="text-gray-500 text-sm">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full hover:bg-blue-50 hover:border-blue-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full hover:bg-blue-50 hover:border-blue-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { number: "10,000+", label: "Happy Customers" },
            { number: "98%", label: "Customer Satisfaction" },
            { number: "300%", label: "Average ROI Increase" },
            { number: "24/7", label: "Expert Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;