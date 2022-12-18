import { Controller, Get } from "@nestjs/common"
import { UserService } from "./user.service"
import { Users } from "./entities/user.entity"

@Controller('/user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  getAllUsers(): Promise<Users[]> {
    return this.UserService.getAllUsers()
  }
}