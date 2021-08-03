import { reportWebVitals } from '@/library/helper';

test(`Testing Send CWV Report`, () => {
  const metricSpy = jest.fn();
  reportWebVitals(metricSpy);

  expect(metricSpy).toHaveBeenCalledTimes(0);
});
