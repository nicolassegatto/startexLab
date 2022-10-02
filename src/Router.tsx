import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Evento } from "./screens/Evento";
import { Subscribe } from "./screens/Subscribe";


export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Subscribe/>}/>
      <Route path="/startexLab" element={<Evento />}/>
      <Route path="/startexLab/aulas/:slug" element={<Evento/>}/>
    </Routes>
  )
}