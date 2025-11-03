import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { MenuCategory } from "./MenuData";

interface MenuSectionProps {
  categories: MenuCategory[];
  onAddToCart: (name: string, price: string) => void;
}

export const MenuSection = ({ categories, onAddToCart }: MenuSectionProps) => {
  return (
    <section id="menu" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Наше меню</h2>
        
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-primary">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {item.image && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                      <Button 
                        onClick={() => onAddToCart(item.name, item.price)}
                        className="bg-primary hover:bg-primary/90"
                      >
                        <Icon name="ShoppingCart" size={20} className="mr-2" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
