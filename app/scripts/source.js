import Cycle from 'cyclejs';

let data = {
  bla: 'asdf'
};

export default {
  data$: Cycle.Rx.Observable.just(data)
};
