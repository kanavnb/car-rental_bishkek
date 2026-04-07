import React from 'react';
import { useLang } from '../context/LangContext';

const staticContent = {
  en: {
    modifyBooking: { title: 'Modify Booking', content: 'Contact support to change your booking dates or details.' },
    cancelBooking: { title: 'Cancel Booking', content: 'Cancel up to 48 hours before pickup for full refund.' },
    aboutUs: { title: 'About Us', content: 'CWD is leading car rental in Central Asia since 2000.' },
    feedback: { title: 'Feedback', content: 'Share your experience to help us improve.' },
    destinations: { title: 'Destinations', content: 'Rent anywhere in Kazakhstan and Kyrgyzstan.' },
    fleet: { title: 'Fleet', content: '10+ brands, economy to luxury cars.' },
    policies: { title: 'Policies', content: 'Read our rental policies and insurance terms.' },
    privacy: { title: 'Privacy Policy', content: 'We protect your data per GDPR standards.' },
    legal: { title: 'Legal Notice', content: 'Legal information and company details.' },
    terms: { title: 'Terms and Conditions', content: 'Full rental agreement terms.' }
  },
  ru: {
    modifyBooking: { title: 'Изменить бронирование', content: 'Свяжитесь с поддержкой для изменения дат или деталей бронирования.' },
    cancelBooking: { title: 'Отменить бронирование', content: 'Отмена за 48 часов до получения - полный возврат.' },
    aboutUs: { title: 'О нас', content: 'CWD - ведущая аренда авто в Центральной Азии с 2000 года.' },
    feedback: { title: 'Обратная связь', content: 'Поделитесь опытом, чтобы мы улучшились.' },
    destinations: { title: 'Направления', content: 'Аренда везде в Казахстане и Кыргызстане.' },
    fleet: { title: 'Автопарк', content: '10+ брендов, от эконом до люкс.' },
    policies: { title: 'Политики', content: 'Политики аренды и страхование.' },
    privacy: { title: 'Политика конфиденциальности', content: 'Защищаем данные по стандартам GDPR.' },
    legal: { title: 'Юридическая информация', content: 'Юридическая информация и реквизиты компании.' },
    terms: { title: 'Условия и положения', content: 'Полные условия договора аренды.' }
  },
  kg: {
    modifyBooking: { title: 'Брондоону өзгөртүү', content: 'Брондун убактысын же деталдарын өзгөртүү үчүн колдоого кайрылыңыз.' },
    cancelBooking: { title: 'Брондоону жокко чыгаруу', content: 'Алып кетүүгө 48 саат калганда жокко чыгаруу - толук кайтаруу.' },
    aboutUs: { title: 'Биз жөнүндө', content: 'CWD 2026-жылдан бери Борбордук Азиянын лидер ижарасы.' },
    feedback: { title: 'Пикирлер', content: 'Бизди жакшыртуу үчүн тажрыйбаңызды бөлүшүңүз.' },
    destinations: { title: 'Жолдор', content: 'Кыргызстандын бардык жерлеринде ижара.' },
    fleet: { title: 'Автопарк', content: '10+ бренд, экономдон люкс.' },
    policies: { title: 'Саясаттар', content: 'Ижара саясаты жана камсыздандыруу.' },
    privacy: { title: 'Купуялык саясаты', content: 'GDPR стандарттары боюнча маалыматтарды коргойбуз.' },
    legal: { title: 'Юридикалык маалымат', content: 'Юридикалык маалымат жана компания деталдары.' },
    terms: { title: 'Шарттар жана эрежелер', content: 'Ижара келишиминин толук шарттары.' }
  }
};

const StaticPage = ({ page }) => {
  const { lang } = useLang();

  const content = staticContent[lang][page] || { title: 'Page Not Found', content: 'Content not available.' };

  return (
    <section className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-extrabold mb-8 tracking-tight">{content.title}</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg leading-relaxed mb-8">{content.content}</p>
        <p className="text-gray-600">For more details, contact our support team.</p>
      </div>
    </section>
  );
};

export default StaticPage;


