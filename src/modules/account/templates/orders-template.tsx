import OrderOverview from "../components/order-overview"

const OrdersTemplate = () => {
  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Pedidos</h1>
        <p className="text-base-regular">Vizualizar todos os seus pedidos.</p>
      </div>
      <div>
        <OrderOverview />
      </div>
    </div>
  )
}

export default OrdersTemplate
