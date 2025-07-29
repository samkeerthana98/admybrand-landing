"use client";

import Navigation from "@/components/layout/navigation";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Pricing from "@/components/sections/pricing";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import ContactForm from "@/components/forms/contact-form";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        
        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Ready to Transform Your
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}Marketing?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Join thousands of marketers who have revolutionized their campaigns 
                  with ADmyBRAND AI Suite. Start your free trial today and experience 
                  the future of marketing automation.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">14-day free trial</h4>
                      <p className="text-gray-600">No credit card required</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Quick setup</h4>
                      <p className="text-gray-600">Get started in under 10 minutes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dedicated support</h4>
                      <p className="text-gray-600">24/7 expert assistance</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}