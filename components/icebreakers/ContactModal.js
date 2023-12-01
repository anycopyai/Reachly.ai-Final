// ContactModal.js
import React, { useState } from 'react';
// ...other imports...
import { Modal, Button, Input } from '@nextui-org/react';

const ContactModal = ({ isOpen, onClose, contact, onInputChange, onFormSubmit }) => {
  return (
    <Modal closeButton aria-labelledby="modal-title" open={isOpen} onClose={onClose}>
      <Modal.Header>
        <h3 className="text-lg font-bold">Add New Contact</h3>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name *</label>
            <Input required name="name" value={contact.name} onChange={onInputChange} fullWidth placeholder="Enter Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email *</label>
            <Input required name="email" value={contact.email} onChange={onInputChange} fullWidth type="email" placeholder="Enter Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">Website *</label>
            <Input required name="website" value={contact.website} onChange={onInputChange} fullWidth type="url" placeholder="Enter Website URL" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedin">LinkedIn</label>
            <Input name="linkedin" value={contact.linkedin} onChange={onInputChange} fullWidth type="url" placeholder="Enter LinkedIn URL" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">Company</label>
            <Input name="company" value={contact.company} onChange={onInputChange} fullWidth type="text" placeholder="Enter Company Name" />
          </div>
          <div className="flex justify-end pt-2 space-x-2">
            <Button type="submit" auto ghost>
              Save Contact
            </Button>
            <Button auto flat color="error" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
