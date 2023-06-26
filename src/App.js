import { Button } from '@mui/material';
import { useState } from 'react';
import NewAccountDialog from './components/new_account';



function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Button
        variant='text'
        onClick={handleClick}
      >
        Open Dialog
      </Button>

      <NewAccountDialog open={open} handleClose={handleClose}/>

    </div>
  );
}

export default App;
