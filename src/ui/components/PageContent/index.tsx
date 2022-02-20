import { media } from 'styled-bootstrap-grid';
import pxToRem from '@app/ui/utils/pxToRem';
import styled from 'styled-components';

export const PageContent = styled.div`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(15)};
  ${media.desktop`
    padding-left: ${pxToRem(300)};
    padding-right: ${pxToRem(300)};
    padding-top: ${pxToRem(100)};
    padding-bottom: ${pxToRem(114)};
    row-gap: ${pxToRem(30)};
  `}
`
