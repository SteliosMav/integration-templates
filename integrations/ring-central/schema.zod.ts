// Generated by ts-to-zod
import { z } from 'zod';

export const idEntitySchema = z.object({
    id: z.string()
});

export const successResponseSchema = z.object({
    success: z.boolean()
});

export const userSchema = z.object({
    id: z.string(),
    email: z.string(),
    firstName: z.string(),
    lastName: z.string()
});

export const createUserSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string()
});

export const phoneNumberSchema = z.object({
    type: z.union([z.literal('work'), z.literal('mobile'), z.literal('other')]),
    value: z.string()
});

export const photoSchema = z.object({
    type: z.literal('photo'),
    value: z.string()
});

export const addressSchema = z.object({
    type: z.literal('work'),
    streetAddress: z.string().optional(),
    locality: z.string().optional(),
    region: z.string().optional(),
    postalCode: z.string().optional(),
    country: z.string().optional()
});

export const ringCentralCreateUserSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    active: z.boolean().optional(),
    externalId: z.string().optional(),
    phoneNumbers: z.array(phoneNumberSchema).optional(),
    photos: z.array(photoSchema).optional(),
    addresses: z.array(addressSchema).optional(),
    title: z.string().optional(),
    'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User': z
        .object({
            department: z.string()
        })
        .optional()
});

export const createContactSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().optional(),
    phoneNumbers: z.array(phoneNumberSchema).optional(),
    company: z.string().optional(),
    jobTitle: z.string().optional(),
    notes: z.string().optional()
});
