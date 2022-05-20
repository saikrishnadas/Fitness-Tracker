import { atom } from 'recoil';

export const chartState = atom({
  key: 'chartState', // unique ID (with respect to other atoms/selectors)
  default: 'calories-burned', // default value (aka initial value)
});
