// @flow

const hasOwnProperty: (prop: string) => boolean = Object.prototype.hasOwnProperty;
const toString: (obj: any) => string = Object.prototype.toString;

/**
 * Проверяет, что переданный объект является "плоским" (т.е. созданным с помощью "{}"
 * или "new Object").
 *
 * @param {Object} obj
 * @returns {Boolean}
 */
function isPlainObject(obj: any): boolean {
  if (toString.call(obj) !== '[object Object]') {
    return false;
  }
  const prototype: Object = Object.getPrototypeOf(obj);
  return prototype === null ||
    prototype === Object.prototype;
}

type ExtendFunctionType =
  & ((...Object[]) => Object)
  & ((boolean, ...Object[]) => Object);

/**
 * Копирует перечислимые свойства одного или нескольких объектов в целевой объект.
 *
 * @param {Boolean} [deep=false] При значении `true` свойства копируются рекурсивно.
 * @param {Object} target Объект для расширения. Он получит новые свойства.
 * @param {...Object} objects Объекты со свойствами для копирования. Аргументы со значениями
 *      `null` или `undefined` игнорируются.
 * @returns {Object}
 */
const extend: ExtendFunctionType =
  function extend(arg0: boolean | Object, ...args: Object[]) {
  let target: Object;
  let deep: boolean;
  let i: number;

  // Обрабатываем ситуацию глубокого копирования.
  if (typeof arg0 === "boolean") {
    deep = arg0;
    target = args[0];
    i = 1;
  } else {
    deep = false;
    target = arg0;
    i = 0;
  }

  for (; i < arguments.length; i++) {
    const obj: Object = args[i];
    if (!obj) {
      continue;
    }

    for (const key in obj) {
      if (hasOwnProperty.call(obj, key)) {
        const val = obj[key];
        const isArray = val && Array.isArray(val);

        // Копируем "плоские" объекты и массивы рекурсивно.
        if (deep && val && (isPlainObject(val) || isArray)) {
          const src = target[key];
          let clone;
          if (isArray) {
            const clone = src && Array.isArray(src) ? src : [];
          } else {
            clone = src && isPlainObject(src) ? src : {};
          }
          target[key] = extend(deep, clone, val);
        } else {
          target[key] = val;
        }
      }
    }
  }
  return target;
};
