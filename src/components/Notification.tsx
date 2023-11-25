import { useStoreState } from '../hooks';
import { AlertType } from '../store/app';

const mapColors = (type: AlertType) => {
  switch (type) {
    case 'info':
      return 'text-blue-100 bg-blue-600 focus:shadow-blue-500';
    case 'danger':
      return 'text-red-100 bg-red-600 focus:shadow-red-500';
    case 'success':
      return 'text-green-100 bg-green-600 focus:shadow-green-500';
    case 'warning':
      return 'text-yellow-100 bg-yellow-600 focus:shadow-yellow-500';
  }
};

export const Notification = () => {
  const { message, notificationType } = useStoreState((store) => store.app);

  return (
    <div>
      {message !== null && (
        <div className="absolute flex justify-center w-full sm:w-96 lg:justify-end lg:self-end">
          <div
            className={`items-center justify-center p-4 text-sm font-semibold rounded-lg shadow-md placeholder:flex gap-x-1 focus:outline-none  ${mapColors(
              notificationType
            )}`}
          >
            <p>
              {notificationType === 'success' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              )}

              {notificationType === 'danger' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}

              {notificationType === 'info' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}

              {notificationType === 'warning' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              )}
            </p>
            <p className="text-sm text-center sm:text-base">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};
