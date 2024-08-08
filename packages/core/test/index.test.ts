import { createFramework } from '../src/index';
//TODO: Figure out jest ts support with ts-jest
import { describe, expect, it } from '@jest/globals';
import { IntegrationAction, IntegrationEvent } from '../src/types';
import { z } from 'zod';

const testFrameworkName = 'TEST_FRAMEWORK';
const testPluginName = 'TEST_PLUGIN';
const testActionType = 'TEST_ACTION';
const testEventKey = 'TEST_EVENT';

const mockSystemActions: IntegrationAction[] = [
  {
    pluginName: testPluginName,
    schema: z.object({}),
    outputSchema: z.object({}),
    type: testActionType,
    label: 'test',
    description: 'test',
    category: 'test',
    executor: async () => {},
    isHidden: false,
  },
];

const mockSystemEvents: IntegrationEvent[] = [
  {
    key: testEventKey,
    schema: z.object({}),
    triggerProperties: {
      type: testEventKey,
      label: 'test',
      description: 'test',
    },
  },
];

const integrationFramework = createFramework({
  name: testFrameworkName,
  plugins: [],
  SystemActions: mockSystemActions,
  SystemEvents: mockSystemEvents,
});

describe('createFramework', () => {
  it('should create a framework', () => {
    expect(integrationFramework).toBeDefined();
  });

  it('shold register system actions', () => {
    expect(
      Object.values(integrationFramework.getSystemActions() ?? {})
    ).toEqual(mockSystemActions);
  });

  it('shold register system events', () => {
    expect(Object.values(integrationFramework.getSystemEvents() ?? {})).toEqual(
      mockSystemEvents
    );
  });
});
