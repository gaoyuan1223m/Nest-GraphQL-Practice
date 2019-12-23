import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class ItemInputCreate {

    @Field()
    readonly title: string;

    @Field(() => Int)
    readonly price: number;

    @Field({ nullable: true })
    readonly description?: string;

}

@InputType()
export class ItemInputUpdate {

    @Field({ nullable: true })
    readonly title?: string;

    @Field(() => Int, { nullable: true })
    readonly price?: number;

    @Field({ nullable: true })
    readonly description?: string;

}
