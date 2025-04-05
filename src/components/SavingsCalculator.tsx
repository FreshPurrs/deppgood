"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import TreeIcon from "./icons/TreeIcon";

const SavingsCalculator = () => {
  const [catsCount, setCatsCount] = useState(1);
  // Removed litterBoxesCount state
  const [litterChangesPerMonth, setLitterChangesPerMonth] = useState(4); // Now represents TOTAL changes per month
  const [isPremiumLitter, setIsPremiumLitter] = useState(false);
  const [savings, setSavings] = useState({
    moneySaved: 0,
    catFoodMonths: 0,
    treesSaved: 0,
  });

  // Constants for calculations
  const LITTER_CHANGES_REDUCTION = 0.5; // 50% reduction in litter changes with Purrify
  const PURRIFY_COST_PER_MONTH = 10; // Cost of Purrify per month
  const CAT_FOOD_COST_PER_MONTH = 30; // Average cost of cat food per month
  const TREES_PER_YEAR_OF_LITTER = 0.55; // Trees saved per annual litter change reduction (Adjusted to potentially reach 33 icons)
  
  // Cost ranges based on user feedback
  const REGULAR_LITTER_COST: { [key: number]: number } = {
    1: 20, // $15-$25 average $20 for one cat
    2: 40, // $30-$50 average $40 for two cats
    3: 60, // Estimated for three cats
    4: 80, // Estimated for four cats
    5: 100, // Estimated for five cats
  };
  
  const PREMIUM_LITTER_COST: { [key: number]: number } = {
    1: 35, // $30-$40 average $35 for one cat
    2: 70, // Estimated for two cats
    3: 105, // Estimated for three cats
    4: 140, // Estimated for four cats
    5: 175, // Estimated for five cats
  };

  useEffect(() => {
    calculateSavings();
  }, [catsCount, litterChangesPerMonth, isPremiumLitter]); // Removed litterBoxesCount dependency

  const calculateSavings = () => {
    // Get monthly litter cost based on number of cats and litter type
    const monthlyLitterCost = isPremiumLitter 
      ? PREMIUM_LITTER_COST[Math.min(catsCount, 5)] 
      : REGULAR_LITTER_COST[Math.min(catsCount, 5)];
    
    // Monthly cost without Purrify
    const monthlyCostWithout = monthlyLitterCost;
    
    // Monthly cost with Purrify (50% reduction in litter changes = 50% reduction in litter cost)
    // Plus the cost of Purrify itself
    const monthlyCostWith = (monthlyLitterCost * (1 - LITTER_CHANGES_REDUCTION)) + PURRIFY_COST_PER_MONTH;
    
    // Calculate monthly savings
    const monthlySavings = monthlyCostWithout - monthlyCostWith;
    
    // Calculate yearly savings
    const yearlySavings = monthlySavings * 12;
    
    // Calculate cat food months that could be purchased
    const catFoodMonths = yearlySavings / CAT_FOOD_COST_PER_MONTH;
    
    // Calculate trees saved (based on reduced number of litter changes)
    // monthlyChangesWithout = litterChangesPerMonth
    // monthlyChangesWith = litterChangesPerMonth * (1 - LITTER_CHANGES_REDUCTION)
    // Reduction = monthlyChangesWithout - monthlyChangesWith = litterChangesPerMonth * LITTER_CHANGES_REDUCTION
    const annualChangeReduction = litterChangesPerMonth * LITTER_CHANGES_REDUCTION * 12;
    const treesSaved = annualChangeReduction * TREES_PER_YEAR_OF_LITTER;

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

              {/* Removed Litter Boxes Slider */}
              
              <div className="space-y-3">
                <Label
                  htmlFor="premium-litter"
                  className="text-lg flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="premium-litter"
                    checked={isPremiumLitter}
                    onChange={(e) => setIsPremiumLitter(e.target.checked)}
                    className="h-4 w-4"
                  />
                  <span>Premium Litter (${isPremiumLitter ? 
                    PREMIUM_LITTER_COST[Math.min(catsCount, 5)] : 
                    REGULAR_LITTER_COST[Math.min(catsCount, 5)]}/month)</span>
                </Label>
                <p className="text-sm text-muted-foreground ml-6">
                  {isPremiumLitter 
                    ? "Premium or specialty litters (like biodegradable options)" 
                    : "Standard clumping or non-clumping litter"}
                </p>
              </div>
              
              <div className="space-y-3">
                 <Label
                  htmlFor="changes-per-month"
                  className="text-lg flex justify-between"
                >
                  <span>Number of times you change your litter per month: {litterChangesPerMonth}</span>
                </Label>
                <Slider
                  id="changes-per-month"
                  min={1}
                  max={10} // Adjust max as needed, maybe higher? Let's keep 10 for now.
                  step={1}
                  value={[litterChangesPerMonth]}
                  onValueChange={(value) => setLitterChangesPerMonth(value[0])}
                  className="py-2"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-lg">
                  <span>Estimated Monthly Litter Cost: ${isPremiumLitter ? 
                    PREMIUM_LITTER_COST[Math.min(catsCount, 5)] : 
                    REGULAR_LITTER_COST[Math.min(catsCount, 5)]}</span>
                </Label>
                <p className="text-sm text-muted-foreground">
                  Based on average costs for {catsCount} cat{catsCount > 1 ? 's' : ''} using {isPremiumLitter ? 'premium' : 'regular'} litter.
                </p>
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
                    Months of Bonus Cat Food Paid For
                  </h4>
                  <p className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                    {savings.catFoodMonths.toFixed(1)}
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <h4 className="text-lg text-muted-foreground">Trees Saved Per Year</h4>
                  <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
                    {savings.treesSaved.toFixed(1)}
                  </p>
                  <div // Changed outer motion.div to a regular div to contain the rows
                    className="mt-2" 
                    key={savings.treesSaved} // Force re-render when treesSaved changes
                  >
                    {(() => {
                      const totalIcons = Math.min(Math.ceil(savings.treesSaved), 33);
                      const iconsPerRow = 10;
                      const rows = [];
                      // Create arrays representing icons for each row
                      for (let i = 0; i < totalIcons; i += iconsPerRow) {
                        rows.push(Array.from({ length: Math.min(iconsPerRow, totalIcons - i) }));
                      }

                      // Map over the rows
                      return rows.map((row, rowIndex) => (
                        <motion.div // Each row is a motion.div
                          key={rowIndex}
                          className="flex flex-wrap gap-1 mt-1 justify-center" // Added mt-1 for spacing between rows
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: rowIndex * 0.1, staggerChildren: 0.05 }} // Stagger rows and icons within rows
                        >
                          {/* Map over icons within the current row */}
                          {row.map((_, iconIndex) => (
                            <motion.div // Each icon is a motion.div
                              key={iconIndex}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              }}
                            >
                              <TreeIcon size={24} className="text-green-500" />
                            </motion.div>
                          ))}
                        </motion.div>
                      ));
                    })()}
                  </div>
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
