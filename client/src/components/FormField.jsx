import React from "react";

const FormField = ({
  labelName,
  placeholder,
  inputType,
  isTextArea,
  value,
  handleChange,
  noticeText,
  min,
}) => {
  return (
    <label className="flex flex-col">
      {labelName && (
        <span className="font-epilogue font-medium text-sm text-gray-500 mb-2">
          {labelName}
        </span>
      )}

      {isTextArea ? (
        <textarea
          required
          value={value}
          onChange={handleChange}
          rows={4}
          placeholder={placeholder}
          className="py-2 px-4 outline-none border border-gray-300 bg-white text-sm text-gray-700 placeholder-gray-400 rounded-md resize-none"
        />
      ) : (
        <div>
          <input
            required
            value={value}
            onChange={handleChange}
            type={inputType}
            step="0.1"
            placeholder={placeholder}
            className="py-2 px-4 outline-none border border-gray-300 bg-white text-sm text-gray-700 placeholder-gray-400 rounded-md"
            min={min}
          />
          <p className="text-gray-500 text-sm mt-1">{noticeText}</p>
        </div>
      )}
    </label>
  );
};

export default FormField;
