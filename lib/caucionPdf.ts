import { jsPDF } from 'jspdf';
import {
  COBERTURA_EXPENSAS,
  COBERTURA_IMPUESTOS_SERVICIOS,
  formatARS,
  type ResultadoCaucion,
} from './caucion';

const NAVY: [number, number, number] = [0x22, 0x47, 0x75];
const LIMA: [number, number, number] = [0xdf, 0xe2, 0x82];
const PALE_BLUE: [number, number, number] = [0xd5, 0xe0, 0xed];
const GRAY_TEXT: [number, number, number] = [0x55, 0x55, 0x55];

const CLAUSULAS = [
  'Rol del productor. García Pinto – Asesor de Seguros es Productor Asesor de Seguros matriculado (MP 87740). Actúa como intermediario y asesor; no es entidad aseguradora.',
  'Quién otorga la garantía. La aceptación del riesgo, las condiciones, las contragarantías y la emisión de la póliza dependen exclusivamente de la aseguradora y se rigen por sus condiciones.',
  'Carácter de la propuesta. Está sujeto a la aceptación del riesgo por parte de la aseguradora. No constituye garantía hasta que la póliza sea emitida y se cumplan las condiciones de pago establecidas.',
  'Datos declarados. Se elaboró con la información suministrada por el tomador. Declararla con exactitud es clave, porque diferencias con la realidad pueden afectar la operación.',
  'Sujeto a póliza. Este resumen no reemplaza la lectura de la póliza ni de sus condiciones. Sujeto a términos y condiciones de póliza. Para el análisis de tu caso puntual, consultanos.',
];

export interface DatosCotizacionPdf {
  nombre: string;
  celular: string;
  mail: string;
  ciudad: string;
  alquiler: number;
  meses: number;
  deposito: number;
  resultado: ResultadoCaucion;
}

function cargarImagen(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

export async function generarCotizacionPdf(datos: DatosCotizacionPdf): Promise<void> {
  const { nombre, celular, mail, ciudad, alquiler, meses, deposito, resultado } = datos;
  const [patternImg, logoBlancoImg, logoLimaImg] = await Promise.all([
    cargarImagen('/img/pattern-oscuro-header.jpg'),
    cargarImagen('/img/logo-alt.png'),
    cargarImagen('/img/logo-lima.png'),
  ]);

  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const pageWidth = 210;
  let y = 0;

  // Header band
  const headerHeight = 38;
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, pageWidth, headerHeight, 'F');

  // Patterned background (pre-cropped to the header's aspect ratio)
  doc.addImage(patternImg, 'JPEG', 0, 0, pageWidth, headerHeight, undefined, 'MEDIUM');

  doc.setFillColor(...LIMA);
  doc.rect(0, headerHeight, pageWidth, 3, 'F');

  const logoRatio = logoBlancoImg.width / logoBlancoImg.height;
  const logoHeaderH = 16;
  const logoHeaderW = logoHeaderH * logoRatio;
  doc.addImage(
    logoBlancoImg,
    'PNG',
    14,
    (headerHeight - logoHeaderH) / 2,
    logoHeaderW,
    logoHeaderH,
    undefined,
    'MEDIUM'
  );

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('COTIZACIÓN ORIENTATIVA', pageWidth - 14, 12, { align: 'right' });
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('Seguro de Caución', pageWidth - 14, 22, { align: 'right' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('Garantía de alquiler', pageWidth - 14, 29, { align: 'right' });

  y = 48;

  const hoy = new Date();
  const fechaStr = `${String(hoy.getDate()).padStart(2, '0')}/${String(hoy.getMonth() + 1).padStart(2, '0')}/${hoy.getFullYear()}`;

  // Info boxes: N° de cotización / fecha / válido hasta
  const boxWidth = (pageWidth - 28 - 8) / 3;
  const infoBoxes: [string, string][] = [
    ['N.° DE COTIZACIÓN', 'A definir'],
    ['FECHA DE EMISIÓN', fechaStr],
    ['VÁLIDO HASTA', 'A definir'],
  ];
  infoBoxes.forEach(([label, value], i) => {
    const x = 14 + i * (boxWidth + 4);
    doc.setFillColor(...PALE_BLUE);
    doc.rect(x, y, boxWidth, 14, 'F');
    doc.setTextColor(...NAVY);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.text(label, x + 3, y + 5);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(value, x + 3, y + 11);
  });

  y += 22;

  function sectionTitle(title: string) {
    doc.setTextColor(...NAVY);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(title, 14, y);
    doc.setDrawColor(...LIMA);
    doc.setLineWidth(1);
    doc.line(14, y + 1.5, pageWidth - 14, y + 1.5);
    y += 7;
  }

  function row(label: string, value: string) {
    doc.setTextColor(...GRAY_TEXT);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.text(label, 14, y);
    doc.setTextColor(30, 30, 30);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text(value, pageWidth - 14, y, { align: 'right' });
    doc.setDrawColor(230, 230, 230);
    doc.line(14, y + 2, pageWidth - 14, y + 2);
    y += 7;
  }

  sectionTitle('SOLICITANTE');
  row('Nombre completo', nombre);
  row('Celular', celular);
  row('Mail', mail);
  y += 2;

  sectionTitle('OPERACIÓN A GARANTIZAR');
  row('Tipo de caución', 'Garantía de locación (alquiler)');
  row('Ciudad del alquiler', ciudad);
  row('Obligación garantizada', 'Canon locativo, impuestos, servicios y expensas');
  const years = Math.round((meses / 12) * 10) / 10;
  row('Plazo de vigencia', `${meses} meses (${years} años) · Inicio y fin: A definir`);
  y += 2;

  sectionTitle('VALORES Y FORMA DE PAGO');
  row(`Alquiler $ ${formatARS(alquiler)} × ${meses}`, `$ ${formatARS(alquiler * meses)}`);
  row('Expensas', `Hasta $ ${formatARS(COBERTURA_EXPENSAS)}`);
  row('Impuestos y servicios', `Hasta $ ${formatARS(COBERTURA_IMPUESTOS_SERVICIOS)}`);
  row('Depósito de garantía', deposito > 0 ? `$ ${formatARS(deposito)}` : 'No incluido');
  const sumaAGarantizar =
    alquiler * meses + COBERTURA_EXPENSAS + COBERTURA_IMPUESTOS_SERVICIOS + deposito;
  row('Suma a garantizar (a confirmar)', `$ ${formatARS(sumaAGarantizar)}`);

  y += 4;

  // Price box
  const boxH = 24 + resultado.cuotas.length * 6;
  doc.setFillColor(...NAVY);
  doc.rect(14, y, pageWidth - 28, boxH, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('PRECIO ESTIMADO DE LA CAUCIÓN', 20, y + 8);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text(`$ ${formatARS(resultado.precio)}`, 20, y + 18);

  let cy = y + 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text(
    `Transferencia · 10% off: $ ${formatARS(resultado.transferencia)}`,
    pageWidth / 2 + 6,
    cy
  );
  resultado.cuotas.forEach((c) => {
    cy += 6;
    doc.text(`${c.n} cuotas sin interés de $ ${formatARS(c.valor)}`, pageWidth / 2 + 6, cy);
  });

  y += boxH + 10;

  // Clauses
  doc.setTextColor(30, 30, 30);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  CLAUSULAS.forEach((clausula, i) => {
    const lines = doc.splitTextToSize(`${i + 1}. ${clausula}`, pageWidth - 28);
    if (y + lines.length * 4 > 275) {
      doc.addPage();
      y = 20;
    }
    doc.text(lines, 14, y);
    y += lines.length * 4 + 2;
  });

  // Footer
  const footerY = 287;
  const footerHeight = 10;
  doc.setFillColor(...NAVY);
  doc.rect(0, footerY, pageWidth, footerHeight, 'F');

  const logoLimaRatio = logoLimaImg.width / logoLimaImg.height;
  const logoFooterH = 7;
  const logoFooterW = logoFooterH * logoLimaRatio;
  doc.addImage(
    logoLimaImg,
    'PNG',
    14,
    footerY + (footerHeight - logoFooterH) / 2,
    logoFooterW,
    logoFooterH,
    undefined,
    'MEDIUM'
  );

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text('Instagram @segurosgarciapinto · Cel 381 616-9861 · MP 87740', pageWidth - 14, 293, {
    align: 'right',
  });

  doc.save('Cotizacion_Caucion_Alquiler_GarciaPinto.pdf');
}
