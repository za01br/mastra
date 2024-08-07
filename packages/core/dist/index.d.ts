import { IntegrationPlugin } from './plugin';
import { IntegrationAction, IntegrationActionExcutorParams, IntegrationEvent } from './types';
interface Config {
    name: string;
    plugins: IntegrationPlugin[];
    SystemActions: IntegrationAction[];
    SystemEvents: IntegrationEvent[];
}
declare class IntegrationFramework {
    globalEvents: Map<string, Record<string, IntegrationEvent>>;
    globalEventHandlers: any[];
    globalActions: Map<string, Record<string, IntegrationAction<any>>>;
    plugins: Map<string, IntegrationPlugin>;
    registerPlugin(pluginDefinition: IntegrationPlugin): void;
    registerEvents({ events, pluginName, }: {
        events: IntegrationEvent[];
        pluginName?: string;
    }): void;
    registerActions({ actions, pluginName, }: {
        actions: IntegrationAction[];
        pluginName?: string;
    }): void;
    availablePlugins(): {
        name: string;
        plugin: IntegrationPlugin;
    }[];
    getPlugin(name: string): IntegrationPlugin | undefined;
    getGlobalEvents(): Map<string, Record<string, IntegrationEvent>>;
    getSystemEvents(): import("lodash").Dictionary<IntegrationEvent>;
    getEventsByPlugin(name: string): Record<string, IntegrationEvent> | undefined;
    getGlobalEventHandlers(): any[];
    getActions(): Map<string, Record<string, IntegrationAction<any>>>;
    getSystemActions(): Record<string, IntegrationAction<any>> | undefined;
    getActionsByPlugin(name: string, includeHidden?: boolean): Record<string, IntegrationAction<any>> | undefined;
    executeAction({ pluginName, action, payload, }: {
        pluginName?: string;
        action: string;
        payload: IntegrationActionExcutorParams<any>;
    }): Promise<unknown>;
}
export declare function createFramework(config: Config): IntegrationFramework;
export {};
