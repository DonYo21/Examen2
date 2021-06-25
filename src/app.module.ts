import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PagoModule } from './pago/pago.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile:join(process.cwd(),'src/schema.gql'),
      sortSchema: true,
    }),
    MongooseModule.forRoot('mongodb+srv://rafael:edu900fs@unibe.7ujmc.azure.mongodb.net/modulo2?retryWrites=true&w=majority'),
    PagoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
