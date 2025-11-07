import React from 'react';
import { useTranslation } from 'react-i18next';

export const LegalPageLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <div className="bg-gray-800/50 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">{title}</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
        {children}
      </div>
    </div>
  );
};

export const LoremIpsum: React.FC = () => (
  <>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam erat volutpat. Curabitur pharetra.</p>
  </>
);

export const PrivacyPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LegalPageLayout title={t('privacyPolicyTitle')}>
      <LoremIpsum />
    </LegalPageLayout>
  );
};

export const TermsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LegalPageLayout title={t('termsOfServiceTitle')}>
      <LoremIpsum />
      <LoremIpsum />
    </LegalPageLayout>
  );
};