import { useState } from 'react';

/**
 * Object type that maps field names to their error messages.
 * If a field has no error, its value is undefined.
 */
export type FieldErrors = {
  [key: string]: string | undefined;
};

/**
 * Object type that tracks which fields have been touched (visited) by the user.
 * Used to determine when to display validation errors.
 */
export type TouchedFields = {
  [key: string]: boolean;
};

/**
 * Object type that maps field names to their validation functions.
 * Each validation function takes a field value and returns an error message or undefined if valid.
 */
export type ValidationRules = {
  [fieldName: string]: (value: string) => string | undefined;
};

/**
 * Custom React hook for managing form validation state and handlers.
 * Provides validation logic, error tracking, and form submission handling.
 */
export const useFormValidation = (validationRules: ValidationRules) => {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});

  const validateField = (fieldName: string, value: string): string | undefined => {
    const rule = validationRules[fieldName];
    if (rule) {
      return rule(value);
    }
    return undefined;
  };

  /**
   * Handles the blur event on form input fields.
   * When a user leaves (blurs) an input field, this handler:
   * 1. Marks the field as touched in state
   * 2. Validates the field's current value
   * 3. Updates the errors state with any validation errors
   * Used to show validation errors only after the user has interacted with a field.
   */
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  /**
   * Validates all fields in the form at once.
   *
   * Iterates through all validation rules and validates each field
   * using the values from the provided FormData object.
   * Returns an object with validation errors for each field.
   */
  const validateAllFields = (formData: FormData): FieldErrors => {
    const newErrors: FieldErrors = {};

    Object.keys(validationRules).forEach((fieldName) => {
      const value = formData.get(fieldName) as string;
      const error = validateField(fieldName, value);
      newErrors[fieldName] = error;
    });

    return newErrors;
  };

  /**
   * Handles form submission with full validation.
   *
   * On form submit, this handler:
   * 1. Marks all fields as touched (to show all validation errors)
   * 2. Validates all fields using validateAllFields()
   * 3. Updates the errors state
   * 4. Prevents form submission if any validation errors exist
   *
   * If validation passes (no errors), the form submits normally.
   * If validation fails, e.preventDefault() stops the submission.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Mark all fields as touched
    const allFields: TouchedFields = {};
    Object.keys(validationRules).forEach((fieldName) => {
      allFields[fieldName] = true;
    });
    setTouched(allFields);

    // Validate all fields
    const formData = new FormData(e.currentTarget);
    const newErrors = validateAllFields(formData);
    setErrors(newErrors);

    // Prevent submission if there are errors
    const hasErrors = Object.values(newErrors).some((error) => error !== undefined);
    if (hasErrors) {
      e.preventDefault();
    }
  };

  /**
   * Resets the form validation state.
   * Clears all errors and marks all fields as untouched.
   * Useful for clearing validation state after successful form submission
   * or when implementing a "Reset" button.
   */
  const resetForm = () => {
    setErrors({});
    setTouched({});
  };

  return {
    errors,
    touched,
    handleBlur,
    handleSubmit,
    resetForm,
  };
};
