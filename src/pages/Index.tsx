import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      name: "Маргарита",
      description: "Томатный соус, моцарелла, свежий базилик",
      price: "450₽",
      image: "https://cdn.poehali.dev/projects/a2124ecf-394a-494a-a99d-4d061660ae60/files/716498f8-fb44-454b-b853-e47233c7f912.jpg"
    },
    {
      name: "Пепперони",
      description: "Томатный соус, моцарелла, пепперони",
      price: "550₽",
      image: "https://cdn.poehali.dev/projects/a2124ecf-394a-494a-a99d-4d061660ae60/files/716498f8-fb44-454b-b853-e47233c7f912.jpg"
    },
    {
      name: "Четыре сыра",
      description: "Моцарелла, горгонзола, пармезан, козий сыр",
      price: "620₽",
      image: "https://cdn.poehali.dev/projects/a2124ecf-394a-494a-a99d-4d061660ae60/files/8e2f18a6-61a4-49c6-a315-f5027be6b3a0.jpg"
    },
    {
      name: "Мясная",
      description: "Томатный соус, моцарелла, ветчина, бекон, курица",
      price: "680₽",
      image: "https://cdn.poehali.dev/projects/a2124ecf-394a-494a-a99d-4d061660ae60/files/716498f8-fb44-454b-b853-e47233c7f912.jpg"
    },
    {
      name: "Гавайская",
      description: "Томатный соус, моцарелла, ветчина, ананасы",
      price: "590₽",
      image: "https://cdn.poehali.dev/projects/a2124ecf-394a-494a-a99d-4d061660ae60/files/716498f8-fb44-454b-b853-e47233c7f912.jpg"
    },
    {
      name: "Вегетарианская",
      description: "Томатный соус, моцарелла, грибы, болгарский перец, маслины",
      price: "520₽",
      image: "https://cdn.poehali.dev/projects/a2124ecf-394a-494a-a99d-4d061660ae60/files/8e2f18a6-61a4-49c6-a315-f5027be6b3a0.jpg"
    }
  ];

  const promotions = [
    {
      title: "Счастливые часы",
      description: "Скидка 20% на все пиццы с 14:00 до 16:00",
      icon: "Clock"
    },
    {
      title: "Вторая пицца в подарок",
      description: "При заказе от 2000₽ вторая пицца в подарок",
      icon: "Gift"
    },
    {
      title: "Семейный комбо",
      description: "3 больших пиццы + напитки = 1990₽",
      icon: "Users"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-3xl">🍕</div>
              <span className="text-2xl font-bold text-primary logo-font">ДРУЖНАЯ СЕМЬЯ</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('menu')} className="hover:text-primary transition-colors">Меню</button>
              <button onClick={() => scrollToSection('delivery')} className="hover:text-primary transition-colors">Доставка</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('promotions')} className="hover:text-primary transition-colors">Акции</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button size="lg" className="hidden md:flex">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://cdn.poehali.dev/projects/a2124ecf-394a-494a-a99d-4d061660ae60/files/18721c28-6621-4730-8431-e54746b4cb11.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Пицца для всей семьи</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Готовим с любовью по традиционным итальянским рецептам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('menu')}>
              Посмотреть меню
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              8 988 528 85 52
            </Button>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наше меню</h2>
            <p className="text-xl text-muted-foreground">Выбирайте любимые вкусы</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-scale-in group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <Button>
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Доставка</h2>
            <p className="text-xl text-muted-foreground">Быстро и надежно</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Icon name="Clock" size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">30-40 минут</h3>
              <p className="text-muted-foreground">Среднее время доставки по городу</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Icon name="MapPin" size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Бесплатно</h3>
              <p className="text-muted-foreground">При заказе от 800₽</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Icon name="Bike" size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">До 10 км</h3>
              <p className="text-muted-foreground">Зона доставки от пиццерии</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/a2124ecf-394a-494a-a99d-4d061660ae60/files/18721c28-6621-4730-8431-e54746b4cb11.jpg"
                alt="О нас"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О нас</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Пиццерия "ДРУЖНАЯ СЕМЬЯ" работает с 2015 года. Мы создали уютное место, где можно насладиться настоящей итальянской пиццей в кругу семьи и друзей.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Наши повара используют только свежие ингредиенты и готовят каждую пиццу с душой. Тесто замешивается вручную каждый день, а соус готовится по традиционному итальянскому рецепту.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Badge variant="secondary" className="text-lg py-2 px-4">
                  <Icon name="Award" size={20} className="mr-2" />
                  10 лет опыта
                </Badge>
                <Badge variant="secondary" className="text-lg py-2 px-4">
                  <Icon name="Users" size={20} className="mr-2" />
                  50 000+ клиентов
                </Badge>
                <Badge variant="secondary" className="text-lg py-2 px-4">
                  <Icon name="Heart" size={20} className="mr-2" />
                  100% натурально
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="promotions" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Акции</h2>
            <p className="text-xl text-muted-foreground">Специальные предложения для вас</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {promotions.map((promo, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white mb-6">
                  <Icon name={promo.icon as any} size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{promo.title}</h3>
                <p className="text-muted-foreground">{promo.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Будем рады видеть вас</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">8 988 528 85 52</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">г. Курганинск, ул. Первомайская, 3К</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Ежедневно с 10:00 до 23:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@druzhnaya-semya.ru</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-secondary/30">
              <h3 className="text-2xl font-bold mb-6">Карта проезда</h3>
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Icon name="MapPin" size={48} className="text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Интерактивная карта</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🍕</span>
                <span className="text-2xl font-bold logo-font">ДРУЖНАЯ СЕМЬЯ</span>
              </div>
              <p className="text-white/80">
                Пицца для всей семьи с 2015 года
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Навигация</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('menu')} className="block hover:text-primary transition-colors">Меню</button>
                <button onClick={() => scrollToSection('delivery')} className="block hover:text-primary transition-colors">Доставка</button>
                <button onClick={() => scrollToSection('about')} className="block hover:text-primary transition-colors">О нас</button>
                <button onClick={() => scrollToSection('promotions')} className="block hover:text-primary transition-colors">Акции</button>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p>8 988 528 85 52</p>
                <p>info@druzhnaya-semya.ru</p>
                <p>г. Курганинск, ул. Первомайская, 3К</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2025 Пиццерия "ДРУЖНАЯ СЕМЬЯ". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;