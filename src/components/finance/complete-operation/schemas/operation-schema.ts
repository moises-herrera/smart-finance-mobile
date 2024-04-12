import { z } from 'zod';

/**
 * Operation schema validation.
 */
export const OperationSchema = z.object({
  broker: z.string().min(1, 'El broker es requerido'),
  amount: z.string().min(1, 'La cantidad es requerida'),
});

/**
 * Operation schema type.
 */
export type OperationSchemaType = z.infer<typeof OperationSchema>;
