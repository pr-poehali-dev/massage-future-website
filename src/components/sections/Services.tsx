import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Services = () => {
  return (
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
  );
};

export default Services;
