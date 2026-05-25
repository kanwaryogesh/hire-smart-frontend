const PREFIX = "talentai_";

export const storage = {
  set(key, value) {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  },

  get(key) {
    const item = localStorage.getItem(PREFIX + key);
    if (!item) return null;

    try {
      return JSON.parse(item);
    } catch {
      return item;
    }
  },

  remove(key) {
    localStorage.removeItem(PREFIX + key);
  },

  clear() {
    Object.keys(localStorage)
      .filter((k) => k.startsWith(PREFIX))
      .forEach((k) => localStorage.removeItem(k));
  },
};