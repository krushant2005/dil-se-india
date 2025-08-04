import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturePreview } from "@/components/FeaturePreview";
import type { Language } from "@/components/LanguageSwitcher";

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentLanguage={currentLanguage} 
        onLanguageChange={setCurrentLanguage} 
      />
      <main className="pt-20">
        <Hero currentLanguage={currentLanguage} />
        <FeaturePreview currentLanguage={currentLanguage} />
      </main>
    </div>
  );
};

export default Index;
