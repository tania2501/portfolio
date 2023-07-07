import axios from 'axios';
import { DataFormType } from '../Contact/Contact';
const instance = axios.create({
  baseURL: 'https://email-node-js.vercel.app',
})
export const sendMessage = (data: DataFormType) => {
  return instance.post('/sendMessage', data)
}