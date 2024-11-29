import React, { FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
  Stack,
  useTheme,
} from "@mui/material";
import { ConfirmDialogType } from "../_types/common";
import styles from "./styles.module.css";

type Props = {
  open: boolean;
  title: string;
  message?: string;
  type: ConfirmDialogType;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmDialog: FC<Props> = ({
  open,
  title,
  message,
  type,
  cancelText,
  confirmText,
  onConfirm,
  onCancel,
}) => {
  const theme = useTheme();

  let cancel = cancelText ?? "Отмена";
  let confirm = confirmText ?? "Да";

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      PaperProps={{
        className: 'down',
      }}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0, 0, 0, 0.85)",
        },
      }}
      sx={{
        "& .MuiPaper-root": {
          margin: "20px 20px 30px 20px",
          padding: "15px 10px 0px 10px",
          borderRadius: "24px",
          minWidth: "240px"
        },
        "& .MuiDialogContent-root": {
          padding: "5px 25px 10px 25px",
        },
      }}
    >
      {title.length > 0 && <DialogTitle
        className="text_overflow_one text__modal"
        sx={{
          fontSize: "24px",
          fontWeight: 500,
          padding: 2,
          margin: "auto",
          textAlign: "center",
          minWidth: "300px",
          maxWidth: "350px",
        }}
      >
        {title}
      </DialogTitle>}
      {message && (
        <DialogContent>
          <DialogContentText>
            <Typography variant="body1" sx={{ textAlign: "center" }} className={"text__modal"}>
              {message}
            </Typography>
          </DialogContentText>
        </DialogContent>
      )}
      <DialogActions sx={{ paddingBottom: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          gap="8px"
        >
          <Button
            variant="contained"
            size="medium"
            className={styles["task__button"]}
            sx={{
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.background.paper,
            }}
            onClick={onCancel}
          >
            {cancel}
          </Button>
          <Button
            variant="contained"
            size="medium"
            className={styles["task__button"]}
            sx={{
              backgroundColor: theme.palette.common.blue,
              marginLeft: "0 !important",
            }}
            onClick={onConfirm}
          >
            {confirm}
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
