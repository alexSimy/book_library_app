import { Add } from '@mui/icons-material';
import { Fab, Tooltip } from '@mui/material';

import { AddNewBookButtonProps } from '../../shared/types/Types';
import { useContext } from 'react';
import { StaticTextsContext } from '../../routes/RootLayout/RootLayout';

function AddNewBookButton({ onClick }: AddNewBookButtonProps) {
  const staticTexts = useContext(StaticTextsContext);
  return (
    <Tooltip
      title={'Add new book!'}
      sx={{ position: 'fixed', right: '4rem', bottom: '4rem' }}
    >
      <Fab variant='extended' color='success' onClick={onClick}>
        {staticTexts.addNewBookButton}
        <Add />
      </Fab>
    </Tooltip>
  );
}

export default AddNewBookButton;
