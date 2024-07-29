   // Corta el texto a la longitud especificada y añade "..." al final si es necesario.
   export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };


// Funcion para formatear la fecha  
  export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};