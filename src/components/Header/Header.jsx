import { useEffect, useContext } from "react";
import "./Header.css";
import { useTg } from "../../hooks/useTelegram";
import { LangContext, LangContextAction } from "../LangProvider/LangProvider";

const langs = [
  { code: "ru", name: "Ru" },
  { code: "cs", name: "Cs" },
];

export const Header = () => {
  const { user } = useTg();
  const { lang } = useContext(LangContext);
  const { toggleLang } = useContext(LangContextAction);

  useEffect(() => {}, [lang]);

  return (
    <header className={"header"}>
      <span className={"username"}>
        {user.first_name} <span className="username__aka">aka</span> {user.username}
      </span>
      <select className={"username"} value={lang} onChange={toggleLang}>
        {langs.map((lng, index) => (
          <option key={index} value={lng.code}>
            {lng.name}
          </option>
        ))}
      </select>
    </header>
  );
};
