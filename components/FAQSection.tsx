import { buildWhatsAppUrl } from '@/lib/constants';

const FAQS = [
  {
    pregunta: '¿Qué hago si tengo un siniestro?',
    respuesta:
      'Avisá a tu compañía y a nosotros lo antes posible, juntá fotos y datos de lo ocurrido y no firmes ni reconozcas responsabilidad sin consultarnos. Cada póliza tiene plazos para denunciar, por eso conviene avisar de inmediato. Te acompañamos con los pasos y la documentación.',
  },
  {
    pregunta: '¿Qué es la franquicia?',
    respuesta:
      'Es el monto que queda a cargo del asegurado cuando ocurre un siniestro; el resto lo cubre la compañía. Puede variar según el seguro y la cobertura que elijas.',
  },
  {
    pregunta: '¿Qué es un seguro de caución?',
    respuesta:
      'Es una garantía que respalda el cumplimiento de una obligación, por ejemplo un alquiler o un contrato. Si quien asumió la obligación no cumple, responde la compañía de seguros.',
  },
  {
    pregunta: '¿Cómo funciona la revisión gratuita de mi póliza?',
    respuesta:
      'Nos enviás tu póliza actual, la analizamos y te explicamos qué cubre, qué no y si hay una opción mejor. Sin costo y sin compromiso.',
  },
  {
    pregunta: '¿Qué necesito para cotizar?',
    respuesta:
      'Depende del seguro. En el caso de un auto, por ejemplo, los datos del vehículo y tus datos personales. Escribinos por WhatsApp y te indicamos exactamente qué enviar.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.pregunta,
    acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
  })),
};

export default function FAQSection() {
  return (
    <section id="preguntas-frecuentes" className="padding bglight">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="heading-title darkcolor wow fadeInUp" data-wow-delay="100ms">
              <span className="defaultcolor">¿Tenés dudas?</span>
              <h2 className="font-normal darkcolor heading_space_half">Preguntas frecuentes</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="faq-accordion" id="faqAccordion">
              {FAQS.map((f, i) => (
                <div className="faq-item" key={f.pregunta}>
                  <h3 className="faq-question">
                    <button
                      type="button"
                      className="faq-toggle"
                      data-toggle="collapse"
                      data-target={`#faq-${i}`}
                      aria-expanded={i === 0}
                      aria-controls={`faq-${i}`}
                    >
                      {f.pregunta}
                      <span className="faq-toggle-icon">+</span>
                    </button>
                  </h3>
                  <div
                    id={`faq-${i}`}
                    className={`collapse faq-answer ${i === 0 ? 'show' : ''}`}
                    data-parent="#faqAccordion"
                  >
                    <p>{f.respuesta}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center top40">
              <a
                href={buildWhatsAppUrl('Hola Rodrigo, tengo una duda y quiero consultarte')}
                target="_blank"
                rel="noopener noreferrer"
                className="button caucion-cta-whatsapp"
              >
                ¿Tenés otra duda? Escribinos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
