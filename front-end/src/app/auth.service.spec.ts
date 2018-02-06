import { TestBed, inject } from '@angular/core/testing';

<<<<<<< HEAD
import { AuthService } from './services/auth.service';
=======
import { AuthService } from './Services/auth.service';
>>>>>>> b4dc8ca094ba0856e953edbd6378d526d56beb6c

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
