import { DynamicModule, Module } from '@nestjs/common';
import { EnvConfigService } from './env-config.service';
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config';
import { join } from 'path';

@Module({
  providers: [EnvConfigService]
})
export class EnvConfigModule extends ConfigModule {
  // By default, nest only can get one file .env. To get multiple files to use multiple environments,
  // we need do extends ConfigModule nest class to implement some configurations.

  static forRoot(options?: ConfigModuleOptions): DynamicModule {
    return super.forRoot({
      ...options,
      envFilePath: [
        join(
          __dirname,
          `../../../../.env.${process.env.NODE_ENV}`
        )
      ]
    })
  }
}
