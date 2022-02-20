import styled from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import pxToRem from '@app/ui/utils/pxToRem';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(20)};
  ${media.desktop`
    row-gap: ${pxToRem(42)};
  `}
`
