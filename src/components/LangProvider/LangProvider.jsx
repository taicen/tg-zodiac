import React, { useCallback, useMemo, useState } from "react";
import { useTg } from "../../hooks/useTelegram";

export const LangContext = React.createContext({
  lang: "ru",
});

export const LangContextAction = React.createContext({
  toggleLang: () => {},
});

export const LangProvider = ({ children }) => {
  const { lang } = useTg();

  const storedLang = localStorage.getItem("lang");
  const currentLang = storedLang ? storedLang : lang;

  const [language, setLanguage] = useState(currentLang);

  const toggleLang = useCallback((e) => {
    const newLang = e.target.value;
    localStorage.setItem("lang", newLang);
    setLanguage(() => newLang);
  }, []);

  const value = useMemo(() => ({ lang: language }), [language]);
  const actions = useMemo(() => ({ toggleLang }), [toggleLang]);

  return (
    <LangContext.Provider value={value}>
      <LangContextAction.Provider value={actions}>{children}</LangContextAction.Provider>
    </LangContext.Provider>
  );
};
