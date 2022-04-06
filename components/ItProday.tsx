import { useUniformTracker } from '@uniformdev/optimize-tracker-react';
import React from 'react';
import { useState } from 'react';
import { Entry, ItProDayFields, RegistrationFormFields } from '../lib/contentstack';
import Splitter from './Splitter';

export const ItProday: React.FC<Entry<ItProDayFields>> = ({
  title,
  description,
 
}) => {
  const [registered, setRegistered] = useState(
    typeof document !== 'undefined' ? !!document.cookie.match(/unfrmconf_registered/) : false
  );

  const { tracker } = useUniformTracker();

  const onRegister = () => {
    document.cookie = 'unfrmconf_registered=true; path=/; samesite=lax';
    tracker.reevaluateSignals();
    setRegistered(true);
  };

  return (
    <>
      <div className="py-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">{title}</p>
          </div>
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="tracking-loose w-full">{description}</p>
          </div>
          <div>
    </div>
        </div>
      </div>
      <Splitter />
    </>
  );
};
