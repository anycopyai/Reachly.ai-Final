import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Function to reorder the list
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// Define the component
const SortableComponent = () => {
  const [items, setItems] = useState([
    { id: 'item-1', content: 'Item 1', description: 'Description for item 1' },
    { id: 'item-2', content: 'Item 2', description: 'Description for item 2' },
    { id: 'item-3', content: 'Item 3', description: 'Description for item 3' },
    { id: 'item-4', content: 'Item 4', description: 'Description for item 4' },
    { id: 'item-5', content: 'Item 5', description: 'Description for item 5' },
    { id: 'item-6', content: 'Item 6', description: 'Description for item 6' },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(newItems);
  };

  return (
    <>
      <div className="text-center my-8">
        <h2 className="text-3xl font-bold text-gray-900">Your Headline Here</h2>
        <p className="text-gray-600 mt-2">Your description here.</p>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex justify-center"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...provided.draggableProps.style,
                          boxShadow: snapshot.isDragging ? "0 0 .4rem #666" : "none",
                        }}
                        className="bg-white border rounded-lg p-4"
                      >
                        <h3 className="text-lg font-semibold text-gray-800">{item.content}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default SortableComponent;
