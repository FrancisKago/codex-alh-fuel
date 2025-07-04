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
    }
  }, []);

    }
  }, []);

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">ALH Fuel Management</h1>
    </div>
  );
}
