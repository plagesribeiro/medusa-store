import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    setAuthError("Ocorreu um erro. Tente novamente.")
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      <h1 className="text-large-semi uppercase mb-6">
        Cadastre-se na Paint & Solids
      </h1>
      <p className="text-center text-base-regular text-gray-700 mb-4">
        Crie sua conta na Paint & Solids para ter uma experiência melhor.
      </p>
      <form className="w-full flex flex-col" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Primeiro nome"
            {...register("first_name", { required: "Campo obrigatório" })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label="Sobrenome"
            {...register("last_name", { required: "Campo obrigatório" })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label="Email"
            {...register("email", { required: "Campo obrigatório" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="Telefone"
            {...register("phone")}
            autoComplete="tel"
            errors={errors}
          />
          <Input
            label="Senha"
            {...register("password", {
              required: "Campo obrigatório",
            })}
            type="password"
            autoComplete="new-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              Não conseguimos criar sua conta. Por favor, tente novamente ou
              entre em contato com nossa equipe.
            </span>
          </div>
        )}
        <span className="text-center text-gray-700 text-small-regular mt-6">
          Ao criar uma conta, você concors com Paint & Solids&apos;s{" "}
          <Link href="/content/privacy-policy">
            <a className="underline">Políticas de Privacidade </a>
          </Link>{" "}
          e{" "}
          <Link href="/content/terms-of-use">
            <a className="underline">Termos de Uso</a>
          </Link>
          .
        </span>
        <Button className="mt-6">Entrar</Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        Já possuí uma conta?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Fazer login
        </button>
        .
      </span>
    </div>
  )
}

export default Register
