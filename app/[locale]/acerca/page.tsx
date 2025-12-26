import { redirect } from 'next/navigation';

// Redireciona /es/acerca para /es/about (ou mantém se quiser usar /acerca)
// Por enquanto, vamos redirecionar para manter consistência
export default function AcercaRedirect({
  params,
}: {
  params: { locale: string };
}) {
  if (params.locale === 'es') {
    // Se quiser usar /acerca em espanhol, descomente e ajuste
    // return <LocaleAboutPage params={params} />;
  }
  redirect(`/${params.locale}/about`);
}

