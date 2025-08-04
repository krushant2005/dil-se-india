import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { Language } from "@/components/LanguageSwitcher";
import { Clock, User, Heart, MessageCircle, Share2 } from "lucide-react";

const translations = {
  en: {
    title: "Cultural Stories",
    subtitle: "Voices from the heart of India - artisans, traditions, and timeless tales",
    readMore: "Read Full Story",
    readLess: "Show Less",
    categories: {
      artisan: "Artisan Stories",
      tradition: "Cultural Traditions", 
      modern: "Modern India",
      heritage: "Living Heritage"
    },
    stories: [
      {
        id: 1,
        title: "The Last Silk Weaver of Varanasi",
        excerpt: "Meet Ramesh Ji, whose family has been weaving silk for over 300 years...",
        category: "artisan",
        author: "Cultural Correspondent",
        readTime: "5 min read",
        likes: 234,
        comments: 18,
        content: "In the narrow lanes of Varanasi, where the Ganges flows with centuries of devotion, Ramesh Ji sits at his handloom, weaving stories into silk. His fingers move with the precision of generations, creating patterns that have adorned Indian royalty for centuries. Each thread carries the weight of tradition, each weave a chapter of cultural continuity."
      },
      {
        id: 2,
        title: "Celebrating Durga Puja: Bengal's Grand Festival",
        excerpt: "The streets of Kolkata come alive during the most awaited festival...",
        category: "tradition",
        author: "Festival Explorer",
        readTime: "7 min read", 
        likes: 456,
        comments: 32,
        content: "As autumn arrives in Bengal, the air fills with the rhythmic beats of dhak drums and the sweet fragrance of shiuli flowers. Durga Puja transforms Kolkata into an open-air art gallery, where traditional craftsmen create stunning pandals that blend mythology with contemporary themes."
      },
      {
        id: 3,
        title: "Tech Meets Tradition: Digital Artisans",
        excerpt: "How young entrepreneurs are preserving ancient crafts through technology...",
        category: "modern",
        author: "Innovation Writer",
        readTime: "6 min read",
        likes: 189,
        comments: 24,
        content: "In a digital age, young entrepreneurs are finding innovative ways to preserve and promote traditional Indian crafts. Through e-commerce platforms and virtual reality experiences, they're connecting rural artisans with global markets, ensuring ancient skills survive in the modern world."
      },
      {
        id: 4,
        title: "The Living Temples of South India",
        excerpt: "Exploring the architectural marvels that continue to thrive today...",
        category: "heritage",
        author: "Heritage Specialist",
        readTime: "8 min read",
        likes: 321,
        comments: 41,
        content: "The great temples of South India are not just architectural wonders but living centers of culture. From the towering gopurams of Madurai to the intricate carvings of Belur, these monuments continue to be vibrant spaces where tradition meets daily life."
      }
    ]
  },
  hi: {
    title: "सांस्कृतिक कहानियां",
    subtitle: "भारत के दिल से आवाजें - कारीगर, परंपराएं और कालजयी कहानियां",
    readMore: "पूरी कहानी पढ़ें",
    readLess: "कम दिखाएं",
    categories: {
      artisan: "कारीगर कहानियां",
      tradition: "सांस्कृतिक परंपराएं",
      modern: "आधुनिक भारत",
      heritage: "जीवित विरासत"
    },
    stories: [
      {
        id: 1,
        title: "वाराणसी के अंतिम रेशम बुनकर",
        excerpt: "रमेश जी से मिलें, जिनका परिवार 300 सालों से रेशम बुन रहा है...",
        category: "artisan",
        author: "सांस्कृतिक संवाददाता",
        readTime: "5 मिनट पढ़ें",
        likes: 234,
        comments: 18,
        content: "वाराणसी की संकरी गलियों में, जहां गंगा सदियों की भक्ति के साथ बहती है, रमेश जी अपने हथकरघे पर बैठकर रेशम में कहानियां बुनते हैं।"
      },
      {
        id: 2, 
        title: "दुर्गा पूजा मनाना: बंगाल का भव्य त्योहार",
        excerpt: "कोलकाता की गलियां सबसे प्रतीक्षित त्योहार के दौरान जीवंत हो जाती हैं...",
        category: "tradition",
        author: "त्योहार अन्वेषक",
        readTime: "7 मिनट पढ़ें",
        likes: 456,
        comments: 32,
        content: "जब बंगाल में शरद ऋतु आती है, तो हवा ढाक की तालबद्ध आवाज़ों और शिउली फूलों की मधुर सुगंध से भर जाती है।"
      },
      {
        id: 3,
        title: "तकनीक मिलती है परंपरा से: डिजिटल कारीगर", 
        excerpt: "कैसे युवा उद्यमी प्रौद्योगिकी के माध्यम से प्राचीन शिल्प का संरक्षण कर रहे हैं...",
        category: "modern",
        author: "नवाचार लेखक",
        readTime: "6 मिनट पढ़ें",
        likes: 189,
        comments: 24,
        content: "डिजिटल युग में, युवा उद्यमी पारंपरिक भारतीय शिल्प को संरक्षित और बढ़ावा देने के लिए नवाचार के तरीके खोज रहे हैं।"
      },
      {
        id: 4,
        title: "दक्षिण भारत के जीवित मंदिर",
        excerpt: "उन स्थापत्य चमत्कारों की खोज जो आज भी फल-फूल रहे हैं...",
        category: "heritage", 
        author: "विरासत विशेषज्ञ",
        readTime: "8 मिनट पढ़ें",
        likes: 321,
        comments: 41,
        content: "दक्षिण भारत के महान मंदिर केवल स्थापत्य के चमत्कार नहीं हैं बल्कि संस्कृति के जीवित केंद्र हैं।"
      }
    ]
  },
  gu: {
    title: "સાંસ્કૃતિક વાર્તાઓ",
    subtitle: "ભારતના હૃદયથી અવાજો - કારીગરો, પરંપરાઓ અને કાલજયી વાર્તાઓ",
    readMore: "સંપૂર્ણ વાર્તા વાંચો",
    readLess: "ઓછું બતાવો",
    categories: {
      artisan: "કારીગર વાર્તાઓ",
      tradition: "સાંસ્કૃતિક પરંપરાઓ",
      modern: "આધુનિક ભારત", 
      heritage: "જીવંત વારસો"
    },
    stories: [
      {
        id: 1,
        title: "વારાણસીના અંતિમ રેશમ વણકર",
        excerpt: "રમેશજીને મળો, જેમનો પરિવાર 300 વર્ષથી રેશમ વણે છે...",
        category: "artisan",
        author: "સાંસ્કૃતિક પત્રકાર",
        readTime: "5 મિનિટ વાંચો",
        likes: 234,
        comments: 18,
        content: "વારાણસીની સાંકડી ગલીઓમાં, જ્યાં ગંગા સદીઓની ભક્તિ સાથે વહે છે, રમેશજી પોતાના હાથકરઘા પર બેસીને રેશમમાં વાર્તાઓ વણે છે।"
      },
      {
        id: 2,
        title: "દુર્ગા પૂજા ઉજવણી: બંગાળનો ભવ્ય તહેવાર",
        excerpt: "કોલકાતાની શેરીઓ સૌથી રાહ જોવાતા તહેવાર દરમિયાન જીવંત બની જાય છે...",
        category: "tradition",
        author: "તહેવાર સંશોધક",
        readTime: "7 મિનિટ વાંચો",
        likes: 456,
        comments: 32,
        content: "જ્યારે બંગાળમાં શરદ ઋતુ આવે છે, ત્યારે હવા ઢાકના તાલબદ્ધ અવાજો અને શિઉલી ફૂલોની મધુર સુગંધથી ભરાઈ જાય છે।"
      },
      {
        id: 3,
        title: "ટેક મીટ્સ ટ્રેડિશન: ડિજિટલ કારીગરો",
        excerpt: "કેવી રીતે યુવા ઉદ્યોગસાહસિકો ટેકનોલોજી દ્વારા પ્રાચીન કલાઓનું સંરક્ષણ કરી રહ્યા છે...",
        category: "modern",
        author: "નવાચાર લેખક", 
        readTime: "6 મિનિટ વાંચો",
        likes: 189,
        comments: 24,
        content: "ડિજિટલ યુગમાં, યુવા ઉદ્યોગસાહસિકો પરંપરાગત ભારતીય કલાઓને સંરક્ષિત અને પ્રોત્સાહિત કરવા માટે નવીન રીતો શોધી રહ્યા છે।"
      },
      {
        id: 4,
        title: "દક્ષિણ ભારતના જીવંત મંદિરો",
        excerpt: "આજે પણ ફળતા-ફૂલતા સ્થાપત્ય ચમત્કારોની શોધ...",
        category: "heritage",
        author: "વારસા નિષ્ણાત",
        readTime: "8 મિનિટ વાંચો", 
        likes: 321,
        comments: 41,
        content: "દક્ષિણ ભારતના મહાન મંદિરો માત્ર સ્થાપત્યના ચમત્કારો નથી પરંતુ સંસ્કૃતિના જીવંત કેન્દ્રો છે।"
      }
    ]
  }
};

const Stories = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [expandedStory, setExpandedStory] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const t = translations[currentLanguage];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const filteredStories = selectedCategory === 'all' 
    ? t.stories 
    : t.stories.filter(story => story.category === selectedCategory);

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
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cultural-crimson to-cultural-gold bg-clip-text text-transparent mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div className="flex flex-wrap gap-2 justify-center mb-8" variants={itemVariants}>
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="mb-2"
            >
              All Stories
            </Button>
            {Object.entries(t.categories).map(([key, label]) => (
              <Button
                key={key}
                variant={selectedCategory === key ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(key)}
                className="mb-2"
              >
                {label}
              </Button>
            ))}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {filteredStories.map((story) => (
              <motion.div key={story.id} variants={itemVariants}>
                <Card className="h-full group cursor-pointer hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {t.categories[story.category as keyof typeof t.categories]}
                      </Badge>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Clock className="h-4 w-4" />
                        {story.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {story.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {expandedStory === story.id ? story.content : story.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">{story.author}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {story.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {story.comments}
                        </span>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setExpandedStory(expandedStory === story.id ? null : story.id)}
                    >
                      {expandedStory === story.id ? t.readLess : t.readMore}
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

export default Stories;