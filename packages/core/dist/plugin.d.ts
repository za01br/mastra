import { IntegrationAction, IntegrationCredentialType, IntegrationEvent } from './types';
import { ZodSchema } from 'zod';
export type PluginConfig = {
    name: string;
    logoUrl: string;
    scopes?: string[];
    authType?: IntegrationCredentialType;
    authConnectionOptions?: ZodSchema;
    [key: string]: any;
};
export declare class IntegrationPlugin {
    name: string;
    logoUrl: string;
    config: Omit<PluginConfig, 'name' | 'logoUrl'> & {
        [key: string]: any;
    };
    events: Record<string, IntegrationEvent>;
    constructor(config: PluginConfig);
    getConfig(): Omit<PluginConfig, "name" | "logoUrl"> & {
        [key: string]: any;
    };
    getEventHandlers(): any[];
    getActions(): Record<string, IntegrationAction<any>>;
    defineEvents(): void;
    getEvents(): Record<string, IntegrationEvent>;
    getEvent(name: string): IntegrationEvent;
    getEventKey(name: string): string;
}
