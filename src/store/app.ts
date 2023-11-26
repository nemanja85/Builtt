import { action, type Action } from 'easy-peasy';

export type AlertType = 'success' | 'danger' | 'info' | 'warning';

type NotificationPayload = {
  message: string;
  notificationType: AlertType;
  isVisiable: boolean;
};

export type AppState = {
  message: string | null;
  notificationType: AlertType;
  isVisiable: boolean;
  setNotification: Action<AppState, NotificationPayload>;
  dismissNotification: Action<AppState, boolean>;
};

export const appStore: AppState = {
  message: null,
  notificationType: 'success',
  isVisiable: false,
  setNotification: action((state, payload) => {
    state.message = payload.message;
    state.notificationType = payload.notificationType;
    state.isVisiable = true;
  }),
  dismissNotification: action((state) => {
    state.isVisiable = false;
  }),
};
