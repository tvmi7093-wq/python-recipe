import React from 'react';
import { useTranslation } from 'react-i18next';
import { LegalPageLayout } from './LegalPages';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LegalPageLayout title={t('contactUsTitle')}>
      <p className="text-lg">{t('contactInfo')}</p>
    </LegalPageLayout>
  );
};

export default ContactPage;
