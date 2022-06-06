import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.setGlobalPrefix('student');

  // graceful shutdown on SIGTERM
  process.on('SIGTERM', () => {
    console.log('Closing application because SIGTERM signal was received');
    app
      .close()
      .then(() => {
        console.log('Application closed');
        process.exit(0);
      })
      .catch((e: Error) => {
        console.error(
          `Application close error, process exiting due to: ${JSON.stringify(
            e,
          )}`,
        );
        process.exit(1);
      });
  });

  return app;
}

bootstrap()
  .then((app) => app.listen(3000))
  .catch((e: Error) => {
    console.error(
      `Application error, process exiting due to: ${JSON.stringify(e)}`,
    );
    process.exit(1);
  });
