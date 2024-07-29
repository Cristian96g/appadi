# A.P.P.A.Di - Plataforma de Gestión de ONG

## Descripción

Esta aplicación está diseñada para la ONG A.P.P.A.Di, que se dedica a proporcionar oportunidades para personas con discapacidades a través de una variedad de talleres y negocios. La plataforma permite a la ONG mostrar sus actividades y servicios, así como gestionar el contenido a través de una interfaz de administración (CRUD).

## Funcionalidades

- **Visualización de Actividades y Servicios**: Página de inicio con información sobre la ONG y secciones detalladas de cada actividad y servicio.
- **Administración de Contenido (CRUD)**: Permite al administrador agregar, editar y eliminar contenido.
- **Autenticación y Autorización**: Sistema de inicio de sesión para el administrador y protección de rutas.

## Requisitos

- Node.js
- API Key de Firebase (para el frontend)
- API Key de MongoDB (para el backend)

## Instalación

1. **Clonar el repositorio**:
   ```sh
   git clone https://github.com/tu-usuario/appadi.git
   cd appadi

2. **Instalar dependencias**:
npm install

3. **Configurar variables de entorno**:
REACT_APP_FIREBASE_API_KEY=tu_firebase_api_key
MONGODB_URI=tu_mongodb_uri

4. **Iniciar el backend**:
cd backend
npm start

5. **Iniciar el frontend**:
cd frontend
npm start

Uso
Página Principal:

Muestra la información sobre A.P.P.A.Di y las actividades y servicios ofrecidos.
Panel de Administración:

Inicia sesión con las credenciales de administrador.
Usa las funcionalidades de CRUD para gestionar el contenido de la plataforma