import { ComponentCtor } from './base.js';

const LOADED_COMPONENTS: Map<string, ComponentCtor> = new Map();

/**
 * 全局注册组件。
 * @param name 组件名称
 * @param plugin 注册的组件类
 * @returns void
 */
export function registerComponent(name: string, plugin: ComponentCtor) {
  LOADED_COMPONENTS.set(name, plugin);
}
/**
 * 删除全局组件。
 * @param name 组件名
 * @returns void
 */
export function unregisterComponent(name: string) {
  LOADED_COMPONENTS.delete(name);
}

/**
 * 获取以注册的组件名。
 * @returns string[] 返回已注册的组件名称
 */
export function getComponentNames(): string[] {
  return [...LOADED_COMPONENTS.keys()];
}

/**
 * 根据组件名获取组件类。
 * @param name 组件名
 * @returns 返回组件类
 */
export function getComponent(name: string): ComponentCtor {
  return LOADED_COMPONENTS.get(name);
}

export * from './axis.js';
export * from './coordinate.js';
export * from './legend.js';
export * from './title.js';
export * from './tooltip.js';
