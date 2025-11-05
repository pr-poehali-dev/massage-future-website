const About = () => {
  return (
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
              <ul className="space-y-3 text-base">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Более 12 лет практики в области массажа и телесной терапии</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Сертификаты международных школ массажа и кинезиологии</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Постоянное обучение новым методикам и техникам работы с телом</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Специализация на работе со спортсменами и людьми с хроническими болями</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
