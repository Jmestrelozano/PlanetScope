# 🌍 PlanetScope

PlanetScope es una aplicación móvil desarrollada con React Native que permite a los usuarios explorar y aprender sobre diferentes planetas.

## 🚀 Características Principales

- **Lista de Planetas** 🌎: Muestra una lista de planetas con información básica sobre cada uno.
- **Detalles del Planeta** 🔍: Proporciona información detallada sobre un planeta seleccionado, incluyendo su radio, gravedad, densidad, masa, volumen y temperatura promedio.
- **Favoritos** ⭐: Permite marcar planetas como favoritos y acceder a ellos rápidamente.
- **Búsqueda y Ordenación** 🔄: Posibilidad de buscar planetas por nombre y ordenarlos de forma ascendente o descendente.
- **Pantalla de Carga** ⏳: Animación de carga mientras la aplicación se inicializa.

---

## 📂 Estructura del Proyecto

El proyecto sigue una **arquitectura hexagonal**, para lograr un código mantenible y testeable.

### 🏛 Arquitectura Hexagonal

- **Dominio** 🏗: Contiene la lógica central del negocio y modelos de dominio.
- **Aplicación** ⚙️: Casos de uso que orquestan la lógica del negocio.
- **Infraestructura** 🛠: Implementaciones de APIs, configuraciones y gestión de estado.
- **Presentación** 🎨: Componentes de la UI y pantallas.

### 📁 Estructura de Directorios

```bash
|-- application
|   `-- useCases
|       |-- favorites
|       |   |-- addToFavorites.ts
|       |   |-- isFavorite.ts
|       |   `-- removeFromFavorites.ts
|       |-- planets
|       |   |-- fetchPlanets.ts
|       |   |-- getPlanetById.ts
|       |   `-- sortPlanets.ts
|       `-- utils
|           |-- calculateSurfaceArea.ts
|           |-- convertKelvinToCelsius.ts
|           `-- formatNumber.ts
|-- assets
|   |-- fonts
|   |   |-- LilitaOne-Regular.ttf
|   |   |-- OpenSans-Bold.ttf
|   |   |-- OpenSans-Medium.ttf
|   |   `-- OpenSans-Regular.ttf
|   `-- images
|       |-- cohete.json
|       |-- jupiter.png
|       |-- loader.json
|       |-- mars.png
|       |-- mercure.png
|       |-- neptune.png
|       |-- saturne.png
|       |-- terre.png
|       |-- uranus.png
|       `-- venus.png
|-- config
|   |-- colors.ts
|   `-- planetImages.ts
|-- domain
|   |-- models
|   |   `-- planet.ts
|   `-- repositories
|       `-- IPlanetRepository.ts
|-- infrastructure
|   |-- api
|   |   `-- PlanetApi.ts
|   |-- config
|   |   |-- apiConfig.ts
|   |   `-- queryConfig.ts
|   `-- state
|       |-- interfaces
|       |   |-- favoriteSlice.ts
|       |   |-- planetSlice.ts
|       |   `-- store.ts
|       |-- slices
|       |   |-- favoritesSlice.ts
|       |   `-- planetsSlice.ts
|       `-- store.ts
`-- presentation
    |-- components
    |   |-- common
    |   |   |-- customImage
    |   |   |   |-- CustomImage.tsx
    |   |   |   `-- styles.ts
    |   |   |-- errorBoundary
    |   |   |   |-- ErrorBoundary.tsx
    |   |   |   `-- styles.ts
    |   |   |-- gradientBackground
    |   |   |   |-- GradientBackground.tsx
    |   |   |   `-- styles.ts
    |   |   |-- listItem
    |   |   |   |-- Item.tsx
    |   |   |   |-- ListEmpty.tsx
    |   |   |   |-- ListItems.tsx
    |   |   |   `-- styles.ts
    |   |   |-- loaders
    |   |   |   `-- loaderSplash
    |   |   |       `-- LoaderSplash.tsx
    |   |   `-- sort
    |   |       |-- SortControls.tsx
    |   |       `-- styles.ts
    |   |-- navigation
    |   |   |-- CustomTabButton.tsx
    |   |   `-- styles.ts
    |   |-- svgs
    |   |   |-- ChevronRight.tsx
    |   |   |-- Heart.tsx
    |   |   |-- Home.tsx
    |   |   |-- SortAsc.tsx
    |   |   |-- SortDesc.tsx
    |   |   `-- Star.tsx
    |   `-- ui
    |       |-- buttons
    |       |   `-- sortButton
    |       |       |-- SortButton.tsx
    |       |       `-- styles.ts
    |       |-- headers
    |       |   `-- headerTitle
    |       |       |-- HeaderTitle.tsx
    |       |       `-- styles.ts
    |       `-- inputs
    |           `-- searchInput
    |               |-- SearchInput.tsx
    |               `-- styles.ts
    |-- interfaces
    |   |-- components
    |   |   |-- common
    |   |   |   |-- customImage
    |   |   |   |   `-- customImage.interface.ts
    |   |   |   |-- errorBoundary
    |   |   |   |   `-- errorBoundary.interface.ts
    |   |   |   |-- gradientBackground
    |   |   |   |   `-- gradientBackground.interface.ts
    |   |   |   |-- listItem
    |   |   |   |   |-- item.interface.ts
    |   |   |   |   |-- listEmpty.interface.ts
    |   |   |   |   `-- listItem.interface.ts
    |   |   |   `-- sort
    |   |   |       `-- sortControls.interface.ts
    |   |   |-- navigation
    |   |   |   `-- customTabButton
    |   |   |       `-- customTabButton.interface.ts
    |   |   `-- ui
    |   |       |-- buttons
    |   |       |   `-- sortButton
    |   |       |       `-- sortButton.interface.ts
    |   |       |-- headers
    |   |       |   `-- headers.interface.ts
    |   |       `-- inputs
    |   |           `-- searchInput
    |   |               `-- searchInput.interface.ts
    |   |-- navigation
    |   |   `-- routeTypes.interface.ts
    |   `-- screens
    |       `-- details
    |           |-- headerDetail.interface.ts
    |           `-- itemDetail.interface.ts
    |-- navigation
    |   |-- AppNavigator.tsx
    |   `-- StackTabNavigation.tsx
    `-- screens
        |-- details
        |   |-- DetailsScreen.tsx
        |   |-- HeaderDetail.tsx
        |   |-- ItemDetail.tsx
        |   `-- styles.ts
        |-- favorites
        |   |-- FavoriteScreen.tsx
        |   `-- styles.ts
        `-- home
            |-- HomeScreen.tsx
            `-- styles.ts

```
---

## 🔑 Funcionalidades Clave

- **fetchPlanetsUseCase** 🌍: Obtiene la lista de planetas desde la API.
- **sortPlanetsUseCase** 🔄: Ordena la lista de planetas.
- **addToFavoritesUseCase** ⭐: Agrega un planeta a favoritos.
- **removeFromFavoritesUseCase** ❌: Elimina un planeta de favoritos.
- **calculateSurfaceAreaUseCase** 📏: Calcula el área de la superficie de un planeta.
- **convertKelvinToCelsiusUseCase** 🌡: Convierte temperaturas de Kelvin a Celsius.
- **formatNumberUseCase** 🔢: Formatea números para su correcta visualización.

---

## 🎨 Componentes Principales

- **HomeScreen** 🏠: Pantalla principal con la lista de planetas.
- **DetailsScreen** 🔍: Pantalla de detalles de un planeta.
- **FavoriteScreen** ⭐: Pantalla de favoritos.
- **SortControls** 📊: Controles de ordenación de planetas.
- **SearchInput** 🔎: Buscador de planetas.
- **ErrorBoundary** ⚠️: Manejador de errores en la UI.

---

## ⚙️ Configuración

- **API_BASE_URL** 🌐: URL base de la API.
- **PLANET_QUERY_PARAMS** 🔄: Parámetros de consulta para obtener los planetas.
- **FAVORITE_COLORS** 🎨: Colores para indicar si un planeta es favorito.

---

## 📦 Librerías Utilizadas

- **@react-native-async-storage/async-storage** 🗄: Almacenamiento asíncrono de datos.
- **@react-navigation/bottom-tabs** 🔽: Navegación con pestañas inferiores.
- **@react-navigation/native** 🚏: Navegación principal de la aplicación.
- **@react-navigation/native-stack** 🔀: Navegación en pila nativa.
- **lottie-react-native** 🎞: Animaciones Lottie.
- **react-native-bootsplash** ⏳: Pantalla de carga personalizada.
- **react-native-dotenv** 🌍: Variables de entorno.
- **react-native-reanimated** 🎭: Animaciones avanzadas.
- **react-native-responsive-dimensions** 📏: Dimensiones responsivas.
- **react-native-responsive-fontsize** 🔠: Tamaños de fuente adaptables.
- **react-native-linear-gradient**: 🌈 Representa los gradientes de colores.
- **react-native-svg**: 🖼️ Representa gráficos y SVG.
- **zustand**: 🌍 Representa el estado global con una referencia a la naturaleza (oso = gestión simple y eficiente).
---


## 📌 Ejemplo de Uso de la Aplicación Paso a Paso

A continuación se presenta un ejemplo de cómo un usuario interactuaría con la aplicación PlanetScope paso a paso, junto con una descripción de lo que hace la aplicación en cada paso y cómo maneja las imágenes.

**Paso 1**: 
- **Pantalla de Inicio Inicio de la Aplicación**: Cuando el usuario abre la aplicación, se muestra una pantalla de carga (BootSplash) mientras se inicializa la aplicación y se cargan los datos necesarios.

Pantalla de Carga:

![BootSplash](https://res.cloudinary.com/dwx09pwkr/image/upload/w_400/v1740349351/3astronautas/frdrwulhkjayzjxeuecr.png)

Imagen: loader.json (animación de carga).

![Animacion de carga](https://res.cloudinary.com/dwx09pwkr/image/upload/w_400/v1740349351/3astronautas/dcfupdzfjdgfm443b7gv.png)


- **Pantalla Principal (HomeScreen)**: Una vez que la aplicación se ha cargado, el usuario es llevado a la pantalla principal que muestra una lista de planetas.

Cada planeta en la lista tiene una imagen asociada, como jupiter.png, mars.png, etc.

Pantalla Principal:

![Animacion de carga](https://res.cloudinary.com/dwx09pwkr/image/upload/w_400/v1740349352/3astronautas/pkbzhmivsqrmx9ymmlfe.png)


**Paso 2**:
- **Buscar Planetas**: El usuario puede buscar planetas por nombre utilizando el campo de búsqueda.

![Animacion de carga](https://res.cloudinary.com/dwx09pwkr/image/upload/w_400/v1740349352/3astronautas/dtuqmdidi58pdhqz2626.png)

![Animacion de carga](https://res.cloudinary.com/dwx09pwkr/image/upload/w_400/v1740350224/3astronautas/vby6nd4trtfkpistrtbi.png)


- **Ordenar Planetas**: El usuario puede ordenar la lista de planetas en orden ascendente o descendente utilizando los controles de ordenación.

Los planetas se reordenan por alfabeto.

**Ascendente**:

![Animacion de carga](https://res.cloudinary.com/dwx09pwkr/image/upload/w_400/v1740349352/3astronautas/vdskzzznunc414eocaxe.png)

**Descendente**:

![Animacion de carga](https://res.cloudinary.com/dwx09pwkr/image/upload/w_400/v1740349353/3astronautas/roma0szdpwrrse6ka7df.png)

**Paso 3**: 
- **Ver Detalles del Planeta**: El usuario selecciona un planeta de la lista para ver más detalles.

![Animacion de carga](https://res.cloudinary.com/dwx09pwkr/image/upload/w_400/v1740349353/3astronautas/xxgtqiamlwnkuaggqj2c.png)

![Animacion de carga](https://res.cloudinary.com/dwx09pwkr/image/upload/w_400/v1740349353/3astronautas/royukcxclyifekgcqp1y.png)

**Paso 4**: 
- **Listado de Favoritos**: El usuario vera el listado de favoritos que tenga seleccionados o que selecciono en el detalle de un planeta.

![Animacion de carga](https://res.cloudinary.com/dwx09pwkr/image/upload/w_400/v1740349353/3astronautas/qe7aengkjwebacmxf5iz.png)

- **Vista cuando no tiene favoritos**: El usuario vera un mensaje que le indica que aun no tiene favoritos agregados.

![Animacion de carga](https://res.cloudinary.com/dwx09pwkr/image/upload/w_400/v1740349352/3astronautas/ru3jiwjep4oe1fvqhqzz.png)

### **NOTA**
El listado de favoritos, maneja el guardado con el storage en el caso si el usuario, se sale de la aplicacion o la cierra, permanecera su listado guardado. A menos que desinstale la aplicacion

**Paso 5**: 
- **Vista de busqueda no encontrada**: El usuario vera una vista que indica que la busqueda del planeta no ha sido encontrada.

![Animacion de carga](https://res.cloudinary.com/dwx09pwkr/image/upload/w_400/v1740351631/3astronautas/qjhacq70ygynnlcsrdhx.png)

- **Listado de planetas vacios**: En caso tal si al iniciar la aplicacio y la peticion no devuelve el listado del planeta. se tiene contemplado una vista que indica que no hay planetas en el momento disponibles

![Animacion de carga](https://res.cloudinary.com/dwx09pwkr/image/upload/w_400/v1740351179/3astronautas/o0nah75mps9iwwgalybk.png)


- **Hubo un error en la solicitud**: Si ocurre un error la aplicacion, generara una vista de error con un mensaje personalizado dependiendo del error que se retorne ya sea por el servicio o de la aplicacion. 

![Animacion de carga](https://res.cloudinary.com/dwx09pwkr/image/upload/w_400/v1740351346/3astronautas/seu85g6tvxkgsnzxnycy.png)

![Animacion de carga](https://res.cloudinary.com/dwx09pwkr/image/upload/w_400/v1740351471/3astronautas/mwkgpf7kgckr6jxgz6lm.png)

### **NOTA**
Podra volver a intentar reconectarse, llamando nuevamente otra solicitud en el Boton de intentar de nuevo

## 📲 Instalación

1. **Clona el repositorio**:
   ```sh
   git clone https://github.com/your-repo/PlanetScope.git
   cd PlanetScope

2. **Instalaciones y Levantamiento**:
En tu terminal, dentro del proyecto ejecuta el siguiente comando:
```bash
  npm install
```
Despues de instalar todo lo necesario. Añade el siguiente .env:
```bash
  API_URL=https://api.le-systeme-solaire.net/rest/bodies
```
Por ultimo ejecuta el siguiente comando:
```bash
  npm run android
```
## Este proyecto está diseñado para ser modular y escalable, permitiendo agregar nuevas funcionalidades y mejorar la aplicación de manera eficiente.