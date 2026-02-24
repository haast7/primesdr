'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Target } from 'lucide-react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function BlogCtaFinal() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setMessage('Digite seu e-mail.');
      setStatus('error');
      return;
    }
    if (!EMAIL_REGEX.test(trimmed)) {
      setMessage('Use um e-mail válido.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setMessage('');
    try {
      // TODO: integrar com API de newsletter (RD Station, Mailchimp, etc.)
      await new Promise((r) => setTimeout(r, 600));
      setStatus('success');
      setMessage('Obrigado! Em breve você receberá nossa newsletter.');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Não foi possível assinar. Tente de novo ou entre em contato.');
    }
  };

  return (
    <section
      className="relative overflow-hidden rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-gray-900 via-primary-900/95 to-gray-900 py-16 md:py-20 text-center"
      aria-labelledby="blog-cta-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(59,130,246,0.15),transparent)] pointer-events-none" />
      <Container className="relative">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center rounded-full bg-white/10 text-white p-3 mb-6">
            <Target className="h-6 w-6" />
          </div>
          <h2
            id="blog-cta-heading"
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            Pronto para transformar sua prospecção?
          </h2>
          <p className="text-primary-100/90 text-lg leading-relaxed mb-8">
            Receba no seu e-mail dicas de prospecção B2B, cases e novidades do
            blog. Conteúdo para SDRs e líderes comerciais, sem spam.
          </p>
          {status === 'success' ? (
            <p className="text-white font-medium" role="status">
              {message}
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              noValidate
            >
              <label htmlFor="blog-newsletter-email" className="sr-only">
                Seu e-mail
              </label>
              <input
                id="blog-newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                disabled={status === 'loading'}
                className="flex-1 min-w-0 rounded-xl border-0 bg-white text-gray-900 placeholder:text-gray-500 px-4 py-3.5 text-base shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-70"
                autoComplete="email"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="rounded-xl bg-white text-primary-700 font-semibold px-6 py-3.5 shadow-lg hover:bg-primary-50 hover:shadow-xl transition-all duration-200 disabled:opacity-70 whitespace-nowrap"
              >
                {status === 'loading' ? 'Enviando…' : 'Assinar nossa newsletter'}
              </button>
            </form>
          )}
          {message && status === 'error' && (
            <p className="text-primary-200 mt-3 text-sm" role="alert">
              {message}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
