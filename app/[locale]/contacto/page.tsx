import { redirect } from 'next/navigation';

export default function ContactoRedirect({
  params,
}: {
  params: { locale: string };
}) {
  redirect(`/${params.locale}/contact`);
}

