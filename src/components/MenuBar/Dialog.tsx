import React, { PropsWithChildren } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';

interface AboutDialogProps {
  open: boolean;
  onClose(): void;
}

function AboutDialog({ open, onClose }: PropsWithChildren<AboutDialogProps>) {
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  let url = window.location.href;

  let endpoint = window.location.href;

  let endpointarr = endpoint.split('/');

  const endpoint_name = endpointarr[endpointarr.length - 1];
  url = window.location.href;
  // console.log(endpointarr)
  if (endpointarr.length === 5) {
    url = window.location.href.replace(`/${endpoint_name}`, '');
  }

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {

  //   setOpen(false);
  // };
  return (
    <div className="display-block">
      {/* <Button  onClick={handleClickOpen}>
        Open Meeting Info
      </Button> */}
      <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="xs">
        <DialogTitle id="responsive-dialog-title">{'Copy this link to share with the other partipitant'}</DialogTitle>
        <DialogContent>
          <DialogContentText>{url}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => navigator.clipboard.writeText(url)} variant="contained" color="primary">
            Copy
          </Button>
          <Button onClick={onClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AboutDialog;
