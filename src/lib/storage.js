/*
  GitHub Pages is a static host, so the original window.storage API
  has been replaced with browser localStorage.

  IMPORTANT:
  localStorage is per browser/device. It is NOT a shared database between
  visitors. For real multi-user client accounts, connect these helpers to
  a backend such as Supabase/Firebase or your own API.
*/

export async function safeGet(key) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

export async function safeSet(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}