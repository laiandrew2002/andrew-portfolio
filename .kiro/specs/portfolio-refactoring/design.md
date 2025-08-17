# Design Document

## Overview

This design document outlines the refactoring approach for the Andrew Portfolio project to transform it into a well-structured, maintainable, and industry-standard codebase. The refactoring will focus on improving component organization, type safety, performance, accessibility, and overall code quality while maintaining the existing functionality and visual design.

## Architecture

### Current Architecture Issues

- Components are scattered without clear organization
- Mixed concerns within components (data, UI, business logic)
- Inconsistent TypeScript usage
- Hardcoded data mixed with components
- No clear separation between presentation and business logic
- Inconsistent error handling and loading states

### Proposed Architecture

```
src/
├── app/                    # Next.js app directory (unchanged structure)
├── components/            # Organized component library
│   ├── ui/               # Base UI components (Button, Input, etc.)
│   ├── layout/           # Layout-specific components
│   ├── sections/         # Page section components
│   └── features/         # Feature-specific components
├── lib/
│   ├── constants/        # Application constants
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── hooks/           # Custom React hooks
│   └── store/           # State management (existing)
├── data/                # Static data and content
└── styles/              # Global styles and design tokens
```

## Components and Interfaces

### 1. Component Organization Strategy

#### Base UI Components (`src/components/ui/`)

- `Button` - Standardized button component with variants
- `Card` - Reusable card component for content sections
- `Image` - Optimized image component with loading states
- `Typography` - Text components with consistent styling
- `Icon` - Icon wrapper component
- `LoadingSpinner` - Loading state component
- `ErrorBoundary` - Error handling component

#### Layout Components (`src/components/layout/`)

- `TopBar` - Application header
- `BottomBar` - Application footer
- `ActivityBar` - Side navigation
- `TabContainer` - Tab management
- `CollapsableMenu` - Expandable menu system
- `Container` - Content wrapper with consistent spacing

#### Section Components (`src/components/sections/`)

- `HeroSection` - Landing page hero
- `AboutSection` - About me content
- `WorkExperienceSection` - Work history
- `SkillsSection` - Skills showcase
- `ProjectsSection` - Project portfolio
- `ContactSection` - Contact information

#### Feature Components (`src/components/features/`)

- `ProjectCard` - Individual project display
- `SkillGrid` - Skills display grid
- `ExperienceTimeline` - Work experience timeline
- `TechStack` - Technology stack display

### 2. Type System Design

#### Core Types (`src/lib/types/`)

```typescript
// common.ts
export interface BaseEntity {
  id: string;
  title: string;
  description: string;
}

// portfolio.ts
export interface Project extends BaseEntity {
  url: string;
  pathname: string;
  href: string;
  framework: string;
  technologies: Technology[];
  images: ProjectImage[];
  features: string[];
  industry?: string;
  developedIn?: string;
  projectType?: string;
  service?: string;
}

export interface WorkExperience extends BaseEntity {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  achievements: Achievement[];
  technologies: Technology[];
  companyLogo: ImageAsset;
}

export interface Technology {
  name: string;
  image: string;
  link?: string;
  category: TechnologyCategory;
}

export interface Skill {
  category: string;
  technologies: Technology[];
}

// ui.ts
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends ComponentProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}
```

### 3. Data Management Strategy

#### Constants Organization (`src/lib/constants/`)

- `projects.ts` - All project data
- `workExperience.ts` - Work history data
- `skills.ts` - Skills and technologies
- `navigation.ts` - Navigation configuration
- `siteConfig.ts` - Site-wide configuration

#### Data Validation

- Use Zod or similar for runtime type validation
- Validate data at boundaries (API responses, user input)
- Provide fallbacks for missing or invalid data

## Data Models

### Project Data Model

```typescript
export const PROJECT_CATEGORIES = {
  WEB_APP: 'web-app',
  MOBILE_APP: 'mobile-app',
  STATIC_SITE: 'static-site',
  DAPP: 'dapp',
} as const;

export const TECHNOLOGY_CATEGORIES = {
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  DATABASE: 'database',
  TOOLS: 'tools',
  BLOCKCHAIN: 'blockchain',
} as const;
```

### Component Props Models

```typescript
export interface SectionProps extends ComponentProps {
  id: string;
  title?: string;
  subtitle?: string;
}

export interface CardProps extends ComponentProps {
  title: string;
  description?: string;
  image?: ImageAsset;
  actions?: CardAction[];
}
```

## Error Handling

### Error Boundary Strategy

- Implement error boundaries at section level
- Provide graceful fallbacks for failed components
- Log errors for debugging while showing user-friendly messages

### Loading States

- Implement skeleton loading for content sections
- Use Suspense boundaries for async components
- Provide loading indicators for user actions

### Image Loading

- Implement progressive image loading
- Provide fallback images for broken links
- Use Next.js Image optimization features

## Testing Strategy

### Component Testing

- Unit tests for utility functions
- Component tests for UI components
- Integration tests for complex interactions
- Visual regression tests for design consistency

### Accessibility Testing

- Automated accessibility testing with jest-axe
- Manual testing with screen readers
- Keyboard navigation testing
- Color contrast validation

### Performance Testing

- Bundle size analysis
- Core Web Vitals monitoring
- Image optimization validation
- Loading performance benchmarks

## Performance Optimizations

### Code Splitting

- Route-based code splitting for app pages
- Component-based splitting for heavy components
- Dynamic imports for non-critical features

### Image Optimization

- Next.js Image component usage
- WebP format with fallbacks
- Responsive image sizing
- Lazy loading implementation

### Bundle Optimization

- Tree shaking for unused code
- Dynamic imports for large dependencies
- Webpack bundle analysis
- CSS optimization and purging

## Accessibility Improvements

### WCAG Compliance

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

### User Experience

- Reduced motion preferences
- High contrast mode support
- Text scaling support
- Touch target sizing

## Migration Strategy

### Phase 1: Foundation

- Set up new directory structure
- Create base type definitions
- Extract constants and data
- Implement error boundaries

### Phase 2: Component Refactoring

- Refactor UI components
- Implement design system
- Update layout components
- Add loading states

### Phase 3: Feature Enhancement

- Refactor section components
- Implement performance optimizations
- Add accessibility improvements
- Update state management

### Phase 4: Testing and Polish

- Add comprehensive tests
- Performance optimization
- Final accessibility audit
- Documentation updates
