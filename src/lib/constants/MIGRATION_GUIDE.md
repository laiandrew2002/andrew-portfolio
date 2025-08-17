# Data Constants Migration Guide

This guide explains how to migrate components from using hardcoded data to the new centralized constants.

## Available Constants

### Personal Information

```typescript
import {
  PERSONAL_INFO,
  CONTACT_INFO,
  SOCIAL_MEDIA_PROFILES,
} from '@/lib/constants';

// Usage examples:
const name = PERSONAL_INFO.name; // "Andrew Lai"
const email = CONTACT_INFO.email; // "laiandrew2002@gmail.com"
const socialProfiles = SOCIAL_MEDIA_PROFILES; // Array of social media links
```

### Work Experience

```typescript
import { WORK_EXPERIENCE } from '@/lib/constants';

// Usage examples:
const experiences = WORK_EXPERIENCE; // Array of work experiences
const currentJob = WORK_EXPERIENCE[0]; // Most recent job
```

### Skills & Technologies

```typescript
import {
  SKILLS,
  PROGRAMMING_LANGUAGES,
  FRONTEND_FRAMEWORKS,
  BACKEND_FRAMEWORKS,
  BLOCKCHAIN_TECHNOLOGIES,
  DEVELOPMENT_TOOLS,
  ALL_TECHNOLOGIES,
} from '@/lib/constants';

// Usage examples:
const allSkills = SKILLS; // Grouped by category
const jsFrameworks = FRONTEND_FRAMEWORKS; // Just frontend technologies
const allTechs = ALL_TECHNOLOGIES; // Flat array of all technologies
```

### Projects

```typescript
import { PROJECTS, WEB_APPS, DAPPS, STATIC_SITES } from '@/lib/constants';

// Usage examples:
const allProjects = PROJECTS; // All projects
const webApps = WEB_APPS; // Filtered web applications
const dapps = DAPPS; // Filtered DApps
```

## Component Migration Examples

### Before (AboutMe.tsx)

```typescript
const AboutMe = () => {
  return (
    <div>
      <h3>Andrew Lai</h3>
      <p>Full stack software engineer</p>
      <p>Result-oriented software engineer with 5+ years...</p>
    </div>
  );
};
```

### After (AboutMe.tsx)

```typescript
import { PERSONAL_INFO } from '@/lib/constants';

const AboutMe = () => {
  return (
    <div>
      <h3>{PERSONAL_INFO.name}</h3>
      <p>{PERSONAL_INFO.title}</p>
      <p>{PERSONAL_INFO.shortBio}</p>
    </div>
  );
};
```

### Before (Skills.tsx)

```typescript
const skills = [
  {
    name: 'Programming Languages',
    logos: [
      { name: 'JavaScript', image: '/logos/js-logo.png' },
      // ... more hardcoded data
    ],
  },
];
```

### After (Skills.tsx)

```typescript
import { SKILLS } from '@/lib/constants';

const Skills = () => {
  return (
    <div>
      {SKILLS.map(({ category, technologies }) => (
        <div key={category}>
          <h3>{category}</h3>
          {technologies.map(tech => (
            <div key={tech.name}>
              <img src={tech.image} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
```

## Data Validation

Use the validation hook to ensure data integrity:

```typescript
import { useDataValidation } from '@/lib/hook/useDataValidation';

const MyComponent = () => {
  const validation = useDataValidation();

  if (!validation.overall.isValid) {
    console.error('Data validation failed:', validation.overall.errors);
  }

  return <div>Component content</div>;
};
```

## Type Safety

All constants are properly typed. Import types as needed:

```typescript
import {
  Project,
  WorkExperience,
  Skill,
  Technology,
} from '@/lib/types/portfolio';

const processProject = (project: Project) => {
  // TypeScript will provide full type checking
};
```

## Next Steps

1. Update components one by one to use the new constants
2. Remove hardcoded data from component files
3. Test each component after migration
4. Use the validation hook to catch any data issues
5. Update tests to use the new constants
