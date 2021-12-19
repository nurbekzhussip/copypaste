import React from 'react';
import { MySpaceForm } from './partials/Form';
import { MySpaceContent } from './partials/Content';

export const MySpace = () => {
  return (
    <div style={{ margin: '20px' }}>
      <MySpaceContent />
      <MySpaceForm />
    </div>
  );
};
