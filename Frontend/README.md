# Raahi Frontend

A React-based ride-sharing application frontend built with Vite and Tailwind CSS.

## Project Structure

### Core Files

- `vite.config.js` - Vite configuration with React and Tailwind plugins
- `index.html` - Entry HTML file
- `package.json` - Project dependencies and scripts
- `.gitignore` - Git ignore configuration
- `eslint.config.js` - ESLint configuration

### Source Files (`/src`)

#### Main Entry
- `main.jsx` - Application entry point with context providers and router setup
- `App.jsx` - Root component with route definitions
- `index.css` - Global styles with Tailwind imports

#### Pages
All page components are in `/src/pages/`:

- `Start.jsx` - Landing page with app introduction
- `Home.jsx` - Main dashboard with ride booking interface
- `Riding.jsx` - Active ride tracking interface
- `UserLogin.jsx` - User login form
- `UserSignup.jsx` - User registration form
- `UserLogout.jsx` - User logout handler
- `UserProtectWrapper.jsx` - Authentication wrapper for user routes
- `CaptainHome.jsx` - Captain's dashboard
- `CaptainLogin.jsx` - Captain login form
- `CaptainSignup.jsx` - Captain registration form
- `CaptainLogout.jsx` - Captain logout handler
- `CaptainProtectWrapper.jsx` - Authentication wrapper for captain routes

#### Components
Located in `/src/components/`:

- `LocationSearchPanel.jsx` - Search interface for locations
- `VehiclePanel.jsx` - Vehicle selection interface
- `ConfirmRide.jsx` - Ride confirmation panel
- `LookingForDriver.jsx` - Driver search interface
- `WaitingForDriver.jsx` - Ride status display

#### Context
Located in `/src/context/`:

- `UserContext.jsx` - User authentication and data context
- `CaptainContext.jsx` - Captain authentication and data context

## Features

### Authentication
- Separate flows for users and captains
- JWT-based authentication
- Protected routes
- Automatic token refresh
- Session management

### Ride Booking
1. Location Selection
   - Search functionality
   - Recent locations
   - Address validation

2. Vehicle Selection
   - Multiple vehicle types
   - Price estimates
   - Availability check

3. Ride Confirmation
   - Route preview
   - Price breakdown
   - Payment method selection

4. Ride Tracking
   - Real-time location updates
   - Driver details
   - Trip status
   - Payment status

### User Interface
- Responsive design
- GSAP animations
- Interactive maps
- Loading states
- Error handling
- Toast notifications

## Technical Details

### State Management
- React Context for global state
- Local state with useState
- Side effects with useEffect

### Routing
- React Router v7
- Protected routes
- Navigation guards
- Dynamic routing

### Styling
- Tailwind CSS
- Custom animations
- Responsive layouts
- Theme customization

### API Integration
- Axios for HTTP requests
- JWT token management
- Request/response interceptors
- Error handling

### Security
- Protected routes
- Token validation
- XSS prevention
- CORS handling

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables
Required variables in `.env`:
- `VITE_BASE_URL` - Backend API URL

## Dependencies
- React v19
- React Router v7
- Axios
- GSAP
- Tailwind CSS
- Remix Icons

## Detailed File Documentation

### Core Files

#### vite.config.js
Configuration file for Vite build tool:
- React plugin setup
- Tailwind CSS integration
- Development server settings
- Build optimization configurations
- Environment variable handling

#### index.html
Entry HTML file containing:
- Meta tags for SEO and viewport settings
- Root div element for React mounting
- Script imports
- Initial loading state styling

#### package.json
Project configuration containing:
- Dependencies and their versions
- Development scripts
- Project metadata
- Build and test configurations

#### .gitignore
Version control exclusion patterns:
- Node modules directory
- Environment files
- Build directories
- System files
- Log files

#### eslint.config.js
ESLint configuration defining:
- Code style rules
- Plugin configurations
- Environment settings
- Import/export rules
- React-specific rules

### Source Files

#### Main Entry Files

##### src/main.jsx
Application bootstrap file:
- React 19 initialization
- Context providers setup
- Router configuration
- Global error boundary
- Strict mode configuration

##### src/App.jsx
Root component containing:
- Route definitions
- Layout components
- Authentication guards
- Error boundaries
- Loading states

##### src/index.css
Global styles file:
- Tailwind directives
- Custom variables
- Global reset styles
- Utility classes
- Animation definitions

#### Context Files

##### src/context/UserContext.jsx
User authentication context:
- JWT token management
- User state management
- Login/logout functions
- Profile management
- Authentication status

##### src/context/CaptainContext.jsx
Captain authentication context:
- Captain state management
- Status tracking
- Ride management functions
- Location tracking
- Availability controls

#### Pages

##### src/pages/Start.jsx
Landing page component:
- App introduction
- User/Captain role selection
- Feature highlights
- Call-to-action buttons
- Animation sequences

##### src/pages/Home.jsx
Main dashboard component:
- Ride booking interface
- Location search
- Vehicle selection
- Price estimates
- Recent rides

##### src/pages/Riding.jsx
Active ride interface:
- Real-time location tracking
- Driver details display
- Trip status updates
- Payment information
- Emergency controls

##### src/pages/UserLogin.jsx
User login component:
- Login form
- Validation logic
- Error handling
- Social login options
- Password reset link

##### src/pages/UserSignup.jsx
User registration component:
- Registration form
- Input validation
- Terms acceptance
- Email verification
- Profile setup

##### src/pages/CaptainHome.jsx
Captain dashboard component:
- Ride requests
- Earnings overview
- Status controls
- Trip history
- Performance metrics

#### Components

##### src/components/LocationSearchPanel.jsx
Location search interface:
- Address autocomplete
- Recent locations
- Map integration
- Coordinate validation
- Location suggestions

##### src/components/VehiclePanel.jsx
Vehicle selection component:
- Vehicle type cards
- Price calculations
- Availability indicators
- Special features
- Capacity information

##### src/components/ConfirmRide.jsx
Ride confirmation interface:
- Route summary
- Price breakdown
- Payment selection
- Driver preferences
- Booking confirmation

##### src/components/LookingForDriver.jsx
Driver search component:
- Loading animations
- Status updates
- Cancel options
- Time estimates
- Nearby driver count

##### src/components/WaitingForDriver.jsx
Ride status component:
- Driver details
- Vehicle information
- ETA display
- Contact options
- Trip tracking

## Testing

### Unit Tests
Located in `__tests__` directories:
- Component testing
- Context testing
- Utility function testing
- Mock service testing
- Integration testing

### End-to-End Tests
Using Cypress in `cypress` directory:
- User flows
- Captain flows
- Authentication
- Ride booking
- Payment processing

## Build System

### Development Build
```bash
npm run dev
# Starts development server with:
# - Hot module replacement
# - Source maps
# - Error overlay
# - ESLint integration
```

### Production Build
```bash
npm run build
# Creates optimized build with:
# - Code splitting
# - Tree shaking
# - Asset optimization
# - Minification
```

## Deployment

### Prerequisites
- Node.js 18+
- npm 9+
- Environment variables configured

### Steps
1. Clone repository
2. Install dependencies
3. Set environment variables
4. Build application
5. Deploy to hosting service

## Contributing

### Setup
1. Fork repository
2. Create feature branch
3. Install dependencies
4. Make changes
5. Run tests
6. Submit pull request

### Guidelines
- Follow ESLint rules
- Write unit tests
- Update documentation
- Follow commit message convention
- Keep changes focused

