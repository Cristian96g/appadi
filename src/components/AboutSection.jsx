import React from 'react';

const AboutSection = ({ imageSrc, imageAlt, title, text, imagePosition = 'right' }) => {
  return (
    <section className="py-6 md:py-8">
      <div className={`container mx-auto flex flex-col ${imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 mb-4 items-center px-4`}>
        <div className={`lg:w-1/2 ${imagePosition === 'left' ? 'lg:pl-8' : 'lg:pr-8'} text-center lg:text-left`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {title} 
          </h2>
          <p className="text-gray-500">
            {text}
          </p>
        </div>
        <div className={`lg:w-1/2 ${imagePosition === 'left' ? 'lg:pr-8' : 'lg:pl-8'}  lg:mt-0`}>
          <img src={imageSrc} alt={imageAlt} className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
