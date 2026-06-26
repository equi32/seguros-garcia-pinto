'use client';

import { useState } from 'react';

type Tab = 'vehiculos' | 'hogar' | 'accidentes';

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 21 }, (_, i) => currentYear - i);

export default function QuotationForm() {
  const [activeTab, setActiveTab] = useState<Tab>('vehiculos');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: Record<string, string> = {};
    fd.forEach((v, k) => { data[k] = v as string; });
    data['type_cotization'] = activeTab;

    setStatus('loading');
    try {
      const res = await fetch('/api/cotizacion/enviar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setStatus(json.type);
      setMessage(json.text);
      if (json.type === 'success') form.reset();
    } catch {
      setStatus('error');
      setMessage('No se pudo enviar el mensaje. Reintente.');
    }
  }

  return (
    <>
      <div className="col-12 text-center ">
        <div className="price-toggle-wrapper heading_space">
          {(['vehiculos', 'hogar', 'accidentes'] as Tab[]).map((tab) => (
            <span
              key={tab}
              className={`Pricing-toggle-button month ${tab}${activeTab === tab ? ' active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'vehiculos' ? 'Vehículos' : tab === 'hogar' ? 'Hogar' : 'Accidentes Personales'}
            </span>
          ))}
        </div>
      </div>

      <form className="getin_form" id="form-cotization" onSubmit={handleSubmit}>
        <div className="row" id="cotization-content">
          <div className="col-md-6">
            <div className="pricing-item wow fadeInUp animated" data-wow-delay="300ms">
              <h3 className="font-light darkcolor">Datos Personales</h3>
              <p className="bottom30">Complete toda su información</p>
              <div className="getin_form">
                <div className="row px-2">
                  {status !== 'idle' && (
                    <div className="col-md-12 col-sm-12" id="result_cotization">
                      <div className={status === 'success' ? 'alert-success' : 'alert-danger'}>
                        {message}
                      </div>
                    </div>
                  )}
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="name_cot" className="d-none"></label>
                      <input className="form-control" type="text" placeholder="Nombre" required name="name_cotization" />
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="document_cot" className="d-none"></label>
                      <input className="form-control" type="text" placeholder="DNI" required name="document_cotization" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="bornDate_cot" className="d-none"></label>
                      <input className="form-control" type="date" placeholder="Fecha Nac." required name="bornDate_cotization" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="cellPhone_cot" className="d-none"></label>
                      <input className="form-control" type="text" placeholder="Celular" name="cellPhone_cotization" required />
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="email_cot" className="d-none"></label>
                      <input className="form-control" type="email" placeholder="Email" name="email_cotization" required />
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="address_cot" className="d-none"></label>
                      <input className="form-control" type="text" placeholder="Dirección" required name="address_cotization" />
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="city_cot" className="d-none"></label>
                      <input className="form-control" type="text" placeholder="Localidad" required name="city_cotization" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6" id="item-year">
            <div className="pricing-item wow fadeInUp animated" data-wow-delay="300ms">
              <h3 className="font-light darkcolor">Datos Adicionales</h3>
              <p className="bottom30">Datos específicos del tipo de seguro</p>
              <div className="getin_form">
                <div className="row px-2">
                  {/* VEHÍCULOS */}
                  {activeTab === 'vehiculos' && (
                    <>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <select className="form-control" name="vehicle_type">
                            <option value="">Tipo Vehículo</option>
                            <option value="auto">Auto</option>
                            <option value="moto">Moto</option>
                            <option value="camion">Camión</option>
                            <option value="camioneta">Camioneta</option>
                            <option value="otros">Otros</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Marca" name="vehicle_brand" />
                        </div>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Modelo" name="vehicle_model" />
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <select className="form-control" name="vehicle_year">
                            <option value="">Año</option>
                            {years.map((y) => (
                              <option key={y} value={y}>{y}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {/* HOGAR */}
                  {activeTab === 'hogar' && (
                    <>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                          <select className="form-control" name="property_type">
                            <option value="">Tipo Propiedad</option>
                            <option value="casa">Casa</option>
                            <option value="edificio">Edificio</option>
                            <option value="country">Country</option>
                            <option value="comercio">Comercio</option>
                            <option value="otros">Otros</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Mtos. cuadrados" name="property_area" />
                        </div>
                      </div>
                      <div className="col-md-5 col-sm-12">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Suma asegurada" name="property_amount" />
                        </div>
                      </div>
                      <div className="col-md-7 col-sm-12">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Mascota" name="property_mascot" />
                        </div>
                      </div>
                    </>
                  )}

                  {/* ACCIDENTES */}
                  {activeTab === 'accidentes' && (
                    <>
                      <div className="col-md-5 col-sm-12">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Cant. Vida" name="life_qty" />
                        </div>
                      </div>
                      <div className="col-md-7 col-sm-12">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Suma asegurada" name="life_amount" />
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Profesión/Oficio" name="life_profesion" />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="details_cot" className="d-none"></label>
                      <textarea className="form-control" placeholder="Ingrese los detalles adicionales" style={{ height: '100px' }} name="details"></textarea>
                    </div>
                  </div>
                </div>
                <button className="button" type="submit" id="submit_btn_cotization" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Enviando...' : 'Pedir cotización'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
