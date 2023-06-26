import {
  Button, Container, Dialog, DialogActions, DialogContent, DialogTitle,
  FormControl, FormControlLabel, Radio, RadioGroup, TextField
}
  from "@mui/material";
import { Children, useState } from "react";

export default function NewAccountDialog({ open, handleClose }) {
  const [value, setValue] = useState('Bank');
  const [accountName, setAccountName] = useState('');
  const [activePage, setActivePage] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleNext = () => {
    setActivePage(activePage + 1);
  }

  const handleBack = () => {
    setActivePage(activePage - 1);
  }

  const handleSave = () => {
    console.log('value: ', value, ', accoutName: ', accountName);
    handleCloseDialog();
  };

  const handleCloseDialog = () => {
    handleClose();
    setActivePage(0);
    setValue('Bank');
    setAccountName('');
  };

  const Page1 = () => {
    return (
      <FormControl>
        <RadioGroup
          aria-labelledby='choose-an-account-type'
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value='Bank' control={<Radio />} label='Banking' />
          <FormControlLabel
            value='CCard' control={<Radio />} label='Credit card' />
          <FormControlLabel
            value='Invst' control={<Radio />} label='Investment' />
          <FormControlLabel
            value='Other' control={<Radio />}
            label='Other account type (such as loan or asset)' />

        </RadioGroup>
      </FormControl>
    );
  };

  const Page2 = () => {
    return (
      <FormControl>
        <TextField
          id='name'
          required
          fullWidth
          variant='outlined'
          value={accountName}
          onChange={(event) => setAccountName(event.target.value)}
          label='Account Name'
          placeholder={'Name of Account'}
        />
      </FormControl>
    );
  };

  const NewAccountWizard = ({ children, activePage }) => {
    const pages = Children.toArray(children);
    let currentPage = pages[activePage];

    return (
      <div>
        <div>
          {currentPage}
        </div>
      </div>
    );
  }

  return (
    <Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose an account type</DialogTitle>

        <DialogContent>

          <NewAccountWizard activePage={activePage}>
            <Page1 />
            <Page2 />
          </NewAccountWizard>

        </DialogContent>

        <DialogActions>
          {activePage > 0 ? <Button onClick={handleBack}>Back</Button> : null}
          <Button onClick={handleCloseDialog}>Cancel</Button>
          {activePage < 1 ?
            <Button onClick={handleNext}>Next</Button>
            :
            <Button onClick={handleSave}>Save</Button>}
        </DialogActions>
      </Dialog>
    </Container>
  );
}