import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../_components/ui/card";
import { TemperatureChart } from "../_components/Charts";

function Temperatura() {
  return (
    <div className="space-y-2">
      <div className="rounded-lg bg-green-400 px-1">
        <h1 className="text-2xl md:text-3xl">Temperatura</h1>
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <Card>
          <CardDescription className="text-xl px-2 text-black text-justify">
            A temperatura é uma medida da energia térmica média das partículas
            em um corpo ou sistema. Ela reflete o grau de agitação das
            partículas: quanto maior a temperatura, maior a energia cinética das
            partículas.
          </CardDescription>
        </Card>
        <Card className="flex md:w-1/2 w-full p-1 flex-col items-center justify-between">
          <CardHeader>
            <CardTitle>Temperatura Média da Semana</CardTitle>
          </CardHeader>
          <CardDescription className="text-3xl ">24°</CardDescription>
        </Card>
      </div>
        <div className="max-w-full">
        <TemperatureChart />
        </div>
    </div>
  );
}

export default Temperatura;
