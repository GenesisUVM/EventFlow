# EventFlow

**EventFlow** es una aplicación web para la gestión de competencias deportivas. Permite registrar usuarios, crear competencias, inscribir participantes, registrar tiempos de competición y visualizar los ganadores.

## Tecnologías utilizadas

- **React** con Vite para el frontend
- **MongoDB** para la base de datos no relacional
- **Express + Node.js** para el backend
- **Mongoose** para el manejo de modelos y esquemas
- Autenticación con tokens y roles de usuario
- PWA: App adaptable para dispositivos móviles

## Estructura del proyecto

## Modelos de la base de datos

- **Usuario**: nombre, correo, contraseña, número, rol, categoría
- **Competencia**: nombre, fecha, categoría, sexo, tipo, tiempo límite
- **Registro de Competencia**: participante asociado a una competencia
- **Tiempos**: tiempo registrado de cada participante en una competencia

> Ver el [diagrama de la base de datos](./diagrama-bd.png) para más detalle.

## Funcionalidades

- Registro e inicio de sesión con roles (admin / usuario)
- Creación y edición de competencias deportivas
- Inscripción de participantes
- Registro de tiempos de cada participante
- Cálculo automático de ganadores
- Visualización de competencias finalizadas
- Diseño responsivo y optimizado como PWA

## Instalación y ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/EventFlow.git
cd EventFlow


# Backend

npm install

# En una terminal (frontend y backend)
cd backend
npm run start

#Para produccion del Front

cd frontend
npm run build
```
