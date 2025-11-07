
import React from 'react';
import { useTranslation } from 'react-i18next';

interface PricingCardProps {
  planName: string;
  price: string;
  feature: string;
  description: string;
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ planName, price, feature, description, isFeatured }) => {
  const { t } = useTranslation();
  const cardClasses = `bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col border-2 transform transition-transform hover:scale-105 ${isFeatured ? 'border-indigo-500 scale-105' : 'border-gray-700'}`;

  return (
    <div className={cardClasses}>
      <h3 className="text-2xl font-bold text-indigo-400">{planName}</h3>
      <p className="text-4xl font-extrabold my-4">{price}</p>
      <p className="text-gray-300 mb-2 font-semibold">{feature}</p>
      <p className="text-gray-400 text-sm mb-6 flex-grow">{description}</p>
      <button className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-500 transition-colors">
        {t('subscribeButton')}
      </button>
    </div>
  );
};

const PricingPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-12">{t('pricingTitle')}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <PricingCard
          planName={t('tasterPlan')}
          price={t('tasterPrice')}
          feature={t('tasterFeature')}
          description={t('tasterDescription')}
        />
        <PricingCard
          planName={t('hobbyChefPlan')}
          price={t('hobbyChefPrice')}
          feature={t('hobbyChefFeature')}
          description={t('hobbyChefDescription')}
          isFeatured
        />
        <PricingCard
          planName={t('proChefPlan')}
          price={t('proChefPrice')}
          feature={t('proChefFeature')}
          description={t('proChefDescription')}
        />
      </div>
    </div>
  );
};

export default PricingPage;
