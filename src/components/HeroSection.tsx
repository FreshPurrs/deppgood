"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-blue-500/10" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 blur-3xl -z-10" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="flex-1 space-y-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Revolutionize
            </span>{" "}
            Your
            <br />
            Cat Litter Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl">
            Purrify's activated carbon additive extends litter life by 50%,
            eliminates odors, and saves you money. Your cat deserves the best.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-6 text-lg">
              Shop Now
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-[400px] md:h-[500px]">
            <iframe
              src="https://www.youtube.com/embed/2pJWoeHGCTs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-2xl pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
