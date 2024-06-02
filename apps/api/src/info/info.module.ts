import { Module } from '@nestjs/common';
import { InfoResolver } from './info.resolver';
import { InfoService } from './info.service';

@Module({
  providers: [InfoResolver, InfoService]
})
export class InfoModule {}
