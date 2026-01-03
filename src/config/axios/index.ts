import { PRODUCTION_URL } from '@/constants/url';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: PRODUCTION_URL,
});
