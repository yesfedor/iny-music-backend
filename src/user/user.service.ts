import { Injectable } from "@nestjs/common"
import { AppDataSource } from "src/database/DataSource"
import { Users } from "./entities/user.entity"

@Injectable()
export class UserService{
  UserRepository = AppDataSource.getRepository(Users)
  getAllUsers(): Promise<Users[]> {
    return AppDataSource.manager.find(Users)
  }
}