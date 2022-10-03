import { Footer } from "./Footer";
import Logo from "/src/assets/NASA_vintage.png";

export function UnselectVideo(){
  return(
    <div className="flex-1 flex flex-col">
      <div className="flex flex-1 p-8 mx-auto justify-center items-center flex-col">
        <img src={Logo} alt="NasaImage" className="w-96 animate-pulse" />
        <p className="text-2xl font-bold leading-relaxed text-zinc-900">Pai vai pra <span className="text-zinc-800">NASA</span>!!! Esqueça tudo <span className="grayscale opacity-30">🚀</span></p>
      </div>
      <Footer/>
    </div>
  )
}