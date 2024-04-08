import { z } from 'zod';

/**
 * Forgot password form validation schema.
 */
export const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, 'El correo es requerido')
    .email('El correo no es valido'),
});

/**
 * Forgot password form validation schema type.
 */
export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;
