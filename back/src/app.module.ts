import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { MeModule } from './me/me.module';
import { SkillsModule } from './skills/skills.module';
import { NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './middlewares/logger.middlewares';
import { UsersModule } from './users/users.module';
import { AuthModule } from 'auth/auth.module';

@Module({
  imports: [
    MeModule,
    MongooseModule.forRoot(
      'mongodb+srv://123:123@cluster0.joouq.mongodb.net/Portfolio',
    ),
    SkillsModule,
    UsersModule,
    AuthModule,
  ],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).exclude('defaults/').forRoutes('');
  }
}
