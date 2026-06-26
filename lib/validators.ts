import { z } from 'zod';

export const ContactSchema = z.object({
  userName: z.string().min(1),
  userEmail: z.string().email(),
  userMessage: z.string().min(1),
});

export const CotizacionSchema = z.object({
  name_cotization: z.string().min(1),
  document_cotization: z.string().min(1),
  bornDate_cotization: z.string().min(1),
  cellPhone_cotization: z.string().min(1),
  email_cotization: z.string().email(),
  address_cotization: z.string().min(1),
  city_cotization: z.string().min(1),
  type_cotization: z.enum(['vehiculos', 'hogar', 'accidentes']),
  details: z.string().optional(),
  // vehiculos
  vehicle_type: z.string().optional(),
  vehicle_brand: z.string().optional(),
  vehicle_model: z.string().optional(),
  vehicle_year: z.string().optional(),
  // hogar
  property_type: z.string().optional(),
  property_area: z.string().optional(),
  property_amount: z.string().optional(),
  property_mascot: z.string().optional(),
  // accidentes
  life_qty: z.string().optional(),
  life_amount: z.string().optional(),
  life_profesion: z.string().optional(),
});

export type ContactData = z.infer<typeof ContactSchema>;
export type CotizacionData = z.infer<typeof CotizacionSchema>;
