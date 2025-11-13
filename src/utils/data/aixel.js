// function sendEvent(event, data) {
//   if(typeof window === 'undefined' || typeof aixel === 'undefined') {
//     return;
//   }
// 	aixel.events.push(event, data);
// }



export function sendEvent(event, data) {
  if (typeof window === 'undefined' || typeof aixel === 'undefined') {
    return;
  }
  window.aixel.track(event, data);
}

export function identifyProfile(id, data) {
  if (typeof window === 'undefined' || typeof aixel === 'undefined') {
    return;
  }
  window.aixel.identify(id, data);
}
