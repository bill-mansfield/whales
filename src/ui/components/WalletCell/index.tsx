import { FC } from 'react'
import styled from 'styled-components';
import defaultTheme from '@app/ui/theme/default';
import StatusPill from '@app/ui/components/StatusPill';
import { whaleStatus } from '@app/ui/utils/whaleStatus'

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
	switch (whaleStatus(+TwentyHoursAgo, +CurrentValue)) {
		case 0:
			status = 'holding'
			color = defaultTheme.colors.lightYellow
			break
		case 1:
			status = 'pumper'
			color = defaultTheme.colors.lightGreen
			break
		case -1:
			status = 'dumper'
			color = defaultTheme.colors.lightRed
			break
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