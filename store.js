const async_hooks = require('async_hooks');

const getId = async_hooks.executionAsyncId

const createStore = () => {
  const data = {};

  const getContext = () => {
    const eid = getId();

    return data[eid] || {}
  }

  const setContext = (context) => {
    const eid = getId();

    data[eid] = context;
  }

  return {
    getContext,
    setContext,
  }
}

const store = createStore();

module.exports = {
  getContext: store.getContext,
  setContext: store.setContext,
  getId,
}