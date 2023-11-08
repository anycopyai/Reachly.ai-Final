import { useDrag } from 'react-dnd';
import { IoIosMail, IoIosCall, IoLogoLinkedin, IoIosText, IoLogoWhatsapp } from 'react-icons/io';

export const ItemType = {
    STEP: 'step'
};

function DraggableStep({ step }) {
    const [, dragRef] = useDrag({
        type: ItemType.STEP,
        item: { step },
    });

    const icons = {
        Email: <IoIosMail className="text-xl" />,
        Call: <IoIosCall className="text-xl" />,
        Linkedin: <IoLogoLinkedin className="text-xl" />,
        Text: <IoIosText className="text-xl" />,
        WhatsApp: <IoLogoWhatsapp className="text-xl" />
    };

    return (
        <div 
            ref={dragRef} 
            className="w-1/2 p-6 m-2 bg-white border rounded shadow-lg cursor-pointer hover:bg-gray-100 flex flex-col items-center justify-center transition-transform transform hover:scale-105">
            {icons[step.name]}
            <div className="mt-2 font-semibold text-center">
                {step.name}
            </div>
        </div>
    );
}

export default DraggableStep;
