import { Modal } from 'antd';
import React from 'react';

const UpgradeModal = ({open, onClose}) =>{
    debugger

    const handleOk = (e) => {
        console.log(e);
        setOpen(false);
      };
      const handleCancel = (e) => {
        console.log(e);
        setOpen(false);
      };

    return (
      <Modal
        title="Basic Modal22"
        open={true}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...111</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    );
}

export default UpgradeModal;