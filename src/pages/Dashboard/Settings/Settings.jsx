// UserSettings.js
import React, { useState } from 'react';

const Settings = () => {
  // Example state variables
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [photo, setPhoto] = useState(null);

  // Example update functions
  const updateName = (e) => setName(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updatePhoto = (e) => setPhoto(e.target.files[0]);

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('photo', photo);

      // Make a request to your server to update the name and photo
      const response = await fetch('/api/update-profile', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Profile updated successfully');
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="container mx-auto mt-10 px-5">
      <h1 className="text-2xl font-semibold mb-5">User Settings</h1>

      <form className="max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={updateName}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
            Profile Photo
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="photo"
            type="file"
            accept="image/*"
            onChange={updatePhoto}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
