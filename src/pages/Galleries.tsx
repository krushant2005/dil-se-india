import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Language } from "@/components/LanguageSwitcher";
import { Eye, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const translations = {
  en: {
    title: "Cultural Galleries",
    subtitle: "Discover India's rich heritage through stunning visuals",
    tabs: {
      festivals: "Festivals",
      crafts: "Crafts",
      landscapes: "Landscapes",
      architecture: "Architecture"
    },
    categories: {
      festivals: "Traditional Festivals",
      crafts: "Handmade Crafts", 
      landscapes: "Natural Beauty",
      architecture: "Historic Architecture"
    }
  },
  hi: {
    title: "सांस्कृतिक गैलरी",
    subtitle: "भारत की समृद्ध विरासत को देखें",
    tabs: {
      festivals: "त्योहार",
      crafts: "शिल्प",
      landscapes: "प्राकृतिक दृश्य",
      architecture: "वास्तुकला"
    },
    categories: {
      festivals: "पारंपरिक त्योहार",
      crafts: "हस्तशिल्प",
      landscapes: "प्राकृतिक सुंदरता", 
      architecture: "ऐतिहासिक वास्तुकला"
    }
  },
  gu: {
    title: "સાંસ્કૃતિક ગેલેરીઓ",
    subtitle: "ભારતનો સમૃદ્ધ વારસો જુઓ",
    tabs: {
      festivals: "તહેવારો",
      crafts: "હસ્તકલા",
      landscapes: "કુદરતી દૃશ્યો",
      architecture: "સ્થાપત્ય"
    },
    categories: {
      festivals: "પરંપરાગત તહેવારો",
      crafts: "હાથથી બનાવેલી કલા",
      landscapes: "કુદરતી સુંદરતા",
      architecture: "ઐતિહાસિક સ્થાપત્ય"
    }
  }
};

const galleryData = {
  festivals: [
    { id: 1, title: "Diwali Celebrations", region: "All India", views: 1234, likes: 89 },
    { id: 2, title: "Holi Festival", region: "North India", views: 2341, likes: 156 },
    { id: 3, title: "Durga Puja", region: "West Bengal", views: 1876, likes: 123 },
    { id: 4, title: "Navratri Dance", region: "Gujarat", views: 987, likes: 67 }
  ],
  crafts: [
    { id: 5, title: "Handloom Weaving", region: "Rajasthan", views: 543, likes: 34 },
    { id: 6, title: "Pottery Making", region: "Kerala", views: 876, likes: 45 },
    { id: 7, title: "Block Printing", region: "Gujarat", views: 654, likes: 28 },
    { id: 8, title: "Embroidery Art", region: "Punjab", views: 432, likes: 21 }
  ],
  landscapes: [
    { id: 9, title: "Himalayas Sunrise", region: "Himachal Pradesh", views: 2987, likes: 234 },
    { id: 10, title: "Kerala Backwaters", region: "Kerala", views: 1876, likes: 145 },
    { id: 11, title: "Rajasthan Desert", region: "Rajasthan", views: 1234, likes: 89 },
    { id: 12, title: "Goa Beaches", region: "Goa", views: 3421, likes: 278 }
  ],
  architecture: [
    { id: 13, title: "Taj Mahal", region: "Uttar Pradesh", views: 5432, likes: 456 },
    { id: 14, title: "Red Fort", region: "Delhi", views: 3214, likes: 287 },
    { id: 15, title: "Hawa Mahal", region: "Rajasthan", views: 2876, likes: 198 },
    { id: 16, title: "Golden Temple", region: "Punjab", views: 4123, likes: 321 }
  ]
};

const Galleries = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState('festivals');
  const t = translations[currentLanguage];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentLanguage={currentLanguage} 
        onLanguageChange={setCurrentLanguage} 
      />
      
      <main className="pt-20">
        <motion.div 
          className="container mx-auto px-4 py-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cultural-gold to-cultural-crimson bg-clip-text text-transparent mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto mb-8">
                <TabsTrigger value="festivals">{t.tabs.festivals}</TabsTrigger>
                <TabsTrigger value="crafts">{t.tabs.crafts}</TabsTrigger>
                <TabsTrigger value="landscapes">{t.tabs.landscapes}</TabsTrigger>
                <TabsTrigger value="architecture">{t.tabs.architecture}</TabsTrigger>
              </TabsList>

              {Object.keys(galleryData).map((category) => (
                <TabsContent key={category} value={category}>
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {galleryData[category as keyof typeof galleryData].map((item) => (
                      <motion.div key={item.id} variants={itemVariants}>
                        <Card className="group cursor-pointer overflow-hidden hover:shadow-elegant transition-all duration-300">
                          <div className="relative">
                            <div className="aspect-[4/3] bg-gradient-to-br from-cultural-gold/20 to-cultural-crimson/20 flex items-center justify-center">
                              <span className="text-6xl opacity-30">🎨</span>
                            </div>
                            <Badge className="absolute top-2 right-2 bg-background/80 text-foreground">
                              {item.region}
                            </Badge>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                  <Eye className="h-4 w-4" />
                                  {item.views}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Heart className="h-4 w-4" />
                                  {item.likes}
                                </span>
                              </div>
                              <Button variant="ghost" size="sm">
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Galleries;