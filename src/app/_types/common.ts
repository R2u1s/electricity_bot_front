export type UIMode = "light" | "dark"

export enum TaskType {
  new = 'new',
  completed = 'completed'
}

export const enum AlertType {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error'
}

export type AlertMessage = {
  text: string
  type?: AlertType
  hideAfter?: number
}

export const enum ConfirmDialogType {
  regular,
  danger
}

export type ConfirmDialogData = {
  title: string
  message?: string
  type?: ConfirmDialogType
  confirmText?: string
  cancelText?: string
}

export interface UIState {
  rootPath: string
}