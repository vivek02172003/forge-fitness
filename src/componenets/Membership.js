import React, { Suspense } from 'react';
import './Membership.css';  
import Card from './card2';
import cardio from './Images/cardio.jpg';
import strength from './Images/strength.jpg';
import cycling from './Images/cycling.jpg';
import dance from './Images/dance.jpg';
import GoogleFormButton from './GoogleFormButton';
import { initReactI18next, useTranslation } from 'react-i18next';

function Membership() {
  const { t } = useTranslation();

  return (
    <div className="classes-page">
      <div className="background-image-membership"></div>
      <div className="content" style={{ marginRight: '5%', marginLeft: '5%' }}>
        <h1 className="classes-title">{t("chooseMembership")}</h1>
        <div className="container">
          <div className="section">
            <Card
              title={t("membershipBasic")}
              price={t("membershipBasicPrice")}
              description={t("membershipBasicDescription")}
              buttonText={t("signUpToday")}
            />
          </div>
          <div className="section" style={{ width: "350px" }}>
            <Card
              title={t("membershipPremium")}
              price={t("membershipPremiumPrice")}
              description={t("membershipPremiumDescription")}
              buttonText={t("signUpToday")}
            />
          </div>
          <div className="section">
            <Card
              title={t("membershipVIP")}
              price={t("membershipVIPPrice")}
              description={t("membershipVIPDescription")}
              buttonText={t("signUpToday")}
            />
          </div>
        </div>
      </div>
      <GoogleFormButton />
    </div>
  );
}

export default Membership;