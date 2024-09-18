"use client";

import { chartConfig, chartData, infosTable } from "@/lib/data";
import ChartTemperatura from "./_components/chart-temperatura";
import ChartUmidade from "./_components/chart-umidade";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "./_components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "./_components/ui/table";
import { useEffect, useState } from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./_components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const infoCards = [
  { title: "Informações coletadas (mês)", description: "7" },
  { title: "Umidade Média da Semana", description: "43" },
  { title: "Temperatura Média da Semana", description: "24°" },
];

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <section>
      <div className="flex items-center gap-2">
        {infoCards.map((infos) => (
          <Card className="w-1/3 space-y-4 py-7 text-center" key={infos.title}>
            <CardTitle>{infos.title}</CardTitle>
            <CardDescription className="text-lg">
              {infos.description}
            </CardDescription>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-2">
        <Card>
          <CardTitle>Umidade Média</CardTitle>
          <CardContent>
            <ChartUmidade />
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Temperatura Média</CardTitle>
          <CardContent>
            <ChartTemperatura />
          </CardContent>
        </Card>
        <Card className="row-span-2">
          <CardTitle>Temperatura Média</CardTitle>
          <CardContent>
            <Table>
              <TableRow>
                <TableHead>Aluno</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Classe</TableHead>
              </TableRow>
              <TableBody>
                {infosTable.map((infos) => (
                  <TableRow key={infos.person}>
                    <TableCell>{infos.person}</TableCell>
                    <TableCell>{infos.date}</TableCell>
                    <TableCell>{infos.classRoom}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="col-span-2 w-1/2">
          <CardTitle>Temperatura Média</CardTitle>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Area
                  dataKey="desktop"
                  type="step"
                  fill="var(--color-desktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
