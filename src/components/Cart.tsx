import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface CartItem {
  name: string;
  price: string;
  quantity: number;
  priceNumber: number;
}

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (index: number, delta: number) => void;
  onRemove: (index: number) => void;
  onCheckout?: () => void;
}

export const Cart = ({ items, onUpdateQuantity, onRemove, onCheckout }: CartProps) => {
  const total = items.reduce((sum, item) => sum + item.priceNumber * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="lg" className="relative">
          <Icon name="ShoppingCart" size={20} />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl">Ваша корзина</SheetTitle>
          <SheetDescription>
            {itemCount === 0 ? "Корзина пуста" : `${itemCount} ${itemCount === 1 ? 'товар' : itemCount < 5 ? 'товара' : 'товаров'}`}
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-8 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Icon name="ShoppingCart" size={64} className="mx-auto mb-4 opacity-30" />
              <p>Добавьте товары из меню</p>
            </div>
          ) : (
            <>
              {items.map((item, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-primary font-bold">{item.price}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemove(index)}
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onUpdateQuantity(index, -1)}
                      disabled={item.quantity <= 1}
                    >
                      <Icon name="Minus" size={16} />
                    </Button>
                    <span className="font-semibold w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onUpdateQuantity(index, 1)}
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                    <span className="ml-auto font-bold">{item.priceNumber * item.quantity} руб.</span>
                  </div>
                </Card>
              ))}
              
              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-bold">Итого:</span>
                  <span className="text-2xl font-bold text-primary">{total} руб.</span>
                </div>
                <Button className="w-full" size="lg" onClick={onCheckout}>
                  <Icon name="Check" size={20} className="mr-2" />
                  Оформить заказ
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};