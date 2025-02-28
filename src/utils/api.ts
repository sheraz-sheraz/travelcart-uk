import axios from "axios";

const AMADEUS_AUTH_URL = "https://test.api.amadeus.com/v1/security/oauth2/token";
const AMADEUS_BASE_URL = "https://test.api.amadeus.com/v2";

// Load API credentials from environment variables
const API_KEY = import.meta.env.VITE_AMADEUS_API_KEY;
const SECRET_KEY = import.meta.env.VITE_AMADEUS_SECRET_KEY;

// Function to obtain an access token
const getAccessToken = async (): Promise<string> => {
  try {
    const response = await axios.post(
      AMADEUS_AUTH_URL,
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: API_KEY,
        client_secret: SECRET_KEY,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching Amadeus token:", error);
    throw new Error("Authorization failed");
  }
};

// Create Axios instance
const amadeusAPI = axios.create({
  baseURL: AMADEUS_BASE_URL,
});

// Add a request interceptor to dynamically set the token
amadeusAPI.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Function to search for flights
export const searchFlights = async (params: Record<string, any>) => {
  try {
    const response = await amadeusAPI.get("/shopping/flight-offers", { params });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};

export default amadeusAPI;
