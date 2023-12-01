import React, { useState, useCallback } from 'react';
import { Button as NextUIButton } from '@nextui-org/react';


const IndividualPersonalizationForm = ({ setActiveForm }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted"); // Debugging log
        setActiveForm('nextForm'); // Proceed to the next form or handle submission
    };

    return (
<div className="formContainer bg-white p-6 rounded-lg shadow-lg overflow-auto ...">
            <h3 className="text-lg font-semibold text-dark-blue-800 mb-4">Review your company information</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-grey-700 text-sm font-bold mb-2" htmlFor="companyName">
                        Company / product name*
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline" id="companyName" type="text" placeholder="Enter your business or product name." />
                </div>
                <div className="mb-4">
                    <label className="block text-grey-700 text-sm font-bold mb-2" htmlFor="painPoints">
                        Pain points
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline" id="painPoints" rows="3" placeholder="Add at least 3 pain points your product/service is solving."></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-grey-700 text-sm font-bold mb-2" htmlFor="valueProposition">
                        Value proposition
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline" id="valueProposition" rows="3" placeholder="Add at least 3 benefits for using your product/service."></textarea>
                </div>
                <div className="mb-6">
                    <label className="block text-grey-700 text-sm font-bold mb-2" htmlFor="callToAction">
                        Call to action*
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline" id="callToAction" type="text" placeholder="Add an action you want the recipient to take." />
                </div>
                <div className="flex items-center justify-between">
                <NextUIButton color="primary" auto onClick={handleSubmit}>
                    Generate content
                </NextUIButton>
                </div>
            </form>
        </div>
    );
};

export default IndividualPersonalizationForm;
