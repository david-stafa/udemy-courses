// Autobind decorator
export function autoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalValue = descriptor.value;
  //   console.log(_)
  //   console.log(_2)
  //   console.log(descriptor)
  //   console.log(originalValue)
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalValue.bind(this);
      // console.log(boundFn);
      return boundFn;
    },
  };
  return adjDescriptor;
}
