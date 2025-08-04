import { Button } from "@/components/ui/button";
import { Play, Camera, Globe, Heart } from "lucide-react";
import heroImage from "@/assets/hero-india-heritage.jpg";
import type { Language } from "./LanguageSwitcher";

interface HeroProps {
  currentLanguage: Language;
}

const translations = {
  en: {
    title: "Welcome to the Heart of India!",
    subtitle: "Dive into an enchanting journey through the rich tapestry of Indian heritage, tradition, and nature.",
    description: "Explore vibrant festivals, intricate handlooms, and breathtaking landscapes through immersive experiences, 360° views, and AR technology.",
    buttons: {
      explore: "Begin Journey",
      watch: "Watch Stories"
    },
    features: [
      { icon: Camera, text: "Stunning Galleries" },
      { icon: Globe, text: "360° Experiences" },
      { icon: Play, text: "Cultural Stories" },
      { icon: Heart, text: "Live Traditions" }
    ]
  },
  hi: {
    title: "भारत के दिल में आपका स्वागत है!",
    subtitle: "भारतीय विरासत, परंपरा और प्रकृति की समृद्ध कहानी में एक मंत्रमुग्ध करने वाली यात्रा पर निकलें।",
    description: "रंगबिरंगे त्योहारों, जटिल हथकरघा और मनमोहक परिदृश्यों को 360° दृश्यों और AR तकनीक के माध्यम से देखें।",
    buttons: {
      explore: "यात्रा शुरू करें",
      watch: "कहानियां देखें"
    },
    features: [
      { icon: Camera, text: "शानदार गैलरी" },
      { icon: Globe, text: "360° अनुभव" },
      { icon: Play, text: "सांस्कृतिक कहानियां" },
      { icon: Heart, text: "जीवंत परंपराएं" }
    ]
  },
  gu: {
    title: "ભારતના હૃદયમાં તમારું સ્વાગત છે!",
    subtitle: "ભારતીય વારસો, પરંપરા અને પ્રકૃતિની સમૃદ્ધ કથામાં એક મોહક મુસાફરી પર નીકળો।",
    description: "રંગબેરંગી તહેવારો, જટિલ હથકરઘા અને આકર્ષક પ્રાકૃતિક દૃશ્યોને 360° અનુભવો અને AR ટેકનોલોજી દ્વારા જુઓ।",
    buttons: {
      explore: "પ્રવાસ શરૂ કરો",
      watch: "વાર્તાઓ જુઓ"
    },
    features: [
      { icon: Camera, text: "શાનદાર ગેલેરીઓ" },
      { icon: Globe, text: "360° અનુભવો" },
      { icon: Play, text: "સાંસ્કૃતિક વાર્તાઓ" },
      { icon: Heart, text: "જીવંત પરંપરાઓ" }
    ]
  }
};

export const Hero = ({ currentLanguage }: HeroProps) => {
  const t = translations[currentLanguage];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Indian Heritage" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-primary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            {t.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            {t.subtitle}
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-cultural-gold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {t.buttons.explore}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              {t.buttons.watch}
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {t.features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center p-4 rounded-lg bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-card-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};