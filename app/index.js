import Cycle from 'cyclejs';

import intent from './scripts/intent';
import model from './scripts/model';
import view from './scripts/view';
import source from './scripts/source';

function app(interactions) {
  return view(model(intent(interactions), source));
}

Cycle.applyToDOM('#app', app);
