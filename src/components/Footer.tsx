import { LogoFooter } from "./LogoFooter";

export function Footer () {
  return(
    <footer className=" mt-auto text-gray-200 flex y-0 border-t border-gray-600 mx-8 justify-between items-end p-4">
      <div className="flex items-center justify-between gap-2 ">
        <LogoFooter/>
        <p>Todos os direitos reservados</p>
      </div>
      <div>
        <p>Politicas de privacidade</p>
      </div>
    </footer>
  )
}