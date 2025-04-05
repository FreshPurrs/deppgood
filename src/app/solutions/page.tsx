"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Solutions() {
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

  const solutions = [
    {
      title: "Purrify Original",
      description:
        "Our flagship activated carbon additive with 1,150m²/g internal surface area. Simply mix with your existing litter to extend its life by up to 50% and eliminate odors at the molecular level.",
      features: [
        "Extends litter life by up to 50%",
        "Eliminates odors, doesn't just mask them",
        "Works with any clumping or non-clumping litter",
        "Reduces your carbon pawprint",
      ],
      image:
        "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=800&q=80",
      color: "from-purple-600 to-blue-500",
    },
    {
      title: "Purrify Ultra",
      description:
        "Our premium formula with enhanced absorption capabilities and added natural odor neutralizers. Perfect for multi-cat households or particularly odor-sensitive environments.",
      features: [
        "60% litter life extension",
        "Enhanced odor control for multi-cat homes",
        "Includes natural antimicrobial agents",
        "Eco-friendly packaging",
      ],
      image:
        "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800&q=80",
      color: "from-blue-500 to-teal-400",
    },
    {
      title: "Purrify Sensitive",
      description:
        "Specially formulated for cats with allergies or respiratory sensitivities. Our hypoallergenic blend provides the same odor control without added fragrances or potential irritants.",
      features: [
        "Hypoallergenic formula",
        "Fragrance-free odor control",
        "Dust-free application",
        "Gentle on sensitive paws",
      ],
      image:
        "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=800&q=80",
      color: "from-green-500 to-emerald-400",
    },
  ];

  const howItWorks = [
    {
      title: "Molecular Absorption",
      description:
        "Our activated carbon contains millions of microscopic pores that trap odor molecules before they can escape into the air.",
      icon: "🔬",
    },
    {
      title: "Chemical Neutralization",
      description:
        "Beyond trapping odors, Purrify's special formulation chemically neutralizes ammonia and other compounds at the source.",
      icon: "⚗️",
    },
    {
      title: "Extended Performance",
      description:
        "The high surface area of our carbon (1,150m²/g) means it continues working long after other products have been saturated.",
      icon: "⏱️",
    },
    {
      title: "Eco-Friendly Impact",
      description:
        "By extending litter life, Purrify reduces waste, packaging, and the carbon footprint associated with frequent litter changes.",
      icon: "🌱",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-blue-500/10" />
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 blur-3xl -z-10" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Scientifically formulated activated carbon products for a cleaner,
              fresher home
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="space-y-24"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="relative">
                  <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${solution.color}/20 to-transparent`}
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <h2
                    className={`text-3xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}
                  >
                    {solution.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {solution.description}
                  </p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span
                          className={`inline-block mr-2 text-lg bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}
                        >
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button
                      className={`hidden bg-gradient-to-r ${solution.color} hover:opacity-90 text-white px-6 py-2`}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
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
              How{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                It Works
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The science behind our revolutionary activated carbon technology
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {howItWorks.map((item, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full bg-background/60 backdrop-blur-md border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-6 flex flex-col h-full">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground flex-grow">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
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
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Purrify
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See how we compare to traditional litter solutions
            </p>
          </motion.div>

          <motion.div
            className="overflow-x-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <table className="w-full min-w-[768px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center bg-gradient-to-r from-purple-600/10 to-blue-500/10">
                    Purrify
                  </th>
                  <th className="p-4 text-center">Traditional Litter</th>
                  <th className="p-4 text-center">Scented Litter</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Odor Control</td>
                  <td className="p-4 text-center bg-gradient-to-r from-purple-600/10 to-blue-500/10">
                    Molecular absorption & neutralization
                  </td>
                  <td className="p-4 text-center">Minimal</td>
                  <td className="p-4 text-center">Masks with fragrance</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Litter Life</td>
                  <td className="p-4 text-center bg-gradient-to-r from-purple-600/10 to-blue-500/10">
                    Extended by 50-60%
                  </td>
                  <td className="p-4 text-center">Standard</td>
                  <td className="p-4 text-center">Standard</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Environmental Impact</td>
                  <td className="p-4 text-center bg-gradient-to-r from-purple-600/10 to-blue-500/10">
                    Reduced waste & carbon footprint
                  </td>
                  <td className="p-4 text-center">High waste volume</td>
                  <td className="p-4 text-center">High waste & chemicals</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Cat Comfort</td>
                  <td className="p-4 text-center bg-gradient-to-r from-purple-600/10 to-blue-500/10">
                    No irritating fragrances
                  </td>
                  <td className="p-4 text-center">Varies by brand</td>
                  <td className="p-4 text-center">Often irritating</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Cost Efficiency</td>
                  <td className="p-4 text-center bg-gradient-to-r from-purple-600/10 to-blue-500/10">
                    High (saves money over time)
                  </td>
                  <td className="p-4 text-center">
                    Low (frequent replacement)
                  </td>
                  <td className="p-4 text-center">
                    Low (frequent replacement)
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
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
              Visit your local pet store and ask for Purrify.
            </p>
            <Button className="hidden bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-6 text-lg">
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
                Revolutionizing cat litter since 2024. Made with love in
                Montreal.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/solutions"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground">
                  109-17680 Rue Charles, Mirabel, QC J7J 0T6
                </li>
                <li className="text-muted-foreground">hello@purrify.ca</li>
                <li className="text-muted-foreground">+1 438-931-7345</li>
              </ul>
            </div>
            {/* Newsletter section removed */}
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
