import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import './style.css';

export default function ResponsiveDialog({ isOpen = false }) {
  const [open, setOpen] = React.useState(isOpen);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  let url = window.location.href;

  let endpoint = window.location.href;
  endpoint = endpoint.split('/');

  const endpoint_name = endpoint[endpoint.length - 1];
  url = window.location.href;
  console.log(endpoint.length);
  if (endpoint.length === 5) {
    url = window.location.href.replace(`/${endpoint_name}`, '');
  }

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="display-block">
      {/* <Button  onClick={handleClickOpen}>
        Open Meeting Info
      </Button> */}
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{'Copy this link to share with the other partipitant'}</DialogTitle>
        <DialogContent>
          <DialogContentText>{url}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={() => navigator.clipboard.writeText(url)} color="primary">
            Copy
          </Button>
          <Button variant="contained" onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
