"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";

const SavingsCalculator = () => {
  const [catsCount, setCatsCount] = useState(1);
  const [litterBoxesCount, setLitterBoxesCount] = useState(1);
  const [litterChangesPerMonth, setLitterChangesPerMonth] = useState(4);
  const [savings, setSavings] = useState({
    moneySaved: 0,
    catFoodMonths: 0,
    treesSaved: 0,
  });

  // Constants for calculations
  const LITTER_COST_PER_CHANGE = 5; // Average cost in dollars
  const PURRIFY_COST_PER_MONTH = 10; // Cost of Purrify per month
  const LITTER_CHANGES_REDUCTION = 0.5; // 50% reduction in litter changes
  const CAT_FOOD_COST_PER_MONTH = 30; // Average cost of cat food per month
  const TREES_PER_YEAR_OF_LITTER = 0.2; // Trees saved per year of reduced litter

  useEffect(() => {
    calculateSavings();
  }, [catsCount, litterBoxesCount, litterChangesPerMonth]);

  const calculateSavings = () => {
    // Calculate monthly litter changes without Purrify
    const monthlyChangesWithout = litterBoxesCount * litterChangesPerMonth;

    // Calculate monthly litter changes with Purrify (50% reduction)
    const monthlyChangesWith =
      monthlyChangesWithout * (1 - LITTER_CHANGES_REDUCTION);

    // Calculate monthly savings
    const monthlySavingsLitter =
      (monthlyChangesWithout - monthlyChangesWith) * LITTER_COST_PER_CHANGE;

    // Calculate yearly savings (accounting for Purrify cost)
    const yearlySavings =
      monthlySavingsLitter * 12 - PURRIFY_COST_PER_MONTH * 12;

    // Calculate cat food months that could be purchased
    const catFoodMonths = yearlySavings / CAT_FOOD_COST_PER_MONTH;

    // Calculate trees saved
    const treesSaved =
      (monthlyChangesWithout - monthlyChangesWith) *
      12 *
      TREES_PER_YEAR_OF_LITTER;

    setSavings({
      moneySaved: Math.max(0, yearlySavings),
      catFoodMonths: Math.max(0, catFoodMonths),
      treesSaved: Math.max(0, treesSaved),
    });
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden bg-background/60 backdrop-blur-lg border border-border/50 shadow-xl">
      <div className="p-6 md:p-8">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Calculate Your Savings with Purrify
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              See how much you can save while helping the environment
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="space-y-6">
              <div className="space-y-3">
                <Label
                  htmlFor="cats-count"
                  className="text-lg flex justify-between"
                >
                  <span>Number of Cats: {catsCount}</span>
                </Label>
                <Slider
                  id="cats-count"
                  min={1}
                  max={5}
                  step={1}
                  value={[catsCount]}
                  onValueChange={(value) => setCatsCount(value[0])}
                  className="py-2"
                />
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="litter-boxes"
                  className="text-lg flex justify-between"
                >
                  <span>Number of Litter Boxes: {litterBoxesCount}</span>
                </Label>
                <Slider
                  id="litter-boxes"
                  min={1}
                  max={10}
                  step={1}
                  value={[litterBoxesCount]}
                  onValueChange={(value) => setLitterBoxesCount(value[0])}
                  className="py-2"
                />
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="changes-per-month"
                  className="text-lg flex justify-between"
                >
                  <span>Litter Changes Per Month: {litterChangesPerMonth}</span>
                </Label>
                <Slider
                  id="changes-per-month"
                  min={1}
                  max={10}
                  step={1}
                  value={[litterChangesPerMonth]}
                  onValueChange={(value) => setLitterChangesPerMonth(value[0])}
                  className="py-2"
                />
              </div>
            </div>

            <div className="space-y-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 rounded-xl">
              <motion.div
                className="text-center space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="space-y-2">
                  <h4 className="text-lg text-muted-foreground">
                    Yearly Savings
                  </h4>
                  <p className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent">
                    ${savings.moneySaved.toFixed(2)}
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <h4 className="text-lg text-muted-foreground">
                    Cat Food Months
                  </h4>
                  <p className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                    {savings.catFoodMonths.toFixed(1)}
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <h4 className="text-lg text-muted-foreground">Trees Saved</h4>
                  <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
                    {savings.treesSaved.toFixed(1)}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4">
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white py-6 text-lg">
              Start Saving with Purrify Today
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Card>
  );
};

export default SavingsCalculator;
