import { ReqMiddleware } from './req.middleware';

describe('ReqMiddleware', () => {
  it('should be defined', () => {
    expect(new ReqMiddleware()).toBeDefined();
  });
});
