import { action, type Action } from 'easy-peasy';

export type AlertType = 'success' | 'danger' | 'info' | 'warning';

export type NotificationPayload = {
  message: string;
  notificationType: AlertType;
};

export type AppState = {
  message: string | null;
  notificationType: AlertType;
  setNotification: Action<AppState, NotificationPayload>;
  dismissNotification: Action<AppState>;
};

export const appStore: AppState = {
  message: null,
  notificationType: 'success',

  setNotification: action((state, payload) => {
    state.message = payload.message;
    state.notificationType = payload.notificationType;
  }),

  dismissNotification: action((state) => {
    state.message = null;
    state.notificationType = 'success';
  }),
};
