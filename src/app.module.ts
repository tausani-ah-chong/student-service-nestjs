import { Module } from '@nestjs/common';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [ProfilesModule],
})
export class AppModule {}
