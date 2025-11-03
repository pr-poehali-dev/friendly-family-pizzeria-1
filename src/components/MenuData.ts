export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
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
      { name: "Четыре сыра", description: "сыр моцарелла, дорблю, гауда, пармезан, сливочный соус", price: "400 руб.", image: "https://cdn.poehali.dev/files/b12cda68-f3ad-42b1-89df-6b9fe4d0f025.png" },
      { name: "Охотничья", description: "сыр моцарелла, ветчина, салями, охотничьи колбаски, красный лук, шампиньоны, томатный соус", price: "450 руб.", image: "https://cdn.poehali.dev/files/dd2cef66-c5bb-4e20-8cd6-ffabfc4ddd4a.png" },
      { name: "Морская", description: "сыр моцарелла, кальмары, мидии, красный лук, томатный соус", price: "500 руб.", image: "https://cdn.poehali.dev/files/26ddc087-c15c-4af5-a9cb-1f0ea94e0cbb.png" }
    ]
  },
  {
    title: "Сеты",
    items: [
      { name: "Сет запеченный (32шт)", description: "запеченный с тунцом, запеченный с креветкой, запеченная филадельфия, запеченная калифорния", price: "1000 руб.", image: "https://cdn.poehali.dev/files/8c3d77fc-7664-438d-8082-19da94ed56ce.png" },
      { name: "Три хита (24шт)", description: "филадельфия, канада, калифорния с креветкой", price: "1200 руб.", image: "https://cdn.poehali.dev/files/9034131e-b156-411d-b510-12b99c939440.png" },
      { name: "Япония сет (104шт)", description: "ролл с огурцом, овощной, филадельфия, калифорния краб, канада, осака, филадельфия маки, запеченный с креветкой, запеченный с тунцом, темпура лосось, темпура краб, темпура креветка, сырная креветка, ролл с крабом", price: "3000 руб.", image: "https://cdn.poehali.dev/files/aea44a36-1935-40ae-97b1-75af9215b6fd.png" },
      { name: "Сет «Дружная семья» (56шт)", description: "филадельфия, калифорния краб, запеченный с креветкой, запеченный с лососем, темпура цезарь, темпура тунец, ролл с огурцом", price: "1600 руб.", image: "https://cdn.poehali.dev/files/e9956974-1b81-426d-9a28-631916dada5f.png" },
      { name: "Веган сет (32шт)", description: "овощной ролл с огурцом, ролл с авокадо, ролл с чукой", price: "500 руб.", image: "https://cdn.poehali.dev/files/315b0d7b-14da-4ac6-a2ae-af322af001bb.png" }
    ]
  },
  {
    title: "Напитки",
    items: [
      { name: "Вода Бонаква 0,5л", description: "", price: "80 руб." },
      { name: "Добрый Кола 0,5л", description: "", price: "180 руб." },
      { name: "Добрый Кола 1л", description: "", price: "250 руб." },
      { name: "Сок Добрый 1л", description: "в ассортименте", price: "250 руб." },
      { name: "Сок Добрый 0,2л", description: "в ассортименте", price: "80 руб." },
      { name: "Pulpy 0,5л", description: "", price: "150 руб.", image: "https://cdn.poehali.dev/files/e5498395-19f4-49d0-9226-bbc13453b5b3.png" },
      { name: "Rich (черный) 0,5л", description: "", price: "150 руб.", image: "https://cdn.poehali.dev/files/03ce2306-65c8-46d8-88ab-4d6af774be1a.png" },
      { name: "Rich (зеленый) 0,5л", description: "", price: "150 руб.", image: "https://cdn.poehali.dev/files/54a7a154-4b83-4d5e-bd4e-31678162926f.png" },
      { name: "Добрый Лимон-Лайм 0,5л", description: "", price: "180 руб.", image: "https://cdn.poehali.dev/files/ce5012dc-7205-4d4c-87b1-1291170e3d9d.png" },
      { name: "Добрый Апельсин 1л", description: "", price: "250 руб.", image: "https://cdn.poehali.dev/files/9ce96942-206c-4e42-a161-80ca43c243af.png" }
    ]
  }
];
