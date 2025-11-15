# SaaS API - Plataforma de Servicios por Suscripción

Una API REST completa para una plataforma SaaS que gestiona servicios, suscripciones, pagos y usuarios. Desarrollada con Node.js, Express, TypeScript y MongoDB.

## 🚀 Características Principales

- **Sistema de Autenticación JWT** con roles de usuario (Admin/Cliente)
- **Gestión de Servicios** organizados por categorías
- **Sistema de Planes de Suscripción** con diferentes periodos y monedas
- **Procesamiento de Pagos** con múltiples métodos
- **Dashboard de Usuario** con historial de pagos y suscripciones
- **Validación de Datos** con Zod schemas
- **Jobs Automáticos** para gestión de suscripciones
- **Seeders** para datos de prueba

## 🛠️ Tecnologías

- **Backend**: Node.js, Express.js, TypeScript
- **Base de Datos**: MongoDB con Mongoose
- **Autenticación**: JWT (JSON Web Tokens)
- **Validación**: Zod
- **Hasheo**: bcrypt
- **Jobs**: node-cron
- **Dev Tools**: ESLint, Prettier, nodemon

## 📁 Estructura del Proyecto

```
src/
├── @types/               # Definiciones de tipos TypeScript
├── config/              # Configuración de la aplicación
├── database/            # Conexión y seeders de BD
├── enum/               # Enumeraciones globales
├── jobs/               # Jobs programados
├── middleware/         # Middlewares personalizados
├── modules/            # Módulos de la aplicación
│   ├── auth/           # Autenticación
│   ├── category/       # Categorías de servicios
│   ├── payments/       # Procesamiento de pagos
│   ├── plan/           # Planes de suscripción
│   ├── services/       # Servicios ofrecidos
│   ├── subscriptions/  # Gestión de suscripciones
│   └── users/          # Gestión de usuarios
└── utils/              # Utilidades generales
```

## 🔧 Instalación

### Prerrequisitos

- Node.js (v16 o superior)
- MongoDB
- Docker (opcional, para MongoDB)

### Configuración

1. **Clonar el repositorio**
```bash
git clone https://github.com/FrancoSpinelli/saas-api
cd saas-api
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Copiar el archivo `.env.example` a `.env` y ajustar las variables según tu entorno:

```
cp .env.example .env
```

```env
NODE_ENV=development
PORT=3000
JWT_SECRET=tu_jwt_secret_muy_seguro_aqui
MONGO_URI=mongodb://root:1234@localhost:27017
MONGO_DB_NAME=saas_db
```

4. **Iniciar MongoDB (con Docker)**
```bash
docker compose up -d
```

5. **Ejecutar seeders (datos de prueba)**
```bash
npm run seed
```

6. **Iniciar el servidor**
```bash
# Desarrollo
npm run dev

# Producción
npm run build
npm start
```

## 📚 API Endpoints

### Autenticación
```http
POST /auth/sign-up    # Registro de usuario
POST /auth/sign-in    # Inicio de sesión
```

### Usuarios
```http
GET    /users         # Listar usuarios (Admin)
GET    /users/profile # Perfil del usuario autenticado
GET    /users/:id     # Obtener usuario por ID
PATCH  /users/:id     # Actualizar perfil
DELETE /users/:id     # Eliminar usuario
```

### Categorías
```http
GET    /categories    # Listar categorías
POST   /categories    # Crear categoría
PUT    /categories/:id # Actualizar categoría
DELETE /categories/:id # Eliminar categoría
```

### Servicios
```http
GET    /services      # Listar servicios
GET    /services/:id  # Obtener servicio
POST   /services      # Crear servicio
PUT    /services/:id  # Actualizar servicio
DELETE /services/:id  # Eliminar servicio
```

### Planes
```http
GET    /plans         # Listar planes
GET    /plans/:id     # Obtener plan
POST   /plans         # Crear plan
PUT    /plans/:id     # Actualizar plan
PATCH  /plans/:id/activeToggle # Activar/desactivar plan
DELETE /plans/:id     # Eliminar plan
```

### Suscripciones
```http
GET    /subscriptions               # Listar suscripciones
GET    /subscriptions/:id          # Obtener suscripción
GET    /subscriptions/user/:userId # Suscripciones por usuario
POST   /subscriptions              # Crear suscripción
POST   /subscriptions/:id/cancel   # Cancelar suscripción
POST   /subscriptions/:id/renew    # Renovar suscripción
PATCH  /subscriptions/:id/inactivate # Inactivar suscripción
```

### Pagos
```http
GET    /payments      # Listar pagos
GET    /payments/:id  # Obtener pago
POST   /payments      # Procesar pago
```


## 🔐 Autenticación y Autorización

### Middleware de Autenticación
```typescript
// Todas las rutas (excepto /auth) requieren token JWT
Authorization: Bearer <jwt_token>
```

### Roles
- **Admin**: Acceso completo a todos los recursos
- **Client**: Acceso limitado a sus propios datos

### Usuarios de Prueba
```javascript
// Admin
email: francospinelli2903@gmail.com
password: 1234

// Cliente
email: santilongo@gmail.com
password: 1234
```

## 🤖 Jobs Automáticos

Para simular pagos automáticos y gestión de suscripciones, el sistema incluye jobs programados para:

- Procesamiento automático de pagos de suscripciones

## 📊 Scripts Disponibles

```bash
npm run dev      # Servidor en modo desarrollo
npm run build    # Compilar TypeScript
npm run start    # Servidor en producción
npm run seed     # Poblar BD con datos de prueba
npm run unseed   # Limpiar datos de prueba
npm run lint     # Ejecutar ESLint
npm run format   # Formatear código con Prettier
```

## 🔧 Configuración de Desarrollo

### Variables de Entorno Requeridas
```env
NODE_ENV=development|production|test
PORT=3000
JWT_SECRET=<secreto_jwt_seguro>
MONGO_URI=<uri_conexion_mongodb>
MONGO_DB_NAME=<nombre_base_datos>
```

### Docker Compose
El proyecto incluye un `docker-compose.yaml` para MongoDB:
```yaml
services:
  mongo:
    image: mongo:7
    container_name: mongo
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: 1234
```

## 🧪 Datos de Prueba

El sistema incluye seeders completos con:
- 5 usuarios (2 admin, 3 clientes)
- 5 categorías de servicios
- 4 planes de suscripción
- 19 servicios de ejemplo
- 2 suscripciones activas
- 1 suscripción expirada
- 3 registros de pagos

## 📄 Licencia

Desarrollado con pasión por Franco Spinelli para la materia Programación III - INSPT-UTN.