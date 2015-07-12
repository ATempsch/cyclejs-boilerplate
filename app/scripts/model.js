import Cycle from '@cycle/core';

function makeModification$(intent) {
  let iuztMod$ = intent.iuzt$.map(() => (data) => {
    data.bla = 'foo';
    return data;
  });

  return Cycle.Rx.Observable.merge(iuztMod$);
}

function model(intent, source) {
  let modifcation$ = makeModification$(intent);

  return modifcation$
    .merge(source.data$)
    .scan((data, modFn) => modFn(data))
    .shareReplay(1);
}

export default model;
