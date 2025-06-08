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
├── app/                # Directorio principal de la aplicación (Expo Router)
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

### Flujo de Trabajo

1. Asegúrate de tener la última versión del repositorio:
```bash
git fetch origin
git checkout develop
git pull origin develop
```

2. Crea una nueva rama desde `develop` siguiendo la convención de nombres:
```bash
git checkout -b tipo/nombre-descripcion
```
Donde `tipo` puede ser:
- `feature/` - Para nuevas características
- `fix/` - Para correcciones de errores
- `refactor/` - Para refactorizaciones
- `docs/` - Para cambios en documentación
- `test/` - Para pruebas
- `chore/` - Para tareas de mantenimiento

3. Desarrolla tus cambios siguiendo las buenas prácticas:
   - Escribe código limpio y legible
   - Sigue los estándares de código del proyecto
   - Añade comentarios cuando sea necesario
   - Escribe pruebas para nuevas funcionalidades
   - Actualiza la documentación si es necesario

4. Realiza commits siguiendo el formato de Conventional Commits:
```bash
git commit -m "tipo(alcance): descripción breve"
```
Ejemplos:
- `feat(auth): add login with Google`
- `fix(books): resolve pagination issue`
- `docs(readme): update installation steps`

5. Mantén tu rama actualizada con `develop`:
```bash
git fetch origin
git rebase origin/develop
```

6. Resuelve conflictos si existen durante el rebase

7. Push de tus cambios:
```bash
git push origin tipo/nombre-descripcion
```

8. Crea un Pull Request (PR) hacia la rama `develop`:
   - Usa la plantilla de PR proporcionada
   - Describe claramente los cambios realizados
   - Menciona los issues relacionados (si existen)
   - Solicita revisión de al menos un mantenedor

### Buenas Prácticas

- **Commits**: 
  - Haz commits pequeños y frecuentes
  - Cada commit debe representar un cambio lógico y completo
  - Usa mensajes de commit descriptivos

- **Código**:
  - Sigue los principios SOLID
  - Mantén la cobertura de pruebas
  - Documenta funciones y componentes complejos
  - Usa TypeScript de manera efectiva

- **Pull Requests**:
  - Mantén los PRs pequeños y enfocados
  - Responde a los comentarios de revisión
  - Actualiza tu PR según el feedback
  - Asegúrate de que todos los tests pasen

- **Revisión de Código**:
  - Revisa el código de otros contribuidores
  - Proporciona feedback constructivo
  - Verifica que los cambios cumplan con los estándares

### Proceso de Revisión

1. Los PRs serán revisados por al menos un mantenedor
2. Se espera que los contribuidores respondan a los comentarios en un plazo razonable
3. Los cambios deben pasar todas las pruebas automatizadas
4. Se requiere aprobación explícita antes de hacer merge

## 📞 Soporte

Para reportar problemas o solicitar nuevas características, por favor abre un issue en el repositorio. 