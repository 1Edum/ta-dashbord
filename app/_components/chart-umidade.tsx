import React from 'react'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart'
import {  chartConfig, chartDataUmidade } from '@/lib/data'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

export default function ChartUmidade() {
  return (
    <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartDataUmidade}
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
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
  )
}
