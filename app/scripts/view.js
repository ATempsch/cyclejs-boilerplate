import Cycle from 'cyclejs';
let {Rx, h} = Cycle;

export default function view(model$) {
  return model$.map(data => {
    return h('div', [
      h('button#button', data.bla),
      h('a#link', 'link')
    ]);
  });
}
