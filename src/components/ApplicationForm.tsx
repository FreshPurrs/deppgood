"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { AlertCircle, ArrowRight, Code, FileText, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "../components/ui/alert";

interface ApplicationFormProps {
  onSubmit?: (data: FormData) => void;
  isLoading?: boolean;
  error?: string | null;
}

interface FormData {
  appName: string;
  appDescription: string;
  appType: string;
  features: string[];
  additionalRequirements: string;
}

const ApplicationForm = ({
  onSubmit = () => {},
  isLoading = false,
  error = null,
}: ApplicationFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    appName: "",
    appDescription: "",
    appType: "website",
    features: [],
    additionalRequirements: "",
  });

  const [validationErrors, setValidationErrors] = useState<Partial<FormData>>(
    {},
  );

  const appTypes = [
    { value: "website", label: "Website" },
    { value: "webapp", label: "Web Application" },
    { value: "mobileapp", label: "Mobile App" },
    { value: "api", label: "API" },
    { value: "desktop", label: "Desktop Application" },
  ];

  const featureOptions = [
    { id: "auth", label: "Authentication" },
    { id: "database", label: "Database Integration" },
    { id: "payment", label: "Payment Processing" },
    { id: "responsive", label: "Responsive Design" },
    { id: "api", label: "API Integration" },
    { id: "analytics", label: "Analytics" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear validation error when user types
    if (validationErrors[name as keyof FormData]) {
      setValidationErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, appType: value }));
  };

  const handleFeatureToggle = (featureId: string) => {
    setFormData((prev) => {
      const features = prev.features.includes(featureId)
        ? prev.features.filter((id) => id !== featureId)
        : [...prev.features, featureId];
      return { ...prev, features };
    });
  };

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};

    if (!formData.appName.trim()) {
      errors.appName = "Application name is required";
    }

    if (!formData.appDescription.trim()) {
      errors.appDescription = "Description is required";
    } else if (formData.appDescription.trim().length < 10) {
      errors.appDescription = "Description should be at least 10 characters";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-background">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Create Your Application
          </CardTitle>
          <CardDescription>
            Describe your application requirements and DeepSeek will generate it
            for you.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-4">
              <div>
                <Label htmlFor="appName" className="text-base font-medium">
                  Application Name
                </Label>
                <Input
                  id="appName"
                  name="appName"
                  placeholder="My Awesome App"
                  value={formData.appName}
                  onChange={handleInputChange}
                  className={`mt-1 ${validationErrors.appName ? "border-red-500" : ""}`}
                />
                {validationErrors.appName && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.appName}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="appDescription"
                  className="text-base font-medium"
                >
                  Description
                </Label>
                <Textarea
                  id="appDescription"
                  name="appDescription"
                  placeholder="Describe what your application should do..."
                  value={formData.appDescription}
                  onChange={handleInputChange}
                  className={`mt-1 min-h-[120px] ${validationErrors.appDescription ? "border-red-500" : ""}`}
                />
                {validationErrors.appDescription && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.appDescription}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="appType" className="text-base font-medium">
                  Application Type
                </Label>
                <Select
                  value={formData.appType}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger id="appType" className="mt-1">
                    <SelectValue placeholder="Select application type" />
                  </SelectTrigger>
                  <SelectContent>
                    {appTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-2 block">
                  Features
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {featureOptions.map((feature) => (
                    <div
                      key={feature.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={feature.id}
                        checked={formData.features.includes(feature.id)}
                        onCheckedChange={() => handleFeatureToggle(feature.id)}
                      />
                      <Label htmlFor={feature.id} className="cursor-pointer">
                        {feature.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label
                  htmlFor="additionalRequirements"
                  className="text-base font-medium"
                >
                  Additional Requirements (Optional)
                </Label>
                <Textarea
                  id="additionalRequirements"
                  name="additionalRequirements"
                  placeholder="Any specific technologies, frameworks, or other requirements..."
                  value={formData.additionalRequirements}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-between flex-col sm:flex-row gap-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <FileText className="mr-2 h-4 w-4" />
            <span>
              Your application will be generated based on these requirements
            </span>
          </div>

          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full sm:w-auto"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                Generate Application
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ApplicationForm;
