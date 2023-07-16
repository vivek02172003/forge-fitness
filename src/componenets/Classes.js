import React, { Suspense, useTransition } from 'react';
import './Classes.css';
import Card from './card';
import cardio from './Images/cardio.jpg';
import strength from './Images/strength.jpg';
import cycling from './Images/cycling.jpg';
import dance from './Images/dance.jpg';
import GoogleFormButton from './GoogleFormButton';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

const translationEn = {
  classes: "CLASSES",
  cardio: "Cardio",
  strength: "Strength",
  cycling: "Cycling",
  dance: "Dance",
  signUpToday: "Sign Up Today!",
  cardioDescription: "Revitalize your fitness with our Cardio Class! Join us for a dynamic workout led by motivating instructors, suitable for all levels (beginner or expert). Elevate your endurance and burn calories today!",
  strengthDescription: "Build strength and reach your fitness goals with our empowering Strength Class! Led by expert trainers, this dynamic class focuses on resistance training. Join us and unlock your full potential!",
  cyclingDescription: "Experience the thrill of our Cycling Class! Led by passionate instructors, this high-energy class combines intense cardio with exhilarating music. Join us and pedal your way to a stronger, fitter you!",
  danceDescription: "Get your groove on with our Dance Class! Led by talented instructors, this energetic class combines fun choreography with upbeat music. Join us and let loose on the dance floor!",
  navClass:"Classes",
  navMembership:"Membership",
  navNutrition: "Nutrition",
  navTrainingHelp: "Training Help",
  navFitnessPlan:"Fitness Plan",
  chooseMembership: "Choose Your Membership",
  membershipBasic: "Basic",
  membershipPremium: "Premium",
  membershipVIP: "VIP",
  membershipBasicPrice: "$30/Month",
  membershipPremiumPrice: "$40/Month",
  membershipVIPPrice: "$50/Month",
  membershipBasicDescription: "Full access to the gym facilities. Cardio machines and strength training equipment. Group fitness classes (limited availability). Locker rooms and showers. Personalized fitness assessment. Access to group fitness classes (limited availability). Wi-Fi access throughout the facility.",
  membershipPremiumDescription: "Includes all Basic Membership amenities. Priority access to group fitness classes. Access to specialized training equipment and areas. Additional fitness amenities such as sauna or steam room. Complimentary towel service. Discounted rates on personal training sessions.",
  membershipVIPDescription: "Includes all Premium Membership amenities. Exclusive access to VIP lounge area. Priority access to all group fitness classes. Complimentary access to premium amenities like spa facilities. Complimentary personalized training plan. Access to VIP-only events and workshops. Reserved parking spots.",
  signUpToday: "Sign Up Today!",
};

const translationFr = {
  classes: "DES CLASSE",
  cardio: "Cardio",
  strength: "Force",
  cycling: "Cyclisme",
  dance: "Danse",
  signUpToday: "Inscrivez-vous dès aujourd'hui !",
  cardioDescription: "Revitalisez votre forme avec notre cours de cardio ! Rejoignez-nous pour un entraînement dynamique animé par des instructeurs motivants, adapté à tous les niveaux (débutant ou expert). Augmentez votre endurance et brûlez des calories dès aujourd'hui !",
  strengthDescription: "Développez votre force et atteignez vos objectifs de forme avec notre cours de force stimulant ! Animé par des entraîneurs experts, ce cours dynamique met l'accent sur la musculation. Rejoignez-nous et libérez tout votre potentiel !",
  cyclingDescription: "Vivez les sensations fortes de notre cours de cyclisme ! Animé par des instructeurs passionnés, ce cours haute énergie combine cardio intense et musique exaltante. Rejoignez-nous et pédalez pour vous renforcer et vous mettre en forme !",
  danceDescription: "Laissez-vous emporter par notre cours de danse ! Animé par des instructeurs talentueux, ce cours énergique associe chorégraphies amusantes et musique entraînante. Rejoignez-nous et déchaînez-vous sur la piste de danse !",
  navClass: "Des Classes",
  navMembership: "Adhésion",
  navNutrition: "Nutrition",
  navTrainingHelp: "Aide à l'entraînement",
  navFitnessPlan: "Plan de fitness",
  chooseMembership: "Choisissez votre adhésion",
  membershipBasic: "Basique",
  membershipPremium: "Premium",
  membershipVIP: "VIP",
  membershipBasicPrice: "30 $/mois",
  membershipPremiumPrice: "40 $/mois",
  membershipVIPPrice: "50 $/mois",
  membershipBasicDescription: "Accès complet aux installations de la salle de sport. Machines de cardio et équipements de musculation. Cours collectifs (places limitées). Vestiaires et douches. Évaluation personnalisée de la condition physique. Accès aux cours collectifs (places limitées). Accès Wi-Fi dans tout le bâtiment.",
  membershipPremiumDescription: "Inclut tous les avantages de l'adhésion basique. Accès prioritaire aux cours collectifs. Accès aux équipements et zones d'entraînement spécialisés. Autres équipements de remise en forme comme le sauna ou le hammam. Service de serviettes gratuit. Tarifs réduits sur les séances de coaching personnel.",
  membershipVIPDescription: "Inclut tous les avantages de l'adhésion premium. Accès exclusif à l'espace VIP. Accès prioritaire à tous les cours collectifs. Accès gratuit aux équipements premium comme les installations de spa. Plan d'entraînement personnalisé gratuit. Accès aux événements et ateliers réservés aux VIP. Places de parking réservées.",
  signUpToday: "Inscrivez-vous dès aujourd'hui !",
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    fr: { translation: translationFr },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

function Classes() {
  const { t } = useTranslation();

  const selectedLanguage = i18n.language;

  return (
    <Suspense fallback="loading...">
      <div className="classes-page">
        <div className="background-image-classes" aria-hidden="true"></div>
        <div className="content" style={{ marginBottom: '100px' }}>
          <h1 className="classes-title" tabIndex="0">
            {t("classes")}
          </h1>
          <div className="container">
            <div className="section">
              <Card
                imageSrc={cardio}
                title={t("cardio")}
                description={t("cardioDescription")}
                buttonText={t("signUpToday")}
                altText="Cardio Class image"
                aria-describedby="cardio-description"
              />
              <p id="cardio-description" className="sr-only">
                {t("cardioDescription")}
              </p>
            </div>
            <div className="section">
              <Card
                imageSrc={strength}
                title={t("strength")}
                description={t("strengthDescription")}
                buttonText={t("signUpToday")}
                altText="Strength Class image"
                aria-describedby="strength-description"
              />
              <p id="strength-description" className="sr-only">
                {t("strengthDescription")}
              </p>
            </div>
            <div className="section">
              <Card
                imageSrc={cycling}
                title={t("cycling")}
                description={t("cyclingDescription")}
                buttonText={t("signUpToday")}
                altText="Cycling Class image"
                aria-describedby="cycling-description"
              />
              <p id="cycling-description" className="sr-only">
                {t("cyclingDescription")}
              </p>
            </div>
            <div className="section">
              <Card
                imageSrc={dance}
                title={t("dance")}
                description={t("danceDescription")}
                buttonText={t("signUpToday")}
                altText="Dance Class image"
                aria-describedby="dance-description"
              />
              <p id="dance-description" className="sr-only">
                {t("danceDescription")}
              </p>
            </div>
          </div>
        </div>
        <GoogleFormButton selectedLanguage={selectedLanguage} />
      </div>
    </Suspense>
  );
}

export default Classes;
