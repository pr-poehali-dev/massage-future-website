import { Button } from '@/components/ui/button';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
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
  );
};

export default Hero;
