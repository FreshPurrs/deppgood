"use client";

import React from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Download, Code, ExternalLink, Copy } from "lucide-react";
import { Separator } from "../components/ui/separator";

interface GeneratedApplicationProps {
  applicationName?: string;
  applicationDescription?: string;
  applicationCode?: string;
  previewUrl?: string;
  downloadUrl?: string;
  generationDate?: string;
  technologies?: string[];
}

const GeneratedApplication = ({
  applicationName = "My Web Application",
  applicationDescription = "A responsive web application built with modern technologies.",
  applicationCode = "// Sample code\nconst App = () => {\n  return <div>Hello World</div>;\n};",
  previewUrl = "#",
  downloadUrl = "#",
  generationDate = new Date().toLocaleDateString(),
  technologies = ["React", "Next.js", "Tailwind CSS"],
}: GeneratedApplicationProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-background">
      <Card className="w-full shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl font-bold">
                {applicationName}
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Generated on {generationDate}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="pt-6">
          <p className="text-muted-foreground mb-6">{applicationDescription}</p>

          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="w-full">
              <div className="relative w-full h-[400px] overflow-hidden rounded-md border bg-muted">
                <iframe
                  src={previewUrl}
                  className="absolute inset-0 w-full h-full"
                  title="Application Preview"
                />
                {previewUrl === "#" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted-foreground">
                      Preview not available
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="code">
              <div className="relative">
                <pre className="p-4 rounded-md bg-muted overflow-auto max-h-[400px]">
                  <code className="text-sm font-mono">{applicationCode}</code>
                </pre>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => navigator.clipboard.writeText(applicationCode)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            className="w-full sm:w-auto"
            onClick={() => window.open(downloadUrl, "_blank")}
          >
            <Download className="mr-2 h-4 w-4" /> Download Files
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => window.open(previewUrl, "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" /> Open Preview
          </Button>
          <Button
            variant="secondary"
            className="w-full sm:w-auto"
            onClick={() => navigator.clipboard.writeText(applicationCode)}
          >
            <Code className="mr-2 h-4 w-4" /> Copy Code
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GeneratedApplication;
