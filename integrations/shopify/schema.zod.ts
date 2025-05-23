// Generated by ts-to-zod
import { z } from 'zod';

export const customerSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    display_name: z.string(),
    email: z.string().nullable(),
    phone: z.string().nullable()
});

export const addressSchema = z.object({
    address1: z.string(),
    address2: z.string().nullable(),
    city: z.string(),
    country: z.string(),
    province: z.string().nullable(),
    zip: z.string().nullable()
});

export const orderSchema = z.object({
    id: z.string(),
    name: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    processed_at: z.string(),
    currency_code: z.string(),
    presentment_currency_code: z.string(),
    confirmed: z.boolean(),
    cancelled_at: z.string().nullable(),
    cancel_reason: z.string().nullable(),
    closed: z.boolean(),
    closed_at: z.string().nullable(),
    fully_paid: z.boolean(),
    customer: customerSchema.nullable(),
    total_price_set: z.object({
        amount: z.string(),
        currency_code: z.string()
    }),
    subtotal_price_set: z.object({
        amount: z.string(),
        currency_code: z.string()
    }),
    total_tax_set: z.object({
        amount: z.string(),
        currency_code: z.string()
    }),
    shipping_address: addressSchema.nullable(),
    billing_address: addressSchema.nullable(),
    line_item: z.array(
        z.object({
            id: z.string(),
            name: z.string(),
            quantity: z.number(),
            original_total_set: z.object({
                amount: z.string(),
                currency_code: z.string()
            }),
            discounted_total_set: z.object({
                amount: z.string(),
                currency_code: z.string()
            })
        })
    )
});
