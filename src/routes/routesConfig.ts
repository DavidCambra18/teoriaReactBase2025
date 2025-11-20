import React from "react";

export const routes = [
  {
    to: null,
    title: "Creación de componentes",
    description: "",
    component: React.lazy(() => import("../pages/Home")),
  },
  {
    to: "Ejem1",
    title: "Componente usando clases",
    description: "Muestra como crear un componente usando clases. Obsoleto.",
    component: React.lazy(() => import("../pages/Ejem_01")),
  },
  {
    to: "Ejem2",
    title: "Componentes dentro de otros componentes",
    description: "Uso de componetnes anidados",
    component: React.lazy(() => import("../pages/Ejem_02")),
  },
  {
    to: "Ejem3",
    title: "",
    description: "",
    component: React.lazy(() => import("../pages/Ejem_03")),
  },
  {
    to: "Ejem4",
    title: "Props",
    description: "paso de props al componente",
    component: React.lazy(() => import("../pages/Ejem_04")),
  },
  {
    to: "Ejem5",
    title: "",
    description: "",
    component: React.lazy(() => import("../pages/Ejem_05")),
  },
  {
    to: "Ejem6",
    title: "Comunicacion hijo a padre",
    description: "",
    component: React.lazy(() => import("../pages/Ejem_06")),
  },
  {
    to: "Ejem7",
    title: "Hook useState",
    description: "",
    component: React.lazy(() => import("../pages/Ejem_07")),
  },
  {
    to: "Ejem8",
    title: "Pasar los hijos de un componente",
    description: "",
    component: React.lazy(() => import("../pages/Ejem_08")),
  },
  {
    to: "Ejem9",
    title: "",
    description: "",
    component: React.lazy(() => import("../pages/Ejem_09")),
  },
  {
    to: "Ejem10",
    title: "",
    description: "",
    component: React.lazy(() => import("../pages/Ejem_10")),
  },
  {
    to: "Ejercicio01",
    title: "Mostrar valor en grados y centigrados",
    description: "",
    component: React.lazy(() => import("../pages/Ejercicio_01")),
  },

  {
    to: "Ejercicio02",
    title: "",
    description: "",
    component: React.lazy(() => import("../pages/Ejercicio_02")),
  },
  {
    to: "Ejercicio03",
    title: "",
    description: "",
    component: React.lazy(() => import("../pages/Ejercicio_03")),
  },
  {
    to: "Ejercicio04",
    title: "",
    description: "",
    component: React.lazy(() => import("../pages/Ejercicio_04")),
  },
  {
    to: "Ejercicio05",
    title: "",
    description: "",
    component: React.lazy(() => import("../pages/Ejercicio_05")),
  },
  {
    to: "Ejercicio06",
    title: "",
    description: "",
    component: React.lazy(() => import("../pages/Ejercicio_06")),
  },
  {
    to: "Ejercicio07",
    title: "",
    description: "",
    component: React.lazy(() => import("../pages/Ejercicio_07")),
  },
  {
    to: "Ejercicio08",
    title: "",
    description: "",
    component: React.lazy(() => import("../pages/Ejercicio_08")),
  },
  {
    to: "Ejercicio09",
    title: "",
    description: "",
    component: React.lazy(() => import("../pages/Ejercicio_09")),
  },
  {
    to: "Ejercicio10",
    title: "",
    description: "",
    component: React.lazy(() => import("../pages/Ejercicio_10")),
  },

];