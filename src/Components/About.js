import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-primary">About</h1>

      <div className="row">
        <div className="col-md-6">
          <h3 className="text-info">Our Mission</h3>
          <p>
            Our mission is to provide high-quality education accessible to everyone, 
            empowering individual to achieve their goals and pursue their dreams,
            with all the potentials and skills that is required for their jobs,
            and their intellactual growth  with affordable  cost.
          </p>
        </div>

        <div className="col-md-6">
          <h3 className="text-info">Our Vision</h3>
          <p>
            Our vision is to create a world where education knows no boundaries. 
            We envision a future where anyone, regardless of their background or geographical location,
            can access education at their convenience, unlocking endless opportunities for personal 
            and professional growth. We aim to be a global leader in online education, continuously 
            pushing the boundaries of learning innovation and making education accessible to all.
          </p>
        </div>
      </div>

      <button className="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        Further Details
      </button>

      <div className="collapse mt-3" id="collapseDetails">
        <div className="card card-body bg-light">
          <h3 className="text-info">Additional Details</h3>
          <p>
          The vision of educational apps is to revolutionize the way we learn and acquire knowledge by leveraging the power of technology and mobile devices,
           Here are some key aspects of the vision for educational apps,
           accessibility,personalization,engagement,interactivity and coolabration,
           multimodal learning,lifelong learning,feedback and assessment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
