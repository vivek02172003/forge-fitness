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
  navFitnessPlan:"Fitness Plan"
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

  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const selectedLanguage = i18n.language;

  return (
    <Suspense fallback="loading...">
      <div className="classes-page">
        <div className="background-image-classes" aria-hidden="true"></div>
        <div className="content" style={{ marginBottom: '100px' }}>
          <h1 className="classes-title" tabIndex="0">
            {t("classes")}
          </h1>
          <select name="language" onChange={onChange}>
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
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
