import { ValidationRules } from '@/hooks/useFormValidation';

export const loginValidationRules: ValidationRules = {
  identifier: (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || !emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return undefined;
  },
  password: (value: string) => {
    if (!value || value.length < 6) {
      return 'Password must be at least 6 characters';
    }
    return undefined;
  },
};
