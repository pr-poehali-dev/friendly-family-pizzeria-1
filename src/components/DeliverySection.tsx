import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const deliverySteps = [
  {
    icon: "ShoppingCart",
    title: "Выберите блюда",
    description: "Добавьте понравившиеся позиции в корзину"
  },
  {
    icon: "Phone",
    title: "Оформите заказ",
    description: "Укажите адрес и способ оплаты"
  },
  {
    icon: "Truck",
    title: "Получите доставку",
    description: "Курьер привезет заказ за 60 минут"
  }
];

export const DeliverySection = () => {
  return (
    <section id="delivery" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Как работает доставка</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliverySteps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={step.icon} size={40} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
