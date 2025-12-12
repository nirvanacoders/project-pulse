// NgModule is the decorator used to define an Angular module (metadata for declarations/imports/providers/bootstrap).
import { NgModule } from '@angular/core';
// BrowserModule provides services and directives needed to run the app in a browser (e.g., *ngIf, *ngFor).
import { BrowserModule } from '@angular/platform-browser';

// AppRoutingModule holds the application's route definitions and Router configuration.
import { AppRoutingModule } from './app-routing.module';
// Root component of the application; the module will bootstrap this.
import { AppComponent } from './app.component';
// Feature component rendered on the home route and optionally embedded in AppComponent.
import { HelloComponent } from './hello/hello.component';
import { ListComponent } from './projects/list/list.component';

@NgModule({
  declarations: [
    // Declarations register components, directives, and pipes that belong to this module.
    // Components used in this module's templates must be declared here (unless exported from imported modules).
    AppComponent,
    HelloComponent,
    ListComponent
  ],
  imports: [
    // Imports bring in other modules whose exported classes are needed by component templates.
    // BrowserModule must be imported once in the root module for browser apps.
    BrowserModule,
    // Routing module configures Router with the app's route tree.
    AppRoutingModule
  ],
  // Providers register services at the module level for Angular's dependency injection.
  // With `providedIn: 'root'` services, this can often stay empty.
  providers: [],
  // Bootstrap identifies the root component Angular should load to start the app.
  bootstrap: [AppComponent]
})
export class AppModule { }
