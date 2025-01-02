import axios from 'axios';

const BASE_URL = 'http://localhost:8006';

export const sendRegisterOTP = async (mobile, countryCode,qrid) => {
  try {
    const response = await axios.post(`${BASE_URL}/send-register-otp`, {
      qr_id:qrid,
      phone_number: mobile,
      phone_country_code: countryCode,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const verifyRegisterOTP = async (mobile, otp, countryCode,qrid) => {
  try {
    const response = await axios.post(`${BASE_URL}/verify-register-otp`, {
      qr_id:qrid,
      phone_number:mobile,
      otp_code: otp,
      phone_country_code: countryCode,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
