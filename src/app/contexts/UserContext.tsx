import React, { createContext, ReactNode, useEffect, useState } from "react";
import Loader from "../ui-components/Loader";
import {
  AlertMessage,
  AlertType,
  ConfirmDialogData,
  ConfirmDialogType
} from "../_types/common";
import MessageAlert from "../ui-components/MessageAlert";
import ConfirmDialog from "../ui-components/ConfirmDialog";
import ConfirmWithReasonDialog from "../ui-components/ConfirmWithReasonDialog";

export const UserContext = createContext({

  confirmAction: (
    _title: string,
    _message?: string,
    type?: ConfirmDialogType,
    _confirmText?: string,
    _cancelText?: string
  ): Promise<boolean> => {
    return Promise.resolve(false);
  },
  confirmWithReason: (
    _title: string,
    _message?: string,
    type?: ConfirmDialogType,
    _confirmText?: string,
    _cancelText?: string
  ): Promise<{ confirmed: boolean; reason?: string | undefined }> => {
    return Promise.resolve({ confirmed: false });
  },
  confirmTask: (text:string) => {},
  declineTask: (text:string) => {}
});

let confirmActionHandler: (_confirmed: boolean) => void = (
  _confirmed: boolean
) => {};
let confirmWithReasonHandler: (
  _confirmed: boolean,
  _reason: string | undefined
) => void = (_confirmed: boolean, _reason: string | undefined) => {};

export const UserProvider = ({ children }: { children: ReactNode }) => {

  const [alertMessage, setAlertMessage] = useState<AlertMessage>({
    text: "",
    type: AlertType.info,
  });
  const [alertIsOpened, setAlertIsOpened] = useState(false);
  const [confirmDialogIsOpened, setConfirmDialogIsOpened] = useState(false);
  const [confirmWithReasonDialogIsOpened, setConfirmWithReasonDialogIsOpened] =
    useState(false);
  const [confirmDialogData, setConfirmDialogData] =
    useState<ConfirmDialogData>();

  const onActionConfirm = () => {
    setConfirmDialogIsOpened(false);
    confirmActionHandler(true);
  };

  const onActionConfirmCancel = () => {
    setConfirmDialogIsOpened(false);
    confirmActionHandler(false);
  };

  const confirmAction = (
    title: string,
    message?: string,
    type?: ConfirmDialogType,
    confirmText?: string,
    cancelText?: string
  ): Promise<boolean> => {
    setConfirmDialogData({ title, message, type, confirmText, cancelText });
    return new Promise((resolve) => {
      confirmActionHandler = (confirmed: boolean) => resolve(confirmed);
      setConfirmDialogIsOpened(true);
    });
  };

  const onActionReasonConfirm = (reason: string) => {
    setConfirmWithReasonDialogIsOpened(false);
    confirmWithReasonHandler(true, reason);
  };

  const onActionReasonConfirmCancel = () => {
    setConfirmWithReasonDialogIsOpened(false);
    confirmWithReasonHandler(false, undefined);
  };

  const confirmWithReason = (
    title: string,
    message?: string,
    type?: ConfirmDialogType,
    confirmText?: string,
    cancelText?: string
  ): Promise<{ confirmed: boolean; reason?: string | undefined }> => {
    setConfirmDialogData({ title, message, type, confirmText, cancelText });
    return new Promise((resolve) => {
      confirmWithReasonHandler = (
        confirmed: boolean,
        reason: string | undefined
      ) => resolve({ confirmed, reason });
      setConfirmWithReasonDialogIsOpened(true);
    });
  };

  const confirmTask: (text: string) => void = (text: string) => {
    (async () => {
      if (
        await confirmAction(
          "",
          text,
          ConfirmDialogType.danger,
          "Да"
        )
      )
        {/* signOutHandler(); */}
    })();
  };

  const declineTask: (text: string) => void = (text: string) => {
    (async () => {
      if (
        await confirmWithReason(
          "",
          text,
          ConfirmDialogType.danger,
          "Подтвердить"
        )
      )
        {/* signOutHandler(); */}
    })();
  };

  const providerValue = {
    confirmAction,
    confirmWithReason,
    confirmTask,
    declineTask
  };

  return false ? (
    <Loader />
  ) : (
    <UserContext.Provider value={providerValue}>
      <>
        {children}
        <MessageAlert
          data={alertMessage}
          isOpened={alertIsOpened}
          setIsOpened={setAlertIsOpened}
        />
        <ConfirmDialog
          open={confirmDialogIsOpened}
          title={confirmDialogData?.title ?? "Confirm action"}
          message={confirmDialogData?.message}
          type={confirmDialogData?.type ?? ConfirmDialogType.regular}
          cancelText={confirmDialogData?.cancelText}
          confirmText={confirmDialogData?.confirmText}
          onConfirm={onActionConfirm}
          onCancel={onActionConfirmCancel}
        />
        <ConfirmWithReasonDialog
          open={confirmWithReasonDialogIsOpened}
          title={confirmDialogData?.title ?? "Confirm action"}
          message={confirmDialogData?.message}
          type={confirmDialogData?.type ?? ConfirmDialogType.regular}
          cancelText={confirmDialogData?.cancelText}
          confirmText={confirmDialogData?.confirmText}
          onConfirm={onActionReasonConfirm}
          onCancel={onActionReasonConfirmCancel}
        />
      </>
    </UserContext.Provider>
  );
};
