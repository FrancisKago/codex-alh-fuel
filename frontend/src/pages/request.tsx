import { useState } from 'react';
import { createRequest } from '../lib/requests';

export default function FuelRequestPage() {
  const [vehicle, setVehicle] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [reason, setReason] = useState('');
  const [worksite, setWorksite] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createRequest({
      vehicle_id: vehicle,
      quantity,
      reason,
      worksite,
      odometer_photo: '',
    });
    setMessage('Demande envoyée');
  };

  return (
    <div className="p-4 max-w-md">
      <h1 className="text-lg font-semibold mb-4">Nouvelle demande</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          className="border p-2"
          placeholder="Véhicule"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        />
        <input
          className="border p-2"
          type="number"
          placeholder="Quantité (L)"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <input
          className="border p-2"
          placeholder="Raison"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <input
          className="border p-2"
          placeholder="Chantier"
          value={worksite}
          onChange={(e) => setWorksite(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Envoyer
        </button>
      </form>
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
}
