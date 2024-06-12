import { plainToInstance } from 'class-transformer';

function MapperDecorator(dto: any) {
  return (
    target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
  ) => {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args) {
      const data = await originalMethod.apply(this, args);
      return plainToInstance(dto, data, {
        excludeExtraneousValues: true,
      });
    };

    return descriptor;
  };
}

export default MapperDecorator;
