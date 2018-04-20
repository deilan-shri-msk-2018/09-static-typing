# Typescript

## Вариант 1

[Playground](http://www.typescriptlang.org/play/index.html#src=const%20hasOwnProperty%20%3D%20Object.prototype.hasOwnProperty%3B%0D%0Aconst%20toString%20%3D%20Object.prototype.toString%3B%0D%0A%0D%0A%2F**%0D%0A%20*%20%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D1%8F%D0%B5%D1%82%2C%20%D1%87%D1%82%D0%BE%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%20%D1%8F%D0%B2%D0%BB%D1%8F%D0%B5%D1%82%D1%81%D1%8F%20%22%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%BC%22%20(%D1%82.%D0%B5.%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC%20%D1%81%20%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E%20%22%7B%7D%22%0D%0A%20*%20%D0%B8%D0%BB%D0%B8%20%22new%20Object%22).%0D%0A%20*%0D%0A%20*%20%40param%20%7BObject%7D%20obj%0D%0A%20*%20%40returns%20%7BBoolean%7D%0D%0A%20*%2F%0D%0Afunction%20isPlainObject(obj%3A%20any)%3A%20boolean%20%7B%0D%0A%20%20if%20(toString.call(obj)%20!%3D%3D%20%22%5BObject%20Object%5D%22)%20%7B%0D%0A%20%20%20%20return%20false%3B%0D%0A%20%20%7D%0D%0A%0D%0A%20%20const%20prototype%20%3D%20Object.getPrototypeOf(obj)%3B%0D%0A%20%20return%20prototype%20%3D%3D%3D%20null%20%7C%7C%0D%0A%20%20%20%20prototype%20%3D%3D%3D%20Object.prototype%3B%0D%0A%7D%0D%0A%0D%0A%2F**%0D%0A%20*%20%D0%9A%D0%BE%D0%BF%D0%B8%D1%80%D1%83%D0%B5%D1%82%20%D0%BF%D0%B5%D1%80%D0%B5%D1%87%D0%B8%D1%81%D0%BB%D0%B8%D0%BC%D1%8B%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0%20%D0%BE%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B8%D0%BB%D0%B8%20%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%B8%D1%85%20%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2%20%D0%B2%20%D1%86%D0%B5%D0%BB%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82.%0D%0A%20*%0D%0A%20*%20%40param%20%7BBoolean%7D%20%5Bdeep%3Dfalse%5D%20%D0%9F%D1%80%D0%B8%20%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B8%20%60true%60%20%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D1%83%D1%8E%D1%82%D1%81%D1%8F%20%D1%80%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D0%B2%D0%BD%D0%BE.%0D%0A%20*%20%40param%20%7BObject%7D%20target%20%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%20%D0%B4%D0%BB%D1%8F%20%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D1%8F.%20%D0%9E%D0%BD%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%20%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0.%0D%0A%20*%20%40param%20%7B...Object%7D%20objects%20%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B%20%D1%81%D0%BE%20%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0%D0%BC%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.%20%D0%90%D1%80%D0%B3%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%20%D1%81%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%D0%BC%D0%B8%0D%0A%20*%20%20%20%20%20%20%60null%60%20%D0%B8%D0%BB%D0%B8%20%60undefined%60%20%D0%B8%D0%B3%D0%BD%D0%BE%D1%80%D0%B8%D1%80%D1%83%D1%8E%D1%82%D1%81%D1%8F.%0D%0A%20*%20%40returns%20%7BObject%7D%0D%0A%20*%2F%0D%0Aconst%20extend%20%3D%20extendInternal%3B%0D%0Afunction%20extendInternal%3CTObject%3E(deep%3A%20boolean%2C%20object%3A%20TObject)%3A%20TObject%3B%0D%0Afunction%20extendInternal%3CTObject%2C%20TSource1%3E(%0D%0A%20%20deep%3A%20boolean%2C%0D%0A%20%20object%3A%20TObject%2C%0D%0A%20%20source1%3A%20TSource1%2C%0D%0A)%3A%20TObject%20%26%20TSource1%3B%0D%0Afunction%20extendInternal%3CTObject%2C%20TSource1%3E(%0D%0A%20%20deep%3A%20boolean%2C%0D%0A%20%20object%3A%20TObject%2C%0D%0A%20%20source1%3A%20TSource1%2C%0D%0A)%3A%20TObject%20%26%20TSource1%3B%0D%0Afunction%20extendInternal%3CTObject%2C%20TSource1%2C%20TSource2%3E(%0D%0A%20%20deep%3A%20boolean%2C%0D%0A%20%20object%3A%20TObject%2C%0D%0A%20%20source1%3A%20TSource1%2C%0D%0A%20%20source2%3A%20TSource2%2C%0D%0A)%3A%20TObject%20%26%20TSource1%20%26%20TSource2%3B%0D%0Afunction%20extendInternal%3CTObject%2C%20TSource1%2C%20TSource2%2C%20TSource3%3E(%0D%0A%20%20deep%3A%20boolean%2C%0D%0A%20%20object%3A%20TObject%2C%0D%0A%20%20source1%3A%20TSource1%2C%0D%0A%20%20source2%3A%20TSource2%2C%0D%0A%20%20source3%3A%20TSource3%2C%0D%0A)%3A%20TObject%20%26%20TSource1%20%26%20TSource2%20%26%20TSource3%3B%0D%0Afunction%20extendInternal%3CTObject%2C%20TSource1%2C%20TSource2%2C%20TSource3%3E(%0D%0A%20%20deep%3A%20boolean%2C%0D%0A%20%20object%3A%20TObject%2C%0D%0A%20%20source1%3A%20TSource1%2C%0D%0A%20%20source2%3A%20TSource2%2C%0D%0A%20%20source3%3A%20TSource3%2C%0D%0A)%3A%20TObject%20%26%20TSource1%20%26%20TSource2%20%26%20TSource3%3B%0D%0Afunction%20extendInternal%3CTObject%2C%20TSource1%2C%20TSource2%2C%20TSource3%2C%20TSource4%3E(%0D%0A%20%20deep%3A%20boolean%2C%0D%0A%20%20object%3A%20TObject%2C%0D%0A%20%20source1%3A%20TSource1%2C%0D%0A%20%20source2%3A%20TSource2%2C%0D%0A%20%20source3%3A%20TSource3%2C%0D%0A%20%20source4%3A%20TSource4%2C%0D%0A)%3A%20TObject%20%26%20TSource1%20%26%20TSource2%20%26%20TSource3%20%26%20TSource4%3B%0D%0Afunction%20extendInternal(deep%3A%20boolean%2C%20...args%3A%20object%5B%5D)%3A%20object%3B%0D%0Afunction%20extendInternal%3CTObject%3E(object%3A%20TObject)%3A%20TObject%3B%0D%0Afunction%20extendInternal%3CTObject%2C%20TSource1%3E(%0D%0A%20%20object%3A%20TObject%2C%0D%0A%20%20source1%3A%20TSource1%2C%0D%0A)%3A%20TObject%20%26%20TSource1%3B%0D%0Afunction%20extendInternal%3CTObject%2C%20TSource1%3E(%0D%0A%20%20object%3A%20TObject%2C%0D%0A%20%20source1%3A%20TSource1%2C%0D%0A)%3A%20TObject%20%26%20TSource1%3B%0D%0Afunction%20extendInternal%3CTObject%2C%20TSource1%2C%20TSource2%3E(%0D%0A%20%20object%3A%20TObject%2C%0D%0A%20%20source1%3A%20TSource1%2C%0D%0A%20%20source2%3A%20TSource2%2C%0D%0A)%3A%20TObject%20%26%20TSource1%20%26%20TSource2%3B%0D%0Afunction%20extendInternal%3CTObject%2C%20TSource1%2C%20TSource2%2C%20TSource3%3E(%0D%0A%20%20object%3A%20TObject%2C%0D%0A%20%20source1%3A%20TSource1%2C%0D%0A%20%20source2%3A%20TSource2%2C%0D%0A%20%20source3%3A%20TSource3%2C%0D%0A)%3A%20TObject%20%26%20TSource1%20%26%20TSource2%20%26%20TSource3%3B%0D%0Afunction%20extendInternal%3CTObject%2C%20TSource1%2C%20TSource2%2C%20TSource3%3E(%0D%0A%20%20object%3A%20TObject%2C%0D%0A%20%20source1%3A%20TSource1%2C%0D%0A%20%20source2%3A%20TSource2%2C%0D%0A%20%20source3%3A%20TSource3%2C%0D%0A)%3A%20TObject%20%26%20TSource1%20%26%20TSource2%20%26%20TSource3%3B%0D%0Afunction%20extendInternal%3CTObject%2C%20TSource1%2C%20TSource2%2C%20TSource3%2C%20TSource4%3E(%0D%0A%20%20object%3A%20TObject%2C%0D%0A%20%20source1%3A%20TSource1%2C%0D%0A%20%20source2%3A%20TSource2%2C%0D%0A%20%20source3%3A%20TSource3%2C%0D%0A%20%20source4%3A%20TSource4%2C%0D%0A)%3A%20TObject%20%26%20TSource1%20%26%20TSource2%20%26%20TSource3%20%26%20TSource4%3B%0D%0Afunction%20extendInternal(...args%3A%20object%5B%5D)%3A%20object%3B%0D%0Afunction%20extendInternal(...args%3A%20any%5B%5D)%3A%20object%20%7B%0D%0A%20%20const%20arg0%3A%20boolean%20%7C%20object%20%3D%20args%5B0%5D%3B%0D%0A%20%20let%20target%3A%20object%3B%0D%0A%20%20let%20deep%3A%20boolean%3B%0D%0A%20%20let%20i%3A%20number%3B%0D%0A%0D%0A%20%20%2F%2F%20%D0%9E%D0%B1%D1%80%D0%B0%D0%B1%D0%B0%D1%82%D1%8B%D0%B2%D0%B0%D0%B5%D0%BC%20%D1%81%D0%B8%D1%82%D1%83%D0%B0%D1%86%D0%B8%D1%8E%20%D0%B3%D0%BB%D1%83%D0%B1%D0%BE%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.%0D%0A%20%20if%20(typeof%20arg0%20%3D%3D%3D%20%22boolean%22)%20%7B%0D%0A%20%20%20%20deep%20%3D%20arg0%3B%0D%0A%20%20%20%20target%20%3D%20args%5B1%5D%3B%0D%0A%20%20%20%20i%20%3D%202%3B%0D%0A%20%20%7D%20else%20%7B%0D%0A%20%20%20%20deep%20%3D%20false%3B%0D%0A%20%20%20%20target%20%3D%20arg0%3B%0D%0A%20%20%20%20i%20%3D%201%3B%0D%0A%20%20%7D%0D%0A%0D%0A%20%20for%20(%3B%20i%20%3C%20arguments.length%3B%20i%2B%2B)%20%7B%0D%0A%20%20%20%20const%20obj%3A%20object%20%3D%20args%5Bi%5D%3B%0D%0A%20%20%20%20if%20(!obj)%20%7B%0D%0A%20%20%20%20%20%20continue%3B%0D%0A%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20for%20(const%20key%20in%20obj)%20%7B%0D%0A%20%20%20%20%20%20if%20(hasOwnProperty.call(obj%2C%20key))%20%7B%0D%0A%20%20%20%20%20%20%20%20const%20val%20%3D%20obj%5Bkey%5D%3B%0D%0A%20%20%20%20%20%20%20%20const%20isArray%20%3D%20val%20%26%26%20Array.isArray(val)%3B%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2F%2F%20%D0%9A%D0%BE%D0%BF%D0%B8%D1%80%D1%83%D0%B5%D0%BC%20%22%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B5%22%20%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B%20%D0%B8%20%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D1%8B%20%D1%80%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D0%B2%D0%BD%D0%BE.%0D%0A%20%20%20%20%20%20%20%20if%20(deep%20%26%26%20val%20%26%26%20(isPlainObject(val)%20%7C%7C%20isArray))%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20const%20src%20%3D%20target%5Bkey%5D%3B%0D%0A%20%20%20%20%20%20%20%20%20%20let%20clone%3B%0D%0A%20%20%20%20%20%20%20%20%20%20if%20(isArray)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20clone%20%3D%20src%20%26%26%20Array.isArray(src)%20%3F%20src%20%3A%20%5B%5D%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20clone%20%3D%20src%20%26%26%20isPlainObject(src)%20%3F%20src%20%3A%20%7B%7D%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20target%5Bkey%5D%20%3D%20extendInternal(deep%2C%20clone%2C%20val)%3B%0D%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20target%5Bkey%5D%20%3D%20val%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%20%20return%20target%3B%0D%0A%7D)
[Source](src/index.1.ts)

Более безопасный вариант функции extend, т. к. перегрузки видны в т. ч. из самой функции, что немаловажно, поскольку она вызывает сама себя.

## Вариант 2

[Playground](http://www.typescriptlang.org/play/index.html#src=interface%20IExtendFunction%20%7B%0D%0A%20%20%3CTObject%3E(deep%3A%20boolean%2C%20object%3A%20TObject)%3A%20TObject%3B%0D%0A%20%20%3CTObject%2C%20TSource1%3E(%0D%0A%20%20%20deep%3A%20boolean%2C%0D%0A%20%20%20object%3A%20TObject%2C%0D%0A%20%20%20source1%3A%20TSource1%2C%0D%0A%20)%3A%20TObject%20%26%20TSource1%3B%0D%0A%20%20%3CTObject%2C%20TSource1%3E(%0D%0A%20%20%20deep%3A%20boolean%2C%0D%0A%20%20%20object%3A%20TObject%2C%0D%0A%20%20%20source1%3A%20TSource1%2C%0D%0A%20)%3A%20TObject%20%26%20TSource1%3B%0D%0A%20%20%3CTObject%2C%20TSource1%2C%20TSource2%3E(%0D%0A%20%20%20deep%3A%20boolean%2C%0D%0A%20%20%20object%3A%20TObject%2C%0D%0A%20%20%20source1%3A%20TSource1%2C%0D%0A%20%20%20source2%3A%20TSource2%2C%0D%0A%20)%3A%20TObject%20%26%20TSource1%20%26%20TSource2%3B%0D%0A%20%20%3CTObject%2C%20TSource1%2C%20TSource2%2C%20TSource3%3E(%0D%0A%20%20%20deep%3A%20boolean%2C%0D%0A%20%20%20object%3A%20TObject%2C%0D%0A%20%20%20source1%3A%20TSource1%2C%0D%0A%20%20%20source2%3A%20TSource2%2C%0D%0A%20%20%20source3%3A%20TSource3%2C%0D%0A%20)%3A%20TObject%20%26%20TSource1%20%26%20TSource2%20%26%20TSource3%3B%0D%0A%20%20%3CTObject%2C%20TSource1%2C%20TSource2%2C%20TSource3%3E(%0D%0A%20%20%20deep%3A%20boolean%2C%0D%0A%20%20%20object%3A%20TObject%2C%0D%0A%20%20%20source1%3A%20TSource1%2C%0D%0A%20%20%20source2%3A%20TSource2%2C%0D%0A%20%20%20source3%3A%20TSource3%2C%0D%0A%20)%3A%20TObject%20%26%20TSource1%20%26%20TSource2%20%26%20TSource3%3B%0D%0A%20%20%3CTObject%2C%20TSource1%2C%20TSource2%2C%20TSource3%2C%20TSource4%3E(%0D%0A%20%20%20deep%3A%20boolean%2C%0D%0A%20%20%20object%3A%20TObject%2C%0D%0A%20%20%20source1%3A%20TSource1%2C%0D%0A%20%20%20source2%3A%20TSource2%2C%0D%0A%20%20%20source3%3A%20TSource3%2C%0D%0A%20%20%20source4%3A%20TSource4%2C%0D%0A%20)%3A%20TObject%20%26%20TSource1%20%26%20TSource2%20%26%20TSource3%20%26%20TSource4%3B%0D%0A%20(deep%3A%20boolean%2C%20...args%3A%20object%5B%5D)%3A%20object%3B%0D%0A%20%20%3CTObject%3E(object%3A%20TObject)%3A%20TObject%3B%0D%0A%20%20%3CTObject%2C%20TSource1%3E(%0D%0A%20%20%20object%3A%20TObject%2C%0D%0A%20%20%20source1%3A%20TSource1%2C%0D%0A%20)%3A%20TObject%20%26%20TSource1%3B%0D%0A%20%20%3CTObject%2C%20TSource1%3E(%0D%0A%20%20%20object%3A%20TObject%2C%0D%0A%20%20%20source1%3A%20TSource1%2C%0D%0A%20)%3A%20TObject%20%26%20TSource1%3B%0D%0A%20%20%3CTObject%2C%20TSource1%2C%20TSource2%3E(%0D%0A%20%20%20object%3A%20TObject%2C%0D%0A%20%20%20source1%3A%20TSource1%2C%0D%0A%20%20%20source2%3A%20TSource2%2C%0D%0A%20)%3A%20TObject%20%26%20TSource1%20%26%20TSource2%3B%0D%0A%20%20%3CTObject%2C%20TSource1%2C%20TSource2%2C%20TSource3%3E(%0D%0A%20%20%20object%3A%20TObject%2C%0D%0A%20%20%20source1%3A%20TSource1%2C%0D%0A%20%20%20source2%3A%20TSource2%2C%0D%0A%20%20%20source3%3A%20TSource3%2C%0D%0A%20)%3A%20TObject%20%26%20TSource1%20%26%20TSource2%20%26%20TSource3%3B%0D%0A%20%20%3CTObject%2C%20TSource1%2C%20TSource2%2C%20TSource3%3E(%0D%0A%20%20%20object%3A%20TObject%2C%0D%0A%20%20%20source1%3A%20TSource1%2C%0D%0A%20%20%20source2%3A%20TSource2%2C%0D%0A%20%20%20source3%3A%20TSource3%2C%0D%0A%20)%3A%20TObject%20%26%20TSource1%20%26%20TSource2%20%26%20TSource3%3B%0D%0A%20%3CTObject%2C%20TSource1%2C%20TSource2%2C%20TSource3%2C%20TSource4%3E(%0D%0A%20%20%20%20%20object%3A%20TObject%2C%0D%0A%20%20%20%20%20source1%3A%20TSource1%2C%0D%0A%20%20%20%20%20source2%3A%20TSource2%2C%0D%0A%20%20%20%20%20source3%3A%20TSource3%2C%0D%0A%20%20%20%20%20source4%3A%20TSource4%2C%0D%0A%20)%3A%20TObject%20%26%20TSource1%20%26%20TSource2%20%26%20TSource3%20%26%20TSource4%3B%0D%0A%20(...args%3A%20object%5B%5D)%3A%20object%3B%0D%0A%20(...args%3A%20any%5B%5D)%3A%20object%3B%0D%0A%7D%0D%0A%0D%0Aconst%20hasOwnProperty%20%3D%20Object.prototype.hasOwnProperty%3B%0D%0Aconst%20toString%20%3D%20Object.prototype.toString%3B%0D%0A%0D%0A%2F**%0D%0A%20*%20%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D1%8F%D0%B5%D1%82%2C%20%D1%87%D1%82%D0%BE%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%20%D1%8F%D0%B2%D0%BB%D1%8F%D0%B5%D1%82%D1%81%D1%8F%20%22%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%BC%22%20(%D1%82.%D0%B5.%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC%20%D1%81%20%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E%20%22%7B%7D%22%0D%0A%20*%20%D0%B8%D0%BB%D0%B8%20%22new%20Object%22).%0D%0A%20*%0D%0A%20*%20%40param%20%7BObject%7D%20obj%0D%0A%20*%20%40returns%20%7BBoolean%7D%0D%0A%20*%2F%0D%0Afunction%20isPlainObject(obj%3A%20any)%3A%20boolean%20%7B%0D%0A%20%20if%20(toString.call(obj)%20!%3D%3D%20%22%5BObject%20Object%5D%22)%20%7B%0D%0A%20%20%20%20return%20false%3B%0D%0A%20%20%7D%0D%0A%0D%0A%20%20const%20prototype%20%3D%20Object.getPrototypeOf(obj)%3B%0D%0A%20%20return%20prototype%20%3D%3D%3D%20null%20%7C%7C%0D%0A%20%20%20%20prototype%20%3D%3D%3D%20Object.prototype%3B%0D%0A%7D%0D%0A%0D%0A%2F**%0D%0A%20*%20%D0%9A%D0%BE%D0%BF%D0%B8%D1%80%D1%83%D0%B5%D1%82%20%D0%BF%D0%B5%D1%80%D0%B5%D1%87%D0%B8%D1%81%D0%BB%D0%B8%D0%BC%D1%8B%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0%20%D0%BE%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B8%D0%BB%D0%B8%20%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%B8%D1%85%20%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2%20%D0%B2%20%D1%86%D0%B5%D0%BB%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82.%0D%0A%20*%0D%0A%20*%20%40param%20%7BBoolean%7D%20%5Bdeep%3Dfalse%5D%20%D0%9F%D1%80%D0%B8%20%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B8%20%60true%60%20%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D1%83%D1%8E%D1%82%D1%81%D1%8F%20%D1%80%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D0%B2%D0%BD%D0%BE.%0D%0A%20*%20%40param%20%7BObject%7D%20target%20%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%20%D0%B4%D0%BB%D1%8F%20%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D1%8F.%20%D0%9E%D0%BD%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%20%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0.%0D%0A%20*%20%40param%20%7B...Object%7D%20objects%20%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B%20%D1%81%D0%BE%20%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0%D0%BC%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.%20%D0%90%D1%80%D0%B3%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%20%D1%81%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%D0%BC%D0%B8%0D%0A%20*%20%20%20%20%20%20%60null%60%20%D0%B8%D0%BB%D0%B8%20%60undefined%60%20%D0%B8%D0%B3%D0%BD%D0%BE%D1%80%D0%B8%D1%80%D1%83%D1%8E%D1%82%D1%81%D1%8F.%0D%0A%20*%20%40returns%20%7BObject%7D%0D%0A%20*%2F%0D%0Aconst%20extend%3A%20IExtendFunction%20%3D%20function%20extend(...args%3A%20any%5B%5D)%3A%20object%20%7B%0D%0A%20%20const%20arg0%3A%20boolean%20%7C%20object%20%3D%20args%5B0%5D%3B%0D%0A%20%20let%20target%3A%20object%3B%0D%0A%20%20let%20deep%3A%20boolean%3B%0D%0A%20%20let%20i%3A%20number%3B%0D%0A%0D%0A%20%20%2F%2F%20%D0%9E%D0%B1%D1%80%D0%B0%D0%B1%D0%B0%D1%82%D1%8B%D0%B2%D0%B0%D0%B5%D0%BC%20%D1%81%D0%B8%D1%82%D1%83%D0%B0%D1%86%D0%B8%D1%8E%20%D0%B3%D0%BB%D1%83%D0%B1%D0%BE%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.%0D%0A%20%20if%20(typeof%20arg0%20%3D%3D%3D%20%22boolean%22)%20%7B%0D%0A%20%20%20%20deep%20%3D%20arg0%3B%0D%0A%20%20%20%20target%20%3D%20args%5B1%5D%3B%0D%0A%20%20%20%20i%20%3D%202%3B%0D%0A%20%20%7D%20else%20%7B%0D%0A%20%20%20%20deep%20%3D%20false%3B%0D%0A%20%20%20%20target%20%3D%20arg0%3B%0D%0A%20%20%20%20i%20%3D%201%3B%0D%0A%20%20%7D%0D%0A%0D%0A%20%20for%20(%3B%20i%20%3C%20arguments.length%3B%20i%2B%2B)%20%7B%0D%0A%20%20%20%20const%20obj%3A%20object%20%3D%20args%5Bi%5D%3B%0D%0A%20%20%20%20if%20(!obj)%20%7B%0D%0A%20%20%20%20%20%20continue%3B%0D%0A%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20for%20(const%20key%20in%20obj)%20%7B%0D%0A%20%20%20%20%20%20if%20(hasOwnProperty.call(obj%2C%20key))%20%7B%0D%0A%20%20%20%20%20%20%20%20const%20val%20%3D%20obj%5Bkey%5D%3B%0D%0A%20%20%20%20%20%20%20%20const%20isArray%20%3D%20val%20%26%26%20Array.isArray(val)%3B%0D%0A%0D%0A%20%20%20%20%20%20%20%20%2F%2F%20%D0%9A%D0%BE%D0%BF%D0%B8%D1%80%D1%83%D0%B5%D0%BC%20%22%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B5%22%20%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B%20%D0%B8%20%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D1%8B%20%D1%80%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D0%B2%D0%BD%D0%BE.%0D%0A%20%20%20%20%20%20%20%20if%20(deep%20%26%26%20val%20%26%26%20(isPlainObject(val)%20%7C%7C%20isArray))%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20const%20src%20%3D%20target%5Bkey%5D%3B%0D%0A%20%20%20%20%20%20%20%20%20%20let%20clone%3B%0D%0A%20%20%20%20%20%20%20%20%20%20if%20(isArray)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20clone%20%3D%20src%20%26%26%20Array.isArray(src)%20%3F%20src%20%3A%20%5B%5D%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20clone%20%3D%20src%20%26%26%20isPlainObject(src)%20%3F%20src%20%3A%20%7B%7D%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20target%5Bkey%5D%20%3D%20extend(deep%2C%20clone%2C%20val)%3B%0D%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20target%5Bkey%5D%20%3D%20val%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%20%20return%20target%3B%0D%0A%7D%3B%0D%0A)
[Source](src/index.2.ts)

Более читаемый вариант, но менее безопасный, т. к. из самой функции недоступны перегрузки.