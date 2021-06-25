import { Field, Float, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Pago{

    @Field(()=>ID,{nullable:true})
    id?:string

    @Field({nullable:true})
    name?:string

    @Field({nullable:true})
    salario?:number
    
    @Field({nullable:true})
    decimo_tercer=400/12

    @Field(type => Float, {nullable:true})
    decimo_cuarto=this.salario/12

    @Field(type => Float, {nullable:true})
    pago_iess?=this.salario*0.0945
    
    @Field(type => Float, {nullable:true})
    fondo?=this.salario*0.0833

    @Field(type => Float, {nullable:true})
    total?=this.salario+this.decimo_tercer+this.decimo_cuarto+this.fondo-this.pago_iess
    
}