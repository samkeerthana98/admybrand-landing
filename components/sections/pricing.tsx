"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for small businesses and startups",
      monthlyPrice: 29,
      annualPrice: 290,
      color: "from-blue-500 to-cyan-500",
      features: [
        "AI Content Generation (50 pieces/month)",
        "Basic Analytics Dashboard",
        "3 Social Media Channels",
        "Email Campaign Builder",
        "Community Support",
        "Mobile App Access",
      ],
      popular: false,
    },
    {
      name: "Professional",
      icon: Crown,
      description: "Ideal for growing businesses and agencies",
      monthlyPrice: 79,
      annualPrice: 790,
      color: "from-purple-500 to-pink-500",
      features: [
        "AI Content Generation (Unlimited)",
        "Advanced Analytics & Insights",
        "Unlimited Channels & Campaigns",
        "A/B Testing & Optimization",
        "Priority Support",
        "API Access",
        "Team Collaboration (5 users)",
        "White-label Options",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      icon: Rocket,
      description: "For large organizations with custom needs",
      monthlyPrice: 199,
      annualPrice: 1990,
      color: "from-orange-500 to-red-500",
      features: [
        "Everything in Professional",
        "Custom AI Model Training",
        "Dedicated Account Manager",
        "Advanced Security & Compliance",
        "Unlimited Team Members",
        "Custom Integrations",
        "SLA Guarantee",
        "On-premise Deployment",
      ],
      popular: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <motion.button
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              onClick={() => setIsAnnual(!isAnnual)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isAnnual ? 32 : 4 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
            <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge variant="success" className="ml-2">
                Save 17%
              </Badge>
            )}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const originalPrice = isAnnual ? Math.round(plan.monthlyPrice * 12) : null;

            return (
              <motion.div key={index} variants={itemVariants}>
                <Card 
                  className={`relative h-full border-2 transition-all duration-300 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-blue-500 shadow-xl scale-105' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-6">
                    <div className="relative mx-auto mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} p-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} opacity-20 blur-lg`} />
                    </div>

                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mb-6">
                      {plan.description}
                    </CardDescription>

                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <span className="text-5xl font-bold text-gray-900">
                          ${price}
                        </span>
                        <span className="text-gray-600 ml-2">
                          /{isAnnual ? 'year' : 'month'}
                        </span>
                      </div>
                      {isAnnual && originalPrice && (
                        <div className="text-sm text-gray-500">
                          <span className="line-through">${originalPrice}/year</span>
                          <span className="text-green-600 ml-2 font-medium">
                            Save ${originalPrice - price}
                          </span>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                      size="lg"
                    >
                      Start Free Trial
                    </Button>

                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        >
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our enterprise team to discuss custom pricing, 
              features, and deployment options tailored to your organization.
            </p>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;