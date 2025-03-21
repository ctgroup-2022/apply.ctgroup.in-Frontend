import React from 'react';
import DataExport from './DataExport';

const AdminPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Admin Dashboard</h1>
      
      <div className="grid gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-100">Data Management</h2>
          <DataExport />
        </div>
        
        {/* You can add more admin sections here */}
      </div>
    </div>
  );
};

export default AdminPage;