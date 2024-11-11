import type { DefineConfig, PluginConfig } from '../../types';
import { handler } from './plugin';
import { handlerLegacy } from './plugin-legacy';
import type { Config } from './types';

export const defaultConfig: PluginConfig<Config> = {
  _dependencies: ['@hey-api/types'],
  _handler: handler,
  _handlerLegacy: handlerLegacy,
  dates: false,
  name: '@hey-api/transformers',
  output: 'transformers',
};

/**
 * Type helper for Hey API transformers plugin, returns {@link PluginConfig} object
 */
export const defineConfig: DefineConfig<Config> = (config) => ({
  ...defaultConfig,
  ...config,
});
