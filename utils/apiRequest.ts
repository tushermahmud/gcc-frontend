import axios from "axios";
export const saveBrochureData = async (data: any) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  if (clientSecret) {
    headers["client-secret"] = clientSecret;
  }
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/brochure`,
    data,
    {
      headers: headers,
    }
  );
};

export const saveRequestDemoData = async (data: any) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  if (clientSecret) {
    headers["client-secret"] = clientSecret;
  }
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/request-demo`,
    data,
    {
      headers: headers,
    }
  );
  console.log(response)
};

export const saveDownloadReportData = async (data: any) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  if (clientSecret) {
    headers["client-secret"] = clientSecret;
  }
  try {
    const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/download-report`,
        data,
        {
          headers: headers,
        }
      );
      return response
  } catch (error) {
    return error
  }
  
};
