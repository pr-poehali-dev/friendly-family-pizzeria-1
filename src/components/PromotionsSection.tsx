import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Promotion {
  title: string;
  description: string;
  icon: string;
}

const promotions: Promotion[] = [
  {
    title: "Счастливые часы",
    description: "Скидка 10% на любой сет с 11:00 до 18:00 при заказе в пиццерии",
    icon: "Clock"
  },
  {
    title: "Ролл в подарок",
    description: "При заказе двух пицц ролл \"Калифорния\" в подарок",
    icon: "Gift"
  },
  {
    title: "Бесплатная доставка",
    description: "При заказе от 1000 рублей доставка бесплатно",
    icon: "Truck"
  }
];

export const PromotionsSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Акции и специальные предложения</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotions.map((promo, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={promo.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{promo.title}</h3>
                <p className="text-muted-foreground">{promo.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
