import { FC } from 'react'
import styled from 'styled-components';
import defaultTheme from '@app/ui/theme/default';
import StatusPill from '@app/ui/components/StatusPill';

export type WalletCellProps = {
	Wallet: string
	CurrentValue: string
	TwentyHoursAgo: string
}

export const WalletCellComponent: FC<WalletCellProps> = ({
	Wallet,
	CurrentValue,
	TwentyHoursAgo
}) => {

	let status
	let color
	if (CurrentValue > TwentyHoursAgo) {
		status = 'pumper'
		color = defaultTheme.colors.lightGreen
	} else if (CurrentValue < TwentyHoursAgo) {
		status = 'dumper'
		color = defaultTheme.colors.lightRed
	} else {
		status = 'holding'
		color = defaultTheme.colors.lightYellow
	}

  return (
		<WalletCell>
			{Wallet}
			<CellStasuses>
				<StatusPill Status={status} Color={color}/>
			</CellStasuses>
		</WalletCell>
  )
}

export default WalletCellComponent

const WalletCell = styled.td`
`

const CellStasuses = styled.div`
	display: flex;
	flex-direction: row;
`