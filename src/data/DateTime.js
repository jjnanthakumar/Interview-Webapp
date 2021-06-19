import { pad } from "../utils/MathUtils";

export default class DateTime {
  getCurrentDateTime() {
    const currentdate = new Date();
    const currentdatetime =
      pad(currentdate.getMonth() + 1, 2) +
      "/" +
      pad(currentdate.getDate(), 2) +
      "/" +
      currentdate.getFullYear() +
      " " +
      pad(currentdate.getHours(), 2) +
      ":" +
      pad(currentdate.getMinutes(), 2) +
      ":" +
      pad(currentdate.getSeconds(), 2);
    return currentdatetime;
  }
}
