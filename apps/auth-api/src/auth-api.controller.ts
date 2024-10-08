import { Controller, Get } from '@nestjs/common';
import { AuthApiService } from './auth-api.service';

@Controller()
export class AuthApiController {
  constructor(private readonly authApiService: AuthApiService) {}

  @Get()
  getHello(): string {
    return this.authApiService.getHello();
  }

  @Get('test')
  getTest(): string {
    return this.authApiService.getTest();
  }

  @Get('test-env')
  getTestEnv(): string {
    return this.authApiService.getTestApi();
  }

  @Get('health')
  getHealth(): string {
    return this.authApiService.getHealth();
  }
}
