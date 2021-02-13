import React from 'react';
import TheFooter from './TheFooter';
import TheContent from './TheContent';
import TheHeader from './TheHeader';
const TheLayout = () => {
  return (
    <>
      <main>
        <TheHeader />
        <TheContent />
        <TheFooter />
      </main>
    </>
  );
};

export default TheLayout;
