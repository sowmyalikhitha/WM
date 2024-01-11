import React from 'react';
import './signup.css';
const Step = ({ isActive, label }) => {
    return (
      <div className={`progress-step ${isActive ? 'active' : ''}`}>
        <span className="step-label">{label}</span>
      </div>
    );
  };
  

function MultiStepProgressBar(activeStep) {
    const steps = [
        { label: '1' },
        { label: '2' },
        { label: '3' },
        // Add more steps as needed
      ];
    
    return (
        <div className="progress">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <div className="progress-line" />}
          <Step isActive={index + 1 === activeStep} label={step.label} />
        </React.Fragment>
      ))}
    </div>
    );
}

export default MultiStepProgressBar;