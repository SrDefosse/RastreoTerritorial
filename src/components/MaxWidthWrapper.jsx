import React from 'react';

const MaxWidthWrapper = ({ className = "", children }) => {
  return (
    <div className={`w-full ml-0 sm:ml-16 ${className}`}>
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
        {children}
      </div>
    </div>
  );
};

export default MaxWidthWrapper; 