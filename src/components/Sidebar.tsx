import { gql, useQuery } from "@apollo/client";
import { useGetLessonsQuery } from "../graphql/generated";
import { Cards } from "./Cards";

export function Sidebar() {

  const { data } = useGetLessonsQuery()

  return (
    <aside className="w-96 bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">

        {data?.lessons.map(OBJ => {
          return (
            <Cards
              key={OBJ.id}
              title={OBJ.title}
              slug={OBJ.slug}
              availableAt={new Date(OBJ.avaliableAt)}
              type={OBJ.lessonType}
            />
          )
        })}

      </div>
    </aside>
  )
}