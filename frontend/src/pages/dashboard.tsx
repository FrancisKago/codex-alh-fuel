import { useEffect, useState } from 'react';
import { getUserRole } from '../lib/auth';

export default function Dashboard() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    getUserRole().then(setRole);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Dashboard</h1>
      {role ? <p>Role: {role}</p> : <p>Not logged in</p>}
    </div>
  );
}
