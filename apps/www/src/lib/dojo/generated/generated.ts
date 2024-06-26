/* Autogenerated file. Do not edit manually. */
import { type DojoProvider } from '@dojoengine/core';

import { ActionsCalls } from './starksketch';

export type IWorld = Awaited<ReturnType<typeof setupWorld>>;

export function setupWorld(provider: DojoProvider) {
  const actions = new ActionsCalls(provider);
  return {
    actions,
  };
}
