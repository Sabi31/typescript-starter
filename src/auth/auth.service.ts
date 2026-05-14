import { Injectable } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { LoginUseCase, RegisterUseCase } from "./use-cases";


@Injectable()
export class AuthService {
  constructor(
    private readonly registerUseCase: RegisterUseCase,
    private readonly loginUseCase: LoginUseCase,
) {}    

async register(data: RegisterDto) {
    return await this.registerUseCase.execute(data);
}

async login(data: LoginDto) {
    return await this.loginUseCase.execute(data);
}
}
