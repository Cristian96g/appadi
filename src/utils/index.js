   // Corta el texto a la longitud especificada y añade "..." al final si es necesario.
   export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };