import { SafePipe } from './safe.pipe';

describe('SafePipe', () => {
  it('create an instance', () => {
    const sanitizerSpy = jasmine.createSpyObj('DomSanitizer', [
      'bypassSecurityTrustResourceUrl',
      'sanitize',
    ]);
    const pipe = new SafePipe(sanitizerSpy as any);
    expect(pipe).toBeTruthy();
  });
});
