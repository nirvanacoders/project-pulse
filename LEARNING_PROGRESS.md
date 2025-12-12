# Project Pulse - Angular 15 Learning Progress

## Overview
Building a project/activity tracker to learn Angular 15 from fundamentals to advanced concepts (routing, HTTP, auth/SSO, RxJS, forms, guards, state management, testing, and deployment).

## Learning Objectives
- Master Angular fundamentals: components, templates, data binding, directives, pipes
- Understand dependency injection and services
- Implement routing with lazy loading and guards
- Work with HTTP and REST APIs
- Learn RxJS: Observables, Subjects, operators, async patterns
- Build reactive forms with validation
- Implement authentication and HTTP interceptors
- Optional: State management with NgRx
- Write unit and integration tests
- Deploy to production

---

## Session Plan (12 × 1-hour sessions)

### ✅ Session 1: Fundamentals I (COMPLETED)
**Topics:** Angular app anatomy, components, templates, bindings
- CLI commands and project structure
- `AppModule`, `AppComponent`, component lifecycle
- Interpolation: `{{ }}`
- Property binding: `[property]`
- Event binding: `(event)`

**Completed:**
- Generated `HelloComponent` using CLI
- Implemented two-way binding pattern (input + event)
- Added to routing at path `''`
- Practiced component declaration in `AppModule`

**Files Created/Modified:**
- `src/app/hello/hello.component.ts`
- `src/app/app.module.ts`
- `src/app/app-routing.module.ts`
- `src/app/app.component.html`

---

### ✅ Session 2: Fundamentals II (COMPLETED)
**Topics:** Directives, pipes, services, dependency injection
- Built-in directives: `*ngIf`, `*ngFor`
- `trackBy` for performance
- Service creation with `@Injectable({ providedIn: 'root' })`
- Dependency injection pattern

**Completed:**
- Generated `ProjectService` via CLI (`ng g service services/project`)
- Created `Project` interface with mock data
- Generated `ListComponent` via CLI (`ng g component projects/list`)
- Implemented list rendering with `*ngFor` and `trackBy`
- Added conditional rendering with `*ngIf`
- Configured `/projects` route
- Added navigation links with `routerLink`
- Learned module structure and metadata (`declarations`, `imports`, `providers`, `bootstrap`)

**Files Created/Modified:**
- `src/app/services/project.service.ts`
- `src/app/services/project.service.spec.ts`
- `src/app/projects/list/list.component.ts`
- `src/app/projects/list/list.component.html`
- `src/app/projects/list/list.component.scss`
- `src/app/projects/list/list.component.spec.ts`
- `src/app/app-routing.module.ts`
- `src/app/app.component.html`

**Key Learnings:**
- `providedIn: 'root'` makes services singleton and tree-shakable
- `router-outlet` acts as a placeholder for routed components
- `routerLink` enables client-side navigation without page reload
- Component lifecycle: `ngOnInit()` for initialization logic

---

### 🔄 Session 3: RxJS I - Observables & Async (IN PROGRESS)
**Topics:** Observables, Subjects, operators, async pipe
- Converting synchronous service to Observable pattern
- Understanding Observable lifecycle (subscribe/unsubscribe)
- Using `of` to create Observables
- `async` pipe for automatic subscription management
- Core operators: `map`, `filter`, `debounceTime`, `switchMap`
- Implementing reactive search/filter

**Next Steps:**
1. Update `ProjectService.getAll()` to return `Observable<Project[]>`
2. Convert `ListComponent` to use `async` pipe
3. Add search input with `Subject`
4. Apply debouncing and filtering operators
5. Handle loading and error states

**Concepts to Cover:**
- Hot vs Cold Observables
- Subject, BehaviorSubject, ReplaySubject
- Subscription management
- Operator chaining with `pipe()`
- Error handling with `catchError`

---

### 📋 Session 4: Routing I - Feature Modules (PLANNED)
**Topics:** Router setup, lazy loading, route parameters
- Feature modules with routing
- Lazy-loaded routes
- Route parameters and query params
- Child routes and nested outlets
- Route navigation programmatically

**Tasks:**
- Create `ProjectsModule` with routing
- Implement project detail component with route param (`:id`)
- Configure lazy loading
- Add breadcrumb navigation

---

### 🌐 Session 5: HTTP I - REST API Integration (PLANNED)
**Topics:** `HttpClient`, typing responses, loading/error states
- Import `HttpClientModule`
- Replace mock data with HTTP calls
- Set up `json-server` or Angular in-memory API
- Type HTTP responses with interfaces
- Handle loading states
- Error handling and retry logic

**Tasks:**
- Install and configure `json-server` or in-memory web API
- Update `ProjectService` to use `HttpClient`
- Add loading spinner component
- Implement error message display
- Add retry mechanism with RxJS

---

### 📝 Session 6: Forms I - Reactive Forms (PLANNED)
**Topics:** `ReactiveFormsModule`, validators, form state
- Reactive vs template-driven forms
- `FormGroup`, `FormControl`, `FormBuilder`
- Built-in validators
- Custom validators
- Form state management (pristine, dirty, valid, invalid)
- Dynamic form controls

**Tasks:**
- Create project create/edit form
- Add validation (required, minLength, pattern)
- Display validation errors
- Implement custom validator
- Handle form submission

---

### 🛡️ Session 7: Routing II - Guards & Resolvers (PLANNED)
**Topics:** Route protection, data preloading, navigation control
- `CanActivate`, `CanDeactivate`, `CanLoad`
- Route resolvers for data preloading
- `PreloadingStrategy` for lazy modules
- Navigation guards for unsaved changes
- Redirect strategies

**Tasks:**
- Create auth guard (mock initially)
- Add resolver for project detail
- Implement unsaved changes guard for forms
- Configure preloading strategy
- Add 404 page and wildcard route

---

### 🔐 Session 8: Auth & SSO - Interceptors (PLANNED)
**Topics:** Authentication flow, HTTP interceptors, token management
- Mock SSO provider
- JWT token handling
- `HttpInterceptor` for auth headers
- Token refresh logic
- Protecting routes with auth guard
- Login/logout flow

**Tasks:**
- Create `AuthService` with mock login
- Implement HTTP interceptor for auth tokens
- Add login/logout components
- Protect routes with auth guard
- Handle 401/403 responses
- Store tokens securely

---

### 🗂️ Session 9: State Management - NgRx (OPTIONAL)
**Topics:** Centralized state, actions, reducers, effects, selectors
- NgRx store setup
- Actions and action creators
- Reducers for state updates
- Effects for side effects (HTTP)
- Selectors for derived state
- DevTools integration

**Tasks:**
- Install NgRx
- Define state shape
- Create actions for project CRUD
- Implement reducers
- Add effects for HTTP calls
- Refactor components to use store

---

### ⚡ Session 10: Performance & UX (PLANNED)
**Topics:** Change detection, optimization strategies
- Change detection strategies (`Default`, `OnPush`)
- `trackBy` for lists
- Lazy loading images and modules
- Bundle analysis and optimization
- Immutability patterns
- Virtual scrolling for large lists

**Tasks:**
- Apply `OnPush` to components
- Analyze bundle with `ng build --stats-json`
- Optimize images and assets
- Implement virtual scroll
- Measure performance improvements

---

### 🧪 Session 11: Testing (PLANNED)
**Topics:** Unit tests, integration tests, E2E tests
- `TestBed` and component testing
- Service testing with mocks
- HTTP testing with `HttpTestingController`
- Testing reactive forms
- Testing routing and guards
- Component harnesses

**Tasks:**
- Write unit tests for `ProjectService`
- Test `ListComponent` with mock data
- Test HTTP calls
- Test form validation
- Test route guards
- Achieve >80% code coverage

---

### 🚀 Session 12: Deployment & Best Practices (PLANNED)
**Topics:** Build optimization, environments, CI/CD
- Production builds
- Environment configuration
- Deploying to Vercel/Netlify/Firebase
- CI/CD with GitHub Actions
- Performance monitoring
- Error tracking (Sentry)

**Tasks:**
- Configure production environment
- Build and optimize for production
- Deploy to hosting provider
- Set up CI/CD pipeline
- Configure error tracking
- Document deployment process

---

## Current Status

### Completed
- ✅ Project setup and structure
- ✅ Basic components and routing
- ✅ Service with dependency injection
- ✅ Directives (`*ngIf`, `*ngFor`)
- ✅ Basic navigation with `routerLink` and `router-outlet`
- ✅ Understanding of module metadata
- ✅ In-depth RxJS and Observable concepts

### In Progress
- 🔄 Converting service to Observable pattern
- 🔄 Implementing reactive search with RxJS

### Next Up
- ⏭️ `async` pipe in templates
- ⏭️ Search with debouncing
- ⏭️ HTTP integration with `HttpClient`

---

## Key Concepts Learned

### Angular Architecture
- **Modules:** Organize application into cohesive blocks
- **Components:** UI building blocks with template + logic
- **Services:** Shared business logic, stateless utilities
- **Dependency Injection:** Automatic wiring of dependencies

### Data Binding
- **Interpolation:** `{{ expression }}`
- **Property Binding:** `[property]="value"`
- **Event Binding:** `(event)="handler()"`
- **Two-Way Binding:** `[(ngModel)]="property"` (requires FormsModule)

### Directives
- **Structural:** `*ngIf`, `*ngFor`, `*ngSwitch` (modify DOM structure)
- **Attribute:** `[ngClass]`, `[ngStyle]`, `routerLink` (modify appearance/behavior)

### Routing
- **Routes:** Array of path/component mappings
- **RouterModule:** Configures routing (`.forRoot()` for root, `.forChild()` for features)
- **router-outlet:** Placeholder for routed components
- **routerLink:** Declarative navigation

### RxJS & Observables
- **Observable:** Lazy stream of values over time
- **Observer:** Consumer with `next`, `error`, `complete` handlers
- **Operators:** Transform/filter streams (`map`, `filter`, `debounceTime`, `switchMap`)
- **Subject:** Hot Observable you can manually push values into
- **Subscription:** Active connection (must unsubscribe to avoid leaks)
- **async pipe:** Auto-subscribe/unsubscribe in templates

### Best Practices
- Use `providedIn: 'root'` for singleton services
- Prefer `async` pipe over manual subscriptions
- Use `trackBy` for `*ngFor` performance
- Keep components lean, delegate logic to services
- Use TypeScript interfaces for strong typing
- Follow Angular style guide naming conventions

---

## Technical Stack
- **Angular:** 15.x
- **TypeScript:** 4.x
- **RxJS:** 7.x
- **CLI:** Angular CLI
- **Package Manager:** npm

---

## Resources & Documentation
- [Angular Docs](https://angular.io/docs)
- [RxJS Documentation](https://rxjs.dev/)
- [Angular Style Guide](https://angular.io/guide/styleguide)
- [RxJS Marbles](https://rxmarbles.com/) - Visual operator reference

---

## Git Commits Log
- Initial setup with Angular CLI
- Added HelloComponent and basic routing
- Created ProjectService with mock data
- Implemented ProjectsList with directives
- Added navigation and routing
- Documented learning progress

---

## Notes & Questions
- **Question:** When to use `Subject` vs `BehaviorSubject`?
  - Use `BehaviorSubject` when you need an initial value and new subscribers should get the current value immediately
  - Use `Subject` for pure event streams with no replay

- **Note:** `providedIn: 'root'` makes the `providers` array in `AppModule` empty for most services

- **Tip:** Use `| async` pipe to avoid memory leaks from forgotten unsubscribes

---

_Last Updated: December 11, 2025_
