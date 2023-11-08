import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableStep from '../components/sequence/DraggableStep';
import DropCanvas from '../components/sequence/DropCanvas';

function SetupSequence() {
  const [availableSteps, setAvailableSteps] = useState([
      { id: 1, name: 'Email' },
      { id: 2, name: 'Call' },
      { id: 3, name: 'Linkedin' },
      { id: 4, name: 'Text' },
      { id: 5, name: 'WhatsApp' },
  ]);
  const [canvasSteps, setCanvasSteps] = useState([]);

  return (
      <DndProvider backend={HTML5Backend}>
          <div className="flex h-screen">
              {/* Canvas */}
              <DropCanvas steps={canvasSteps} setSteps={setCanvasSteps} />

              {/* Right Sidebar */}
              <div className="w-1/4 p-6 bg-gray-300 overflow-y-auto flex flex-wrap">
                  {availableSteps.map(step => (
                      <DraggableStep key={step.id} step={step} />
                  ))}
              </div>
          </div>
      </DndProvider>
  );
}

export default SetupSequence;