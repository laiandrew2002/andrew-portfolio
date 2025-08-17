/**
 * Custom hook for data validation
 */

import { useMemo } from 'react';
import {
  validateProjects,
  validateWorkExperiences,
  validateSkills,
  validatePersonalInfo,
  validateContactInfo,
  validateSocialMediaProfiles,
} from '../utils/dataValidation';
import {
  PROJECTS,
  WORK_EXPERIENCE,
  SKILLS,
  PERSONAL_INFO,
  CONTACT_INFO,
  SOCIAL_MEDIA_PROFILES,
} from '../constants';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

interface DataValidationResult {
  projects: ValidationResult;
  workExperience: ValidationResult;
  skills: ValidationResult;
  personalInfo: ValidationResult;
  contactInfo: ValidationResult;
  socialMediaProfiles: ValidationResult;
  overall: ValidationResult;
}

/**
 * Hook to validate all portfolio data
 */
export function useDataValidation(): DataValidationResult {
  return useMemo(() => {
    const results: DataValidationResult = {
      projects: { isValid: false, errors: [] },
      workExperience: { isValid: false, errors: [] },
      skills: { isValid: false, errors: [] },
      personalInfo: { isValid: false, errors: [] },
      contactInfo: { isValid: false, errors: [] },
      socialMediaProfiles: { isValid: false, errors: [] },
      overall: { isValid: false, errors: [] },
    };

    // Validate projects
    try {
      results.projects.isValid = validateProjects([...PROJECTS] as unknown[]);
      if (!results.projects.isValid) {
        results.projects.errors.push('Invalid projects data structure');
      }
    } catch (error) {
      results.projects.errors.push(`Projects validation error: ${error}`);
    }

    // Validate work experience
    try {
      results.workExperience.isValid = validateWorkExperiences([
        ...WORK_EXPERIENCE,
      ] as unknown[]);
      if (!results.workExperience.isValid) {
        results.workExperience.errors.push(
          'Invalid work experience data structure'
        );
      }
    } catch (error) {
      results.workExperience.errors.push(
        `Work experience validation error: ${error}`
      );
    }

    // Validate skills
    try {
      results.skills.isValid = validateSkills([...SKILLS] as unknown[]);
      if (!results.skills.isValid) {
        results.skills.errors.push('Invalid skills data structure');
      }
    } catch (error) {
      results.skills.errors.push(`Skills validation error: ${error}`);
    }

    // Validate personal info
    try {
      results.personalInfo.isValid = validatePersonalInfo(
        PERSONAL_INFO as unknown
      );
      if (!results.personalInfo.isValid) {
        results.personalInfo.errors.push(
          'Invalid personal info data structure'
        );
      }
    } catch (error) {
      results.personalInfo.errors.push(
        `Personal info validation error: ${error}`
      );
    }

    // Validate contact info
    try {
      results.contactInfo.isValid = validateContactInfo(
        CONTACT_INFO as unknown
      );
      if (!results.contactInfo.isValid) {
        results.contactInfo.errors.push('Invalid contact info data structure');
      }
    } catch (error) {
      results.contactInfo.errors.push(
        `Contact info validation error: ${error}`
      );
    }

    // Validate social media profiles
    try {
      results.socialMediaProfiles.isValid = validateSocialMediaProfiles([
        ...SOCIAL_MEDIA_PROFILES,
      ] as unknown[]);
      if (!results.socialMediaProfiles.isValid) {
        results.socialMediaProfiles.errors.push(
          'Invalid social media profiles data structure'
        );
      }
    } catch (error) {
      results.socialMediaProfiles.errors.push(
        `Social media profiles validation error: ${error}`
      );
    }

    // Overall validation
    const allValid = [
      results.projects.isValid,
      results.workExperience.isValid,
      results.skills.isValid,
      results.personalInfo.isValid,
      results.contactInfo.isValid,
      results.socialMediaProfiles.isValid,
    ].every(Boolean);

    results.overall.isValid = allValid;
    if (!allValid) {
      results.overall.errors = [
        ...results.projects.errors,
        ...results.workExperience.errors,
        ...results.skills.errors,
        ...results.personalInfo.errors,
        ...results.contactInfo.errors,
        ...results.socialMediaProfiles.errors,
      ];
    }

    return results;
  }, []);
}
