import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databaseConfig } from 'src/configs/database.config';
import { baseConfig } from 'src/configs/base.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//       envFilePath: '.env',
//       load: [baseConfig, databaseConfig],
//     }),
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: (configService: ConfigService) =>
//         configService.get('database'),
//       // dataSourceFactory: async (options) => {
//       //   const dataSource = await new DataSource(options).initialize();
//       //   return dataSource;
//       // },
//     }),
//   ],
//   exports: [ConfigModule, TypeOrmModule],
// })
// export class InitModule {}
