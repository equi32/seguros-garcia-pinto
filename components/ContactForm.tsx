'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const userName = (form.elements.namedItem('userName') as HTMLInputElement).value;
    const userEmail = (form.elements.namedItem('userEmail') as HTMLInputElement).value;
    const userMessage = (form.elements.namedItem('userMessage') as HTMLTextAreaElement).value;

    if (!userName || !userEmail || !userMessage) {
      setStatus('error');
      setMessage('Debe completar todos los campos, e ingresar un mail válido');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/contacto/enviar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, userEmail, userMessage }),
      });
      const data = await res.json();
      setStatus(data.type);
      setMessage(data.text);
      if (data.type === 'success') form.reset();
    } catch {
      setStatus('error');
      setMessage('No se pudo enviar el mensaje. Reintente.');
    }
  }

  return (
    <form className="getin_form" onSubmit={handleSubmit}>
      <div className="row px-2">
        {status !== 'idle' && (
          <div className="col-md-12 col-sm-12" id="resultContact">
            <div className={status === 'success' ? 'alert-success' : 'alert-danger'}>
              {message}
            </div>
          </div>
        )}
        <div className="col-md-12 col-sm-12">
          <div className="form-group">
            <label htmlFor="name1" className="d-none"></label>
            <input className="form-control" id="name1" type="text" placeholder="Nombre" required name="userName" />
          </div>
        </div>
        <div className="col-md-12 col-sm-12">
          <div className="form-group">
            <label htmlFor="email1" className="d-none"></label>
            <input className="form-control" type="email" id="email1" placeholder="Email" name="userEmail" />
          </div>
        </div>
        <div className="col-md-12 col-sm-12">
          <div className="form-group">
            <label htmlFor="message1" className="d-none"></label>
            <textarea className="form-control" id="message1" placeholder="Mensaje" required name="userMessage"></textarea>
          </div>
        </div>
        <div className="col-md-12 col-sm-12">
          <button type="submit" id="submit_btn1" className="button gradient-btn w-100" disabled={status === 'loading'}>
            {status === 'loading' ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </div>
    </form>
  );
}
