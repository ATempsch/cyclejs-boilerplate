/* istanbulify ignore file */
import intent from '../../app/scripts/someModule';

describe('module to test', () => {

  it('should provide testable logic', () => {
    expect(intent().bla).toBeFalsy();
  });
  it('should provide testable logic', () => {
    expect(intent().asdf).toBeTruthy();
  });
  it('should provide testable logic', () => {
    expect(intent().qewr).toBeTruthy();
  });
  it('should provide testable logic', () => {
    expect(intent().iuzt()).toEqual('foo');
  });
  it('should provide testable logic', () => {
    expect(intent().abc()).toEqual('bla');
  });
});
