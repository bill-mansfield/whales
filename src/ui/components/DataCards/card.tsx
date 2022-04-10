import { FC } from 'react'
import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import pxToRem from '@app/ui/utils/pxToRem';
import defaultTheme from '@app/ui/theme/default';

export type CardProps = {
	title: string,
	brief: string;
	data: any
}

export const Card: FC<CardProps> = ({
	title,
	brief,
	data
}) => {

  return (
		<CardWrapper>
			<Title>
				{title}
			</Title>
			<Brief>
				{brief}
			</Brief>
			{data}
		</CardWrapper>
  )
}


export default Card


export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  padding: ${pxToRem(10)};
	border: 1px solid ${defaultTheme.colors.primary};
	background-color: ${defaultTheme.colors.aliceBlue};
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	border-radius: 10px;
	width: 100%;
	margin-top: ${pxToRem(20)};
  ${media.desktop`
		margin-top: ${pxToRem(0)};
		width: 25%;
    padding: ${pxToRem(60)};
  `}
`

export const Brief = styled.h3`
	font-size: ${pxToRem(14)};
	text-align: center;
`

export const Title = styled.h4`
	font-size: ${pxToRem(22)};
`