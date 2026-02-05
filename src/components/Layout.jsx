import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#3D1860] text-[#F5EDF7] uppercase text-base">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <Link to="/">
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold hover:opacity-80 transition-opacity">
                  Baldarik store
                </h1>
              </Link>
              <img src="/Baldarik.svg" alt="Baldarik Logo" className="h-8 md:h-10 w-auto" />
            </div>
            <h2 className="text-sm md:text-base">Контакты</h2>
          </div>
        </div>
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer className="bg-[#3D1860] text-[#F5EDF7] mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold tracking-wide">BALDARIK STORE</h3>
            <p className="text-sm text-purple-200 leading-relaxed">
              Магазин осознанного родительства. Полезные товары для детей и родителей.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Навигация</h4>
            <ul className="space-y-2 text-sm text-purple-200">
              <li>
                <a href="/" className="hover:text-white transition-colors">Главная</a>
              </li>
              <li>
                <a href="/catalog" className="hover:text-white transition-colors">Каталог</a>
              </li>
              <li>
                <a href="/contacts" className="hover:text-white transition-colors">Контакты</a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Контакты</h4>
            <ul className="space-y-2 text-sm text-purple-200">
              <li>Email: <a href="mailto:hello@baldarik.store" className="hover:text-white">hello@baldarik.store</a></li>
              <li>Instagram: <a href="#" className="hover:text-white">@baldarik.store</a></li>
              <li>WhatsApp: <a href="#" className="hover:text-white">+996 XXX XXX XXX</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom line */}
        <div className="border-t border-purple-400/30 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-purple-200">
          <p>© {new Date().getFullYear()} Baldarik Store. Все права защищены.</p>
          <p className="opacity-80">С заботой о родителях и детях 💜</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Layout;