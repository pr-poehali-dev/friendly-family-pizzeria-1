import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cart, CartItem } from "@/components/Cart";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);

  const heroImages = [
    'https://cdn.poehali.dev/files/db2a3e11-c820-420f-a4e1-1aff51a0a020.JPG',
    'https://cdn.poehali.dev/files/c476aa22-80fe-4c26-baa1-196829acc1cd.JPG'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const menuCategories = [
    {
      title: "Фирменные роллы",
      items: [
        { name: "Чикен", description: "рис, нори, сыр, курица, огурец", price: "170 руб.", image: "https://cdn.poehali.dev/files/bbba8e05-9e82-42ad-a3ec-1b0f9979c6b4.png" },
        { name: "Овощной маки", description: "рис, нори, сыр огурец, помидор, болгарский перец, салат айсберг", price: "200 руб.", image: "https://cdn.poehali.dev/files/d6b7c3e2-9514-4b59-9ed1-9cceb7977954.png" },
        { name: "Филадельфия маки", description: "рис, нори, сыр, огурец, лосось", price: "300 руб.", image: "https://cdn.poehali.dev/files/ec26867f-a461-4dc6-a309-c3465eccad43.png" },
        { name: "Эби темпура", description: "рис, нори, сыр, тигровая креветка в кляре, масаго", price: "300 руб.", image: "https://cdn.poehali.dev/files/6d2ed298-ff1e-41f4-ab48-c7bce96fa9fe.png" },
        { name: "Калифорния с крабом", description: "рис, нори, масаго, сыр, снежный краб, огурец", price: "250 руб.", image: "https://cdn.poehali.dev/files/0a885597-be0d-4e3e-a90b-1cf561e610cd.png" },
        { name: "Калифорния с креветкой", description: "рис, нори, сыр масаго, тигровая креветка, огурец", price: "350 руб.", image: "https://cdn.poehali.dev/files/5c08e181-d95e-4922-b1c8-aef9006f449c.png" },
        { name: "Калифорния с лососем", description: "рис, нори, лосось, масаго, сыр, огурец", price: "350 руб.", image: "https://cdn.poehali.dev/files/9ff7a9c2-58ac-4e80-9ee1-0c6e01f2a77a.png" },
        { name: "Калифорния с тунцом", description: "рис, нори, масаго, сыр, тунец, огурец", price: "400 руб." },
        { name: "Осака", description: "рис, нори, сыр, огурец, лосось х/к, спайси, масаго зеленая", price: "400 руб.", image: "https://cdn.poehali.dev/files/83451c8d-bc7c-4edf-bcc1-87f95f593ff1.png" },
        { name: "Киото", description: "рис, нори, креветка в темпуре, соус спайси, помидор, салат айсберг", price: "400 руб.", image: "https://cdn.poehali.dev/files/047fe38b-4ec9-43e1-94b2-e21288c325a5.png" },
        { name: "Цезарь-ролл", description: "рис, нори, курица, салат айсберг, курица, сыр, пармезан, черри", price: "350 руб.", image: "https://cdn.poehali.dev/files/a78fb0b9-2b48-4e34-b10a-72f07386888f.png" },
        { name: "Канада", description: "рис, нори, лосось, угорь, сыр, огурец, унаги соус, кунжут", price: "450 руб.", image: "https://cdn.poehali.dev/files/a2e426e4-f593-4d0c-ac2a-083d5d03ed24.png" },
        { name: "VIP", description: "рис, нори, сыр, снежный краб, помидор, тигровая креветка", price: "500 руб.", image: "https://cdn.poehali.dev/files/02dd4fec-5a91-4e86-b632-ab01794dc757.png" },
        { name: "Филадельфия", description: "рис, нори, сыр, лосось", price: "350 руб.", image: "https://cdn.poehali.dev/files/6c61ceef-a145-4960-9c2d-400dbdfcf398.png" },
        { name: "Спайси курица с айсбергом", description: "рис, нори, курица, сыр, салат айсберг, спайси соус", price: "350 руб.", image: "https://cdn.poehali.dev/files/152d6ad2-21ab-4edb-a69f-f8eaa62ef52e.png" },
        { name: "Филадельфия с креветкой", description: "рис, нори, лосось, тигровая креветка, сыр", price: "400 руб.", image: "https://cdn.poehali.dev/files/3baaa040-2bde-44b2-b5a0-d9d2fd846923.png" },
        { name: "Филадельфия с угрем", description: "рис, нори, лосось, угорь, сыр", price: "400 руб.", image: "https://cdn.poehali.dev/files/5b000698-bf8f-40dd-8f21-7118ce50ceea.png" },
        { name: "Филадельфия копченая", description: "рис, нори, сыр, огурец, лосось х/к", price: "450 руб.", image: "https://cdn.poehali.dev/files/392dc8c1-9105-4961-9ff0-f494722ac65e.png" },
        { name: "Дракон", description: "рис, нори, сыр, авакадо, угорь, копченый лосось", price: "700 руб." }
      ]
    },
    {
      title: "Классические роллы",
      items: [
        { name: "Ролл с креветкой", description: "рис, нори, креветка", price: "200 руб.", image: "https://cdn.poehali.dev/files/e20394af-459a-4542-b755-e8fafc40da9d.png" },
        { name: "Ролл с лососем", description: "рис, нори, лосось", price: "250 руб.", image: "https://cdn.poehali.dev/files/b8827e4a-9b8e-444d-ad84-d962731ac99c.png" },
        { name: "Ролл с авокадо", description: "рис, нори, авокадо", price: "150 руб.", image: "https://cdn.poehali.dev/files/4b16c630-ef8d-4e8b-ad41-f64c4db88551.png" },
        { name: "Ролл с огурцом", description: "рис, нори, огурец", price: "100 руб.", image: "https://cdn.poehali.dev/files/17eeac65-8bf5-43a7-bb45-5a792f8d2c87.png" },
        { name: "Ролл с крабом", description: "рис, нори, краб", price: "200 руб.", image: "https://cdn.poehali.dev/files/8cdaeaf9-09ed-4c46-9c46-9d7d0d84e0d6.png" },
        { name: "Ролл с угрем", description: "рис, нори, угорь, унаги соус, кунжут", price: "200 руб.", image: "https://cdn.poehali.dev/files/d9348ce9-1fbc-45cf-a520-761e72c19957.png" },
        { name: "Ролл с тунцом", description: "рис, нори, тунец", price: "200 руб.", image: "https://cdn.poehali.dev/files/55d2cb06-c109-4b31-a177-486b601ecc78.png" },
        { name: "Ролл с чукой", description: "рис, нори, чука", price: "100 руб.", image: "https://cdn.poehali.dev/files/8b96c58e-39cf-43b8-aff2-2d503cc2fca8.png" }
      ]
    },
    {
      title: "Запеченные роллы",
      items: [
        { name: "Запеченный с крабом", description: "рис, нори, сыр, огурец, снежный краб, кунжут, фирменный соус", price: "300 руб.", image: "https://cdn.poehali.dev/files/880c05bc-a6e2-4a53-8f20-e40822ce3c45.png" },
        { name: "Запеченный с креветкой", description: "рис, нори, сыр, огурец, креветка, тигровая, кунжут, фирменный соус", price: "350 руб.", image: "https://cdn.poehali.dev/files/2a3faa2d-e8ac-4eda-8c22-c74ca8d02841.png" },
        { name: "Запеченный с лососем", description: "рис, нори, сыр, огурец, лосось, кунжут, фирменный соус", price: "400 руб." },
        { name: "Калифорния запеченная", description: "рис, нори, сыр, авокадо, тигровая креветка, масаго, фирменный соус", price: "350 руб.", image: "https://cdn.poehali.dev/files/47712dae-d535-4173-873f-64d41f82a5fa.png" },
        { name: "Запеченная филадельфия", description: "рис, нори, сыр, лосось, фирменный соус, унаги, кунжут", price: "450 руб.", image: "https://cdn.poehali.dev/files/f7cccc88-2e7a-4832-ba6a-525529fa82eb.png" },
        { name: "Запеченный с тунцом", description: "рис, нори, сыр, огурец, тунец, кунжут, фирменный соус", price: "450 руб." },
        { name: "Мидзо", description: "рис, нори, сыр, огурец, снежный краб, тигровая креветка, лук зеленый, фирменный соус", price: "450 руб.", image: "https://cdn.poehali.dev/files/2ce59dab-0569-49ee-bb0d-69bfb410e190.png" },
        { name: "Чикаго", description: "рис, нори, сыр, огурец, бекон, лук зелёный, фирменный соус, унаги соус", price: "400 руб.", image: "https://cdn.poehali.dev/files/e52ab385-38f9-475a-a3a3-715d808066a0.png" },
        { name: "Сырная креветка", description: "рис, нори, сыр, снежный краб, тигровая креветка, фирменный соус, унаги соус", price: "400 руб.", image: "https://cdn.poehali.dev/files/c0080420-03b0-4ac3-944e-58be021ccacf.png" }
      ]
    },
    {
      title: "Темпура",
      items: [
        { name: "Темпура маки с лососем", description: "рис, нори, сыр, огурец, лосось, кляр", price: "350 руб.", image: "https://cdn.poehali.dev/files/a6b40dd2-fc78-47a9-8c08-bce46fcc72c9.png" },
        { name: "Темпура маки с крабом", description: "рис, нори, сыр, огурец, снежный краб, кляр", price: "250 руб.", image: "https://cdn.poehali.dev/files/bcbfc03c-21a2-4d10-bc51-4dc4bca8aa88.png" },
        { name: "Темпура маки с креветкой", description: "рис, нори, сыр, огурец, тигровая креветка, кляр", price: "350 руб.", image: "https://cdn.poehali.dev/files/9f7a9b19-ac75-491d-b1f4-d8d30ac02fd4.png" },
        { name: "Темпура маки с тунцом", description: "рис, нори, сыр, огурец, тунец, кляр", price: "400 руб.", image: "https://cdn.poehali.dev/files/98bae5e6-e9e9-4654-8e39-2e1c3872f1d6.png" },
        { name: "Темпура цезарь", description: "рис, нори, курица, салат айсберг, помидоры черри, кляр, пармезан", price: "350 руб.", image: "https://cdn.poehali.dev/files/2614f7e8-c7e7-4ebe-b9e7-ae1b2ad7b2e4.png" }
      ]
    },
    {
      title: "Пицца",
      items: [
        { name: "Маргарита", description: "сыр моцарелла, томатный соус", price: "200 руб.", image: "https://cdn.poehali.dev/files/db046b12-8b1d-496e-b653-e3eb882bf5cd.png" },
        { name: "С ветчиной", description: "сыр моцарелла, ветчина, томатный соус", price: "250 руб.", image: "https://cdn.poehali.dev/files/27cf870c-b4e0-4db6-861b-8d2c35809f25.png" },
        { name: "С салями", description: "сыр моцарелла, салями, томатный соус", price: "250 руб.", image: "https://cdn.poehali.dev/files/8de97c81-78ee-4dbd-ba1f-7a0f7bd22f3e.png" },
        { name: "С курицей", description: "сыр моцарелла, курица, шампиньоны, красный лук, томатный соус", price: "300 руб.", image: "https://cdn.poehali.dev/files/ab1cf4ec-3d47-4bfc-9fe2-0c8aa0de7e4c.png" },
        { name: "Диабло", description: "сыр моцарелла, салями, халапеньо, томатный соус", price: "300 руб.", image: "https://cdn.poehali.dev/files/2f60f9db-4764-451e-81ce-c61c09d25cf8.png" },
        { name: "Пепперони", description: "сыр моцарелла, пепперони, томатный соус", price: "300 руб.", image: "https://cdn.poehali.dev/files/c4c6cc13-8e5f-41b7-ba11-d63b72562b0d.png" },
        { name: "Четыре сыра", description: "сыр моцарелла, дорблю, гауда, пармезан", price: "350 руб.", image: "https://cdn.poehali.dev/files/a38b055d-0ae2-4a62-8cf5-a1b2c4a8fec1.png" },
        { name: "Гавайская", description: "сыр моцарелла, курица, ананасы, томатный соус", price: "350 руб.", image: "https://cdn.poehali.dev/files/aa62ffc0-a5c5-4fe9-880d-2c855e6a83a6.png" },
        { name: "Мясная", description: "сыр моцарелла, ветчина, салями, бекон, томатный соус", price: "400 руб.", image: "https://cdn.poehali.dev/files/ee53e51a-e0aa-4a80-be4b-10c96c9c1c57.png" }
      ]
    },
    {
      title: "Сеты",
      items: [
        { name: "Сет Мидори", description: "Осака, Канада, Эби темпура, Филадельфия х/к, Калифорния с крабом", price: "1850 руб.", image: "https://cdn.poehali.dev/files/00e88a32-94fd-4d2e-abab-6f9f37c81f25.png" },
        { name: "Сет для двоих", description: "Филадельфия, Калифорния с креветкой, Калифорния с крабом, Чикен, Ролл с крабом, Ролл с огурцом", price: "2000 руб.", image: "https://cdn.poehali.dev/files/e9308c17-b8bb-4f18-91db-ee1f84f0e3c3.png" },
        { name: "Сет Окинава", description: "Филадельфия, Филадельфия маки, Калифорния с лососем, Запеченная с лососем", price: "1500 руб.", image: "https://cdn.poehali.dev/files/82c44e91-73a5-451b-87d9-e509a7bfd4c7.png" }
      ]
    },
    {
      title: "Напитки",
      items: [
        { name: "Coca-Cola", description: "0.5л", price: "80 руб." },
        { name: "Fanta", description: "0.5л", price: "80 руб." },
        { name: "Sprite", description: "0.5л", price: "80 руб." },
        { name: "Сок Rich", description: "1л", price: "150 руб." },
        { name: "Вода негазированная", description: "0.5л", price: "50 руб." },
        { name: "Вода газированная", description: "0.5л", price: "50 руб." }
      ]
    }
  ];

  const promotions = [
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
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
            Роллы и Пицца
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
            Лучшие роллы и пицца в городе. Доставка за 60 минут!
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('menu')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
          >
            Смотреть меню
            <Icon name="ChevronDown" className="ml-2" size={24} />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroImages.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наше меню</h2>
          
          {menuCategories.map((category, catIndex) => (
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
                          onClick={() => addToCart(item.name, item.price)}
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

      {/* Promotions Section */}
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

      {/* Delivery Section */}
      <section id="delivery" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Как работает доставка</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((step, index) => (
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: "Phone", text: "+7 (999) 123-45-67" },
              { icon: "MapPin", text: "ул. Примерная, д. 1" },
              { icon: "Clock", text: "Ежедневно с 10:00 до 23:00" }
            ].map((info, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <Icon name={info.icon} size={48} className="mx-auto mb-4 text-primary" />
                  <p className="text-lg">{info.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">Часто задаваемые вопросы</h3>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "Какое минимальное время доставки?",
                  answer: "Среднее время доставки составляет 45-60 минут в зависимости от вашего адреса и загруженности кухни."
                },
                {
                  question: "Есть ли минимальная сумма заказа?",
                  answer: "Минимальная сумма заказа составляет 500 рублей. При заказе от 1000 рублей доставка бесплатная!"
                },
                {
                  question: "Какие способы оплаты вы принимаете?",
                  answer: "Мы принимаем наличные, банковские карты и оплату через онлайн-банкинг."
                },
                {
                  question: "Можно ли заказать к определенному времени?",
                  answer: "Да, при оформлении заказа вы можете указать желаемое время доставки."
                }
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Cart */}
      <Cart
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={() => {
          setIsOrderDialogOpen(true);
          setCartItems([]);
        }}
      />

      {/* Order Dialog */}
      <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Заказ оформлен!</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center py-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Icon name="Check" size={48} className="text-green-600" />
            </div>
            <p className="text-center text-lg mb-2">Спасибо за ваш заказ!</p>
            <p className="text-center text-muted-foreground mb-6">
              Мы свяжемся с вами в ближайшее время для подтверждения.
            </p>
            <Button onClick={() => setIsOrderDialogOpen(false)} className="w-full">
              Закрыть
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
