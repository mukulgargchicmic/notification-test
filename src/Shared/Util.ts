import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase.js'; // Ensure you have configured Firebase and Firestore
import { NOTIFICATION_STATUS, STRINGS } from './Constants.js';

interface FirestoreUpdateData {
  [key: string]: boolean;
}

const updateFirestoreDocument = async (
  collectionName: string,
  documentId: string,
  updateData: FirestoreUpdateData
): Promise<void> => {
  const documentRef = doc(db, collectionName, documentId);
  await updateDoc(documentRef, updateData);
};

const requestNotificationPermission = async () => {
  try {
    if (Notification.permission === 'default') {
      const permission = await Notification.requestPermission();
      if (permission === NOTIFICATION_STATUS.GRANTED) {
        console.log(STRINGS.NOTIFICATION_SENT.GRANTED);
      } else {
        console.log(STRINGS.NOTIFICATION_SENT.DENIED);
      }
    } else if (Notification.permission === NOTIFICATION_STATUS.GRANTED) {
      console.log(STRINGS.NOTIFICATION_SENT.ENABLED);
    } else {
      console.log(STRINGS.NOTIFICATION_SENT.DENIED);
    }
  } catch (error) {
    console.error(STRINGS.NOTIFICATION_SENT.ERROR, error);
  }
};

const UTILS = { updateFirestoreDocument, requestNotificationPermission }
export default UTILS;
