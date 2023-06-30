import React from 'react';
import './Membership.css';  
import Card from './card2';
import cardio from './Images/cardio.jpg';
import strength from './Images/strength.jpg';
import cycling from './Images/cycling.jpg';
import dance from './Images/dance.jpg';

function Membership() {
    const basicDescription=["Full access to the gym facilities","Cardio machines and strength training equipment", "Group fitness classes (limited availability)", "Locker rooms and showers", "Personalized fitness assessment","Access to group fitness classes (limited availability)","Wi-Fi access throughout the facility"];
    const premium = ["Includes all Basic Membership amenities", "Priority access to group fitness classes", "Access to specialized training equipment and areas", "Additional fitness amenities such as sauna or steam room", "Complimentary towel service", "Discounted rates on personal training sessions"]
    const vip = ["Includes all Premium Membership amenities", "Exclusive access to VIP lounge area", "Priority access to all group fitness classes", "Complimentary access to premium amenities like spa facilities", "Complimentary personalized training plan", "Access to VIP-only events and workshops", "Reserved parking spots"]
    return (
        <div className="classes-page">
          <div className="background-image"></div>
          <div className="content" style={{marginRight:'5%', marginLeft:'5%'}}>
          <h1 className="classes-title">Choose Your Membership</h1>
          <div className="container">
          <div className="section">
            <Card
              title="Basic"
              price="$30/Month"
              description={basicDescription}
              buttonText="Learn More"
            />
          </div>
          <div className="section"style={{width: "350px"}}>
            <Card
              title="Premium"
              price="$40/Month"
              description={premium}
              buttonText="Learn More"
            />
          </div>
          <div className="section">
            <Card
              title="VIP"
              price="$50/Month"
              description={vip}
              buttonText="Learn More"
            />
          </div>
        </div>
        </div>
        </div>
      );
}


export default Membership;