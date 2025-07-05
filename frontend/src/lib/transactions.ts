import { supabase } from './supabaseClient';
import { savePending } from './offline';

export interface FuelTransaction {
  request_id: string;
  actual_quantity: number;
  location: string;
}

export async function recordTransaction(data: FuelTransaction) {
  try {
    const { error } = await supabase.from('fuel_transactions').insert([data]);
    if (error) throw error;
  } catch {
    await savePending('fuel', data);
  }
}
