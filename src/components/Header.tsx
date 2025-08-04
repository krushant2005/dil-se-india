import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher, type Language } from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const translations = {
  en: {
    title: "Dil Se India",
    subtitle: "Heart of India",
    nav: {
      home: "Home",
      galleries: "Galleries",
      experiences: "360° Experiences", 
      stories: "Stories",
      culture: "Culture Map",
      about: "About"
    }
  },
  hi: {
    title: "दिल से इंडिया",
    subtitle: "भारत का दिल",
    nav: {
      home: "होम",
      galleries: "गैलरी",
      experiences: "360° अनुभव",
      stories: "कहानियां",
      culture: "संस्कृति मानचित्र",
      about: "परिचय"
    }
  },
  gu: {
    title: "દિલ સે ઇન્ડિયા",
    subtitle: "ભારતનું હૃદય",
    nav: {
      home: "હોમ",
      galleries: "ગેલેરીઓ",
      experiences: "360° અનુભવો",
      stories: "વાર્તાઓ",
      culture: "સંસ્કૃતિ નકશો",
      about: "વિશે"
    }
  }
};

export const Header = ({ currentLanguage, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[currentLanguage];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-cultural-gold flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">दि</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">{t.title}</h1>
              <p className="text-sm text-muted-foreground">{t.subtitle}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              {t.nav.home}
            </a>
            <a href="/galleries" className="text-foreground hover:text-primary transition-colors">
              {t.nav.galleries}
            </a>
            <a href="/experiences" className="text-foreground hover:text-primary transition-colors">
              {t.nav.experiences}
            </a>
            <a href="/stories" className="text-foreground hover:text-primary transition-colors">
              {t.nav.stories}
            </a>
            <a href="/culture-map" className="text-foreground hover:text-primary transition-colors">
              {t.nav.culture}
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              {t.nav.about}
            </a>
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher 
              currentLanguage={currentLanguage} 
              onLanguageChange={onLanguageChange} 
            />
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-foreground hover:text-primary transition-colors py-2">
                {t.nav.home}
              </a>
              <a href="#galleries" className="text-foreground hover:text-primary transition-colors py-2">
                {t.nav.galleries}
              </a>
              <a href="#experiences" className="text-foreground hover:text-primary transition-colors py-2">
                {t.nav.experiences}
              </a>
              <a href="#stories" className="text-foreground hover:text-primary transition-colors py-2">
                {t.nav.stories}
              </a>
              <a href="#culture" className="text-foreground hover:text-primary transition-colors py-2">
                {t.nav.culture}
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">
                {t.nav.about}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};