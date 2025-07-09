import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Input = ({ value, onChange, label, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-6 w-full">
      <label className="text-base font-medium text-slate-800 block mb-2">{label}</label>

      <div className="input-box w-full">
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-base"
          value={value}
          onChange={onChange}
        />
        {type === 'password' && (
          <div onClick={togglePassword} className="cursor-pointer">
            {showPassword ? (
              <FaEye size={24} className="text-primary" />
            ) : (
              <FaEyeSlash size={24} className="text-slate-400" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;