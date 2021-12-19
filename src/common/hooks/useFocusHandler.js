import React, { useEffect, useState } from 'react';

export const useFocusHandler = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    window.addEventListener('focus', () => setState(true));
    window.addEventListener('blur', () => setState(true));

    return () => {
      window.removeEventListener('focus', () => setState(false));
      window.removeEventListener('blur', () => setState(false));
    };
  });

  return state;
};
