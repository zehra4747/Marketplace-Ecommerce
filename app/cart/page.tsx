/* import React from "react";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { BreadcrumbCollapsed } from "@/app/components/Breadcrupm";
import { Minus, Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { Product } from "@/types"; // Ensure correct import

interface CartProps {
  cart: Product[];
}

const Cart: React.FC<CartProps> = ({ cart = [] }) => {
  const subtotal = cart.reduce((acc: number, item: Product) => acc + item.price, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  // Debugging: Log cart state when rendering
  console.log("Rendering Cart, current state:", cart);

  return (
    <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto relative">
      <span className="absolute top-0 left-0">
        <BreadcrumbCollapsed />
      </span>
      <div className="w-[95%] max-w-[1200px] mt-10">
        <h1 className="text-2xl md:text-3xl font-bold pl-2">Your cart</h1>
      </div>

      <div className="w-[95%] sm:w-full flex flex-col md:flex-row justify-center items-start gap-6 mt-4">
        <div className="w-full lg:w-[700px] space-y-4 border rounded-[20px] pt-2">
          {cart.length > 0 ? (
            cart.map((data: Product) => (
              <div className="flex justify-between border-b px-3 pb-3" key={data._id}>
                <div className="flex">
                  <div>
                    <Image src={data.imageUrl} width={100} height={100} alt="product" />
                  </div>
                  <div className="ml-3">
                    <h1 className="font-bold">{data.name}</h1>
                    <p>Size: {data.size || "N/A"}</p>
                    <p>Color: {data.color || "N/A"}</p>
                    <p className="font-bold">${data.price}</p>
                  </div>
                </div>
                <div className="relative">
                  <MdDelete className="absolute top-0 text-xl right-0 sm:right-3 text-red-500" />
                  <div className="md:w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 absolute bottom-0 right-0">
                    <Minus />
                    1
                    <Plus />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        <div className="bg-white p-4 w-full lg:w-[500px] border rounded-[20px]">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <div className="flex justify-between">
              <p>Discount (-20%)</p>
              <p>-${discount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>${deliveryFee}</p>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center">
              <input className="h-10 rounded-[6px] bg-[#F0F0F0] px-4 w-[200px] md:w-[360px] border-none" type="search" placeholder="Add promo code" />
              <Button className="w-[100px] rounded-[20px]">Apply</Button>
            </div>
          </div>
          <button className="w-full mt-4 bg-black text-white py-2 rounded-md">
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart; */



'use client';

import React, { useState } from 'react';
import { useCart } from '@/CartContext';
import Image from 'next/image';
import { MdDelete } from 'react-icons/md';
import { Minus, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { BreadcrumbCollapsed } from '@/app/components/Breadcrupm'; // Adjust path if necessary
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Any } from 'next-sanity';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [orderConfirmed, setOrderConfirmed] = useState(false); // State to track if order is confirmed
  const [showOrderMessage, setShowOrderMessage] = useState(false); // State to track message for zero total

  const handleRemove = (productId: Any) => {
    removeFromCart(productId);
  };

  const handleDecreaseQuantity = (productId: Any, quantity: number) => {
    if (quantity > 1) {
      updateQuantity(productId, quantity - 1);
    }
  };

  const handleIncreaseQuantity = (productId: Any, quantity: number) => {
    updateQuantity(productId, quantity + 1);
  };

  const subtotal = cart.reduce((acc: number, item: { price: number; quantity: number; }) => acc + item.price * item.quantity, 0);

  const total = subtotal;

  // Handle Go to Checkout button click
  const handleGoToCheckout = () => {
    if (total === 0) {
      setShowOrderMessage(true); // Show message if total is zero
    } else {
      setOrderConfirmed(true); // Set the order as confirmed when the button is clicked
    }
  };

  return (
    <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto relative">
      <span className="absolute top-0 left-0">
        <BreadcrumbCollapsed />
      </span>
      <div className="w-[95%] max-w-[1200px] mt-10">
        <h1 className="text-2xl md:text-3xl font-bold mt-5 pl-2">Your cart</h1>
      </div>

      <div className="w-[95%] sm:w-full flex flex-col md:flex-row justify-center items-start gap-6 mt-4">
        <div className="w-full lg:w-[700px] space-y-4 border rounded-[20px] pt-2">
          {cart.length > 0 ? (
            cart.map((item: { imageUrl: string | StaticImport; name: string; size: Any; color: Any; price: number; quantity: number, _id: Any; }, index: React.Key | null | undefined) => (
              <div className="flex justify-between border-b px-3 pb-3" key={index}>
                <div className="flex">
                  <div>
                    <Image src={item.imageUrl} width={100} height={100} alt={'item.name'} />
                  </div>
                  <div className="ml-3">
                    <h1 className="font-bold">{item.name}</h1>
                    <div className='flex gap-2'>
                      <p>Quantity:</p>
                      <p>{item.quantity}</p>
                    </div>
                    <p className="font-bold mt-4">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
                <div className="relative flex items-center">
                  <MdDelete
                    className="text-xl text-red-500 cursor-pointer"
                    onClick={() => handleRemove(item._id)}
                  />
                  <div className="md:w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ml-4">
                    <Minus
                      className="cursor-pointer"
                      onClick={() => handleDecreaseQuantity(item._id, item.quantity)}
                    />
                    <span>{item.quantity}</span>
                    <Plus
                      className="cursor-pointer"
                      onClick={() => handleIncreaseQuantity(item._id, item.quantity)}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center py-6">Your cart is empty.</p>
          )}
        </div>

        <div className="bg-white p-4 w-full lg:w-[500px] border rounded-[20px]">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Discount </p>
              <p>-$0</p>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <input
                className="h-10 rounded-[6px] bg-[#F0F0F0] px-4 w-[200px] md:w-[360px] border-none"
                type="search"
                placeholder="Add promo code"
              />
              <Button className="w-[100px] rounded-[20px]">Apply</Button>
            </div>
          </div>
          <button
            className="w-full mt-4 bg-black text-white py-2 rounded-md"
            onClick={handleGoToCheckout} // Add the click handler
          >
            Confirm the Order
          </button>
        </div>
      </div>

      {orderConfirmed && !showOrderMessage && (
        <div className="mt-10 text-center text-xl font-bold text-green-600">
          <p>Order Confirmed!</p>
        </div>
      )}

      {showOrderMessage && (
        <div className="mt-10 text-center text-xl font-bold text-red-600">
          <p>Please place an order to confirm.</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
