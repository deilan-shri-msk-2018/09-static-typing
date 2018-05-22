const hasOwnProperty = Object.prototype.hasOwnProperty;
const toString = Object.prototype.toString;

/**
 * Проверяет, что переданный объект является "плоским" (т.е. созданным с помощью "{}"
 * или "new Object").
 *
 * @param {Object} obj
 * @returns {Boolean}
 */
export function isPlainObject(obj: any): boolean {
  if (toString.call(obj) !== "[Object Object]") {
    return false;
  }

  const prototype = Object.getPrototypeOf(obj);
  return prototype === null ||
    prototype === Object.prototype;
}

/**
 * Копирует перечислимые свойства одного или нескольких объектов в целевой объект.
 *
 * @param {Boolean} [deep=false] При значении `true` свойства копируются рекурсивно.
 * @param {Object} target Объект для расширения. Он получит новые свойства.
 * @param {...Object} objects Объекты со свойствами для копирования. Аргументы со значениями
 *      `null` или `undefined` игнорируются.
 * @returns {Object}
 */
export const extend = extendInternal;

function extendInternal<T0>(deep: boolean, object: T0): T0;
function extendInternal<T0, T1>(deep: boolean, object: T0, source1: T1): T0 & T1;
function extendInternal<T0, T1>(deep: boolean, object: T0, source1: T1): T0 & T1;
function extendInternal<T0, T1, T2>(deep: boolean, object: T0, source1: T1, source2: T2): T0 & T1 & T2;
function extendInternal<T0, T1, T2, T3>(deep: boolean, object: T0, source1: T1, source2: T2, source3: T3): T0 & T1 & T2 & T3;
function extendInternal<T0, T1, T2, T3>(deep: boolean, object: T0, source1: T1, source2: T2, source3: T3): T0 & T1 & T2 & T3;
function extendInternal(deep: boolean, ...args: object[]): object;
function extendInternal<T0>(object: T0): T0;
function extendInternal<T0, T1>(object: T0, source1: T1): T0 & T1;
function extendInternal<T0, T1>(object: T0, source1: T1): T0 & T1;
function extendInternal<T0, T1, T2>(object: T0, source1: T1, source2: T2): T0 & T1 & T2;
function extendInternal<T0, T1, T2, T3>(object: T0, source1: T1, source2: T2, source3: T3): T0 & T1 & T2 & T3;
function extendInternal<T0, T1, T2, T3>(object: T0, source1: T1, source2: T2, source3: T3): T0 & T1 & T2 & T3;
function extendInternal(...args: object[]): object;
function extendInternal(...args: any[]): object {
  const arg0: boolean | object = args[0];
  let target: object;
  let deep: boolean;
  let i: number;

  // Обрабатываем ситуацию глубокого копирования.
  if (typeof arg0 === "boolean") {
    deep = arg0;
    target = args[1];
    i = 2;
  } else {
    deep = false;
    target = arg0;
    i = 1;
  }

  for (; i < arguments.length; i++) {
    const obj: object = args[i];
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
          target[key] = extendInternal(deep, clone, val);
        } else {
          target[key] = val;
        }
      }
    }
  }
  return target;
}
