import Cycle from '@cycle/core';

let data = {
  bla: 'asdf'
};

export default {
  data$: Cycle.Rx.Observable.just(data)
};
