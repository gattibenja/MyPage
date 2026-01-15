# Portfolio Personal - Benjamín Gatti

Este es el repositorio de mi portfolio personal, una aplicación web Full Stack diseñada para mostrar mis proyectos, habilidades y trayectoria como desarrollador con un fuerte enfoque en ingeniería de sistemas.

El sitio combina un diseño moderno y una experiencia de usuario fluida con una arquitectura robusta para comunicar mi perfil técnico. La aplicación está construida con el stack MERN (MongoDB, Express, React, Node.js) y estilizada con Tailwind CSS.

## 🚀 Características Principales

- **Diseño Moderno y Responsivo**: Interfaz limpia y adaptable a cualquier dispositivo, desarrollada con React y Tailwind CSS.
- **Animaciones Fluidas**: Experiencia de usuario mejorada con animaciones sutiles y de alto rendimiento utilizando Framer Motion.
- **Sección de Proyectos Dinámica**: Un carrusel interactivo a pantalla completa para mostrar los detalles de cada proyecto.
- **Formulario de Contacto Funcional**: Un formulario que se conecta a un backend dedicado para procesar y almacenar los mensajes.
- **Backend con API REST**: Servidor construido con Node.js y Express para gestionar la lógica de negocio.

## 🛠️ Tecnologías Utilizadas

El proyecto está dividido en dos partes principales: `client` (frontend) y `backend` (servidor).

### Frontend (Client)

- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **Vite**: Entorno de desarrollo rápido para proyectos web modernos.
- **Tailwind CSS**: Framework CSS de utilidad para un diseño rápido y personalizado.
- **Framer Motion**: Biblioteca de animación para React.

### Backend (Server)

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express.js**: Framework para la construcción de la API REST.
- **MongoDB**: Base de datos NoSQL para almacenar los mensajes del formulario de contacto.
- **Mongoose**: ODM para modelar los datos de la aplicación para MongoDB.

## 📂 Estructura del Proyecto

```
MyPage/
├── backend/        # Contiene la aplicación de Node.js (servidor)
│   ├── controllers/
│   ├── db/
│   ├── models/
│   ├── routes/
│   └── server.js
└── client/         # Contiene la aplicación de React (cliente)
    ├── public/
    ├── src/
    └── index.html
```

## ⚙️ Instalación y Puesta en Marcha

Para ejecutar este proyecto localmente, sigue los siguientes pasos:

### Pre-requisitos

- Node.js (se recomienda la versión LTS)
- npm (o un gestor de paquetes equivalente)
- Una instancia de MongoDB (local o en la nube como MongoDB Atlas)

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/MyPage.git
    cd MyPage
    ```

2.  **Configurar el Backend:**
    a. Navega al directorio del backend:
    ```bash
    cd backend
    ```
    b. Instala las dependencias:
    ```bash
    npm install
    ```
    c. Crea un archivo `.env` en la raíz de la carpeta `backend` y añade tu string de conexión a MongoDB:
    ```
    MONGO_URI=tu_string_de_conexion_a_mongodb
    ```

3.  **Configurar el Frontend:**
    a. Navega al directorio del cliente desde la raíz del proyecto:
    ```bash
    cd client
    ```
    b. Instala las dependencias:
    ```bash
    npm install
    ```

## ▶️ Ejecución de la Aplicación

Debes tener ambos, el servidor backend y el cliente frontend, ejecutándose en terminales separadas.

1.  **Iniciar el Servidor Backend:**
    - Desde el directorio `backend`:
    ```bash
    npm start
    ```
    El servidor se ejecutará en `http://localhost:5000` (o el puerto que hayas configurado).

2.  **Iniciar la Aplicación Frontend:**
    - Desde el directorio `client`:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

## ☁️ Despliegue

El frontend de este proyecto está desplegado en **Vercel**, aprovechando la integración continua y el despliegue automático desde el repositorio de GitHub.
