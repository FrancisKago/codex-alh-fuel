import { useEffect, useState } from 'react';
import { flushPending } from '../lib/offline';

export default function Home() {
  const [online, setOnline] = useState<boolean>(typeof navigator !== 'undefined' ? navigator.onLine : true);

  useEffect(() => {
    const sync = () => {
import { useEffect } from 'react';
import { flushPending } from '../lib/offline';

export default function Home() {
  useEffect(() => {
    if (navigator.onLine) {
      flushPending('fuel', async (item) => {
        await fetch('/api/fuel', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item),
        });
      });
      flushPending('requests', async (item) => {
        await fetch('/api/request', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item),
        });
      });
    };

    const handleOnline = () => {
      setOnline(true);
      sync();
    };

    const handleOffline = () => setOnline(false);

    if (navigator.onLine) {
      sync();
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">ALH Fuel Management</h1>
      <p className="mt-2 text-sm text-gray-600">Status: {online ? 'Online' : 'Offline'}</p>
    </div>
  );
}
