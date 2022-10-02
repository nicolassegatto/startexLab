import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { VideoContent } from "../components/VideoContent";
import {useParams} from 'react-router-dom'
import { UnselectVideo } from "../components/UnselectVideo";

export function Evento () {

  const {slug} = useParams<{slug:string}>()

  return(
    <div className="flex flex-col min-h-screen">
    <Header/>
    <main className="flex flex-1">
      {!slug ? (<UnselectVideo/>): (<VideoContent lessonSlug={slug}/>)}
      <Sidebar/>
    </main>
    </div>
  )
}