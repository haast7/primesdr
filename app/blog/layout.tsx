/**
 * Layout do blog. Herda o layout raiz (Header/Footer) e define apenas o container visual do blog.
 */
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
