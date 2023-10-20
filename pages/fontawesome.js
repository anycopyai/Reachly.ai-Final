// fontawesome.js
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

// Add a default export that is a React component
export default function FontAwesomePage() {
  return (
    <div>
      {/* Your content here */}
      This is the Font Awesome setup page.
    </div>
  );
}
