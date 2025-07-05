import { supabase } from './supabaseClient';
import { savePending } from './offline';

export interface FuelRequest {
  vehicle_id: string;
  quantity: number;
  reason: string;
  worksite: string;
  odometer_photo: string;
}

export async function createRequest(data: FuelRequest) {
  try {
    const { error } = await supabase.from('fuel_requests').insert([data]);
    if (error) throw error;
  } catch (err) {
    // if offline or error, store locally
    await savePending('requests', data);
  }
}
