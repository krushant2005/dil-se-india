import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Language } from "@/components/LanguageSwitcher";
import { MapPin, Search, Filter, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";

const translations = {
  en: {
    title: "Cultural Heritage Map",
    subtitle: "Discover India's cultural treasures mapped by region and tradition",
    searchPlaceholder: "Search locations, crafts, or traditions...",
    filters: {
      all: "All Regions",
      north: "North India", 
      south: "South India",
      east: "East India",
      west: "West India",
      central: "Central India",
      northeast: "Northeast India"
    },
    regions: {
      rajasthan: {
        name: "Rajasthan",
        region: "west",
        highlights: ["Block Printing", "Miniature Painting", "Folk Music", "Desert Culture"],
        description: "Land of kings with vibrant crafts and desert traditions"
      },
      kerala: {
        name: "Kerala",
        region: "south", 
        highlights: ["Backwater Culture", "Kathakali Dance", "Ayurveda", "Spice Heritage"],
        description: "God's Own Country with rich performing arts and healing traditions"
      },
      bengal: {
        name: "West Bengal",
        region: "east",
        highlights: ["Durga Puja", "Handloom Weaving", "Terracotta Art", "Literary Heritage"],
        description: "Cultural capital with festivals, arts, and intellectual traditions"
      },
      punjab: {
        name: "Punjab",
        region: "north",
        highlights: ["Bhangra Dance", "Sikh Heritage", "Agricultural Festivals", "Folk Music"],
        description: "Land of five rivers with vibrant music and dance traditions"
      },
      gujarat: {
        name: "Gujarat", 
        region: "west",
        highlights: ["Navratri Festival", "Bandhani Textiles", "Rann Culture", "Trading Heritage"],
        description: "Vibrant state known for colorful festivals and textile traditions"
      },
      karnataka: {
        name: "Karnataka",
        region: "south",
        highlights: ["Classical Music", "Silk Weaving", "Temple Architecture", "Mysore Palace"],
        description: "Heritage state with rich classical arts and architectural marvels"
      }
    }
  },
  hi: {
    title: "सांस्कृतिक विरासत मानचित्र",
    subtitle: "क्षेत्र और परंपरा के अनुसार भारत के सांस्कृतिक खजाने की खोज करें",
    searchPlaceholder: "स्थान, शिल्प या परंपराओं की खोज करें...",
    filters: {
      all: "सभी क्षेत्र",
      north: "उत्तर भारत",
      south: "दक्षिण भारत", 
      east: "पूर्व भारत",
      west: "पश्चिम भारत",
      central: "मध्य भारत",
      northeast: "पूर्वोत्तर भारत"
    },
    regions: {
      rajasthan: {
        name: "राजस्थान",
        region: "west",
        highlights: ["ब्लॉक प्रिंटिंग", "लघु चित्रकारी", "लोक संगीत", "रेगिस्तानी संस्कृति"],
        description: "जीवंत शिल्प और रेगिस्तानी परंपराओं वाली राजाओं की भूमि"
      },
      kerala: {
        name: "केरल",
        region: "south",
        highlights: ["बैकवाटर संस्कृति", "कथकली नृत्य", "आयुर्वेद", "मसाला विरासत"],
        description: "समृद्ध प्रदर्शन कलाओं और उपचार परंपराओं के साथ ईश्वर का अपना देश"
      },
      bengal: {
        name: "पश्चिम बंगाल",
        region: "east",
        highlights: ["दुर्गा पूजा", "हथकरघा बुनाई", "टेराकोटा कला", "साहित्यिक विरासत"],
        description: "त्योहारों, कलाओं और बौद्धिक परंपराओं के साथ सांस्कृतिक राजधानी"
      },
      punjab: {
        name: "पंजाब",
        region: "north",
        highlights: ["भांगड़ा नृत्य", "सिख विरासत", "कृषि त्योहार", "लोक संगीत"],
        description: "जीवंत संगीत और नृत्य परंपराओं के साथ पांच नदियों की भूमि"
      },
      gujarat: {
        name: "गुजरात",
        region: "west",
        highlights: ["नवरात्रि त्योहार", "बांधनी वस्त्र", "रण संस्कृति", "व्यापारिक विरासत"],
        description: "रंगबिरंगे त्योहारों और वस्त्र परंपराओं के लिए प्रसिद्ध जीवंत राज्य"
      },
      karnataka: {
        name: "कर्नाटक",
        region: "south",
        highlights: ["शास्त्रीय संगीत", "रेशम बुनाई", "मंदिर वास्तुकला", "मैसूर पैलेस"],
        description: "समृद्ध शास्त्रीय कलाओं और स्थापत्य चमत्कारों वाला विरासत राज्य"
      }
    }
  },
  gu: {
    title: "સાંસ્કૃતિક વારસો નકશો",
    subtitle: "પ્રદેશ અને પરંપરા અનુસાર ભારતના સાંસ્કૃતિક ખજાનાની શોધ કરો",
    searchPlaceholder: "સ્થાનો, કલાઓ અથવા પરંપરાઓ શોધો...",
    filters: {
      all: "બધા પ્રદેશો",
      north: "ઉત્તર ભારત",
      south: "દક્ષિણ ભારત",
      east: "પૂર્વ ભારત", 
      west: "પશ્ચિમ ભારત",
      central: "મધ્ય ભારત",
      northeast: "ઉત્તરપૂર્વ ભારત"
    },
    regions: {
      rajasthan: {
        name: "રાજસ્થાન",
        region: "west", 
        highlights: ["બ્લોક પ્રિન્ટિંગ", "લઘુ ચિત્રકલા", "લોક સંગીત", "રણ સંસ્કૃતિ"],
        description: "જીવંત કલાઓ અને રણ પરંપરાઓ સાથે રાજાઓની ભૂમિ"
      },
      kerala: {
        name: "કેરળ",
        region: "south",
        highlights: ["બેકવોટર સંસ્કૃતિ", "કથકળી નૃત્ય", "આયુર્વેદ", "મસાલા વારસો"],
        description: "સમૃદ્ધ પ્રદર્શન કલાઓ અને ઉપચાર પરંપરાઓ સાથે ભગવાનનો પોતાનો દેશ"
      },
      bengal: {
        name: "પશ્ચિમ બંગાળ",
        region: "east",
        highlights: ["દુર્ગા પૂજા", "હથકરઘા વણાટ", "ટેરાકોટા કલા", "સાહિત્યિક વારસો"],
        description: "તહેવારો, કલાઓ અને બૌદ્ધિક પરંપરાઓ સાથે સાંસ્કૃતિક રાજધાની"
      },
      punjab: {
        name: "પંજાબ",
        region: "north",
        highlights: ["ભાંગડા નૃત્ય", "શિખ વારસો", "કૃષિ તહેવારો", "લોક સંગીત"],
        description: "જીવંત સંગીત અને નૃત્ય પરંપરાઓ સાથે પાંચ નદીઓની ભૂમિ"
      },
      gujarat: {
        name: "ગુજરાત",
        region: "west",
        highlights: ["નવરાત્રિ તહેવાર", "બાંધણી વસ્ત્રો", "રણ સંસ્કૃતિ", "વેપારી વારસો"],
        description: "રંગબેરંગી તહેવારો અને વસ્ત્ર પરંપરાઓ માટે પ્રસિદ્ધ જીવંત રાજ્ય"
      },
      karnataka: {
        name: "કર્ણાટક",
        region: "south",
        highlights: ["શાસ્ત્રીય સંગીત", "રેશમ વણાટ", "મંદિર સ્થાપત્ય", "મૈસૂર પેલેસ"],
        description: "સમૃદ્ધ શાસ્ત્રીય કલાઓ અને સ્થાપત્ય ચમત્કારો સાથે વારસાનું રાજ્ય"
      }
    }
  }
};

const CultureMap = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const filteredRegions = Object.entries(t.regions).filter(([key, region]) => {
    const matchesRegion = selectedRegion === 'all' || region.region === selectedRegion;
    const matchesSearch = searchTerm === '' || 
      region.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      region.highlights.some(highlight => 
        highlight.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesRegion && matchesSearch;
  });

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
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cultural-emerald to-cultural-royal bg-clip-text text-transparent mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div className="flex flex-col md:flex-row gap-4 mb-8" variants={itemVariants}>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {Object.entries(t.filters).map(([key, label]) => (
                <Button
                  key={key}
                  variant={selectedRegion === key ? 'default' : 'outline'}
                  onClick={() => setSelectedRegion(key)}
                  className="whitespace-nowrap"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Interactive Map Area */}
          <motion.div 
            className="bg-gradient-to-br from-cultural-gold/5 to-cultural-emerald/5 rounded-xl p-8 mb-8"
            variants={itemVariants}
          >
            <div className="aspect-video flex items-center justify-center relative overflow-hidden rounded-lg border-2 border-dashed border-muted-foreground/30">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">Interactive Map of India</p>
                <p className="text-sm text-muted-foreground/70">Click on regions to explore cultural heritage</p>
              </div>
              
              {/* Sample Interactive Dots */}
              <div className="absolute inset-0">
                {filteredRegions.slice(0, 6).map(([key], index) => (
                  <motion.div
                    key={key}
                    className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                      selectedLocation === key 
                        ? 'bg-primary ring-4 ring-primary/30 scale-150' 
                        : 'bg-cultural-gold hover:bg-primary hover:scale-125'
                    }`}
                    style={{
                      left: `${20 + (index * 15) % 60}%`,
                      top: `${25 + (index * 20) % 50}%`
                    }}
                    onClick={() => setSelectedLocation(selectedLocation === key ? null : key)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Regions Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {filteredRegions.map(([key, region]) => (
              <motion.div key={key} variants={itemVariants}>
                <Card 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-elegant ${
                    selectedLocation === key ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedLocation(selectedLocation === key ? null : key)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{region.name}</CardTitle>
                      <Badge variant="outline">
                        {t.filters[region.region as keyof typeof t.filters]}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {region.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">Cultural Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {region.highlights.map((highlight, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        <Eye className="h-4 w-4 mr-2" />
                        Explore Region
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredRegions.length === 0 && (
            <motion.div 
              className="text-center py-12"
              variants={itemVariants}
            >
              <p className="text-lg text-muted-foreground">
                No regions found matching your search criteria.
              </p>
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default CultureMap;