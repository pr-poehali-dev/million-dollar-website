import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [email, setEmail] = useState('');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо! Вы подписались на email: ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Million$</div>
            <div className="hidden md:flex items-center gap-8">
              {['home', 'strategies', 'courses', 'cases', 'blog', 'community', 'faq', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'strategies' && 'Стратегии'}
                  {section === 'courses' && 'Курсы'}
                  {section === 'cases' && 'Кейсы'}
                  {section === 'blog' && 'Блог'}
                  {section === 'community' && 'Сообщество'}
                  {section === 'faq' && 'FAQ'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button size="sm" className="hidden md:flex">Начать</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-secondary leading-tight">
              Твой первый миллион<br />
              <span className="text-primary">долларов</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-[#000000]">Практические стратегии, реальные кейсы и</p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" onClick={() => scrollToSection('strategies')}>
                Начать путь
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('cases')}>
                Посмотреть кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="strategies" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Стратегии заработка</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Rocket', title: 'Стартапы', desc: 'Создание и масштабирование прибыльного бизнеса с нуля' },
              { icon: 'TrendingUp', title: 'Инвестиции', desc: 'Инвестиционные стратегии для долгосрочного роста капитала' },
              { icon: 'Briefcase', title: 'Карьера', desc: 'Развитие высокооплачиваемых навыков и рост в должности' },
              { icon: 'Globe', title: 'Онлайн-бизнес', desc: 'Запуск цифровых продуктов и масштабирование дохода' },
              { icon: 'Building2', title: 'Недвижимость', desc: 'Стратегии инвестирования и заработка на недвижимости' },
              { icon: 'Zap', title: 'Быстрый рост', desc: 'Методы ускоренного заработка и увеличения капитала' },
            ].map((strategy, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={strategy.icon as any} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{strategy.title}</h3>
                  <p className="text-muted-foreground">{strategy.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Курсы и программы</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Основы миллионера',
                duration: '8 недель',
                level: 'Начальный',
                price: '29 990 ₽',
                features: ['Финансовая грамотность', 'Планирование бюджета', 'Первые инвестиции', 'Менталитет богатства'],
              },
              {
                title: 'Путь к первому миллиону',
                duration: '12 недель',
                level: 'Продвинутый',
                price: '79 990 ₽',
                features: ['Стратегии заработка', 'Управление капиталом', 'Масштабирование бизнеса', 'Личный наставник'],
              },
            ].map((course, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="BarChart" size={16} />
                        {course.level}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-3xl font-bold text-primary">{course.price}</span>
                    <Button>Записаться</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Истории успеха</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Алексей К.', age: 28, field: 'IT-бизнес', result: 'От $0 до $1.2М за 3 года', story: 'Запустил SaaS-продукт и вырос до 500+ клиентов' },
              { name: 'Мария С.', age: 32, field: 'E-commerce', result: 'От $50K до $1М за 2 года', story: 'Развила онлайн-магазин товаров для дома' },
              { name: 'Дмитрий Н.', age: 35, field: 'Инвестиции', result: 'От $100K до $1.5М за 5 лет', story: 'Портфель акций и недвижимости с умным реинвестированием' },
            ].map((person, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                      {person.name[0]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{person.name}</h3>
                      <p className="text-sm text-muted-foreground">{person.age} лет • {person.field}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary">{person.result}</p>
                    <p className="text-sm text-muted-foreground">{person.story}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Последние статьи</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: '7 привычек миллионеров', date: '20 декабря 2024', category: 'Менталитет' },
              { title: 'Как инвестировать первые $10K', date: '18 декабря 2024', category: 'Инвестиции' },
              { title: 'Масштабирование онлайн-бизнеса', date: '15 декабря 2024', category: 'Бизнес' },
            ].map((post, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 space-y-3">
                  <div className="text-xs font-medium text-primary">{post.category}</div>
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Users" size={48} className="mx-auto text-primary mb-6" />
          <h2 className="text-4xl font-bold mb-6">Присоединяйся к сообществу</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Более 10,000 амбициозных людей уже на пути к своему первому миллиону. Общайся, учись, расти вместе с нами
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram-чат
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Video" size={20} className="mr-2" />
              Вебинары
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Частые вопросы</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-0">
              <AccordionTrigger className="text-left font-semibold">
                Сколько времени нужно, чтобы заработать первый миллион?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Время зависит от выбранной стратегии, стартового капитала и усилий. В среднем, при правильном подходе это реально за 3-5 лет.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold">
                Нужны ли начальные инвестиции?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Зависит от стратегии. Онлайн-бизнес можно начать с минимальными вложениями ($100-1000), тогда как инвестиции требуют стартовый капитал.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold">
                Подходит ли это новичкам?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да! У нас есть программы для всех уровней. Начинаем с основ финансовой грамотности и постепенно переходим к продвинутым стратегиям.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold">
                Какая поддержка доступна?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Вы получите доступ к сообществу, еженедельным вебинарам, материалам курсов и личным консультациям с наставниками.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Начни путь сегодня</h2>
            <p className="text-muted-foreground">Подпишись на рассылку и получи бесплатный гайд "10 шагов к первому миллиону"</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex gap-3">
            <Input
              type="email"
              placeholder="Твой email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" size="lg">Подписаться</Button>
          </form>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Million$</h3>
              <p className="text-sm opacity-80">Твой путеводитель к финансовой свободе</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Разделы</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#strategies" className="hover:opacity-100">Стратегии</a></li>
                <li><a href="#courses" className="hover:opacity-100">Курсы</a></li>
                <li><a href="#cases" className="hover:opacity-100">Кейсы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Ресурсы</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#blog" className="hover:opacity-100">Блог</a></li>
                <li><a href="#community" className="hover:opacity-100">Сообщество</a></li>
                <li><a href="#faq" className="hover:opacity-100">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>info@millions.com</li>
                <li>+7 (999) 123-45-67</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-80">
            © 2024 Million$. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;