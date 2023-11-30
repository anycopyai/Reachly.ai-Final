import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@nextui-org/react';

const ProfileTab = ({ initialValues, onSubmit }) => {
    return (
        <div>
        <h2 className="text-2xl font-semibold mb-5">Edit Profile</h2>
        <Formik 
            initialValues={initialValues} // Use passed initialValues
            onSubmit={onSubmit}
        >
            <Form>
                {/* Name field */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
                    <Field id="name" name="name" type="text" placeholder="Your Name" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>

                {/* Email field (non-editable) */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
                    <Field id="email" name="email" type="email" placeholder="Your Email" disabled className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>

          {/* Old Password field */}
          <div className="mb-4">
            <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700 mb-1">Old Password:</label>
            <Field id="oldPassword" name="oldPassword" type="password" placeholder="Old Password" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>

          {/* New Password field */}
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password:</label>
            <Field id="newPassword" name="newPassword" type="password" placeholder="New Password" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>

          {/* Save Changes button */}
          <Button type="submit" color="primary" size="lg" variant="solid">Save Changes</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProfileTab;
