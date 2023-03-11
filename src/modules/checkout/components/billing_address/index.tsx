import { CheckoutFormValues } from "@lib/context/checkout-context"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import CountrySelect from "../country-select"

const BillingAddress = () => {
  return (
    <ConnectForm<CheckoutFormValues>>
      {({ register, formState: { errors, touchedFields } }) => (
        <div className="grid grid-cols-1 gap-y-2">
          <div className="grid grid-cols-2 gap-x-2">
            <Input
              label="Primeiro nome"
              {...register("billing_address.first_name", {
                required: "Campo obrigatório",
              })}
              autoComplete="given-name"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Sobrenome"
              {...register("billing_address.last_name", {
                required: "Campo obrigatório",
              })}
              autoComplete="family-name"
              errors={errors}
              touched={touchedFields}
            />
          </div>
          <Input
            label="Empresa"
            {...register("billing_address.company")}
            autoComplete="organization"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="Endereço"
            {...register("billing_address.address_1", {
              required: "Campo obrigatório",
            })}
            autoComplete="address-line1"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="Apartments, suite, etc."
            {...register("billing_address.address_2")}
            autoComplete="address-line2"
            errors={errors}
            touched={touchedFields}
          />
          <div className="grid grid-cols-[144px_1fr] gap-x-2">
            <Input
              label="CEP"
              {...register("billing_address.postal_code", {
                required: "Campo obrigatório",
              })}
              autoComplete="postal-code"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Cidade"
              {...register("billing_address.city", {
                required: "Campo obrigatório",
              })}
              autoComplete="address-level2"
              errors={errors}
              touched={touchedFields}
            />
          </div>
          <CountrySelect
            {...register("billing_address.country_code", {
              required: "Campo obrigatório",
            })}
            autoComplete="country"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="Estado"
            {...register("billing_address.province")}
            autoComplete="address-level1"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="Telefone"
            {...register("billing_address.phone")}
            autoComplete="tel"
            errors={errors}
            touched={touchedFields}
          />
        </div>
      )}
    </ConnectForm>
  )
}

export default BillingAddress
