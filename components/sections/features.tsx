"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  BarChart3, 
  Target, 
  Zap, 
  Users, 
  Shield,
  MessageSquare,
  Globe
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Content Generation",
      description: "Generate compelling ad copy, social media posts, and email campaigns with advanced AI that understands your brand voice.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description: "Track performance across all channels with real-time insights, predictive analytics, and actionable recommendations.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Precision Audience Targeting",
      description: "Identify and reach your ideal customers with AI-driven audience segmentation and behavioral analysis.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Campaign Automation",
      description: "Set up intelligent workflows that automatically optimize campaigns, adjust budgets, and scale successful ads.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "Multi-Channel Management",
      description: "Manage all your marketing channels from one unified platform - social media, email, PPC, and more.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "Brand Protection & Compliance",
      description: "Ensure brand consistency and regulatory compliance across all marketing materials with automated monitoring.",
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbot Integration",
      description: "Deploy intelligent chatbots that convert visitors into customers with personalized conversations.",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Global Campaign Scaling",
      description: "Expand internationally with AI-powered localization, currency conversion, and regional optimization.",
      color: "from-violet-500 to-purple-500",
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Modern Marketing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize your marketing campaigns 
            with the power of artificial intelligence.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="text-center pb-4">
                    <div className="relative mx-auto mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Marketing?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of marketers who have already revolutionized their campaigns with ADmyBRAND AI Suite.
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;