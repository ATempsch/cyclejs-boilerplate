import {run} from '@cycle/core';
import {makeDOMDriver} from '@cycle/web';

import intent from './scripts/intent';
import model from './scripts/model';
import view from './scripts/view';
import source from './scripts/source';

function main({DOM}) {
  return {
    DOM: view(model(intent(DOM), source))
  };
}
run(main, {
  DOM: makeDOMDriver('#app')
});
