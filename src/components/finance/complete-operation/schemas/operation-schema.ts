import { z } from 'zod';

/**
 * Operation schema validation.
 */
export const OperationSchema = z.object({
  broker: z.string().min(1, 'El broker es requerido'),
  quantity: z.string().min(1, 'La cantidad es requerida'),
  moneyAmount: z.string(),
});

/**
 * Operation schema type.
 */
export type OperationSchemaType = z.infer<typeof OperationSchema>;
