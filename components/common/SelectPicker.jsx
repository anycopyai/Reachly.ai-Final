import React, { useState } from 'react';
import { Input, Button, Avatar } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const SelectPicker = () => {
  const [topics, setTopics] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTopics = () => {
    if (inputValue.trim()) {
      setTopics([...topics, inputValue]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const newTopics = [...topics];
    newTopics.splice(index, 1);
    setTopics(newTopics);
  };

  return (
    <div>
      Topics
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTopics();
          }
        }}
        onBlur={handleAddTopics}
      />
      <div style={{ marginTop: 8 }}>
        {topics.map((topic, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
            <span style={{ padding: 4, borderRadius: 4, backgroundColor: '#e6f7ff', marginRight: 8 }}>
              {topic}
            </span>
            <DeleteOutlined onClick={() => handleDelete(index)} style={{ cursor: 'pointer' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectPicker;
