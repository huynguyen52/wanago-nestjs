import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import AuthenticationService from './authentication.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthenticationService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string) {
    return this.authenticationService.getAuthenticatedUser(email, password);
  }
}
