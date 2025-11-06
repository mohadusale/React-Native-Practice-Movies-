# 🎬 Movies App - Aplicación de Películas

Una aplicación móvil moderna desarrollada con **React Native** y **Expo** que permite a los usuarios explorar, buscar y descubrir información detallada sobre películas utilizando la API de **The Movie Database (TMDB)**.

## 🚀 Características Principales

- **🔍 Búsqueda de películas** en tiempo real
- **📈 Películas trending** basadas en métricas de búsqueda
- **📱 Interfaz responsive** optimizada para móviles
- **🎨 UI/UX moderna** con animaciones fluidas
- **📊 Sistema de métricas** para tracking de búsquedas populares
- **🌙 Tema oscuro** con gradientes personalizados
- **⚡ Navegación fluida** con file-based routing

## 🛠️ Stack Tecnológico

### Frontend
- **React Native** `0.81.5` - Framework principal para desarrollo móvil
- **Expo** `54.x` - Plataforma de desarrollo y deployment
- **TypeScript** - Tipado estático para mayor robustez
- **Expo Router** `6.x` - Sistema de navegación file-based
- **React Navigation** - Navegación avanzada con tabs y stack

### Styling & UI
- **NativeWind** `4.1.23` - Tailwind CSS para React Native
- **TailwindCSS** `3.4.17` - Framework de CSS utility-first
- **@react-native-masked-view** - Efectos visuales avanzados
- **Expo Image** - Optimización de imágenes

### Backend & APIs
- **Appwrite** `21.4.0` - Backend-as-a-Service para base de datos
- **TMDB API** - The Movie Database para datos de películas
- **Custom Hooks** - Gestión de estado y fetching de datos

## 📱 Arquitectura de la Aplicación

```
📦 movies/
├── 📁 app/                    # File-based routing (Expo Router)
│   ├── 📄 _layout.tsx         # Layout principal
│   ├── 📁 (tabs)/             # Navegación por tabs
│   │   ├── 📄 index.tsx       # Pantalla principal
│   │   ├── 📄 search.tsx      # Búsqueda de películas
│   │   ├── 📄 saved.tsx       # Películas guardadas
│   │   └── 📄 profile.tsx     # Perfil de usuario
│   └── 📁 movies/
│       └── 📄 [id].tsx        # Detalles de película (dynamic route)
├── 📁 components/             # Componentes reutilizables
│   ├── 📄 MovieCard.tsx       # Tarjeta de película
│   ├── 📄 TrendingCard.tsx    # Tarjeta trending con ranking
│   └── 📄 SearchBar.tsx       # Barra de búsqueda
├── 📁 services/               # Lógica de negocio y APIs
│   ├── 📄 api.ts              # Integración con TMDB API
│   ├── 📄 appwrite.ts         # Configuración de Appwrite
│   └── 📄 useFetch.ts         # Hook personalizado para fetching
├── 📁 interfaces/             # Definiciones de TypeScript
├── 📁 constants/              # Constantes (iconos, imágenes)
└── 📁 assets/                 # Recursos estáticos
```

## 🔧 Configuración del Proyecto

### Prerrequisitos
- Node.js 18+
- npm o yarn
- Expo CLI
- Cuenta en TMDB para API key
- Proyecto en Appwrite configurado

### Variables de Entorno
Crear un archivo `.env` en la raíz del proyecto:

```env
EXPO_PUBLIC_MOVIE_API_KEY=tu_tmdb_api_key
EXPO_PUBLIC_APPWRITE_PROJECT_ID=tu_appwrite_project_id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=tu_database_id
```

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/movies-app.git
   cd movies-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   # Editar .env con tus credenciales
   ```

4. **Iniciar la aplicación**
   ```bash
   npx expo start
   ```

5. **Simulación de la APP**
    1. Tener un dispositivo móvil IOs o Android con la app: Expo GO
    2. Al ejecutar npx expo start, escanera con el móvil el código QR que se genera por terminal


## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👨‍💻 Desarrollador

**Tu Nombre**
- GitHub: [@mohadusale](https://github.com/mohadusale)
- LinkedIn: [Mohamed Ech Chantoufy Aourram](https://www.linkedin.com/in/mohamed-ech-chantoufy-15652a252/)

---

## Reflexión Personal

Este proyecto no ha sido algo innovador ni mucho menos (de hecho es una idea ya existente), pero es muy especial para mí porque es la primera vez que me salgo de la rutina de solo estudiar para la universidad y probar algo yo solo, aparte de que es la primera vez que programo algo relacionado con el desarrollo móvil. Una de las cualidades que tengo como persona es la creatividad y poder volcarla en líneas de código ha hecho que haya sido un reto muy divertido.

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
