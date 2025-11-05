import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-heading font-semibold text-primary">Массаж будущего</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('services')} className="text-sm hover:text-gold transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-gold transition-colors">О специалисте</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-sm hover:text-gold transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-gold transition-colors">Цены</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-gold transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-gold hover:bg-gold/90 text-primary">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
                Гармония тела и разума через прикосновение
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Авторские методики массажа и нейрокинезиологии для вашего благополучия. 
                Индивидуальный подход премиум-класса с доказанной эффективностью.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-gold hover:bg-gold/90 text-primary">
                  Записаться на сеанс
                </Button>
                <Button onClick={() => scrollToSection('services')} size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/435dc087-9cec-43c3-b2ba-eb4106c2910e/files/6cf7f075-2143-4648-b24a-ca5b5bcefdfb.jpg" 
                alt="Премиальный массаж" 
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждая методика разработана с учетом последних достижений в области нейрофизиологии и телесных практик
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-2 hover:border-gold">
              <CardHeader>
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Sparkles" className="text-gold" size={24} />
                </div>
                <CardTitle className="font-heading text-2xl">Классический массаж</CardTitle>
                <CardDescription>Глубокое расслабление и восстановление</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Авторская техника сочетает европейские и восточные традиции для максимального эффекта. 
                  Снятие мышечных зажимов, улучшение кровообращения, общее оздоровление организма.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-2 hover:border-gold" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Brain" className="text-gold" size={24} />
                </div>
                <CardTitle className="font-heading text-2xl">Нейрокинезиология</CardTitle>
                <CardDescription>Работа с нервной системой</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Инновационный метод коррекции функциональных нарушений через нейромышечную связь. 
                  Восстановление баланса, снятие хронических болей, улучшение осанки.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-2 hover:border-gold" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Heart" className="text-gold" size={24} />
                </div>
                <CardTitle className="font-heading text-2xl">Антистресс программа</CardTitle>
                <CardDescription>Комплексное восстановление</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Специально разработанный протокол для борьбы с последствиями стресса. 
                  Релаксация, нормализация сна, повышение энергии и жизненного тонуса.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/99ed6ca4-67a1-4bb8-8e35-8068f0217e69.jpeg" 
                alt="Новоселов Михаил Сергеевич" 
                className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">О специалисте</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg font-semibold text-primary">
                  Новоселов Михаил Сергеевич
                </p>
                <p className="text-lg">
                  Сертифицированный массажист-кинезиолог с глубоким пониманием анатомии и физиологии человека. 
                  Применяет комплексный подход, сочетая классические техники массажа с современными методами 
                  кинезиологии для достижения максимального терапевтического эффекта.
                </p>
                <div className="border-l-2 border-gold pl-6 my-6">
                  <p className="italic text-lg">
                    "Каждое тело уникально, и мой подход — найти индивидуальный путь к восстановлению баланса 
                    и здоровья через грамотную работу с мышцами, суставами и нервной системой"
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Award" className="text-gold mt-1" size={20} />
                    <p>Сертифицированный специалист по массажу и кинезиологии</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="GraduationCap" className="text-gold mt-1" size={20} />
                    <p>Специализация на нейромышечных техниках</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Brain" className="text-gold mt-1" size={20} />
                    <p>Работа с опорно-двигательным аппаратом</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Heart" className="text-gold mt-1" size={20} />
                    <p>Индивидуальный подход к каждому клиенту</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Star" className="text-gold mt-1" size={20} />
                    <p>Регулярное повышение квалификации</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Наш кабинет</h2>
            <p className="text-lg text-muted-foreground">Атмосфера спокойствия и профессионализма</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/99ed6ca4-67a1-4bb8-8e35-8068f0217e69.jpeg" 
                alt="Массажный кабинет" 
                className="rounded-lg shadow-xl w-full h-[500px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-6">
              <div className="animate-fade-in-up">
                <img 
                  src="https://cdn.poehali.dev/files/324b4489-1c2c-4bcd-b94f-00cbef4869ec.png" 
                  alt="Массажная зона" 
                  className="rounded-lg shadow-xl w-full h-[240px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <img 
                  src="https://cdn.poehali.dev/files/c53318b6-2ff0-4b94-bd5d-5e2518ac0cee.jpeg" 
                  alt="Рабочее место" 
                  className="rounded-lg shadow-xl w-full h-[240px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <Card className="bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Icon name="Sparkles" className="text-gold mx-auto mb-3" size={32} />
                <p className="font-semibold mb-1">Премиальное оборудование</p>
                <p className="text-sm text-muted-foreground">Современная техника</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Icon name="Shield" className="text-gold mx-auto mb-3" size={32} />
                <p className="font-semibold mb-1">Стерильность</p>
                <p className="text-sm text-muted-foreground">Безупречная чистота</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Icon name="Flower2" className="text-gold mx-auto mb-3" size={32} />
                <p className="font-semibold mb-1">Уютная атмосфера</p>
                <p className="text-sm text-muted-foreground">Комфорт и релакс</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Icon name="Sun" className="text-gold mx-auto mb-3" size={32} />
                <p className="font-semibold mb-1">Естественное освещение</p>
                <p className="text-sm text-muted-foreground">Природный свет</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-gold/10 to-secondary/30 border-2 border-gold animate-fade-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Heart" className="text-gold" size={32} />
                    <h3 className="text-3xl font-heading font-bold text-primary">Социальная программа</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    Каждое воскресенье мы проводим <span className="font-semibold text-primary">бесплатные сеансы массажа</span> для 
                    детей с особенностями развития.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Наша миссия — помочь каждому ребёнку почувствовать заботу и получить профессиональную помощь, 
                    независимо от финансовых возможностей семьи. Мы верим, что здоровье — это право каждого.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" className="text-gold" size={18} />
                      <span className="text-sm font-semibold">Каждое воскресенье</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Gift" className="text-gold" size={18} />
                      <span className="text-sm font-semibold">Полностью бесплатно</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Phone" className="text-gold" size={18} />
                      <span className="text-sm">Запись по телефону заранее</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => scrollToSection('contact')} 
                    size="lg" 
                    className="w-full md:w-auto bg-gold hover:bg-gold/90 text-primary"
                  >
                    <Icon name="Heart" className="mr-2" size={18} />
                    Записаться на бесплатный сеанс
                  </Button>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src="https://cdn.poehali.dev/files/2fd8220f-4e01-456f-9448-a5e848350230.jpeg" 
                    alt="Помощь детям" 
                    className="rounded-lg shadow-xl w-full h-[350px] object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас те, кто доверил нам свое здоровье</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in-up bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-semibold">АМ</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Анна Миронова</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-gold fill-gold" size={14} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  "После первого же сеанса почувствовала значительное облегчение. Елена — настоящий профессионал 
                  с золотыми руками. Рекомендую всем, кто ценит качество!"
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up bg-card/50 backdrop-blur" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-semibold">ДК</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий Ковалев</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-gold fill-gold" size={14} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  "Работа требует постоянного напряжения, боли в спине стали постоянными спутниками. 
                  Курс нейрокинезиологии полностью решил проблему. Благодарю!"
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up bg-card/50 backdrop-blur" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-semibold">МС</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Мария Смирнова</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-gold fill-gold" size={14} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  "Премиальный сервис и внимание к деталям. Атмосфера располагает к полному расслаблению. 
                  Это не просто массаж — это настоящая терапия для души и тела."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Цены и пакеты</h2>
            <p className="text-lg text-muted-foreground">Инвестиция в ваше здоровье и благополучие</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in-up hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Разовый сеанс</CardTitle>
                <CardDescription>Идеально для знакомства</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-heading font-bold text-primary">5 500 ₽</span>
                  <span className="text-muted-foreground ml-2">/ 60 минут</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1" size={18} />
                    <span className="text-sm">Консультация специалиста</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1" size={18} />
                    <span className="text-sm">Классический массаж</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1" size={18} />
                    <span className="text-sm">Индивидуальный подход</span>
                  </li>
                </ul>
                <Button onClick={() => scrollToSection('contact')} className="w-full mt-6 bg-primary hover:bg-primary/90" variant="outline">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up hover:shadow-xl transition-all duration-300 border-2 border-gold relative" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-primary px-4 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Курс 5 сеансов</CardTitle>
                <CardDescription>Для устойчивого результата</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-heading font-bold text-primary">24 000 ₽</span>
                  <span className="text-muted-foreground ml-2">/ экономия 3 500 ₽</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1" size={18} />
                    <span className="text-sm">Расширенная диагностика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1" size={18} />
                    <span className="text-sm">5 сеансов по 90 минут</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1" size={18} />
                    <span className="text-sm">План восстановления</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1" size={18} />
                    <span className="text-sm">Поддержка между сеансами</span>
                  </li>
                </ul>
                <Button onClick={() => scrollToSection('contact')} className="w-full mt-6 bg-gold hover:bg-gold/90 text-primary">
                  Начать курс
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up hover:shadow-xl transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">VIP пакет</CardTitle>
                <CardDescription>Максимальная трансформация</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-heading font-bold text-primary">45 000 ₽</span>
                  <span className="text-muted-foreground ml-2">/ 10 сеансов</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1" size={18} />
                    <span className="text-sm">Комплексная диагностика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1" size={18} />
                    <span className="text-sm">10 сеансов по 120 минут</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1" size={18} />
                    <span className="text-sm">Авторские методики</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1" size={18} />
                    <span className="text-sm">Приоритетная запись</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-gold mt-1" size={18} />
                    <span className="text-sm">Персональная программа</span>
                  </li>
                </ul>
                <Button onClick={() => scrollToSection('contact')} className="w-full mt-6 bg-primary hover:bg-primary/90" variant="outline">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Запись на сеанс</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Оставьте заявку, и мы свяжемся с вами в течение часа для подбора удобного времени. 
                Первая консультация — бесплатно.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">ул. 20-й Горнострелковой Дивизии, 16</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 656-12-34</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Время работы</h3>
                    <p className="text-muted-foreground">Пн-Вс: 10:00 - 21:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@massage-future.ru</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <img 
                  src="https://cdn.poehali.dev/projects/435dc087-9cec-43c3-b2ba-eb4106c2910e/files/0def9662-e0cf-45f4-8a8f-7a76d352623c.jpg" 
                  alt="Наш кабинет" 
                  className="rounded-lg shadow-xl w-full h-64 object-cover"
                />
              </div>
            </div>

            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Форма записи</CardTitle>
                <CardDescription>Заполните форму, и мы перезвоним вам</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input 
                      placeholder="Введите ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input 
                      type="tel" 
                      placeholder="+7 (___) ___-__-__" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение (необязательно)</label>
                    <Textarea 
                      placeholder="Расскажите о вашем запросе" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-primary" size="lg">
                    Отправить заявку
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-4">Массаж будущего</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Премиальные услуги массажа и нейрокинезиологии для вашего здоровья и благополучия
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-gold transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-gold transition-colors">О специалисте</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-gold transition-colors">Цены</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-gold transition-colors">Контакты</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (999) 656-12-34</li>
                <li>info@massage-future.ru</li>
                <li>Москва, ул. Арбат, д. 15</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>© 2024 Массаж будущего & Нейрокинезиология. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;