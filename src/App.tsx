/*const GetLessonsQuery = gql`
  query GetLessonAndTeacher {
    lessons {
      id
      videoId
      title
      description
      avaliableAt
      slug
      lessonType
      teacher {
        avatarUrl
        name
        bio
      }
    }
  }
`
interface lessons {
  lessons : [ {
    id:string,
    title: string
    teacher : {
      name: string
    }
  }]
}

 const {data} = useQuery<lessons>(GetLessonsQuery)
*/

import { Router } from "./Router"
import { Evento } from "./screens/Evento"

function App() {
  return (
    <Router />
  )
}

export default App