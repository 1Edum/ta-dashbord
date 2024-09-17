'use client'

import React from "react";
import PagesDetails from "../_components/pages-details";
import ChartTemperatura from "../_components/chart-temperatura";
import { Card, CardContent, CardHeader, CardTitle } from "../_components/ui/card";

const title = "Temperatura"
const description = "A temperatura é uma medida da energia térmica média das partículas em um corpo ou sistema. Ela reflete o grau de agitação das partículas: quanto maior a temperatura, maior a energia cinética daspartículas."
const cardTitle = "Temperatura Média da Semana"
const cardDescription ="24°"

function Temperatura() {
  return (
    <section className="w-full space-y-10">
      <PagesDetails title={title} description={description} cardTitle={cardTitle} cardDescription={cardDescription}/>
      <Card className="flex flex-col items-center justify-center">
        <CardHeader>
          <CardTitle className="text-center">{cardTitle}</CardTitle>
        </CardHeader>
        <CardContent className="w-[90vh]">
          <ChartTemperatura />
        </CardContent>
      </Card>
    </section>
  );
}

export default Temperatura;
