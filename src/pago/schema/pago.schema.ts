import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PagoDocument = Pago & Document;

@Schema()
export class Pago {
  @Prop()
  name: string;

  @Prop()
  salario: number;

  @Prop()
  decimo_tercer: number;

  @Prop()
  decimo_cuarto: number;

  @Prop()
  pago_iess: number;

  @Prop()
  fondo: number;

  @Prop()
  total: number;

}

export const PagoSchema = SchemaFactory.createForClass(Pago);