import * as AriaManager from './AriaManager';

const find = AriaManager.find(AriaManager.LinkableAttribute.AriaOwns);
const manager = AriaManager.build(AriaManager.LinkableAttribute.AriaOwns);

export {
  find,
  manager
};
