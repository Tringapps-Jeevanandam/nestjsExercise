import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserInputs {
  @Field()
  fullname: string;
  
  @Field()
  phoneNumber: string;
}
