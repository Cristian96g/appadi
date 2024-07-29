import { Link } from 'react-router-dom';

const Button = ({ onClick, className, text, to }) => {
  const commonClasses = `align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-md bg-green-500 text-white shadow-sm shadow-gray-900/5 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none ${className}`;

  if (to) {
    return (
      <Link to={to} className={commonClasses}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={commonClasses}>
      {text}
    </button>
  );
};

export default Button;
