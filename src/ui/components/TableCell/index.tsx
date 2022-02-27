import { FC } from 'react'
import styled from 'styled-components';
import defaultTheme from '@app/ui/theme/default';

export type TableCellProps = {
	CellValue: string
	PreviousCellValue: string
}

export const TableCell: FC<TableCellProps> = ({
	CellValue,
	PreviousCellValue,
}) => {

	const cellValueInt: number = +CellValue
	const previousCellValueInt: number = +PreviousCellValue

  return (
		<>
		{cellValueInt === previousCellValueInt ? 
			<YellowCell>{CellValue}</YellowCell>
		: 
			cellValueInt > previousCellValueInt ?
			<GreenCell>{CellValue}</GreenCell>
		:
			<RedCell>{CellValue}</RedCell>}
		</>
  )
}


export default TableCell

const GreenCell = styled.td`
	background-color: ${defaultTheme.colors.lightGreen};
`

const RedCell = styled.td`
	background-color: ${defaultTheme.colors.lightRed};
`

const YellowCell = styled.td`
	background-color: ${defaultTheme.colors.lightYellow};
`