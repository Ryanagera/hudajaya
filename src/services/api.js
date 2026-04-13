/**
 * API Service untuk mengatur semua API calls
 * Dapat diexpand dengan axios atau fetch wrapper
 */

class ApiService {
  constructor(
    baseURL = import.meta.env.VITE_API_URL || "https://api.example.com",
  ) {
    this.baseURL = baseURL;
  }

  /**
   * Fetch data dari server
   */
  async fetchData(endpoint) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }

  /**
   * Post data ke server
   */
  async postData(endpoint, data) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Post error:", error);
      throw error;
    }
  }
}

export default new ApiService();
