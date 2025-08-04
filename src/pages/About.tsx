import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { Language } from "@/components/LanguageSwitcher";
import { Heart, Users, Globe, Award, Mail, Phone, MapPin } from "lucide-react";

const translations = {
  en: {
    title: "About Dil Se India",
    subtitle: "Connecting hearts to India's timeless cultural heritage",
    mission: {
      title: "Our Mission",
      content: "To preserve, celebrate, and share India's rich cultural heritage with the world through immersive digital experiences. We believe every tradition has a story, every craft has a soul, and every festival has the power to unite hearts across boundaries."
    },
    vision: {
      title: "Our Vision", 
      content: "A world where India's cultural treasures are accessible to everyone, where ancient wisdom meets modern technology, and where the beauty of our traditions inspires future generations to carry forward our legacy."
    },
    values: [
      {
        icon: "heart",
        title: "Authenticity",
        description: "We present genuine stories and traditions with respect and accuracy"
      },
      {
        icon: "users", 
        title: "Community",
        description: "We celebrate the artisans, storytellers, and culture keepers"
      },
      {
        icon: "globe",
        title: "Accessibility",
        description: "Making Indian culture accessible to global audiences"
      },
      {
        icon: "award",
        title: "Excellence",
        description: "Delivering high-quality, immersive cultural experiences"
      }
    ],
    team: {
      title: "Our Team",
      members: [
        {
          name: "Priya Sharma",
          role: "Cultural Director",
          specialization: "Heritage Research & Documentation"
        },
        {
          name: "Arjun Patel", 
          role: "Technology Lead",
          specialization: "360° Experiences & AR Development"
        },
        {
          name: "Meera Gupta",
          role: "Content Curator",
          specialization: "Storytelling & Multi-language Content"
        },
        {
          name: "Rajesh Kumar",
          role: "Community Manager",
          specialization: "Artisan Partnerships & Outreach"
        }
      ]
    },
    impact: {
      title: "Our Impact",
      stats: [
        { number: "10,000+", label: "Cultural Stories Shared" },
        { number: "500+", label: "Artisans Featured" },
        { number: "50+", label: "Heritage Sites Documented" },
        { number: "1M+", label: "People Reached Globally" }
      ]
    },
    contact: {
      title: "Get In Touch",
      email: "hello@dilseindia.com",
      phone: "+91 9876543210", 
      address: "Cultural Heritage Center, New Delhi, India"
    }
  },
  hi: {
    title: "दिल से इंडिया के बारे में",
    subtitle: "भारत की कालजयी सांस्कृतिक विरासत से दिलों को जोड़ना",
    mission: {
      title: "हमारा मिशन",
      content: "इमर्सिव डिजिटल अनुभवों के माध्यम से भारत की समृद्ध सांस्कृतिक विरासत को संरक्षित करना, मनाना और दुनिया के साथ साझा करना। हम मानते हैं कि हर परंपरा की एक कहानी है, हर शिल्प की एक आत्मा है, और हर त्योहार में सीमाओं के पार दिलों को जोड़ने की शक्ति है।"
    },
    vision: {
      title: "हमारी दृष्टि",
      content: "एक ऐसी दुनिया जहां भारत के सांस्कृतिक खजाने सभी के लिए सुलभ हों, जहां प्राचीन ज्ञान आधुनिक तकनीक से मिले, और जहां हमारी परंपराओं की सुंदरता भविष्य की पीढ़ियों को हमारी विरासत को आगे बढ़ाने के लिए प्रेरित करे।"
    },
    values: [
      {
        icon: "heart",
        title: "प्रामाणिकता",
        description: "हम सम्मान और सटीकता के साथ सच्ची कहानियां और परंपराएं प्रस्तुत करते हैं"
      },
      {
        icon: "users",
        title: "समुदाय", 
        description: "हम कारीगरों, कहानीकारों और संस्कृति के रक्षकों का जश्न मनाते हैं"
      },
      {
        icon: "globe",
        title: "सुलभता",
        description: "भारतीय संस्कृति को वैश्विक दर्शकों के लिए सुलभ बनाना"
      },
      {
        icon: "award",
        title: "उत्कृष्टता",
        description: "उच्च गुणवत्ता वाले, इमर्सिव सांस्कृतिक अनुभव प्रदान करना"
      }
    ],
    team: {
      title: "हमारी टीम",
      members: [
        {
          name: "प्रिया शर्मा",
          role: "सांस्कृतिक निदेशक",
          specialization: "विरासत अनुसंधान और प्रलेखन"
        },
        {
          name: "अर्जुन पटेल",
          role: "प्रौद्योगिकी प्रमुख", 
          specialization: "360° अनुभव और AR विकास"
        },
        {
          name: "मीरा गुप्ता",
          role: "सामग्री क्यूरेटर",
          specialization: "कहानी कहना और बहुभाषी सामग्री"
        },
        {
          name: "राजेश कुमार",
          role: "समुदाय प्रबंधक",
          specialization: "कारीगर साझेदारी और आउटरीच"
        }
      ]
    },
    impact: {
      title: "हमारा प्रभाव",
      stats: [
        { number: "10,000+", label: "साझा की गई सांस्कृतिक कहानियां" },
        { number: "500+", label: "प्रदर्शित कारीगर" },
        { number: "50+", label: "प्रलेखित विरासत स्थल" },
        { number: "1M+", label: "विश्व स्तर पर पहुंचे लोग" }
      ]
    },
    contact: {
      title: "संपर्क में रहें",
      email: "hello@dilseindia.com",
      phone: "+91 9876543210",
      address: "सांस्कृतिक विरासत केंद्र, नई दिल्ली, भारत"
    }
  },
  gu: {
    title: "દિલ સે ઇન્ડિયા વિશે",
    subtitle: "ભારતના કાલજયી સાંસ્કૃતિક વારસાથી હૃદયોને જોડવું",
    mission: {
      title: "અમારું મિશન",
      content: "ઇમર્સિવ ડિજિટલ અનુભવો દ્વારા ભારતના સમૃદ્ધ સાંસ્કૃતિક વારસાને સાચવવું, ઉજવવું અને વિશ્વ સાથે શેર કરવું. અમે માનીએ છીએ કે દરેક પરંપરાની એક વાર્તા છે, દરેક કલાની એક આત્મા છે, અને દરેક તહેવારમાં સીમાઓ પાર હૃદયોને જોડવાની શક્તિ છે."
    },
    vision: {
      title: "અમારું વિઝન",
      content: "એક એવું વિશ્વ જ્યાં ભારતના સાંસ્કૃતિક ખજાનાઓ દરેક માટે સુલભ હોય, જ્યાં પ્રાચીન શાણપણ આધુનિક ટેકનોલોજી સાથે મળે, અને જ્યાં આપણી પરંપરાઓની સુંદરતા ભાવિ પેઢીઓને આપણો વારસો આગળ વધારવા માટે પ્રેરણા આપે."
    },
    values: [
      {
        icon: "heart",
        title: "પ્રામાણિકતા",
        description: "અમે આદર અને સચોટતા સાથે સાચી વાર્તાઓ અને પરંપરાઓ રજૂ કરીએ છીએ"
      },
      {
        icon: "users",
        title: "સમુદાય",
        description: "અમે કારીગરો, વાર્તાકારો અને સંસ્કૃતિ રક્ષકોનું ઉજવણી કરીએ છીએ"
      },
      {
        icon: "globe", 
        title: "સુલભતા",
        description: "ભારતીય સંસ્કૃતિને વૈશ્વિક પ્રેક્ષકો માટે સુલભ બનાવવી"
      },
      {
        icon: "award",
        title: "ઉત્કૃષ્ટતા", 
        description: "ઉચ્ચ ગુણવત્તાવાળા, ઇમર્સિવ સાંસ્કૃતિક અનુભવો પ્રદાન કરવા"
      }
    ],
    team: {
      title: "અમારી ટીમ",
      members: [
        {
          name: "પ્રિયા શર્મા",
          role: "સાંસ્કૃતિક નિર્દેશક",
          specialization: "વારસો સંશોધન અને દસ્તાવેજીકરણ"
        },
        {
          name: "અર્જુન પટેલ",
          role: "ટેકનોલોજી લીડ",
          specialization: "360° અનુભવો અને AR વિકાસ"
        },
        {
          name: "મીરા ગુપ્તા", 
          role: "કન્ટેન્ટ ક્યુરેટર",
          specialization: "વાર્તા કહેવું અને બહુભાષી કન્ટેન્ટ"
        },
        {
          name: "રાજેશ કુમાર",
          role: "કમ્યુનિટી મેનેજર",
          specialization: "કારીગર ભાગીદારી અને આઉટરીચ"
        }
      ]
    },
    impact: {
      title: "અમારી અસર",
      stats: [
        { number: "10,000+", label: "શેર કરેલી સાંસ્કૃતિક વાર્તાઓ" },
        { number: "500+", label: "દર્શાવેલા કારીગરો" },
        { number: "50+", label: "દસ્તાવેજીકૃત વારસા સ્થળો" },
        { number: "1M+", label: "વૈશ્વિક સ્તરે પહોંચેલા લોકો" }
      ]
    },
    contact: {
      title: "સંપર્કમાં રહો",
      email: "hello@dilseindia.com", 
      phone: "+91 9876543210",
      address: "સાંસ્કૃતિક વારસા કેન્દ્ર, નવી દિલ્હી, ભારત"
    }
  }
};

const About = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart': return <Heart className="h-8 w-8" />;
      case 'users': return <Users className="h-8 w-8" />;
      case 'globe': return <Globe className="h-8 w-8" />;
      case 'award': return <Award className="h-8 w-8" />;
      default: return <Heart className="h-8 w-8" />;
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
          {/* Hero Section */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cultural-crimson via-cultural-gold to-cultural-emerald bg-clip-text text-transparent mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div className="grid md:grid-cols-2 gap-8 mb-16" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-cultural-crimson">{t.mission.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{t.mission.content}</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-cultural-emerald">{t.vision.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{t.vision.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Values */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.values.map((value, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="text-center h-full hover:shadow-elegant transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="text-cultural-gold mb-4 flex justify-center">
                        {getIcon(value.icon)}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact Stats */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-8">{t.impact.title}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {t.impact.stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="text-center"
                >
                  <Card className="hover:shadow-elegant transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-cultural-gold mb-2">{stat.number}</div>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-8">{t.team.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.team.members.map((member, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="text-center hover:shadow-elegant transition-all duration-300">
                    <CardContent className="pt-6">
                      <Avatar className="h-20 w-20 mx-auto mb-4">
                        <AvatarFallback className="text-lg">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <Badge variant="outline" className="my-2">{member.role}</Badge>
                      <p className="text-muted-foreground text-sm">{member.specialization}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-center">{t.contact.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-cultural-gold" />
                  <span>{t.contact.email}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-cultural-gold" />
                  <span>{t.contact.phone}</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-cultural-gold" />
                  <span>{t.contact.address}</span>
                </div>
                <Button className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Send us a message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default About;