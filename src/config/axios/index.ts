import axios from 'axios';
import { PRODUCTION_URL } from '@/utils';

export const axiosInstance = axios.create({
  baseURL: PRODUCTION_URL,
});
