import React from "react";

import { TemperatureChart } from "../_components/Charts";
import PagesDetails from "../_components/pages-details";

const title = "Temperatura"
const description = "A temperatura é uma medida da energia térmica média das partículas em um corpo ou sistema. Ela reflete o grau de agitação das partículas: quanto maior a temperatura, maior a energia cinética daspartículas."
const cardTitle = "Temperatura Média da Semana"
const cardDescription ="24°"


function Temperatura() {
  return (
    <PagesDetails title={title} description={description} cardTitle={cardTitle} cardDescription={cardDescription} Component={TemperatureChart}/>
  );
}

export default Temperatura;
