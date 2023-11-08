import { useDrag } from 'react-dnd';

function CanvasStep({ step, isLast }) {
    const [, dragRef] = useDrag({
        type: ItemType.STEP,
        item: { step },
    });

    return (
        <div className="relative">
            {isLast && <div className="absolute top-1/2 left-0 w-4 h-0.5 bg-black"></div>}
            <div 
                ref={dragRef} 
                className="m-2 bg-white border rounded-lg shadow cursor-pointer w-40 h-40 flex flex-col items-center justify-center">
                {icons[step.name]}
                <div className="mt-2 font-semibold text-center">
                    {step.name}
                </div>
            </div>
            {!isLast && <div className="absolute top-1/2 right-0 w-4 h-0.5 bg-black"></div>}
        </div>
    );
}
