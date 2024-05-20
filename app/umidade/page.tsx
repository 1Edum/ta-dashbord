import React from 'react'
import { UmidadeChart } from '../_components/Charts'
import PagesDetails from '../_components/pages-details'




function Umidade() {
const title = "Umidade"
const description = "A umidade é a quantidade de vapor d'água presente no ar. É uma variável crucial em diversas áreas como meteorologia, climatologia, agricultura, saúde e engenharia. "
const cardTitle = "Umidade Média da Semana"
const cardDescription = "43"
  return (
    <div> 
          <PagesDetails title={title} description={description} cardTitle={cardTitle} cardDescription={cardDescription} Component={UmidadeChart}/>
    </div>
  )
}

export default Umidade