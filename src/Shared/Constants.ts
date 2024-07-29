const STRING: string = 'Test';
export { STRING };

const ROUTES = {
  HOMEPAGE: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ABOUT: '/about-us',
};

const WILDCARD_ROUTES = {
  PUBLIC: ROUTES.HOMEPAGE,
  PRIVATE: ROUTES.LOGIN,
};

const ROUTES_CONFIG = {
  HOMEPAGE: {
    path: ROUTES.HOMEPAGE,
    title: 'Notifications System',
  },
};

const FIREBASE_COLLECTION = {
  NOTIFICATIONS: 'notifications',
};

const STRINGS = {
  NOTIFICATION_SENT: {
    SUCCESS: 'Notification sent successfully',
    FAILURE: 'Failed to send notification',
    GRANTED: 'Notification permission granted.',
    DENIED: 'Notification permission denied.',
    ENABLED: 'Notifications are already enabled.',
    BLOCKED: 'Notifications are blocked.',
    ERROR: 'Error requesting notification permission:',
  },
  NEW_NOTIFICATION: 'New Notification',
  NOTIFICATION_SYSTEM: 'Notification System',
  READ: 'Read',
  UNREAD: 'Unread',
};

const NOTIFICATION_STATUS = {
  GRANTED: 'granted',
}
export { ROUTES, WILDCARD_ROUTES, ROUTES_CONFIG, FIREBASE_COLLECTION, STRINGS, NOTIFICATION_STATUS };
