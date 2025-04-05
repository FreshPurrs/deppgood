"use client";

import React, { useState, useEffect } from "react";
import { Progress } from "../components/ui/progress";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";
import { Loader2, CheckCircle, AlertCircle, RefreshCw } from "lucide-react";

interface GenerationProcessProps {
  isGenerating?: boolean;
  progress?: number;
  status?: "idle" | "generating" | "error" | "success";
  errorMessage?: string;
  onRetry?: () => void;
  onCancel?: () => void;
  generationDetails?: {
    name: string;
    type: string;
    estimatedTime: string;
  };
}

export default function GenerationProcess({
  isGenerating = false,
  progress = 0,
  status = "idle",
  errorMessage = "An error occurred during generation. Please try again.",
  onRetry = () => {},
  onCancel = () => {},
  generationDetails = {
    name: "My Application",
    type: "Web Application",
    estimatedTime: "2-3 minutes",
  },
}: GenerationProcessProps) {
  const [currentProgress, setCurrentProgress] = useState(progress);

  // Simulate progress updates when in generating state
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (status === "generating" && currentProgress < 100) {
      interval = setInterval(() => {
        setCurrentProgress((prev) => {
          // Slow down progress as it approaches 90%
          const increment = prev < 70 ? 5 : prev < 90 ? 2 : 0.5;
          const newProgress = Math.min(prev + increment, 99);
          return newProgress;
        });
      }, 1000);
    } else if (status === "success") {
      setCurrentProgress(100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [status, currentProgress]);

  // Reset progress when generation starts
  useEffect(() => {
    if (status === "generating" && progress === 0) {
      setCurrentProgress(0);
    }
  }, [status, progress]);

  return (
    <Card className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          {status === "idle" && "Ready to Generate"}
          {status === "generating" && "Generating Your Application"}
          {status === "error" && "Generation Failed"}
          {status === "success" && "Generation Complete"}
        </CardTitle>
        <CardDescription>
          {status === "idle" &&
            "Click generate to start building your application"}
          {status === "generating" &&
            `Estimated time: ${generationDetails.estimatedTime}`}
          {status === "error" && "We encountered an issue during generation"}
          {status === "success" && "Your application is ready to download"}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Application details */}
        {generationDetails && (
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="font-medium">Application:</div>
            <div>{generationDetails.name}</div>
            <div className="font-medium">Type:</div>
            <div>{generationDetails.type}</div>
          </div>
        )}

        {/* Progress indicator */}
        {status === "generating" && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Generation in progress</span>
              <span>{Math.round(currentProgress)}%</span>
            </div>
            <Progress value={currentProgress} className="h-2" />
            <div className="flex items-center justify-center mt-4 text-sm text-gray-500 dark:text-gray-400">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              <span>Building your application with DeepSeek...</span>
            </div>
          </div>
        )}

        {/* Success state */}
        {status === "success" && (
          <div className="flex flex-col items-center justify-center py-4">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <p className="text-center text-gray-700 dark:text-gray-300">
              Your application has been successfully generated and is ready to
              download.
            </p>
          </div>
        )}

        {/* Error state */}
        {status === "error" && (
          <Alert variant="destructive" className="mt-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
      </CardContent>

      <CardFooter className="flex justify-between">
        {status === "generating" && (
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}

        {status === "error" && (
          <Button onClick={onRetry} className="w-full">
            <RefreshCw className="mr-2 h-4 w-4" /> Retry
          </Button>
        )}

        {status === "success" && (
          <Button className="w-full">Download Application</Button>
        )}

        {status === "idle" && (
          <Button className="w-full">Generate Application</Button>
        )}
      </CardFooter>
    </Card>
  );
}
