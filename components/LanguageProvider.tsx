"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "fr";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("bigmo-language");

    if (storedLanguage === "en" || storedLanguage === "fr") {
      setLanguage(storedLanguage);
      document.documentElement.lang = storedLanguage;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("bigmo-language", language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage: () =>
          setLanguage((current) => (current === "en" ? "fr" : "en")),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
