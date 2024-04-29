// src/utils/capitalize.js
export const capitalize = (text) => {
    if (!text || typeof text !== 'string') {
      return '';
    }
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  