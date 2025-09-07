/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export function ApiProperty(options?: any): PropertyDecorator {
  return (target: any, propertyKey: string | symbol) => {
    // Empty decorator - just for type checking
  };
}