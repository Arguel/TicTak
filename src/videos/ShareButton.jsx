import React from 'react';
import { ClearButton, SvgButton } from '../theme';

let ShareButton = ({ video }) => {
  
  return (
    <ClearButton>
      <SvgButton src="/share.svg" />
    </ClearButton>
  )
}

export default ShareButton;