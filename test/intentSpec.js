/* istanbulify ignore file */
import Cycle from '@cycle/core';;
import intent from '../app/scripts/intent';

let interactions = {};

function makeEmptyInteractions() {
  return {
    get() {
      return Cycle.Rx.Observable.empty();
    }
  };
}

describe('module to test', () => {
  beforeEach(() => {
    interactions = makeEmptyInteractions();
  })

  it('should provide prop1', () => {
    expect(intent(interactions).bla).toBeFalsy();
  });
  it('should provide prop2', () => {
    expect(intent(interactions).asdf).toBeTruthy();
  });
  it('should provide prop3', () => {
    expect(intent(interactions).qewr).toBeTruthy();
  });
  it('should provide func1', () => {
    expect(intent(interactions).iuzt$).toEqual(interactions.get());
  });
});
