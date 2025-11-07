import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { generateRecipeFromImage } from '../services/geminiService';
import GeneratingIndicator from '../components/GeneratingIndicator';

const FREE_GENERATION_LIMIT = 3;

interface HomePageProps {
  isLoggedIn: boolean;
  recipeCount: number;
  onRecipeGenerated: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ isLoggedIn, recipeCount, onRecipeGenerated }) => {
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [generatedRecipe, setGeneratedRecipe] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(file);
      setImagePreviewUrl(URL.createObjectURL(file));
      setGeneratedRecipe(null);
      setError(null);
    }
  };

  const canGenerate = isLoggedIn || recipeCount < FREE_GENERATION_LIMIT;

  const handleGenerateClick = useCallback(async () => {
    if (!selectedImage) {
      setError(t('uploadPrompt'));
      return;
    }
    if (!canGenerate) {
      setError(t('limitReached'));
      return;
    }

    setIsGenerating(true);
    setError(null);
    setGeneratedRecipe(null);

    try {
      const recipe = await generateRecipeFromImage(selectedImage, i18n.language);
      setGeneratedRecipe(recipe);
      onRecipeGenerated();
    } catch (err) {
      setError(t('errorGenerating'));
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  }, [selectedImage, canGenerate, onRecipeGenerated, t, i18n.language]);

  const languageButtons = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
  ];

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-4xl font-extrabold text-white sm:text-5xl">{t('homeTitle')}</h1>
      <p className="mt-4 max-w-2xl text-xl text-gray-400">{t('homeSubtitle')}</p>

      <div className="mt-12 w-full max-w-2xl">
        <div className="bg-gray-800/50 p-8 rounded-2xl shadow-lg border-2 border-dashed border-gray-600 hover:border-indigo-500 transition-colors">
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <label htmlFor="imageUpload" className="cursor-pointer flex flex-col items-center">
            {imagePreviewUrl ? (
              <img src={imagePreviewUrl} alt="Preview" className="max-h-64 rounded-lg mb-4" />
            ) : (
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            <span className="mt-2 block text-sm font-semibold text-indigo-400">
              {selectedImage ? selectedImage.name : t('uploadButton')}
            </span>
          </label>
        </div>

        {!isLoggedIn && (
          <p className="mt-4 text-sm text-gray-400">
            {t('loginPrompt')} ({FREE_GENERATION_LIMIT - recipeCount} free generations remaining)
          </p>
        )}

        <div className="my-6 flex justify-center space-x-4" aria-label="Language selection">
          {languageButtons.map(({ code, name }) => (
            <button
              key={code}
              onClick={() => i18n.changeLanguage(code)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${i18n.language.startsWith(code) ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              aria-pressed={i18n.language.startsWith(code)}
            >
              {name}
            </button>
          ))}
        </div>

        <button
          onClick={handleGenerateClick}
          disabled={!selectedImage || isGenerating || !canGenerate}
          className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-500 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {isGenerating ? t('generatingRecipe') : t('generateButton')}
        </button>

        {error && <p className="mt-4 text-red-400">{error}</p>}
      </div>
      
      <div className="mt-12 w-full">
        {isGenerating && <GeneratingIndicator />}
        {generatedRecipe && (
          <div className="bg-gray-800/50 p-8 rounded-2xl shadow-lg text-left">
            <h2 className="text-3xl font-bold text-white mb-6">{t('yourRecipe')}</h2>
            <pre className="text-gray-300 whitespace-pre-wrap font-sans">{generatedRecipe}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;