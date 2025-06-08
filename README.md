# Biblionauta 📚

Biblionauta es una aplicación móvil desarrollada con React Native y Expo, diseñada para proporcionar una experiencia moderna y eficiente en la gestión y exploración de libros.

## 🚀 Tecnologías Principales

- **React Native** (v0.79.3)
- **Expo** (v53.0.10)
- **TypeScript**
- **Expo Router** (v5.0.7)
- **NativeWind** (v4.1.23) / **TailwindCSS** (v3.4.17)
- **React Navigation** (v7.x)

## 📋 Prerrequisitos

- Node.js (versión LTS recomendada)
- Bun (gestor de paquetes)
- Expo CLI
- iOS Simulator (para desarrollo en iOS)
- Android Studio (para desarrollo en Android)

## 🛠️ Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/biblionauta.git
cd biblionauta
```

2. Instalar dependencias:
```bash
bun install
```

3. Iniciar el proyecto:
```bash
bun start
```

## 📱 Scripts Disponibles

- `bun start` - Inicia el servidor de desarrollo de Expo
- `bun android` - Inicia la aplicación en un emulador Android
- `bun ios` - Inicia la aplicación en un simulador iOS
- `bun web` - Inicia la aplicación en modo web

## 🏗️ Estructura del Proyecto

```
biblionauta/
├── app/                 # Directorio principal de la aplicación (Expo Router)
├── assets/             # Recursos estáticos (imágenes, fuentes, etc.)
├── src/                # Código fuente adicional
├── .expo/              # Configuración de Expo
├── node_modules/       # Dependencias
└── [archivos de configuración]
```

## 🎨 Estilos y UI

El proyecto utiliza NativeWind (TailwindCSS para React Native) para el estilizado de componentes. La configuración se encuentra en:
- `tailwind.config.js`
- `global.css`

## 📦 Dependencias Principales

### Navegación
- @react-navigation/native
- @react-navigation/bottom-tabs
- @react-navigation/drawer
- @react-navigation/native-stack
- expo-router

### UI/UX
- react-native-safe-area-context
- react-native-screens
- react-native-vector-icons
- react-native-svg

### Utilidades
- expo-constants
- expo-linking
- expo-status-bar
- react-native-reanimated

## 🔧 Configuración de Desarrollo

El proyecto utiliza TypeScript para un desarrollo más robusto. La configuración de TypeScript se encuentra en `tsconfig.json`.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Para reportar problemas o solicitar nuevas características, por favor abre un issue en el repositorio. 