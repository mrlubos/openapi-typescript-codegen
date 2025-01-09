// This file is auto-generated by @hey-api/openapi-ts

import { z } from 'zod';

export const zFoo = z.object({
    foo: z.literal('foo').optional(),
    bar: z.literal(3.2).optional(),
    baz: z.literal(-1).optional(),
    qux: z.literal(true).optional(),
    quux: z.tuple([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal('foo'),
        z.literal(true)
    ]).optional(),
    corge: z.object({}).optional(),
    garply: z.bigint().optional()
});