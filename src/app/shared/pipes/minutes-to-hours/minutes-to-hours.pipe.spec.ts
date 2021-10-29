import { MinutesToHoursPipe } from './minutes-to-hours.pipe';

describe('MinutesToHoursPipe', () => {
  let pipe: MinutesToHoursPipe;

  beforeEach(() => {
    pipe = new MinutesToHoursPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "59min" for 59 minutes', () => {
    expect(pipe.transform(59)).toEqual('59min');
  });

  it('should return "1h" for 60 minutes', () => {
    expect(pipe.transform(60)).toEqual('1h');
  });

  it('should return "1h 10min" for 70 minutes', () => {
    expect(pipe.transform(70)).toEqual('1h 10min');
  });
});
