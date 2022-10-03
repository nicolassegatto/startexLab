import { Footer } from "../components/Footer";
import { VsCodeImage } from "../components/VsCodeImage";
import { Logo } from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSub, {loading} ] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event?.preventDefault()
    await createSub({
      variables: {
        name,
        email
      }
    })
    navigate('/startexLab')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-blur bg-cover bg-no-repeat flex flex-1 justify-center">
        <div className="bg-reactBack bg-no-repeat bg-top m-5 flex flex-col justify-between">
          <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
            <div className="max-w-[640px]">
              <Link to={`/startexLab/`}>
                <Logo />
              </Link>
              <h1 className="mt-8 text-[2.5rem] leading-tight">
                Construa uma <strong className="text-green-300">aplicação completa</strong>, do zero, com <strong className="text-green-300">React JS</strong>
              </h1>
              <p className="mt-4 text-gray-200 leading-relaxed">
                Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas no mercado. Lembre-se, é necesario registrar presença NOS DIAS de mentoria para que a pontuação seja contabilizada.
              </p>
            </div>

            <div className="p-8 bg-gray-700 border border-gray-500 rounded">
              <strong className="text-2xl mb-6 block">Registre sua presença</strong>

              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                <input type="text" required
                  placeholder="Seu nome completo"
                  className="bg-gray-900 rounded px-5 h-14"
                  onChange={event => setName(event.target.value)}
                  value={name}
                />
                <input type="email" required
                  placeholder="Digite o seu e-mail"
                  className="bg-gray-900 rounded px-5 h-14"
                  onChange={event => setEmail(event.target.value)}
                  value={email}
                />
                <button disabled={loading} type="submit" className="mt-4 bg-green-300 uppercase py-4 rounded font-bold text-sm text-gray-500 hover:text-white hover:bg-green-700 transition-colors disabled:opacity-50">
                  Garantir presença
                </button>
              </form>
            </div>
          </div>
          <VsCodeImage />
        </div>
      </div>
      <Footer />
    </div>
  )
}