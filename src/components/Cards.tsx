import { isPast, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'

interface lesson {
  title: string,
  slug: string,
  availableAt: Date,
  type: 'class' | 'pratice'
}

export function Cards(props: lesson) {

  const { slug } = useParams<{ slug: string }>()

  const isLessonAvaliable = isPast(props.availableAt)
  const formatDate = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'K'h'mm", { locale: ptBR })

  const slugActive = slug === props.slug

  return (
    <Link to={isLessonAvaliable ? `/startexLab/aulas/${props.slug}` : `#`} className={isLessonAvaliable ? 'group' : 'group pointer-events-none'}>

      <span className=' text-gray-300'>
        {formatDate}
      </span>

      <div className={classNames('rounded border border-gray-500 p-4 mt-2', {
        'bg-green-500 group-hover:border-white': slugActive,
        'group-hover:border-green-500': !slugActive
      })}>

        <header className='flex items-center justify-between'>

          {isLessonAvaliable ? (
            <span className={classNames('text-sm font-medium flex gap-2', {
              'text-white': slugActive,
              'text-green-500': !slugActive
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className={`text-sm font-medium flex gap-2 text-blue-500`}>
              <Lock size={20} />
              Em breve
            </span>)}

          <span className={classNames('uppercase text-xs border rounded py-[0.125rem] px-[0.5rem] text-white font-bold', {
            'border-white': slugActive,
            'border-green-500': !slugActive,
            'border-blue-500': !isLessonAvaliable
          })}>
            {props.type === 'class' ? 'aula teórica' : ' aula prática'}
          </span>

        </header>

        <strong className={classNames('mt-5 block', {
          'text-white': slugActive,
          'text-gray-200': !slugActive
        })}>{props.title}</strong>

      </div>

    </Link>
  )
}