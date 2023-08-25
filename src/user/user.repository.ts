import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/database/base.respoitory';
import { DataSource } from 'typeorm';
import { CreateUserInputs } from './dto/create-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  public async createUser(createUserInputs: CreateUserInputs) {
    return this.save({
      fullname: createUserInputs.fullname,
      phoneNumber: createUserInputs.phoneNumber
    });
  }
  public async showUsers(){
    return this.find();
  }

  public async deleteUserById(id:string){
    return (await this.softDelete({id})).affected>0;
  }
}
