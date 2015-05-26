import Cycle from 'cyclejs';

function makeModification$(intent) {
  let abcMod$ = intent.abc$.map((evdata) => (data) => {
    data.bla = evdata;
    return data;
  });
  let qwerMod$ = intent.qwer$.map((evdata) => (data) => {
    return data;
  });

  return Cycle.Rx.Observable.merge(abcMod$, qwerMod$);
}

function model(intent, source) {

  let modifcation$ = makeModification$(intent);

  return modifcation$
    .merge(source.data$)
    .scan((data, modFn) => modFn(data))
    .shareReplay(1);
}

export default model;
