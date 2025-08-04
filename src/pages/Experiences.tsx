import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Language } from "@/components/LanguageSwitcher";
import { Play, VolumeX, Volume2, Maximize, RotateCcw } from "lucide-react";

const translations = {
  en: {
    title: "360° Immersive Experiences",
    subtitle: "Step into India's most iconic places through virtual reality",
    experiences: {
      tajMahal: {
        title: "Taj Mahal at Sunrise",
        description: "Experience the ethereal beauty of the Taj Mahal as dawn breaks",
        location: "Agra, Uttar Pradesh",
        duration: "8 minutes"
      },
      kerala: {
        title: "Kerala Backwater Journey",
        description: "Navigate through the serene backwaters of God's Own Country",
        location: "Alleppey, Kerala", 
        duration: "12 minutes"
      },
      rajasthan: {
        title: "Rajasthan Desert Safari",
        description: "Ride through the golden dunes of the Thar Desert",
        location: "Jaisalmer, Rajasthan",
        duration: "15 minutes"
      },
      hampi: {
        title: "Ancient Hampi Ruins",
        description: "Walk among the mystical ruins of the Vijayanagara Empire",
        location: "Hampi, Karnataka",
        duration: "10 minutes"
      }
    },
    controls: {
      play: "Play Experience",
      pause: "Pause",
      mute: "Mute",
      unmute: "Unmute", 
      fullscreen: "Fullscreen",
      reset: "Reset View"
    }
  },
  hi: {
    title: "360° इमर्सिव अनुभव",
    subtitle: "वर्चुअल रियलिटी के माध्यम से भारत के प्रतिष्ठित स्थानों में कदम रखें",
    experiences: {
      tajMahal: {
        title: "सूर्योदय के समय ताजमहल",
        description: "सुबह की पहली किरणों के साथ ताजमहल की अलौकिक सुंदरता का अनुभव करें",
        location: "आगरा, उत्तर प्रदेश",
        duration: "8 मिनट"
      },
      kerala: {
        title: "केरल बैकवाटर यात्रा",
        description: "ईश्वर के अपने देश के शांत बैकवाटर में यात्रा करें",
        location: "अल्लेप्पी, केरल",
        duration: "12 मिनट"
      },
      rajasthan: {
        title: "राजस्थान रेगिस्तान सफारी",
        description: "थार रेगिस्तान के सुनहरे टीलों पर सवारी करें",
        location: "जैसलमेर, राजस्थान",
        duration: "15 मिनट"
      },
      hampi: {
        title: "प्राचीन हम्पी खंडहर",
        description: "विजयनगर साम्राज्य के रहस्यमय खंडहरों के बीच चलें",
        location: "हम्पी, कर्नाटक",
        duration: "10 मिनट"
      }
    },
    controls: {
      play: "अनुभव चलाएं",
      pause: "रोकें",
      mute: "मूक करें",
      unmute: "ध्वनि चालू करें",
      fullscreen: "पूर्ण स्क्रीन",
      reset: "दृश्य रीसेट करें"
    }
  },
  gu: {
    title: "360° ઇમર્સિવ અનુભવો",
    subtitle: "વર્ચ્યુઅલ રિયાલિટી દ્વારા ભારતના પ્રતિષ્ઠિત સ્થળોમાં પ્રવેશો",
    experiences: {
      tajMahal: {
        title: "સૂર્યોદય વખતે તાજમહેલ",
        description: "સવારના સમયે તાજમહેલની અદ્ભુત સુંદરતાનો અનુભવ કરો",
        location: "આગ્રા, ઉત્તર પ્રદેશ",
        duration: "8 મિનિટ"
      },
      kerala: {
        title: "કેરળ બેકવોટર પ્રવાસ",
        description: "ભગવાનના પોતાના દેશના શાંત બેકવોટરમાં પ્રવાસ કરો",
        location: "એલેપ્પી, કેરળ", 
        duration: "12 મિનિટ"
      },
      rajasthan: {
        title: "રાજસ્થાન રણ સફારી",
        description: "થાર રણના સોનેરી ટેકરાઓ પર સવારી કરો",
        location: "જૈસલમેર, રાજસ્થાન",
        duration: "15 મિનિટ"
      },
      hampi: {
        title: "પ્રાચીન હમ્પી ખંડેરો",
        description: "વિજયનગર સામ્રાજ્યના રહસ્યમય ખંડેરો વચ્ચે ચાલો",
        location: "હમ્પી, કર્ણાટક",
        duration: "10 મિનિટ"
      }
    },
    controls: {
      play: "અનુભવ ચલાવો",
      pause: "રોકો",
      mute: "મૌન કરો",
      unmute: "અવાજ ચાલુ કરો",
      fullscreen: "સંપૂર્ણ સ્ક્રીન",
      reset: "દૃશ્ય રીસેટ કરો"
    }
  }
};

const Experiences = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [playingExperience, setPlayingExperience] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const t = translations[currentLanguage];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const experiences = Object.entries(t.experiences);

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
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cultural-royal to-cultural-emerald bg-clip-text text-transparent mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {experiences.map(([key, experience], index) => (
              <motion.div key={key} variants={itemVariants}>
                <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-500">
                  <div className="relative aspect-video bg-gradient-to-br from-cultural-gold/10 to-cultural-royal/10">
                    {/* 360° Experience Viewer Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl opacity-20">🌐</div>
                    </div>
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="lg"
                        className="rounded-full h-16 w-16"
                        onClick={() => setPlayingExperience(playingExperience === key ? null : key)}
                      >
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>

                    {/* Duration Badge */}
                    <Badge className="absolute top-4 right-4 bg-background/90 text-foreground">
                      {experience.duration}
                    </Badge>

                    {/* Controls */}
                    {playingExperience === key && (
                      <motion.div 
                        className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-background/90 rounded-lg p-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Play className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setIsMuted(!isMuted)}
                          >
                            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <RotateCcw className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Maximize className="h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{experience.title}</CardTitle>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{experience.location}</span>
                      <Badge variant="outline">360°</Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {experience.description}
                    </p>
                    <Button 
                      className="w-full"
                      onClick={() => setPlayingExperience(playingExperience === key ? null : key)}
                    >
                      {playingExperience === key ? t.controls.pause : t.controls.play}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Experiences;