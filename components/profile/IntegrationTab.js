import React from 'react';
import { Button } from '@nextui-org/react';

const IntegrationTab = ({ integrations }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-5">Integrations</h2>
            <div>
                {integrations.map((integration, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-xl mb-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img src={integration.icon} alt={`${integration.name} logo`} className="w-12 h-12 mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold">{integration.name}</h3>
                                    <p className="text-sm text-gray-600">{integration.description}</p>
                                </div>
                            </div>
                            <Button color="primary" auto>Activate</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IntegrationTab;
