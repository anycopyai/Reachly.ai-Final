import React from 'react';

const EmailTemplate = ({ subject, body, closing, team }) => {
  return (
    <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-xs">
      <p className="text-gray-800 mb-4">
        <span className="font-semibold text-lg">Subject:</span> {subject}
      </p>
      <p className="text-gray-600 leading-relaxed mb-6">{body}</p>
      <p className="text-gray-600 leading-relaxed">{closing}<br />{team}</p>
    </div>
  );
};

export default EmailTemplate;
