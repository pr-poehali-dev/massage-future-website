import Icon from '@/components/ui/icon';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-primary text-secondary py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-gold">Массаж будущего</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Профессиональный массаж и телесная терапия для вашего здоровья и благополучия
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold">Навигация</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-gold transition-colors">
                  Услуги
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-gold transition-colors">
                  О специалисте
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="hover:text-gold transition-colors">
                  Отзывы
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-gold transition-colors">
                  Цены
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold">Контакты</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>+7 (999) 656-12-34</li>
              <li>info@massage-future.ru</li>
              <li>Москва, ул. Примерная, 123</li>
              <li>Пн-Вс: 10:00 - 21:00</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gold">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Icon name="Instagram" size={20} className="text-gold" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Icon name="MessageCircle" size={20} className="text-gold" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gold/20 mt-8 pt-8 text-center text-sm opacity-60">
          <p>© 2024 Массаж будущего. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
