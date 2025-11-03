import { Cart, CartItem } from "@/components/Cart";
import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { MenuSection } from "@/components/MenuSection";
import { PromotionsSection } from "@/components/PromotionsSection";
import { DeliverySection } from "@/components/DeliverySection";
import { ContactSection } from "@/components/ContactSection";
import { OrderDialog } from "@/components/OrderDialog";
import { menuCategories } from "@/components/MenuData";

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const addToCart = (name: string, price: string) => {
    const priceNumber = parseInt(price.replace(/[^0-9]/g, ''));
    const existingIndex = cartItems.findIndex(item => item.name === name);
    
    if (existingIndex >= 0) {
      const newItems = [...cartItems];
      newItems[existingIndex].quantity += 1;
      setCartItems(newItems);
    } else {
      setCartItems([...cartItems, { name, price, quantity: 1, priceNumber }]);
    }
  };

  const updateQuantity = (index: number, delta: number) => {
    const newItems = [...cartItems];
    newItems[index].quantity += delta;
    if (newItems[index].quantity <= 0) {
      newItems.splice(index, 1);
    }
    setCartItems(newItems);
  };

  const removeFromCart = (index: number) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  return (
    <div className="min-h-screen">
      <HeroSection onScrollToMenu={() => scrollToSection('menu')} />
      <MenuSection categories={menuCategories} onAddToCart={addToCart} />
      <PromotionsSection />
      <DeliverySection />
      <ContactSection />
      
      <Cart
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={() => {
          setIsOrderDialogOpen(true);
          setCartItems([]);
        }}
      />

      <OrderDialog 
        isOpen={isOrderDialogOpen} 
        onClose={() => setIsOrderDialogOpen(false)} 
      />
    </div>
  );
};

export default Index;
