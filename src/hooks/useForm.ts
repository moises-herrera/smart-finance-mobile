import { useState } from 'react';
import { ZodType } from 'zod';
import { getErrorsFormatted } from '../helpers';
import { FormSubmitHandler, FieldsValidationOptions } from '../interfaces';

export const useForm = <T>(initialForm: T, schema?: ZodType<any, any, any>) => {
  const [formState, setFormState] = useState<T>(initialForm);
  const [errors, setErrors] = useState<Record<keyof T, string> | null>(null);

  const validateFields = ({
    formValues,
    currentField,
    onSubmit,
  }: FieldsValidationOptions<T>) => {
    if (!schema) {
      onSubmit && onSubmit(formValues);
      return;
    }

    const result = schema.safeParse(formValues);

    if (!result.success) {
      const errorsFormatted = getErrorsFormatted<T>(result.error, currentField);
      setErrors({
        ...errors,
        ...errorsFormatted,
      });
      return;
    }

    setErrors(null);
    onSubmit && onSubmit(formValues);
  };

  const onInputChange = (name: string, value: string | T[keyof T]) => {
    const newFormState: T = { ...formState, [name]: value };
    setFormState(newFormState);
    validateFields({
      formValues: newFormState,
      currentField: name as keyof T,
    });
  };

  const onBlur = (name: string) => {
    validateFields({
      formValues: formState,
      currentField: name as keyof T,
    });
  };

  const handleSubmit = (onSubmit: FormSubmitHandler<T>) => {
    validateFields({ formValues: formState, onSubmit });
  };

  const onResetForm = (): void => {
    setFormState(initialForm);
  };

  const onSetForm = (newForm: T): void => {
    setFormState(newForm);
  };

  return {
    formState,
    errors,
    onInputChange,
    onBlur,
    handleSubmit,
    onSetForm,
    onResetForm,
  };
};
