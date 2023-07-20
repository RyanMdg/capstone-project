import React from 'react';
import ActiveUsersTable from '../components/ActiveCostumers';

const CostumersInput = () => {
  const activeUsers = [
    { id: 1002, name: 'Ryan Degua', email: 'RyanD@gmail.com' },
    { id: 2001, name: 'Jelleca Munar', email: 'jelmunar@gmail.com' },
    { id: 1112, name: 'Clitzer Clitzer', email: 'Clitzer@gmail.com' },
    { id: 2211, name: 'Boy Abunda', email: 'BoyB@gmail.com' },
    { id: 1231, name: 'John Lyod', email: 'johnl@gmail.com' },
    { id: 2453, name: 'Mary jane Yun ', email: 'Mjane@gmail.com' },
  
  ];

  return (
    <div className='w-full md:col-span-1 lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg bg-white'>
      <h1 className="text-1xl font-bold">Active Costumers</h1>
      <ActiveUsersTable activeUsers={activeUsers} />
    </div>
  );
};

export default CostumersInput;
