import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PagoSchema } from './schema/pago.schema';
import { PagoService } from './pago.service';
import { PagoResolver } from './pago.resolver';

@Module({
    imports:[
        MongooseModule.forFeature([{ name: 'Pago', schema: PagoSchema }]),
      ],
    providers: [PagoService, PagoResolver],
})
export class PagoModule {}
