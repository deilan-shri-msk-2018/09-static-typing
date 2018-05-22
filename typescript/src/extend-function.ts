export interface IExtendFunction {
  <T0>(deep: boolean, object: T0): T0;
  <T0, T1>(deep: boolean, object: T0, source1: T1): T0 & T1;
  <T0, T1>(deep: boolean, object: T0, source1: T1): T0 & T1;
  <T0, T1, T2>(deep: boolean, object: T0, source1: T1, source2: T2): T0 & T1 & T2;
  <T0, T1, T2, T3>(deep: boolean, object: T0, source1: T1, source2: T2, source3: T3): T0 & T1 & T2 & T3;
  <T0, T1, T2, T3>(deep: boolean, object: T0, source1: T1, source2: T2, source3: T3): T0 & T1 & T2 & T3;
  (deep: boolean, ...args: object[]): object;
  <T0>(object: T0): T0;
  <T0, T1>(object: T0, source1: T1): T0 & T1;
  <T0, T1>(object: T0, source1: T1): T0 & T1;
  <T0, T1, T2>(object: T0, source1: T1, source2: T2): T0 & T1 & T2;
  <T0, T1, T2, T3>(object: T0, source1: T1, source2: T2, source3: T3): T0 & T1 & T2 & T3;
  <T0, T1, T2, T3>(object: T0, source1: T1, source2: T2, source3: T3): T0 & T1 & T2 & T3;
  (...args: object[]): object;
  (...args: any[]): object;
}
