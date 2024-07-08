import { useState } from 'react';

const Modal = ({ isOpen, title, content, onClose, onDelete }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  const closeModal = () => {
    setIsVisible(false);
    onClose(); // Llamar a la función de cierre del modal desde el padre, si es necesario
  };

  const handleDelete = () => {
    onDelete(); // Llamar a la función de eliminación desde el padre
    closeModal(); // Cerrar el modal después de eliminar
  };

  return (
    <>
      {/* Fondo oscuro detrás del modal */}
      {isVisible && (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
          {/* Contenedor del modal */}
          <div className='bg-white p-4 md:p-8 max-w-md mx-auto rounded-lg shadow-lg'>
            {/* Cabecera del modal */}
            <div className='flex justify-between items-center border-b pb-4 mb-4'>
              <h2 className='text-lg md:text-xl font-bold'>{title}</h2>
              {/* Botón de cierre del modal */}
              <button
                onClick={closeModal}
                className='text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800'>
                &times;
              </button>
            </div>
            {/* Contenido del modal */}
            <div className='mb-4'>{content}</div>
            {/* Botones de acción (eliminar y cancelar) */}
            <div className='flex justify-end'>
              <button
                onClick={handleDelete}
                className='bg-red-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-red-600 focus:outline-none focus:bg-red-600'>
                Eliminar
              </button>
              <button
                onClick={closeModal}
                className='bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 focus:outline-none'>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
