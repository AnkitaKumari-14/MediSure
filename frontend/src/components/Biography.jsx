import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h3>Biography</h3>
          <h6>Who We Are</h6>
          <p>
MediSure Health Center is a modern, patient-centered healthcare facility committed to delivering compassionate and quality medical services. We are a team of skilled doctors, nurses, and health professionals dedicated to improving lives through personalized care and advanced treatment. Our focus is on building trust and lasting relationships with our patients, offering services that prioritize comfort, safety, and well-being. With a strong foundation in integrity and innovation, we strive to be a dependable healthcare partner for individuals and families. At MediSure, we believe that better health begins with better care — care that listens, understands, and supports every step.          </p>
          <p>We are all in 2025!</p>
          <h6>What We Are Doing.</h6>
          <p>
           At MediSure Health Center, we are delivering comprehensive healthcare services to meet the diverse needs of our community. From general medicine and diagnostics to specialist care in pediatrics, gynecology, cardiology, and more, we ensure timely, accurate, and affordable treatment. We’re also actively promoting preventive health through awareness drives, wellness programs, and vaccination camps. Our adoption of modern technology, including telemedicine and digital health records, makes care more accessible and efficient. With a focus on both treatment and prevention, we are working every day to improve health outcomes, support patient education, and create a healthier, more informed society.


          </p>
          <p>"At MediSure, we are more than caregivers — we are your trusted partners in health, healing, and hope, committed to guiding every step of your wellness journey.</p>
          <p>Caring for you, every step of the way!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
