import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import CanvasStep from './CanvasStep';
import { ItemType } from './DraggableStep';

function DropCanvas({ steps, setSteps }) {
    const ref = useRef(null);

    const [, dropRef] = useDrop({
        accept: ItemType.STEP,
        drop(item) {
            setSteps(prev => [...prev, item.step]);
        }
    });

    return (
        <div ref={dropRef} className="flex-1 p-6 border bg-gray-200">
            {steps.map((step, index) => (
                <CanvasStep key={index} step={step} />
            ))}
        </div>
    );
}

export default DropCanvas;
