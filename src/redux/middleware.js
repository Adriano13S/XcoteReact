import {Buffer} from 'buffer';
import { mUpdate } from "./reducers";
import zlib from 'zlib';

// export const triggerFilter = store => next => action => {
//   next(action);
//   if(action.type === 'matches/Mupdate'){
//     store.dispatch(mFilter(['Fotbal', 'Tenis', 'Baschet', 'Esports']));
//   }
// };

const ws = new WebSocket('ws://localhost:4000/');

// export const openWS = store => next => action => {
//   ws.onmessage = (message) => store.dispatch(mUpdate(JSON.parse(message.data)));
//   next(action);
// };

export const openWS = store => next => action => {
  ws.onopen = () => ws.send('open');
  ws.onmessage = async (message) => {
    const result = await message.data
    const arrbuu = await result.arrayBuffer() // convert blob response to array buffer
    const buf = Buffer.from(arrbuu, 'utf-8'); // convert array buffert to buffer
    zlib.gunzip(buf, (error, data) => {  // unzip response buffer into uint8array
      store.dispatch(mUpdate(JSON.parse(data.toString()))); // convert uint8array to string then json parse it
    })
    ws.send('ok')
  };
  next(action);
};