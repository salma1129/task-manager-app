import React, { useRef, useState } from 'react';
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);

      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!image ? (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
            <LuUser className="text-xl text-primary" />
          </div>
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full absolute -bottom-2 -left-2 shadow hover:bg-gray-200 transition border border-gray-300"
            onClick={onChooseFile}
          >
            <LuUpload className="text-lg" />
          </button>
        </div>
      ) : (
        <div className="relative flex flex-col items-center">
          <img
            src={previewUrl}
            alt="profile preview"
            className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400 shadow-md mb-2"
          />
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full mt-2 shadow hover:bg-gray-200 transition"
            onClick={handleRemoveImage}
          >
            <LuTrash className="text-lg" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
