import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { CreateUserRepository, FindUserByEmailRepository } from "../repository";
import { JwtService } from "@nestjs/jwt/dist/jwt.service";
import { RegisterDto } from "../dto/register.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class RegisterUseCase {
  constructor(
                private readonly FindUserByEmailRepository: FindUserByEmailRepository,
                private readonly CreateUserRepository: CreateUserRepository,
                private readonly jwtService: JwtService,
                private readonly logger: Logger
  ) {}

  async execute (data: RegisterDto) {   
        this.logger.log("registrando usuario")

        const exisistingUser = await this.FindUserByEmailRepository.findByEmail(data.email);
        if(exisistingUser) {
            throw new BadRequestException("Email exist");
  }
        const passwordHash = await bcrypt.hash(data.password, 10)

        const user = await this.CreateUserRepository.create({
            name: data.name,
            email: data.email,
            passwordHash,
  });   
        const payload = { sub: user.id, email: user.email };
        const acessToken = this.jwtService.sign(payload);

        this.logger.log("usuario registrado");

        return { acessToken, user};
  }
}