import axios from "axios";

export type InquiryPayload = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL as string | undefined;

export const apiClient = axios.create({
  baseURL: apiBaseUrl || "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function submitInquiry(payload: InquiryPayload) {
  if (!apiBaseUrl) {
    await new Promise((resolve) => window.setTimeout(resolve, 650));
    return {
      data: {
        ok: true,
        message: "Inquiry queued locally for backend integration.",
        payload,
      },
    };
  }

  return apiClient.post("/enquiries", payload);
}
