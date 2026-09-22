import { memo } from 'react'
import { useStoreState } from '../hooks';
import { mapColors, NotificationIcon } from "./NotificationIcon.tsx";

const Notification = memo(() => {
  const { message, notificationType } = useStoreState((store) => store.app);

  if (!message) return null;

  const colorClasses = mapColors[notificationType] ?? mapColors.info;

  return (
      <div className="fixed top-20 right-0 left-0 z-50 flex justify-center px-4 pointer-events-none lg:justify-end">
        <div
            role="alert"
            aria-live="polite"
            className={`notification-selector pointer-events-auto flex w-full max-w-sm items-center justify-center gap-x-2 rounded-lg p-4 text-sm font-semibold shadow-md focus:outline-none ${colorClasses}`}
        >
          <NotificationIcon type={notificationType} />
          <p className="text-sm text-center sm:text-base">{message}</p>
        </div>
      </div>
  );
});

export default Notification;
