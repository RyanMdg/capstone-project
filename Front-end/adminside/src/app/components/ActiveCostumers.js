import React from 'react';

const ActiveUsersTable = ({ activeUsers }) => {
  return (
    <div className="overflow-x-auto">
      <table className="border border-collapse">
        <thead>
          <tr className="bg-blue-200">
            <th className="border p-2">User ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email address</th>
          </tr>
        </thead>
        <tbody>
          {activeUsers.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveUsersTable;
