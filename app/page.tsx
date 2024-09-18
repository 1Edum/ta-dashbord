"use client";

import { useEffect, useState } from "react";
import {
  Card,

  CardDescription,
  CardTitle,
} from "./_components/ui/card";


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
      
    </section>
  );
}
