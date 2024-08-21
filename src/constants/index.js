import about from '../assets/images/about.jpg'
// import de react icons 
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

// NavLinks
export const navLinks = [
  {
    href: "",
    title: "Inicio",
  },
  {
    href: "about",
    title: "Nosotros",
  },
  {
    href: "activities",
    title: "Actividades",
  },
  {
    href: "jobs",
    title: "Nuestras ubicaciones",
  },
  {
    href: "contact",
    title: "Contacto",
  }
];

// dataWhorkshops 
export const workshops = [
  {
    id: 1,
    title: 'Actividad 1',
    description: 'Descripción de la actividad 1.',
    imageUrl: about,
    link: '/detalle-actividad-1',
  },
  {
    id: 2,
    title: 'Actividad 2',
    description: 'Descripción de la actividad 2.',
    imageUrl: about,
    link: '/detalle-actividad-2',
  },
  {
    id: 3,
    title: 'Actividad 3',
    description: 'Descripción de la actividad 3.',
    imageUrl: about,
    link: '/detalle-actividad-3',
  },
];

// dataMision 
export const mision = [
  {
    id: 1,
    title: 'Transforma Vidas Hoy',
    description: 'Descubre cómo A.P.P.A.Di está creando oportunidades y brindando apoyo a personas con discapacidad en nuestra comunidad.',
  },
  {
    id: 2,
    title: 'Oportunidades Laborales',
    description: 'Ayudamos a personas con discapacidad a encontrar empleos significativos, fomentando carreras exitosas y estables.',
  },
  {
    id: 3,
    title: 'Talleres Inclusivos',
    description: 'Realizamos talleres de carpintería, fabricación de gasas y apósitos maternales, y velas, proporcionando habilidades prácticas y creativas para personas con discapacidad.',
  },
];


// dataJobs 
export const jobs = [
  {
    id: 1,
    title: 'Sede Central',
    description: 'Nuestra sede principal ubicada en el centro de la ciudad.',
    imageUrl: about,
    contacts: [
      {
        icon: "phone",
        type: 'phone',
        value: '123-456-7890',
      },
      {
        icon: "location",
        type: 'address',
        value: 'Calle Principal 123, Ciudad Central',
      },
      {
        icon: "email",
        type: 'email',
        value: 'contacto@sede-central.com',
      }
    ],
  },
  {
    id: 2,
    title: 'Sucursal Norte',
    description: 'Nuestra sucursal en la zona norte de la ciudad.',
    imageUrl: about,
    contacts: [
      {
        icon: "phone",
        type: 'phone',
        value: '098-765-4321',
      },
      {
       icon: "location",
        type: 'address',
        value: 'Avenida Norte 456, Zona Norte',
      },
      {
         icon: "email",
        type: 'email',
        value: 'contacto@sucursal-norte.com',
      }
    ],
  },
  {
    id: 3,
    title: 'Sucursal Sur',
    description: 'Nuestra sucursal en la zona Sur de la ciudad.',
    imageUrl: about,
    contacts: [
      {
        icon: "phone",
        type: 'phone',
        value: '098-765-6498',
      },
      {
       icon: "location",
        type: 'address',
        value: 'Avenida Sur 456, Zona Sur',
      },
      {
         icon: "email",
        type: 'email',
        value: 'contacto@sucursal-sur.com',
      }
    ],
  },
];