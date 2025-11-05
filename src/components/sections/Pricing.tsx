import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface PricingProps {
  scrollToSection: (id: string) => void;
}

const Pricing = ({ scrollToSection }: PricingProps) => {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Цены и пакеты</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите оптимальный вариант для достижения ваших целей
          </p>
        </div>

        <div className="mb-12 p-8 bg-gradient-to-r from-gold/10 to-secondary/30 rounded-lg border-2 border-gold/20 animate-fade-in-up">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="Gift" className="text-gold" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">Социальная программа</h3>
              <p className="text-muted-foreground mb-4">
                Бесплатный сеанс массажа каждое воскресенье для одного человека. 
                Мы верим, что забота о здоровье должна быть доступна каждому.
              </p>
              <Button onClick={() => scrollToSection('contact')} className="bg-gold hover:bg-gold/90 text-primary">
                Записаться на бесплатный сеанс
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="animate-fade-in-up hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Пробный сеанс</CardTitle>
              <CardDescription>Знакомство с методиками</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <span className="text-4xl font-heading font-bold text-primary">3 500 ₽</span>
                <span className="text-muted-foreground ml-2">/ 60 минут</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-gold mt-1" size={18} />
                  <span className="text-sm">Первичная консультация</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-gold mt-1" size={18} />
                  <span className="text-sm">Диагностика состояния</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-gold mt-1" size={18} />
                  <span className="text-sm">Подбор методики</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-gold mt-1" size={18} />
                  <span className="text-sm">Полноценный сеанс</span>
                </li>
              </ul>
              <Button onClick={() => scrollToSection('contact')} className="w-full mt-6" variant="outline">
                Записаться
              </Button>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up hover:shadow-xl transition-all duration-300 border-2 border-gold" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <div className="inline-block px-3 py-1 bg-gold text-primary text-sm font-semibold rounded-full mb-2">
                Популярный
              </div>
              <CardTitle className="font-heading text-2xl">Курс</CardTitle>
              <CardDescription>Стабильный результат</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <span className="text-4xl font-heading font-bold text-primary">20 000 ₽</span>
                <span className="text-muted-foreground ml-2">/ 5 сеансов</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-gold mt-1" size={18} />
                  <span className="text-sm">Подробная диагностика</span>
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
                  <span className="text-sm">Круглосуточная поддержка</span>
                </li>
              </ul>
              <Button onClick={() => scrollToSection('contact')} className="w-full mt-6" variant="outline">
                Оформить VIP
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
