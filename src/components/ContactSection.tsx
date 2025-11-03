import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactInfo = [
  { icon: "Phone", text: "+7 (999) 123-45-67" },
  { icon: "MapPin", text: "ул. Примерная, д. 1" },
  { icon: "Clock", text: "Ежедневно с 10:00 до 23:00" }
];

const faqItems = [
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
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
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
            {faqItems.map((item, index) => (
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
  );
};
