import React from 'react';

interface ActionButtonProps {
  text: string;
  additionalClasses?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, additionalClasses = '' }) => {
  return (
    <button
    className={`justify-center py-9 pr-20 pl-16 bg-sky-700 rounded-xl border border-black border-solid shadow-md max-md:pr-8 max-md:pl-7 max-md:text-4xl ${additionalClasses}`}
    >
      {text}
    </button>
  );
};

export default ActionButton;