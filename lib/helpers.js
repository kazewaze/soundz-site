/*
* Helper Functions.
* - KC
*/

export const capitalize = (str='', sounds=true) => {
  if (typeof str !== 'string' || str.length === 0)
    return ''; // No Bueno...

  if (sounds) // Sound File Names.
    return str.charAt(0).toUpperCase() + str.slice(1);
  else // Other Use-Cases.
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const uncapitalize = (str='') => {
  if (typeof str !== 'string' || str.length === 0)
    return ''; // No Bueno...

  return str.charAt(0).toLowerCase() + str.slice(1);
};

// TBD ...