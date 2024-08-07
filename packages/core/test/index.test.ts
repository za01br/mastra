import { createFramework } from '../src/index';
//TODO: Figure out jest ts support with ts-jest
import { describe, expect, it } from '@jest/globals';

describe('createFramework', () => {
  it('should return a framework object', () => {
    const framework = createFramework({
      name: 'test',
      plugins: [],
      SystemActions: [],
      SystemEvents: [],
    });
    expect(framework).toBeDefined();
  });
});
