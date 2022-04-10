import { FC } from 'react'
import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import { Card } from './card';

export type DataCardProps = {
	whaleChi: number
	currentTrend?: number
	signal: string
}

export const DataCards: FC<DataCardProps> = ({
	whaleChi,
	currentTrend,
	signal
}) => {

  return (
		<CardContainer>
			<Card 
				title={'Current Trend'}
				data={currentTrend + '%'} 
				brief={'Change in Eth price over the last 24hrs'}
			/>
			<Card 
				title={'Signal'}
				data={signal} 
				brief={'Interpreted signal based on whale transactions against market trend'}
				/>
			<Card
				title={'Chi'}
				data={whaleChi} 
				brief={'A value from -5 to 5 representing whale alignment'}
			/>
		</CardContainer>
  )
}


export default DataCards


export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
  ${media.desktop`
		flex-direction: row;
  `}
	justify-content: space-evenly;
	width: 100%;
`