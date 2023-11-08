import React from 'react';

function PricingPlans() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center md:gap-8">

                {/* Free Plan */}
                <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
                    <div className="text-center">
                        <h2 className="text-lg font-medium text-gray-900">
                            Free<span className="sr-only">Plan</span>
                        </h2>
                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">$0</strong>
                            <span className="text-sm font-medium text-gray-700">/month</span>
                        </p>
                    </div>
                    <ul className="mt-6 space-y-2">
                        {['1 user', '500MB of storage', 'Community support'].map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> {feature} </span>
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                        Get Started
                    </a>
                </div>

                {/* Starter Plan */}
                <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
                    <div className="text-center">
                        <h2 className="text-lg font-medium text-gray-900">
                            Starter<span className="sr-only">Plan</span>
                        </h2>
                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">$10</strong>
                            <span className="text-sm font-medium text-gray-700">/month</span>
                        </p>
                    </div>
                    <ul className="mt-6 space-y-2">
                        {['3 users', '1GB of storage', 'Email support', 'Forum access'].map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> {feature} </span>
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                        Get Started
                    </a>
                </div>

                {/* Pro Plan */}
                <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
                    <div className="text-center">
                        <h2 className="text-lg font-medium text-gray-900">
                            Pro<span className="sr-only">Plan</span>
                        </h2>
                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">$30</strong>
                            <span className="text-sm font-medium text-gray-700">/month</span>
                        </p>
                    </div>
                    <ul className="mt-6 space-y-2">
                        {['Unlimited users', '10GB of storage', 'Premium email support', 'Dedicated help center', 'Priority forum access'].map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-indigo-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> {feature} </span>
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500">
                        Get Started
                    </a>
                </div>

            </div>
        </div>
    );
}

export default PricingPlans;
