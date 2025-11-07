
import React from 'react';
import { useTranslation } from 'react-i18next';

const GeneratingIndicator: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-800/50 rounded-2xl shadow-lg">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500 mb-4"></div>
      <p className="text-xl font-semibold text-white">{t('generatingRecipe')}</p>
    </div>
  );
};

export default GeneratingIndicator;
