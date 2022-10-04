import { gql, useQuery } from "@apollo/client";
import { CaretRight, CircleNotch, FigmaLogo, FileArrowDown, Image, Lightning, MicrosoftTeamsLogo } from "phosphor-react";
import ReactPlayer from "react-player";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { Footer } from "./Footer";

interface slugProps {
  lessonSlug: string
}

export function VideoContent(props: slugProps) {

  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug
    }
  })

  if (!data || !data.lesson) {
    return (
      <div className="flex-1 items-center justify-center">
        <div className="bg-black flex justify-center">
          <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video flex justify-center">
            <CircleNotch size={100} className="animate-spin min-h-full" />
          </div>
        </div>
      </div>
    )
  }

  return (

    <div className="flex flex-col flex-1">

      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${data?.lesson.videoId}`}
            width='100%'
            height='100%'
            controls={true}
            className={{ position: 'absolute', top: 0, left: 0 }}
          />
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">

        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data?.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed whitespace-pre-wrap">{data?.lesson.description}</p>
            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
              <img src={data?.lesson.teacher.avatarUrl} alt="teacherImg" className="h-16 w-16 rounded-full border-2 border-green-300" />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">{data?.lesson.teacher.name}</strong>
                <span className="text-gray-200 text-sm block whitespace-pre-wrap">{data?.lesson.teacher.bio}</span>
              </div>
            </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <a href="https://teams.microsoft.com/_#/conversations/19:d392b4c30811491ea5928ef26ac449fe@thread.v2?ctx=chat" target='_blank'
              className="p-4 text-sm bg-green-300 text-gray-600 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 hover:text-gray-200 transition-colors">
              <MicrosoftTeamsLogo size={24} />
              Comunidade do Teams
            </a>
            <a href="https://www.figma.com/file/BeGKKRLr169iPffoTj0NHV/Algar-Lab---ignite-clone?node-id=0%3A1" target='_blank'
              className="p-4 text-sm border border-blue-400 text-blue-400 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-400 hover:text-gray-500 transition-colors">
              <FigmaLogo size={24} />
              Link do Figma
            </a>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <a target='_blank' href="https://1drv.ms/u/s!AmJC1xFVjMCZjcJOZ2rriEfAruIq9A?e=bcWrV6" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-300 h-full p-6 flex items-center text-gray-600">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material Complementar</strong>
              <p className="text-sm text-gray-200">Acesse o material Complementar para acelerar o seu desenovlvimento.</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
          <a target='_blank' href="https://1drv.ms/u/s!AmJC1xFVjMCZjcJPblUkyi7B8ukrQQ?e=xGcAd2" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-300 h-full p-6 flex items-center text-gray-600">
              <Image size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers Exclusivos</strong>
              <p className="text-sm text-gray-200">Baixe wallpapers exclusivos do ignite Lab e personalize a sua máquina.</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}