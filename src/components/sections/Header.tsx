import { Button } from '@/components/ui/button';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
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
  );
};

export default Header;
