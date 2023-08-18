import React from 'react';
import Image from 'next/image';

const Collaborate = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-bold text-center mt-10 md:mt-20">
        Here are some awesome companies I have collaborated with!
      </h2>
      <div className="flex flex-col md:flex-row gap-x-3 mx-3 justify-center items-center mt-10 md:mt-20 mx-4 md:mx-20">
        <Image
          className="w-48 md:w-56 h-auto my-4 md:my-0 mx-auto"
          src="https://mattfarley.ca/img/logos/briteweb.svg"
          alt="company"
          width={224}
          height={80}
        />
        <Image
          className="w-48 md:w-56 h-auto my-4 md:my-0 mx-auto"
          src="https://mattfarley.ca/img/logos/goodkind.svg"
          alt="company"
          width={224}
          height={80}
        />
        <Image
          className="w-48 md:w-56 h-auto my-4 md:my-0 mx-auto"
          src="https://mattfarley.ca/img/logos/redstamp.svg"
          alt="company"
          width={224}
          height={80}
        />
        <Image
          className="w-48 md:w-56 h-auto my-4 md:my-0 mx-auto"
          src="https://mattfarley.ca/img/logos/domain7.svg"
          alt="company"
          width={224}
          height={80}
        />
      </div>
    </div>
  );
};

export default Collaborate;
