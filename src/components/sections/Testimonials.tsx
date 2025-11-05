import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Отзывы клиентов</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 500 довольных клиентов уже ощутили целительную силу профессионального массажа
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="animate-fade-in-up hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-gold fill-gold" size={20} />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Впервые за много лет почувствовала себя по-настоящему расслабленной. Михаил — настоящий профессионал, 
                который понимает тело и знает, как с ним работать. Рекомендую всем!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-gold" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Елена М.</p>
                  <p className="text-sm text-muted-foreground">Москва</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up hover:shadow-xl transition-all duration-300" style={{ animationDelay: '0.1s' }}>
            <CardContent className="pt-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-gold fill-gold" size={20} />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Страдал от хронических болей в спине после травмы. После курса нейрокинезиологии боли практически ушли. 
                Михаил не просто массажист — это мастер своего дела."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-gold" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Дмитрий К.</p>
                  <p className="text-sm text-muted-foreground">Санкт-Петербург</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up hover:shadow-xl transition-all duration-300" style={{ animationDelay: '0.2s' }}>
            <CardContent className="pt-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-gold fill-gold" size={20} />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Антистресс программа — это именно то, что мне было нужно. После работы в офисе накапливается такое напряжение... 
                А здесь — полное расслабление и перезагрузка. Обязательно вернусь!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-gold" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Анна С.</p>
                  <p className="text-sm text-muted-foreground">Москва</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
