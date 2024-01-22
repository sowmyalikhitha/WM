import React from 'react';
import '../Login/Login.css';
import SignupLayout from './SignupLayout';
import MultiStepProgressBar from './MultiStepProgressBar';

function FinalSteps() {
    return (
            <>
        <SignupLayout/>
        <div className='signupheading2'>
        <MultiStepProgressBar/>
            <b className='finalstepslable'>Final Steps!</b>
            <p className='sometext'>Curated goals recommended for you.Tap on 5 goals to proceed ahead.</p>
            <div className='goals'>
                <button className='marriagebutton'>Marriage</button>
                <button className='childreneducationbutton'>Children Education</button>
                <button className='carbutton'>Car</button>
                <button className='villabutton'>Villa</button>
                <button className='apartmentbutton'>Apartment</button>
                <button className='buylandbutton'>Buy Land</button>
                <button className='marriageanniversarybutton'>Marriage Anniversary</button>
                <button className='parentsanniversaryebutton'>Parents Marriage Anniversary</button>
                <button className='superbikesbutton'>Super Bikes</button>
                <button className='enterpreneurshipbutton'>Enterprneurship</button>
                <button className='familyplanningbutton'>Family Planning</button>
                <button className='supercarsbutton'>Super Cars</button>
                <button className='superbikebutton'>Superbike</button>
                <button className='tomorrowlandbutton'>Tomorrowland</button>
                <button className='highereducationbutton'>Higher Education</button>
                <button className='familytourbutton'>Family Foreign Tour</button>
            </div>
            <b className='skip'>Skip</b>
            <button 
            className='createaccount' 
            type="button" 
            >Create Account
            </button>
            </div>
            </>
            
    );
}

export default FinalSteps;