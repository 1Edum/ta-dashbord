"use client"

import React from 'react'
import PagesDetails from '../_components/pages-details'
import { Card, CardContent, CardHeader, CardTitle } from '../_components/ui/card'
import ChartUmidade from '../_components/chart-umidade'

function Umidade() {
const title = "Umidade"
const description = "A umidade é a quantidade de vapor d'água presente no ar. É uma variável crucial em diversas áreas como meteorologia, climatologia, agricultura, saúde e engenharia. "
const cardTitle = "Umidade Média da Semana"
const cardDescription = "43"

  return (
    <div> 
      <section className="w-full space-y-10">
      <PagesDetails title={title} description={description} cardTitle={cardTitle} cardDescription={cardDescription}/>
      <Card className="flex flex-col items-center justify-center">
        <CardHeader>
          <CardTitle className="text-center">{cardTitle}</CardTitle>
        </CardHeader>
        <CardContent className="w-[90vh]">
          <ChartUmidade />
        </CardContent>
      </Card>
    </section>
    </div>
  )
}

export default Umidade