import React, { ComponentType } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface PagesDetailsProps {
  Component: ComponentType<any>;
  title: string;
  cardTitle: string;
  description: string;
  cardDescription: string;
}

const PagesDetails: React.FC<PagesDetailsProps> = ({
  title,
  description,
  cardTitle,
  cardDescription,
  Component


}) => {
  return (
    <div className="space-y-2">
      <div className="rounded-lg bg-green-400 px-1">
        <h1 className="text-2xl md:text-3xl">{title}</h1>
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <Card className="md:w-3/4 w-full">
          <CardDescription className="px-2 text-justify text-xl text-black">
            {description}
          </CardDescription>
        </Card>
        <Card className="flex w-full flex-col items-center justify-between p-1 md:w-1/2">
          <CardHeader>
            <CardTitle>{cardTitle}</CardTitle>
          </CardHeader>
          <CardDescription className="text-3xl ">
            {cardDescription}
          </CardDescription>
        </Card>
      </div>
      <div className="max-w-full">
        <Component />
      </div>
    </div>
  );
};

export default PagesDetails;
