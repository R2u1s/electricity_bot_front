import React, { FC, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { ConfirmDialogType } from "../_types/common";
import { Stack } from "@mui/system";
import styles from "./styles.module.css";
import { MIN_LENGTH_REASON_TASK_DECLINE } from "../utils/constants";

type Props = {
  open: boolean;
  title: string;
  message?: string;
  type: ConfirmDialogType;
  cancelText?: string;
  confirmText?: string;
  onConfirm: (reason: string) => void;
  onCancel: () => void;
};

const ConfirmWithReasonDialog: FC<Props> = ({
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

  const [reasonText, setReasonText] = useState("");

  let cancel = cancelText ?? "Отмена";
  let confirm = confirmText ?? "Да";
  let cancelButtonColor:
    | "primary"
    | "error"
    | "inherit"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | undefined = type === ConfirmDialogType.danger ? "primary" : "error";
  let confirmButtonColor:
    | "primary"
    | "error"
    | "inherit"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | undefined = type === ConfirmDialogType.danger ? "error" : "primary";

  const confirmHandler = () => {
    onConfirm(reasonText);
  };

  useEffect(() => {
    setReasonText("");
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      PaperProps={{
        className: "down",
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
          minWidth: "240px",
        },
        "& .MuiDialogContent-root": {
          padding: "5px 25px 10px 25px",
        },
      }}
    >
      {title.length > 0 && <DialogTitle
        sx={{
          fontSize: "20px",
          fontWeight: 500,
          padding: 2,
          margin: "auto",
          textAlign: "center",
          minWidth: "350px",
          maxWidth: "450px",
        }}
      >
        {title}
      </DialogTitle>}
      <DialogContent>
        <Stack
          direction="column"
          spacing={0}
          justifyContent="center"
          alignItems="center"
        >
          {message && (
            <Typography variant="body1" sx={{ textAlign: "center", marginBottom:"8px" }} className="text_overflow_one text__modal">
              {message}
            </Typography>
          )}
          <TextField
            value={reasonText}
            onChange={(e) => setReasonText(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Stack>
      </DialogContent>
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
            disabled={reasonText.length < MIN_LENGTH_REASON_TASK_DECLINE}
            sx={{
              backgroundColor: theme.palette.common.blue,
              marginLeft: "0 !important",
            }}
            onClick={confirmHandler}
          >
            {confirm}
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmWithReasonDialog;
