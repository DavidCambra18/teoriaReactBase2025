import React, { Component } from "react";

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

];