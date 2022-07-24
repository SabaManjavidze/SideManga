import axios from "axios";
import { main_url } from "../Variables";
export default async function getHome() {
  const { data } = await axios(`${main_url}/homepage`);
  return data;
}
