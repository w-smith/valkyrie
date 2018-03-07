import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EmailComponent } from './email/email.component';
import { CameraComponent } from './camera/camera.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { AboutComponent } from './about/about.component';
import { GamesComponent } from './games/games.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/edit-profile.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        ProfileComponent,
        SearchComponent,
        ProfileComponent,
        EmailComponent,
        CameraComponent,
        EditProfileComponent,
        NewProfileComponent,
        AboutComponent,
        GamesComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        AngularFireAuthModule,
        HttpModule
      ],
      providers: [AuthService, UsersService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
