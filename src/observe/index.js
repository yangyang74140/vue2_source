export function observer(data) {
  if (typeof data !== "object" || data === null) {
    return data;
  }

  return new Observer(data);
}

class Observer {
  constructor(value) {
    this.walk(value);
  }
  walk(data) {
    let keys = Object.keys(data);

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = data[key];
      defineReactive(data, key, value);
    }
  }
}

function defineReactive(data, key, value) {
  observer(value);

  Object.defineProperty(data, key, {
    get() {
      console.log("获取");
      return value;
    },
    set(newValue) {
      console.log("设置", newValue);
      if (newValue === value) return;
      observer(value);
      value = newValue;
    },
  });
}
