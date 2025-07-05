export const savePending = async (key: string, data: unknown) => {
  const existing = JSON.parse(localStorage.getItem(key) || '[]');
  existing.push(data);
  localStorage.setItem(key, JSON.stringify(existing));
};

export const flushPending = async (
  key: string,
  callback: (item: unknown) => Promise<void>
) => {
  const existing = JSON.parse(localStorage.getItem(key) || '[]');
  if (existing.length === 0) return;
  callback: (item: any) => Promise<void>
) => {
  const existing = JSON.parse(localStorage.getItem(key) || '[]');
  if (existing.length === 0) return;
export const flushPending = async (key: string, callback: (item: any) => Promise<void>) => {
  const existing = JSON.parse(localStorage.getItem(key) || '[]');
  for (const item of existing) {
    await callback(item);
  }
  localStorage.removeItem(key);
};
