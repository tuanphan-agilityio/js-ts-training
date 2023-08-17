/* eslint-disable */
// Decorator record the history logger for method
function logMethod(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const timestamp = new Date().toISOString();
    const result = originalMethod.apply(this, args);
    console.log(
      `${timestamp} - Method ${methodName} was called with arguments: ${JSON.stringify(
        args,
      )}. Result: ${JSON.stringify(result)}`,
    );
    return result;
  };

  return descriptor;
}

class Calculator {
  @logMethod
  add(a: number, b: number): number {
    return a + b;
  }

  @logMethod
  subtract(a: number, b: number): number {
    return a - b;
  }
}

const calculator = new Calculator();
calculator.add(5, 3);
calculator.subtract(10, 4);
