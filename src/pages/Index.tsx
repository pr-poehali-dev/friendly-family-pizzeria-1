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
import { useState } from "react";

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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

  const menuCategories = [
    {
      title: "Фирменные роллы",
      items: [
        { name: "Чикен", description: "рис, нори, сыр, курица, огурец", price: "170 руб.", image: "https://cdn.poehali.dev/files/bbba8e05-9e82-42ad-a3ec-1b0f9979c6b4.png" },
        { name: "Овощной маки", description: "рис, нори, сыр огурец, помидор, болгарский перец, салат айсберг", price: "200 руб." },
        { name: "Филадельфия маки", description: "рис, нори, сыр, огурец, лосось", price: "300 руб." },
        { name: "Эби темпура", description: "рис, нори, сыр, тигровая креветка в кляре, масаго", price: "300 руб.", image: "https://cdn.poehali.dev/files/6d2ed298-ff1e-41f4-ab48-c7bce96fa9fe.png" },
        { name: "Калифорния с крабом", description: "рис, нори, масаго, сыр, снежный краб, огурец", price: "250 руб.", image: "https://cdn.poehali.dev/files/0a885597-be0d-4e3e-a90b-1cf561e610cd.png" },
        { name: "Калифорния с креветкой", description: "рис, нори, сыр масаго, тигровая креветка, огурец", price: "350 руб.", image: "https://cdn.poehali.dev/files/5c08e181-d95e-4922-b1c8-aef9006f449c.png" },
        { name: "Калифорния с лососем", description: "рис, нори, лосось, масаго, сыр, огурец", price: "350 руб.", image: "https://cdn.poehali.dev/files/9ff7a9c2-58ac-4e80-9ee1-0c6e01f2a77a.png" },
        { name: "Калифорния с тунцом", description: "рис, нори, масаго, сыр, тунец, огурец", price: "400 руб." },
        { name: "Осака", description: "рис, нори, сыр, огурец, лосось х/к, спайси, масаго зеленая", price: "400 руб." },
        { name: "Киото", description: "рис, нори, креветка в темпуре, соус спайси, помидор, салат айсберг", price: "400 руб.", image: "https://cdn.poehali.dev/files/047fe38b-4ec9-43e1-94b2-e21288c325a5.png" },
        { name: "Цезарь-ролл", description: "рис, нори, курица, салат айсберг, курица, сыр, пармезан, черри", price: "350 руб." },
        { name: "Канада", description: "рис, нори, лосось, угорь, сыр, огурец, унаги соус, кунжут", price: "450 руб.", image: "https://cdn.poehali.dev/files/a2e426e4-f593-4d0c-ac2a-083d5d03ed24.png" },
        { name: "VIP", description: "рис, нори, сыр, снежный краб, помидор, тигровая креветка", price: "500 руб." },
        { name: "Филадельфия", description: "рис, нори, сыр, лосось", price: "350 руб.", image: "https://cdn.poehali.dev/files/6c61ceef-a145-4960-9c2d-400dbdfcf398.png" },
        { name: "Спайси курица с айсбергом", description: "рис, нори, курица, сыр, салат айсберг, спайси соус", price: "350 руб.", image: "https://cdn.poehali.dev/files/152d6ad2-21ab-4edb-a69f-f8eaa62ef52e.png" },
        { name: "Филадельфия с креветкой", description: "рис, нори, лосось, тигровая креветка, сыр", price: "400 руб.", image: "https://cdn.poehali.dev/files/3baaa040-2bde-44b2-b5a0-d9d2fd846923.png" },
        { name: "Филадельфия с угрем", description: "рис, нори, лосось, угорь, сыр", price: "400 руб." },
        { name: "Филадельфия копченая", description: "рис, нори, сыр, огурец, лосось х/к", price: "450 руб." },
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
        { name: "Ролл с угрем", description: "рис, нори, угорь, унаги соус, кунжут", price: "200 руб." },
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
        { name: "Темпура бекон", description: "рис, нори, курица, бекон, сырный соус", price: "200 руб.", image: "https://cdn.poehali.dev/files/c83b9d98-eb12-4a92-9eda-9eb81d18cf67.png" },
        { name: "Темпура цезарь", description: "рис, нори, сыр, черри, помидор, лист салата", price: "200 руб." },
        { name: "Темпура краб", description: "рис, нори, снежный краб, сыр, огурец", price: "220 руб.", image: "https://cdn.poehali.dev/files/cd656589-7a34-4628-a98a-b6a84ef8a600.png" },
        { name: "Темпура креветка", description: "рис, нори, сыр, креветка, огурец", price: "250 руб.", image: "https://cdn.poehali.dev/files/edde91c9-771b-4b2d-901c-d3ae5ad82f2c.png" },
        { name: "Темпура с лососем", description: "рис, нори, сыр, лосось, огурец", price: "300 руб." },
        { name: "Темпура тунец", description: "рис, нори, сыр, тунец, огурец", price: "300 руб.", image: "https://cdn.poehali.dev/files/aecb13c7-fced-4552-aa9f-c0a4d91498e6.png" },
        { name: "Киото темпура", description: "рис, нори, сыр, лосось, тигровая креветка, огурец, масаго", price: "450 руб.", image: "https://cdn.poehali.dev/files/59b11c14-9a87-48e4-8640-a125279cd294.png" }
      ]
    },
    {
      title: "WOK",
      items: [
        { name: "WOK с морепродуктами", description: "пшеничная лапша тигровыми креветками, мидиями, кальмаром и сочными овощами в устричном соусе", price: "400 руб." },
        { name: "WOK с курицей", description: "пшеничная лапша с сочными овощами и нежной куриной грудкой в соусе терияки", price: "350 руб." }
      ]
    },
    {
      title: "Паста",
      items: [
        { name: "Карбонара", description: "феттучини в сливочно-сырном соусе с обжаренными ломтиками бекона, под сырой поджаркой", price: "450 руб." },
        { name: "С курицей и грибами", description: "феттучини с нежным филе куриной грудки, шампиньонами в сливочном соусе под сырой поджаркой", price: "450 руб." },
        { name: "С морепродуктами", description: "феттучини в сливочно-томатном соусе с мидиями, кальмарами и осьминогом под сырой поджаркой", price: "500 руб." },
        { name: "Паста «том-ям»", description: "феттучини с креветками и брокколи в остром соусе том-ям, под сырой поджаркой", price: "500 руб." }
      ]
    },
    {
      title: "Пицца",
      items: [
        { name: "Чикен бекон", description: "40 см. Сыр моцарелла, соус белый, соус сырный, соус барбекю, бекон, обжаренный цыпленок, томаты свежие", price: "850 руб." },
        { name: "Веронo", description: "40 см. Сыр моцарелла, соус из томатов, соус белый, обжаренный цыплёнок, шампиньоны", price: "850 руб." },
        { name: "Каприччо", description: "40 см. Сыр моцарелла, соус белый, соус из томатов, обжаренный цыплёнок, ветчина премиум, сервелат, перец сладкий свежий", price: "850 руб." },
        { name: "Пронто", description: "40 см. Сыр моцарелла, соус белый, соус ранч, обжаренный цыпленок, бекон, томаты свежие, грибы", price: "850 руб." },
        { name: "Гавайская", description: "40 см. Сыр моцарелла, соус белый, соус из томатов, обжаренный цыпленок, ананасы, томаты свежие", price: "850 руб." },
        { name: "Цезарь", description: "38 см. Курица, соус Цезарь, моцарелла, черри, лист салата, сухарики, пармезан", price: "850 руб." },
        { name: "Пепперони", description: "40 см. Сыр моцарелла, фирменный пицца-соус, соус белый, колбаски пепперони", price: "850 руб." },
        { name: "Наполи", description: "40 см. Сыр моцарелла, соус белый, ветчина премиум, томаты свежие", price: "850 руб." },
        { name: "Ассорти", description: "40 см. Сыр моцарелла, соус из томатов, соус белый, сервелат, грибы, томаты свежие", price: "850 руб." },
        { name: "Сицилийская", description: "40 см. Сыр моцарелла, соус белый, сервелат, бекон, грибы, томаты свежие, перец сладкий свежий, оливки", price: "850 руб." }
      ]
    },
    {
      title: "Пицца острая",
      items: [
        { name: "Крейзи пиг", description: "40 см. Сыр моцарелла, жгучий соус сальса, кетчуп, соус белый, соус горчичный, бекон премиум, перец халапеньо, перец жгучий чили", price: "850 руб." }
      ]
    },
    {
      title: "Пицца без мяса",
      items: [
        { name: "Маргарита", description: "40 см. Сыр моцарелла, соус белый, соус из томатов, грибы, томаты свежие", price: "850 руб." },
        { name: "Сырная элитная", description: "40 см. Сыр моцарелла, сыр Дорблю, сыр пармезан, сыр фета, соус белый", price: "850 руб." },
        { name: "Сырная новая", description: "40 см. Сыр моцарелла двойная порция, сыр фета, соус белый, прованские травы", price: "850 руб." }
      ]
    },
    {
      title: "Пицца с морепродуктами",
      items: [
        { name: "Маринара", description: "40 см. Сыр моцарелла, соус белый, соус из томатов, морской коктейль из морепродуктов, томаты свежие, оливки", price: "900 руб." }
      ]
    },
    {
      title: "Закуски",
      items: [
        { name: "Картофель фри", description: "", price: "250 руб." },
        { name: "Картофель по-деревенски", description: "", price: "250 руб." },
        { name: "Кольца луковые", description: "", price: "200 руб." },
        { name: "Наггетсы куриные", description: "", price: "200 руб." },
        { name: "Сырные палочки", description: "", price: "250 руб." },
        { name: "Крылья цыпленка запеченные", description: "", price: "460 руб." }
      ]
    },
    {
      title: "Салаты",
      items: [
        { name: "Салат «Гавайский»", description: "Сочный салат с нежным филе грудки, с ананасами и пекинской капустой в фирменном соусе", price: "350 руб." },
        { name: "Салат «Греческий»", description: "Греческий овощной салат с сыром фета и маслинами", price: "350 руб." },
        { name: "Салат «Грибной с ветчиной»", description: "Сытный салат с грибами, ветчиной, томатами, огурцами и красным луком в майонезной заправке", price: "400 руб." },
        { name: "Салат «Оливье»", description: "Классический оливье", price: "280 руб." },
        { name: "Салат «Цезарь с курицей»", description: "Классический салат «Цезарь с курицей», микс салата, соус Цезарь, черри, пармезан", price: "400 руб." },
        { name: "Салат «Цезарь с креветкой»", description: "Айсберг, соус Цезарь, черри, пармезан, сухарики", price: "500 руб." }
      ]
    },
    {
      title: "Сеты",
      items: [
        { name: "Сет темпура (24шт)", description: "темпура лосось, темпура креветка, темпура краб", price: "800 руб." },
        { name: "Сет классик (64шт)", description: "ролл с огурцом, ролл с лососем, ролл с угрем, ролл с крабом, ролл с тунцом, ролл с креветкой, ролл с чукой, ролл с авокадо", price: "1100 руб.", image: "https://cdn.poehali.dev/files/5ae4269d-b987-482e-ab3c-737ee6397bfc.png" },
        { name: "Сет филадельфия (32шт)", description: "филадельфия классическая, филадельфия с креветкой, филадельфия с угрем, филадельфия копченая", price: "1500 руб.", image: "https://cdn.poehali.dev/files/5356662c-e774-4903-926a-729938a73e4a.png" },
        { name: "Горячая Япония (32шт)", description: "темпура бекон, темпура лосось, запеченный с креветкой, запеченный с тунцом", price: "1000 руб.", image: "https://cdn.poehali.dev/files/04c9237b-bb65-4dc2-9aa7-8d236e97d212.png" },
        { name: "Сет запеченный (32шт)", description: "запеченный с тунцом, запеченный с креветкой, запеченная филадельфия, запеченная калифорния", price: "1000 руб.", image: "https://cdn.poehali.dev/files/8c3d77fc-7664-438d-8082-19da94ed56ce.png" },
        { name: "Три хита (24шт)", description: "филадельфия, канада, калифорния с креветкой", price: "1200 руб.", image: "https://cdn.poehali.dev/files/9034131e-b156-411d-b510-12b99c939440.png" },
        { name: "Япония сет (104шт)", description: "ролл с огурцом, овощной, филадельфия, калифорния краб, канада, осака, филадельфия маки, запеченный с креветкой, запеченный с тунцом, темпура лосось, темпура краб, темпура креветка, сырная креветка, ролл с крабом", price: "3000 руб.", image: "https://cdn.poehali.dev/files/aea44a36-1935-40ae-97b1-75af9215b6fd.png" },
        { name: "Сет «Дружная семья» (56шт)", description: "филадельфия, калифорния краб, запеченный с креветкой, запеченный с лососем, запеченная киото, темпура тунец, ролл с огурцом", price: "1600 руб." },
        { name: "Веган сет (32шт)", description: "овощной ролл с огурцом, ролл с авокадо, ролл с чукой", price: "500 руб." }
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
      title: "Скидка на кофе",
      description: "Предъяви на кассе пиццерии чек с детской площадки \"Дружная семья\" и получи скидку 50% на кофе Американо",
      icon: "Ticket"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/b88c065a-d3a7-46c8-986b-39050a097e32.png" 
                alt="Дружная семья" 
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('menu')} className="hover:text-primary transition-colors">Меню</button>
              <button onClick={() => scrollToSection('delivery')} className="hover:text-primary transition-colors">Доставка</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('promotions')} className="hover:text-primary transition-colors">Акции</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <div className="flex items-center gap-3">
              <Cart 
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
              <Button size="lg" className="hidden md:flex">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
            </div>
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Роллы для всей семьи</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Готовим с любовью по традиционным японским рецептам
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
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {menuCategories.map((category, categoryIndex) => (
                <AccordionItem 
                  key={categoryIndex} 
                  value={`category-${categoryIndex}`}
                  className="border rounded-lg overflow-hidden bg-card"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-secondary/50 transition-colors">
                    <span className="text-2xl font-bold">{category.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="space-y-3 pt-2">
                      {category.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex} 
                          className="flex flex-col gap-3 p-4 rounded-lg hover:bg-secondary/30 transition-colors"
                        >
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                              <Button size="sm" onClick={() => addToCart(item.name, item.price)}>
                                <Icon name="Plus" size={16} />
                              </Button>
                            </div>
                          </div>
                          {item.image && (
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-64 h-auto object-contain rounded-lg mx-auto"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
              <h3 className="text-2xl font-bold mb-3">от 30 минут</h3>
              <p className="text-muted-foreground">Среднее время доставки по городу</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Icon name="MapPin" size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Бесплатно</h3>
              <p className="text-muted-foreground">При заказе от 1000₽</p>
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
                Добро пожаловать в "Дружную семью" – место, где рождается семейное счастье! Мы больше, чем просто пиццерия. Мы – место силы для родителей и настоящий рай для детей.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Наша история началась с простой идеи: создать пространство, где взрослые могут насладиться вкусом ароматной пиццы, попробовать Японию на вкус, отведав наши роллы, а их дети весело и беззаботно провести время. Пока вы отдыхаете, ваши непоседы исследуют многоуровневый лабиринт, катаются с горок и играют в сухом бассейне.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Вы также можете окунуться в детство, прокатившись на аттракционах в нашем "Парке историй". Мы создали наше пространство для тех, кто ценит моменты радости, вкусную еду и счастливые улыбки своих детей. Приходите всей семьей – мы позаботимся о вашем отдыхе!
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Badge variant="secondary" className="text-lg py-2 px-4">
                  <Icon name="Award" size={20} className="mr-2" />
                  14 лет опыта
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
          <div className="max-w-2xl mx-auto">
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
                    <p className="text-muted-foreground">г. Курганинск, ул. Первомайская, 3К "Парк историй"</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Ежедневно с 10:00 до 21:00</p>
                  </div>
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
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/b88c065a-d3a7-46c8-986b-39050a097e32.png" 
                  alt="Дружная семья" 
                  className="h-16 w-auto"
                />
              </div>
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