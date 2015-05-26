/* istanbulify ignore file */
import Cycle from 'cyclejs';
import intent from '../../app/scripts/intent';

describe('module to test', () => {

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
    expect(intent(interactions).iuzt()).toEqual('foo');
  });
  it('should provide stream1', () => {
    expect(intent(interactions).abc$).toBeDefined();
  });
});
