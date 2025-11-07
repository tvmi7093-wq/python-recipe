import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // App-wide
          appTitle: 'Recipe Snap',
          loginButton: 'Login (Simulated)',
          // Header
          headerPricing: 'Pricing',
          headerAbout: 'About',
          headerContact: 'Contact',
          // Footer
          footerPrivacy: 'Privacy Policy',
          footerTerms: 'Terms of Service',
          // Home Page
          homeTitle: 'Snap a Pic, Get a Recipe',
          homeSubtitle: 'Upload a photo of your food, and our AI will instantly generate a delicious recipe for you.',
          uploadButton: 'Select an Image',
          generateButton: 'Generate Recipe',
          generatingRecipe: 'Generating your masterpiece...',
          yourRecipe: 'Your Recipe',
          loginPrompt: 'Please log in to generate unlimited recipes.',
          limitReached: 'You have reached your free recipe generation limit. Please log in to continue.',
          uploadPrompt: 'Please select an image first.',
          errorGenerating: 'Sorry, we couldn\'t generate a recipe. Please try another image.',
          // Pricing Page
          subscribeButton: 'Subscribe',
          pricingTitle: 'Choose Your Plan',
          tasterPlan: 'Taster',
          tasterPrice: 'Free',
          tasterFeature: '3 Recipes / month',
          tasterDescription: 'Perfect for trying out our service. Get a taste of what our AI can do.',
          hobbyChefPlan: 'Hobby Chef',
          hobbyChefPrice: '$10/mo',
          hobbyChefFeature: '50 Recipes / month',
          hobbyChefDescription: 'For the enthusiastic home cook. Ample recipes to fuel your culinary adventures.',
          proChefPlan: 'Pro Chef',
          proChefPrice: '$25/mo',
          proChefFeature: 'Unlimited Recipes',
          proChefDescription: 'For the professional or the truly passionate. No limits on your creativity.',
          // Legal Pages
          privacyPolicyTitle: 'Privacy Policy',
          termsOfServiceTitle: 'Terms of Service',
          // About Page
          aboutUsTitle: 'About Us',
          // Contact Page
          contactUsTitle: 'Contact Us',
          contactInfo: 'For any inquiries, please reach out to support@recipesnap.app.',
        }
      },
      fr: {
        translation: {
          // App-wide
          appTitle: 'Recipe Snap',
          loginButton: 'Connexion (Simulée)',
          // Header
          headerPricing: 'Tarifs',
          headerAbout: 'À propos',
          headerContact: 'Contact',
          // Footer
          footerPrivacy: 'Politique de confidentialité',
          footerTerms: 'Conditions d\'utilisation',
          // Home Page
          homeTitle: 'Prenez une photo, obtenez une recette',
          homeSubtitle: 'Téléchargez une photo de votre plat, et notre IA générera instantanément une délicieuse recette pour vous.',
          uploadButton: 'Sélectionner une image',
          generateButton: 'Générer la recette',
          generatingRecipe: 'Création de votre chef-d\'œuvre...',
          yourRecipe: 'Votre recette',
          loginPrompt: 'Veuillez vous connecter pour générer des recettes illimitées.',
          limitReached: 'Vous avez atteint votre limite de génération de recettes gratuites. Veuillez vous connecter pour continuer.',
          uploadPrompt: 'Veuillez d\'abord sélectionner une image.',
          errorGenerating: 'Désolé, nous n\'avons pas pu générer de recette. Veuillez essayer une autre image.',
          // Pricing Page
          subscribeButton: 'S\'abonner',
          pricingTitle: 'Choisissez votre formule',
          tasterPlan: 'Dégustation',
          tasterPrice: 'Gratuit',
          tasterFeature: '3 recettes / mois',
          tasterDescription: 'Parfait pour essayer notre service. Goûtez à ce que notre IA peut faire.',
          hobbyChefPlan: 'Chef amateur',
          hobbyChefPrice: '10 $/mois',
          hobbyChefFeature: '50 recettes / mois',
          hobbyChefDescription: 'Pour le cuisinier amateur enthousiaste. De nombreuses recettes pour alimenter vos aventures culinaires.',
          proChefPlan: 'Chef pro',
          proChefPrice: '25 $/mois',
          proChefFeature: 'Recettes illimitées',
          proChefDescription: 'Pour le professionnel ou le vrai passionné. Aucune limite à votre créativité.',
          // Legal Pages
          privacyPolicyTitle: 'Politique de confidentialité',
          termsOfServiceTitle: 'Conditions d\'utilisation',
          // About Page
          aboutUsTitle: 'À propos de nous',
          // Contact Page
          contactUsTitle: 'Nous contacter',
          contactInfo: 'Pour toute demande, veuillez contacter support@recipesnap.app.',
        }
      },
      es: {
        translation: {
          // App-wide
          appTitle: 'Recipe Snap',
          loginButton: 'Iniciar sesión (Simulado)',
          // Header
          headerPricing: 'Precios',
          headerAbout: 'Acerca de',
          headerContact: 'Contacto',
          // Footer
          footerPrivacy: 'Política de privacidad',
          footerTerms: 'Términos de servicio',
          // Home Page
          homeTitle: 'Toma una foto, obtén una receta',
          homeSubtitle: 'Sube una foto de tu comida y nuestra IA generará instantáneamente una deliciosa receta para ti.',
          uploadButton: 'Seleccionar una imagen',
          generateButton: 'Generar receta',
          generatingRecipe: 'Generando tu obra maestra...',
          yourRecipe: 'Tu receta',
          loginPrompt: 'Inicia sesión para generar recetas ilimitadas.',
          limitReached: 'Has alcanzado tu límite de generación de recetas gratuitas. Inicia sesión para continuar.',
          uploadPrompt: 'Por favor, selecciona primero una imagen.',
          errorGenerating: 'Lo sentimos, no pudimos generar una receta. Por favor, intenta con otra imagen.',
          // Pricing Page
          subscribeButton: 'Suscribirse',
          pricingTitle: 'Elige tu plan',
          tasterPlan: 'Degustador',
          tasterPrice: 'Gratis',
          tasterFeature: '3 recetas / mes',
          tasterDescription: 'Perfecto para probar nuestro servicio. Prueba lo que nuestra IA puede hacer.',
          hobbyChefPlan: 'Chef aficionado',
          hobbyChefPrice: '$10/mes',
          hobbyChefFeature: '50 recetas / mes',
          hobbyChefDescription: 'Para el cocinero casero entusiasta. Amplias recetas para alimentar tus aventuras culinarias.',
          proChefPlan: 'Chef profesional',
          proChefPrice: '$25/mes',
          proChefFeature: 'Recetas ilimitadas',
          proChefDescription: 'Para el profesional o el verdaderamente apasionado. Sin límites para tu creatividad.',
          // Legal Pages
          privacyPolicyTitle: 'Política de privacidad',
          termsOfServiceTitle: 'Términos de servicio',
          // About Page
          aboutUsTitle: 'Sobre nosotros',
          // Contact Page
          contactUsTitle: 'Contáctanos',
          contactInfo: 'Para cualquier consulta, por favor contacta a support@recipesnap.app.',
        }
      }
    }
  });

export default i18n;