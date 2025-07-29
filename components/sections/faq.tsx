"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs = [
    {
      question: "How does ADmyBRAND AI Suite differ from other marketing tools?",
      answer: "ADmyBRAND AI Suite is the only platform that combines advanced AI content generation, predictive analytics, and multi-channel automation in one unified system. While other tools focus on single aspects of marketing, we provide a comprehensive solution that learns from your brand, optimizes campaigns in real-time, and delivers measurable results across all channels."
    },
    {
      question: "Can I integrate ADmyBRAND with my existing marketing stack?",
      answer: "Absolutely! ADmyBRAND integrates seamlessly with over 200+ popular marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, Shopify, and many more. Our API-first approach ensures smooth data flow and eliminates silos between your marketing tools."
    },
    {
      question: "How quickly can I see results after implementing ADmyBRAND?",
      answer: "Most customers see initial improvements within the first week of implementation. Significant results typically appear within 30 days, with average improvements of 200-400% in key metrics like conversion rates, lead generation, and campaign ROI. The AI learns and optimizes continuously, so results improve over time."
    },
    {
      question: "What kind of support and training do you provide?",
      answer: "We provide comprehensive onboarding with dedicated success managers, live training sessions, detailed documentation, video tutorials, and 24/7 support. Professional and Enterprise plans include priority support and dedicated account management to ensure your success."
    },
    {
      question: "Is my data secure with ADmyBRAND AI Suite?",
      answer: "Data security is our top priority. We use enterprise-grade encryption, SOC 2 Type II compliance, GDPR compliance, and regular security audits. Your data is never shared with third parties, and you maintain complete control over your information with options for on-premise deployment."
    },
    {
      question: "Can ADmyBRAND handle multiple brands or client accounts?",
      answer: "Yes! ADmyBRAND is perfect for agencies and businesses managing multiple brands. Our platform supports unlimited brand profiles, client management features, white-label options, and role-based access controls. Each brand maintains its unique voice and optimization parameters."
    },
    {
      question: "What happens if I want to cancel my subscription?",
      answer: "You can cancel anytime without penalties. We offer a 30-day money-back guarantee if you're not satisfied. Upon cancellation, you'll retain access until the end of your billing period, and we'll help you export your data if needed. No long-term contracts or hidden fees."
    },
    {
      question: "How does the AI content generation maintain my brand voice?",
      answer: "Our AI learns your brand voice through initial training sessions where you provide examples of your content, tone guidelines, and brand values. The system continuously learns from your feedback and approved content, ensuring all generated materials maintain consistency with your brand identity and messaging."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about ADmyBRAND AI Suite. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openItems.includes(index) ? "auto" : 0,
                      opacity: openItems.includes(index) ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our expert team is here to help you understand how ADmyBRAND AI Suite 
              can transform your marketing strategy. Get personalized answers to your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.button>
              <motion.button
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;