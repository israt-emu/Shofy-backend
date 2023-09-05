/* eslint-disable @typescript-eslint/no-explicit-any */
import CartCard from "@/components/cart/CartCard";
import {Button} from "@/components/ui/button";
import {ICartProduct} from "@/interfaces/product";
import {useGetSingleCartQuery} from "@/redux/features/cart/cartApi";
import {useAppSelector} from "@/redux/hooks";

const Cart = () => {
  const {user} = useAppSelector((state) => state.auth);
  const {data} = useGetSingleCartQuery(user.id);

  return (
    <div className="w-9/12 mx-auto py-8">
      <div className="flex items-center mb-3">
        <p className="text-xl font-semibold">Shopping Cart:</p>
      </div>
      <div className="grid grid-cols-1 gap-4 justify-center px-6 bg-gray-100 py-6">
        {data?.data?.products?.map((product: ICartProduct, i: number) => (
          <CartCard product={product} key={i} />
        ))}
        <div className="border-t border-gray-200 py-2 flex items-center justify-between">
          <h3>Total</h3>
          <h3>{data?.data?.products?.reduce((acc: any, product: ICartProduct) => acc + product.quantity * product.price, 0).toFixed(2)}৳</h3>
        </div>
        <Button className="w-1/5 ml-auto">Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
