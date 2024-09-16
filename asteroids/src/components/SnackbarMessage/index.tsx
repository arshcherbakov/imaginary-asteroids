import Snackbar from '@mui/material/Snackbar';
import { StyledSnackbarContent } from './style';

interface SnackbarMessageProp {
  message: string | null;
  open: boolean;
  snackbarClose: () => void;
}

const SnackbarMessage: React.FC<SnackbarMessageProp> = ({
  message,
  open,
  snackbarClose,
}) => {
  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={snackbarClose}>
      <StyledSnackbarContent message={message} />
    </Snackbar>
  );
};

export default SnackbarMessage;
