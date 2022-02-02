import * as AriaManager from './AriaManager';

const find = AriaManager.find(AriaManager.LinkableAttribute.AriaControls);
const manager = AriaManager.build(AriaManager.LinkableAttribute.AriaControls);

export {
  find,
  manager
};
