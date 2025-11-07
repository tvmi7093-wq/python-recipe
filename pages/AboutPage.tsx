import React from 'react';
import { useTranslation } from 'react-i18next';
import { LegalPageLayout, LoremIpsum } from './LegalPages';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LegalPageLayout title={t('aboutUsTitle')}>
      <LoremIpsum />
      <LoremIpsum />
    </LegalPageLayout>
  );
};

export default AboutPage;
