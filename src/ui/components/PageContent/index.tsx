import { media } from 'styled-bootstrap-grid';
import pxToRem from '@app/ui/utils/pxToRem';
import styled from 'styled-components';

export const PageContent = styled.div`
  width: 100%;
  padding-left: ${pxToRem(50)};
  padding-right: ${pxToRem(50)};
  padding-top: ${pxToRem(60)};
  padding-bottom: ${pxToRem(60)};
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(15)};
  ${media.desktop`
    padding-left: ${pxToRem(50)};
    padding-right: ${pxToRem(275)};
    padding-top: ${pxToRem(100)};
    padding-bottom: ${pxToRem(114)};
    row-gap: ${pxToRem(30)};
  `}
`
