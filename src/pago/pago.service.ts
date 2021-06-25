import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pago, PagoDocument } from './schema/pago.schema';

@Injectable()
export class PagoService {
    getPagos() {
        throw new Error('Method not implemented.');
    }
    constructor(@InjectModel('Pago') private readonly pagoModel:Model<PagoDocument>){

    }

    async getPago():Promise<Pago[]>{
        return await this.pagoModel.find();
    }

    async getPagoByID(id: string): Promise<Pago> {
        return await this.pagoModel.findById(id);
    }
}
