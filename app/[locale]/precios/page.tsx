import { redirect } from 'next/navigation';

// Redireciona /es/precios para /es/pricing para manter consistência
// Ou pode manter /precios se preferir
export default function PreciosRedirect({
  params,
}: {
  params: { locale: string };
}) {
  redirect(`/${params.locale}/pricing`);
}

