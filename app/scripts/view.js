import {h} from '@cycle/web';

export default function view(model$) {
  return model$.map(data => {
    return h('div', [
      h('button#button', data.bla),
      h('a#link', 'link')
    ]);
  });
}
