import pxToRem from '@app/ui/utils/pxToRem';
import { FC } from 'react'
import styled from 'styled-components';

export type StatusPillProps = {
	Status: string
	Color: string
}

export const StatusPill: FC<StatusPillProps> = ({
	Status,
	Color
}) => {

  return (
		<Pill color={Color}>{Status}</Pill>
  )
}


export default StatusPill


export const Pill = styled.div`
	background: ${props => props.color};
	padding: ${pxToRem(2.5)} ${pxToRem(7.5)} ${pxToRem(2.5)} ${pxToRem(7.5)};
	border: 2px solid ${props => props.color};
	border-radius: ${pxToRem(20)};
`