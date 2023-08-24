class LocalStorage {
  /**
   * Save data to Local Storage.
   * @param key - The key under which the data will be stored.
   * @param value - The data to be stored.
   */
  static save<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Load data from Local Storage.
   * @param key - The key of the data to retrieve.
   * @returns The retrieved data, or null if the key doesn't exist.
   */
  static load<T>(key: string): T | null {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : null;
  }

  /**
   * Remove data from Local Storage.
   * @param key - The key of the data to remove.
   */
  static remove(key: string): void {
    localStorage.removeItem(key);
  }
}

export { LocalStorage };
