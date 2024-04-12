import { z } from 'zod';
import { passwordPattern } from 'src/helpers';

/**
 * Settings form validation schema.
 */
export const SettingsSchema = z.object({
  fullName: z.string().min(1, 'El nombre es requerido'),
  email: z
    .string()
    .min(1, 'El correo es requerido')
    .email('El correo no es valido'),
  country: z.string().min(1, 'El país es requerido'),
  currency: z.string().min(1, 'La moneda es requerida'),
  password: z
    .string()
    .min(8, 'La contraseña debe tener mínimo 8 carácteres')
    .max(20, 'La contraseña debe tener máximo 20 carácteres')
    .regex(
      passwordPattern,
      'La contraseña debe tener al menos una mayúscula, una minúscula y un número'
    )
    .or(z.literal('')),
});

/**
 * Type of the settings form validation schema.
 */
export type SettingsSchemaType = z.infer<typeof SettingsSchema>;
