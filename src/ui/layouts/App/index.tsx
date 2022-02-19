import { FC } from 'react'
import SiteContainer, { SiteContainerProps } from '@app/ui/components/SiteContainer'
import React from 'react'
import { GlobalStyle } from '@app/ui/styles/global';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeWrapper } from '@app/ui/theme/Context';
import REMScaling from '@app/ui/styles/REMScaling';

export const AppLayout: FC<SiteContainerProps> = ({
  children,
}) => {

	const gridTheme: any = {}

  return (
		<ThemeWrapper>
			<GlobalStyle />
			<REMScaling>
				<GridThemeProvider gridTheme={gridTheme}>
					<SiteContainer>
						{children}
					</SiteContainer>
				</GridThemeProvider>
			</REMScaling>
		</ThemeWrapper>
  )
}

export default AppLayout
