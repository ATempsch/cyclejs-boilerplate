import Cycle from 'cyclejs';

export default function intent(interactions) {
  return {
    bla: false,
    asdf: true,
    qewr: true,
    iuzt: () => {
      return 'foo';
    },
    abc$: interactions.get('#button', 'click').map(() => {
      return 'foo';
    }),
    qwer$: interactions.get('#link', 'click').map((evdata) => {
      return evdata;
    })
};
}
