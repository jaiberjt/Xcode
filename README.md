# Helios - Sistema de Gestión

Este proyecto consiste en una aplicación web con frontend y backend separados, utilizando una base de datos PostgreSQL.

## Estructura del Proyecto

```
.
├── frontend/           # Aplicación frontend (Vite + JavaScript)
├── helios-backend/     # API Backend (Node.js + Express)
└── README.md          # Este archivo
```

## Requisitos Previos

- Node.js (v14 o superior)
- Docker y Docker Compose
- npm o yarn

## Configuración y Ejecución

### 1. Base de Datos (PostgreSQL con Docker)

1. Asegúrate de tener Docker y Docker Compose instalados

2. Crea un archivo `docker-compose.yml` en la raíz del proyecto:
```yaml
version: '3.8'
services:
  postgres:
    image: postgres:14
    container_name: helios_db
    environment:
      POSTGRES_DB: helios_db
      POSTGRES_USER: helios_user
      POSTGRES_PASSWORD: helios_password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

3. Inicia la base de datos:
```bash
docker-compose up -d
```

4. Para verificar que la base de datos está corriendo:
```bash
docker ps
```

5. Para detener la base de datos:
```bash
docker-compose down
```

6. Para ver los logs de la base de datos:
```bash
docker-compose logs -f postgres
```

### 2. Backend

1. Navega al directorio del backend:
```bash
cd helios-backend
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
   - Crea un archivo `.env` basado en `.env.example`
   - Configura las variables de conexión a la base de datos:
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=helios_db
DB_USER=helios_user
DB_PASSWORD=helios_password
```

4. Inicia el servidor:
```bash
npm start
```
El backend estará disponible en `http://localhost:3000`

### 3. Frontend

1. Navega al directorio del frontend:
```bash
cd frontend
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run start
```
El frontend estará disponible en `http://localhost:5173`

## Acceso a la Aplicación

1. Abre tu navegador y ve a `http://localhost:5173`
2. Serás redirigido a la página de login
3. Ingresa tus credenciales:
   - Usuario: [tu_usuario]
   - Contraseña: [tu_contraseña]

## Scripts Disponibles

### Base de Datos
- `docker-compose up -d`: Inicia la base de datos
- `docker-compose down`: Detiene la base de datos
- `docker-compose logs -f postgres`: Muestra los logs de la base de datos

### Backend
- `npm start`: Inicia el servidor
- `npm run dev`: Inicia el servidor en modo desarrollo con nodemon
- `npm test`: Ejecuta las pruebas

### Frontend
- `npm run start`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la versión de producción

## Estructura de la Base de Datos

La base de datos incluye las siguientes tablas principales:
- users
- [otras tablas relevantes]

## API Endpoints

### Autenticación
- POST `/api/auth/login`: Inicio de sesión
- POST `/api/auth/logout`: Cierre de sesión

### [Otros endpoints relevantes]

## Solución de Problemas

### Error de Conexión a la Base de Datos
- Verifica que el contenedor de Docker esté corriendo: `docker ps`
- Confirma las credenciales en el archivo `.env`
- Verifica los logs del contenedor: `docker-compose logs postgres`

### Error de Conexión al Backend
- Asegúrate de que el servidor backend esté corriendo en el puerto 3000
- Verifica que no haya conflictos de puertos

### Error en el Frontend
- Limpia la caché del navegador
- Verifica la consola del navegador para errores específicos

## Contribución

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

[Especificar la licencia del proyecto] 