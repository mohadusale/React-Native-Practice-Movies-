# Aplicación de Películas

Esta es una aplicación de películas desarrollada con [Expo](https://expo.dev) que permite a los usuarios explorar y obtener información sobre diferentes películas.

## Estructura del Proyecto

```plaintext
/app
  - _layout.tsx
  - (tabs)/
    - _layout.tsx
    - index.tsx
    - ...
  - globals.css
  - movies/
    - [id].tsx
/assets
  - fonts/
  - icons/
  - images/
/components
/constants
/services
```

## Dependencias Principales

- `expo`: ^54.x
- `react-native`: ^0.81.x
- `react-navigation`: Fáciles de configurar rutas y navegación
- `tailwindcss`: Para estilos rápidos y efectivos
- `appwrite`: Un backend para manejo de base de datos y autenticación

## Configuración Inicial

1. **Instalar dependencias**

   ```bash
   npm install
   ```

2. **Iniciar la aplicación**

   ```bash
   npx expo start
   ```

## Uso

Explora diferentes películas y obtén información sobre ellas.

## Desarrollo

Esta aplicación usa configuraciones avanzadas de Expo para soportar tanto iOS como Android.
Los estilos se manejan con Tailwind CSS, y las rutas se gestionan usando el enrutador de Expo.

## Contribución

Las contribuciones son bienvenidas. Si deseas contribuir, por favor bifurca el repositorio y crea una solicitud de extracción.

## Licencia

MIT
