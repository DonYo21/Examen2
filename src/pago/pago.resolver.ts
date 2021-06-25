import { Query, Resolver } from '@nestjs/graphql';
import { PagoService } from './pago.service';
import { Pago } from './model/pago.model';

@Resolver(of => Pago)
export class PagoResolver {

    constructor(private pagoService:PagoService){}

    @Query(returns=>[Pago])
    async pagos(){
        return await this.pagoService.getPagos();
    }

}
