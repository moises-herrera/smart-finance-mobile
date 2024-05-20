import { z } from 'zod';

/**
 * Operation schema validation.
 */
export const OperationSchema = z.object({
  broker: z.string().min(1, 'El broker es requerido'),
  quantity: z.preprocess(
    (value) => Number(value),
    z.number().min(1, 'La cantidad es requerida')
  ),
  moneyAmount: z.preprocess((value) => Number(value), z.number()),
});

/**
 * Operation schema type.
 */
export type OperationSchemaType = z.infer<typeof OperationSchema>;
