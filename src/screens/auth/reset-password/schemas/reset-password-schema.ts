import { z } from 'zod';
import { passwordPattern } from 'src/helpers';

/**
 * Reset password form validation schema.
 */
export const ResetPasswordSchema = z
  .object({
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
 * Reset password form validation schema type.
 */
export type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;
