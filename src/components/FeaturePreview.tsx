import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Globe, Play, Map, QrCode, Palette } from "lucide-react";
import type { Language } from "./LanguageSwitcher";

interface FeaturePreviewProps {
  currentLanguage: Language;
}

const translations = {
  en: {
    title: "Discover India's Rich Heritage",
    subtitle: "Immerse yourself in the culture, traditions, and beauty of incredible India",
    features: [
      {
        icon: Camera,
        title: "Photo Galleries",
        description: "Stunning collections of Indian festivals, traditional crafts, and breathtaking landscapes",
        action: "Explore Galleries"
      },
      {
        icon: Globe,
        title: "360° Experiences",
        description: "Virtual panoramic tours of monuments, markets, and traditional workshops",
        action: "Take Virtual Tour"
      },
      {
        icon: QrCode,
        title: "AR Experiences",
        description: "Scan QR codes to bring Indian artifacts and garments into your space",
        action: "Try AR"
      },
      {
        icon: Play,
        title: "Cultural Stories",
        description: "Engaging video narratives from artisans, weavers, and cultural icons",
        action: "Watch Stories"
      },
      {
        icon: Map,
        title: "Interactive Maps",
        description: "Discover the origins of each cultural element across India's diverse regions",
        action: "Explore Map"
      },
      {
        icon: Palette,
        title: "Living Traditions",
        description: "Experience the timeless spirit of Indian craftsmanship and artistic heritage",
        action: "Discover Art"
      }
    ]
  },
  hi: {
    title: "भारत की समृद्ध विरासत की खोज करें",
    subtitle: "अविश्वसनीय भारत की संस्कृति, परंपराओं और सुंदरता में खुद को डुबो दें",
    features: [
      {
        icon: Camera,
        title: "फोटो गैलरी",
        description: "भारतीय त्योहारों, पारंपरिक शिल्प और मनमोहक परिदृश्यों के शानदार संग्रह",
        action: "गैलरी देखें"
      },
      {
        icon: Globe,
        title: "360° अनुभव",
        description: "स्मारकों, बाजारों और पारंपरिक कार्यशालाओं के वर्चुअल पैनोरामिक टूर",
        action: "वर्चुअल टूर लें"
      },
      {
        icon: QrCode,
        title: "AR अनुभव",
        description: "QR कोड स्कैन करके भारतीय कलाकृतियों को अपने स्थान में लाएं",
        action: "AR आज़माएं"
      },
      {
        icon: Play,
        title: "सांस्कृतिक कहानियां",
        description: "कारीगरों, बुनकरों और सांस्कृतिक व्यक्तित्वों की आकर्षक वीडियो कहानियां",
        action: "कहानियां देखें"
      },
      {
        icon: Map,
        title: "इंटरैक्टिव मानचित्र",
        description: "भारत के विविध क्षेत्रों में प्रत्येक सांस्कृतिक तत्व की उत्पत्ति खोजें",
        action: "मानचित्र देखें"
      },
      {
        icon: Palette,
        title: "जीवंत परंपराएं",
        description: "भारतीय शिल्पकारी और कलात्मक विरासत की कालातीत भावना का अनुभव करें",
        action: "कला खोजें"
      }
    ]
  },
  gu: {
    title: "ભારતની સમૃદ્ધ વારસાની શોધ કરો",
    subtitle: "અવિશ્વસનીય ભારતની સંસ્કૃતિ, પરંપરાઓ અને સુંદરતામાં પોતાને ડુબાડો",
    features: [
      {
        icon: Camera,
        title: "ફોટો ગેલેરીઓ",
        description: "ભારતીય તહેવારો, પરંપરાગત કલા અને આકર્ષક દૃશ્યોના શાનદાર સંગ્રહો",
        action: "ગેલેરી જુઓ"
      },
      {
        icon: Globe,
        title: "360° અનુભવો",
        description: "સ્મારકો, બજારો અને પરંપરાગત વર્કશોપ્સના વર્ચ્યુઅલ પેનોરામિક ટૂર",
        action: "વર્ચ્યુઅલ ટૂર લો"
      },
      {
        icon: QrCode,
        title: "AR અનુભવો",
        description: "QR કોડ સ્કેન કરીને ભારતીય કલાકૃતિઓને તમારી જગ્યામાં લાવો",
        action: "AR અજમાવો"
      },
      {
        icon: Play,
        title: "સાંસ્કૃતિક વાર્તાઓ",
        description: "કારીગરો, વણકરો અને સાંસ્કૃતિક વ્યક્તિત્વોની આકર્ષક વીડિયો વાર્તાઓ",
        action: "વાર્તાઓ જુઓ"
      },
      {
        icon: Map,
        title: "ઇન્ટરેક્ટિવ નકશા",
        description: "ભારતના વિવિધ પ્રદેશોમાં દરેક સાંસ્કૃતિક તત્વની ઉત્પત્તિ શોધો",
        action: "નકશો જુઓ"
      },
      {
        icon: Palette,
        title: "જીવંત પરંપરાઓ",
        description: "ભારતીય કારીગરી અને કલાત્મક વારસાની કાલાતીત ભાવનાનો અનુભવ કરો",
        action: "કલા શોધો"
      }
    ]
  }
};

export const FeaturePreview = ({ currentLanguage }: FeaturePreviewProps) => {
  const t = translations[currentLanguage];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-cultural-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6 leading-relaxed">
                  {feature.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  {feature.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};