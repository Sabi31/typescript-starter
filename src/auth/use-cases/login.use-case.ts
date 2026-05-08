import { JwtService } from "@nestjs/jwt/dist/jwt.service";
import { FindUserByEmailRepository } from "../repository";
import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { LoginDto } from "../dto/login.dto";
import * as bcrypt from "bcrypt";


@Injectable()
export class LoginUseCase {
    constructor(
        private readonly findUserByEmailRepository: FindUserByEmailRepository,
        private readonly jwtService: JwtService,
        private readonly logger: Logger,
    ){}

    async execute (data:LoginDto ) {
        this.logger.log("Iniciando login");

        const user = await this.findUserByEmailRepository.findByEmail(data.email);
        if(!user) {
            throw new UnauthorizedException("Login invalido");
        }

        const isValid = await bcrypt.compare(data.password, user.passwordHash);
        if(!isValid) {
            throw new UnauthorizedException("Login invalido");
        }


        const payload = { sub: user.id, email: user.email };
        const acessToken = this.jwtService.sign(payload);


        this.logger.log("Login realizado com sucesso");

        return {
            acessToken,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        };
    }
}