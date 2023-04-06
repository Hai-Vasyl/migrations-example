import { registerAs } from '@nestjs/config';

export const baseConfig = registerAs('base', () => {
  const { PORT } = process.env;

  return {
    port: +PORT || 3000,
  };
});
