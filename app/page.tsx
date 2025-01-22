
import { Hero } from "./components/Hero";

import Brands from "./components/Brands";

import CustomerCarousel from "@/app/components/Customer";
import Products from "./product/page";
import Top_sell from "./product/sell";
import { CartProvider } from "@/CartContext";


export default function Home() {
  return (
  <div>
    <CartProvider>
  
    <Hero/>
   
    <Brands/>
    <div className="h-48"></div>
   <div className=" mt-96"><Products /></div> 
    <Top_sell/>
 
    <CustomerCarousel/>
    
    </CartProvider>  
  </div>
  );
}
