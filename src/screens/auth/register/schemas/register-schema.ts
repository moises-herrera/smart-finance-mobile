import { z } from 'zod';
import { passwordPattern } from '../../../../helpers';

/**
 * Register form validation schema.
 */
export const RegisterSchema = z
  .object({
    fullName: z.string().min(1, 'El nombre es requerido'),
    email: z
      .string()
      .min(1, 'El correo es requerido')
      .email('El correo no es valido'),
    country: z.string().min(1, 'El país es requerido'),
    password: z
      .string()
      .min(8, 'La contraseña debe tener mínimo 8 carácteres')
      .max(20, 'La contraseña debe tener máximo 20 carácteres')
      .regex(
        passwordPattern,
        'La contraseña debe tener al menos una mayúscula, una minúscula y un número'
      ),
    confirmPassword: z.string().min(1, 'La confirmación es requerida'),
  })
  .superRefine(({ password, confirmPassword }, context) => {
    if (password !== confirmPassword) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['confirmPassword'],
        message: 'Las contraseñas no coinciden',
      });
    }
  });

/**
 * Type of the sign up form validation schema.
 */
export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
