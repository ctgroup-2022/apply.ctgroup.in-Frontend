import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp, Timestamp } from "firebase/firestore";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

// Your web app's Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);


// Disable app verification for testing environments
if (process.env.NODE_ENV === "development") {
  auth.settings.appVerificationDisabledForTesting = true;
}

/**
 * Export Firestore collection data to Excel file
 * @param {string} collectionName - The name of the collection to export
 * @param {string} fileName - The name of the output Excel file (without extension)
 * @returns {Promise<void>}
 */
export async function exportFirestoreToExcel(collectionName, fileName = 'FirestoreData') {
  try {
    // Dynamically import xlsx library (to avoid including it in the main bundle)
    const XLSX = await import('xlsx');
    
    // Get the collection data
    const querySnapshot = await getDocs(collection(db, collectionName));
    let data = [];

    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      
      // Process document data to handle timestamps
      const processedData = {};
      processedData.id = doc.id;
      
      // Process each field in the document
      Object.keys(docData).forEach(key => {
        // Check if the field is a Firebase Timestamp
        if (docData[key] instanceof Timestamp) {
          // Convert Firebase Timestamp to JavaScript Date
          const date = docData[key].toDate();
          // Format date as YYYY-MM-DD HH:MM:SS
          processedData[key] = date.toLocaleString();
        } else {
          // Keep other fields as is
          processedData[key] = docData[key];
        }
      });
      
      data.push(processedData);
    });

    if (data.length === 0) {
      console.warn(`No data found in collection "${collectionName}"`);
      return;
    }

    // Create worksheet and workbook
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    
    // Write to file and trigger download
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
    
    console.log(`Successfully exported ${data.length} records to ${fileName}.xlsx`);
  } catch (error) {
    console.error("Error exporting to Excel:", error);
    throw error;
  }
}

export {
  db,
  collection,
  addDoc,
  getDocs,
  auth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  serverTimestamp,
  Timestamp,  // Export Timestamp for type checking
};