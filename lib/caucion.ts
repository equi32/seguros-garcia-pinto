export type Zona = 'ba' | 'otros';

export const CIUDADES = [
  { value: 'ba', label: 'Buenos Aires', zona: 'ba' as Zona },
  { value: 'cordoba', label: 'Córdoba', zona: 'otros' as Zona },
  { value: 'salta', label: 'Salta', zona: 'otros' as Zona },
  { value: 'tucuman', label: 'Tucumán', zona: 'otros' as Zona },
  { value: 'mendoza', label: 'Mendoza', zona: 'otros' as Zona },
  { value: 'otros', label: 'Otros', zona: 'otros' as Zona },
] as const;

export type CiudadValue = (typeof CIUDADES)[number]['value'];
export type Duracion = 12 | 24 | 36;

const DESCUENTO_TRANSFERENCIA = 0.1;

const FACTOR_SIN_DEPOSITO: Record<Zona, Record<Duracion, number>> = {
  ba: { 12: 1, 24: 1.5, 36: 5 / 3 },
  otros: { 12: 0.8, 24: 1.2, 36: 1.5 },
};

const FACTOR_CON_DEPOSITO: Record<Zona, Record<Duracion, number>> = {
  ba: { 12: 1.1, 24: 1.6, 36: 1.8 },
  otros: { 12: 1.0, 24: 1.4, 36: 1.7 },
};

export const COBERTURA_EXPENSAS = 2_500_000;
export const COBERTURA_IMPUESTOS_SERVICIOS = 1_500_000;

export const CUOTAS_SIN_DEPOSITO = [9] as const;
export const CUOTAS_CON_DEPOSITO = [9] as const;

export interface ResultadoCaucion {
  conDeposito: boolean;
  factor: number;
  x: number;
  precio: number;
  transferencia: number;
  cuotas: { n: number; valor: number }[];
}

export function calcularCaucion(
  zona: Zona,
  alquiler: number,
  meses: Duracion,
  deposito: number
): ResultadoCaucion {
  const conDeposito = deposito > 0;
  const tabla = conDeposito ? FACTOR_CON_DEPOSITO : FACTOR_SIN_DEPOSITO;
  const factor = tabla[zona][meses];
  const x = conDeposito ? (alquiler * meses + deposito) / meses : alquiler;
  const precio = Math.round(x * factor);
  const transferencia = Math.round(precio * (1 - DESCUENTO_TRANSFERENCIA));
  const cantidades = conDeposito ? CUOTAS_CON_DEPOSITO : CUOTAS_SIN_DEPOSITO;
  const cuotas = cantidades.map((n) => ({ n, valor: Math.round(precio / n) }));

  return { conDeposito, factor, x, precio, transferencia, cuotas };
}

export function formatARS(n: number): string {
  return Math.round(n).toLocaleString('es-AR');
}

export function ciudadLabel(value: CiudadValue): string {
  return CIUDADES.find((c) => c.value === value)?.label ?? value;
}

export function zonaDe(value: CiudadValue): Zona {
  return CIUDADES.find((c) => c.value === value)?.zona ?? 'otros';
}
