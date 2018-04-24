export interface IExtendFunction {
  <TObject>(deep: boolean, object: TObject): TObject;
  <TObject, TSource1>(
   deep: boolean,
   object: TObject,
   source1: TSource1,
 ): TObject & TSource1;
  <TObject, TSource1>(
   deep: boolean,
   object: TObject,
   source1: TSource1,
 ): TObject & TSource1;
  <TObject, TSource1, TSource2>(
   deep: boolean,
   object: TObject,
   source1: TSource1,
   source2: TSource2,
 ): TObject & TSource1 & TSource2;
  <TObject, TSource1, TSource2, TSource3>(
   deep: boolean,
   object: TObject,
   source1: TSource1,
   source2: TSource2,
   source3: TSource3,
 ): TObject & TSource1 & TSource2 & TSource3;
  <TObject, TSource1, TSource2, TSource3>(
   deep: boolean,
   object: TObject,
   source1: TSource1,
   source2: TSource2,
   source3: TSource3,
 ): TObject & TSource1 & TSource2 & TSource3;
  <TObject, TSource1, TSource2, TSource3, TSource4>(
   deep: boolean,
   object: TObject,
   source1: TSource1,
   source2: TSource2,
   source3: TSource3,
   source4: TSource4,
 ): TObject & TSource1 & TSource2 & TSource3 & TSource4;
 (deep: boolean, ...args: object[]): object;
  <TObject>(object: TObject): TObject;
  <TObject, TSource1>(
   object: TObject,
   source1: TSource1,
 ): TObject & TSource1;
  <TObject, TSource1>(
   object: TObject,
   source1: TSource1,
 ): TObject & TSource1;
  <TObject, TSource1, TSource2>(
   object: TObject,
   source1: TSource1,
   source2: TSource2,
 ): TObject & TSource1 & TSource2;
  <TObject, TSource1, TSource2, TSource3>(
   object: TObject,
   source1: TSource1,
   source2: TSource2,
   source3: TSource3,
 ): TObject & TSource1 & TSource2 & TSource3;
  <TObject, TSource1, TSource2, TSource3>(
   object: TObject,
   source1: TSource1,
   source2: TSource2,
   source3: TSource3,
 ): TObject & TSource1 & TSource2 & TSource3;
 <TObject, TSource1, TSource2, TSource3, TSource4>(
     object: TObject,
     source1: TSource1,
     source2: TSource2,
     source3: TSource3,
     source4: TSource4,
 ): TObject & TSource1 & TSource2 & TSource3 & TSource4;
 (...args: object[]): object;
 (...args: any[]): object;
}
