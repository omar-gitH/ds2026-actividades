import Header from "./Header"; // Importa el componente Header
import Footer from "./Footer"; // Importa el componente Footer

// Layout recibe los componentes hijos (children) como prop
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main> {/* Aquí se renderizará el contenido de las páginas */}
      <Footer />
    </>
  );
}