import { Donation } from './donation';

describe('Donation', () => {
  it('should create an instance', () => {
    expect(new Donation('','','',0)).toBeTruthy();
  });
});
