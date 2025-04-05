"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SavingsCalculator from "@/components/SavingsCalculator";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const features = [
    {
      title: "1,150m²/g Surface Area",
      description:
        "Our activated carbon provides superior absorption with industry-leading surface area",
      icon: "✨",
    },
    {
      title: "Extends Litter Life",
      description:
        "Reduce litter changes by up to 50%, saving you time and money",
      icon: "⏱️",
    },
    {
      title: "Eliminates Odors",
      description:
        "Advanced molecular technology traps and neutralizes odors at the source",
      icon: "🌿",
    },
    {
      title: "Eco-Friendly",
      description:
        "Sustainable production and reduced waste for a smaller carbon pawprint",
      icon: "🌎",
    },
  ];

  const testimonials = [
    {
      quote:
        "My apartment has never smelled better. Purrify is a game-changer!",
      author: "Sarah L.",
      location: "Montreal",
    },
    {
      quote:
        "I've cut my litter expenses in half. My cats and wallet are both happier.",
      author: "Michael T.",
      location: "Toronto",
    },
    {
      quote:
        "As a vet, I recommend Purrify to all my cat-owning clients. It's simply the best.",
      author: "Dr. Jennifer K.",
      location: "Vancouver",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Cat Owners{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Love Purrify
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our scientifically formulated activated carbon delivers unmatched
              performance
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full bg-background/60 backdrop-blur-md border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-6 flex flex-col h-full">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="w-full py-20 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Calculate
              </span>{" "}
              Your Savings
            </h2>
            <p className="text-xl text-muted-foreground">
              See how much you can save with Purrify while helping the
              environment
            </p>
          </motion.div>

          <SavingsCalculator />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Customers
              </span>{" "}
              Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied cat owners across Canada
            </p>
          </motion.div>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Cat's Litter Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of happy cat owners who've discovered the Purrify
              difference. Your cat will thank you.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-6 text-lg">
              Shop Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Purrify.ca
              </h3>
              <p className="text-muted-foreground mb-4">
                Revolutionizing cat litter since 2023. Made with love in
                Montreal.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground">Montreal, QC, Canada</li>
                <li className="text-muted-foreground">info@purrify.ca</li>
                <li className="text-muted-foreground">+1 (514) 555-1234</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-muted-foreground mb-4">
                Subscribe for tips, promotions, and updates.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-md border border-border bg-background/80"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border/50 text-center text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Purrify.ca. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
