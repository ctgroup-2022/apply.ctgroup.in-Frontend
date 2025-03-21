import React, { useState } from 'react';
import { exportFirestoreToExcel } from '../firebase/firebase';

const DataExport = () => {
  const [collection, setCollection] = useState('form_submissions');
  const [fileName, setFileName] = useState('AdmissionData');
  const [isExporting, setIsExporting] = useState(false);
  const [exportMessage, setExportMessage] = useState('');

  const handleExport = async () => {
    try {
      setIsExporting(true);
      setExportMessage('Exporting data...');
      
      // Call the export function and get the blob or data back
      const excelData = await exportFirestoreToExcel(collection, fileName);
      
      // If the function returns a Blob directly, use it
      if (excelData instanceof Blob) {
        // Create a download link and trigger click
        const url = URL.createObjectURL(excelData);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${fileName}.xlsx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } 
      // If it returns an array or object, convert to Excel and download
      else if (excelData) {
        // Assuming exportFirestoreToExcel already handles the download
        console.log("Data received:", excelData);
      }
      
      setExportMessage('Export successful! Check your downloads folder.');
    } catch (error) {
      console.error('Export failed:', error);
      setExportMessage(`Export failed: ${error.message}`);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800">
      <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">
        Export Firestore Data to Excel
      </h2>
      
      <div className="mb-4">
        <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
          Collection Name:
          <input
            type="text"
            value={collection}
            onChange={(e) => setCollection(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-sm border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="e.g. formSubmissions"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
          File Name:
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-sm border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="e.g. FormData"
          />
        </label>
      </div>

      <button
        onClick={handleExport}
        disabled={isExporting || !collection}
        className={`px-4 py-2 text-white rounded ${
          isExporting || !collection
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isExporting ? 'Exporting...' : 'Export to Excel'}
      </button>

      {exportMessage && (
        <div className={`mt-3 text-sm ${exportMessage.includes('failed') ? 'text-red-500' : 'text-green-500'}`}>
          {exportMessage}
        </div>
      )}
    </div>
  );
};

export default DataExport;