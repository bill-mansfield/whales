import { FC, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// @ts-ignore
const Chart = dynamic(import('react-plotly.js'), {
  ssr: false
})

export type EthChartProps = {
	data: any
}

export const EthChart: FC<EthChartProps> = ({
	data
}) => {

		const trace_price = {
			name: "Price ($)",
			x: data?.index?.map((t: Date) => new Date(t)),
			y: data?.price,
			xaxis: "x",
			yaxis: "y1",
			type: "scatter",
			mode: "lines+markers",
			marker: { color: "blue", size: 3 },
		};
		const trace_volumes = {
			name: "Volumne ($B)",
			x: data?.index?.map((t: Date) => new Date(t)),
			y: data?.volumes,
			xaxis: "x",
			yaxis: "y2",
			type: "bar",
			barmode: "relative",
			marker: {
				color: "rgb(49,130,189)",
				opacity: 0.7,
			},
		};
		const layout = {
			autosize: true,
			height: "100%",
			margin: {
				l: 50,
				r: 20,
				t: 35,
				pad: 3,
			},
			showlegend: false,
			xaxis: {
				domain: [1, 1],
				anchor: "y2",
			},
			yaxis: {
				domain: [0.1, 1],
				anchor: "x",
			},
			yaxis2: {
				showticklabels: false,
				domain: [0, 0.1],
				anchor: "x",
			},
			grid: {
				roworder: "bottom to top",
			},
		};
		const config = { responsive: true };
		const series = [trace_price, trace_volumes];

  return (
		<>
			<h2 className='text-center text-primary'>$ {data?.price[data?.price?.length - 1].toFixed(2)}</h2>
			<Chart
				//@ts-ignore
				data={series}
				config={config}
				layout={layout}
			/>
			<div id='chart' className='p-0 m-0'></div>
		</>
  )
}


export default EthChart