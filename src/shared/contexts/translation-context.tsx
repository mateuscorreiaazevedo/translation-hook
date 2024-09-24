import {createContext, PropsWithChildren, useMemo} from "react";
import ptBR from '../translations/pt-br'
import en from '../translations/en'
import {useLocalStorage} from "../hooks/use-local-storage.ts";
import {LocaleEnum} from "../utils/enums.ts";

type TranslationContextType = {
  getValueFromPath: (path: string) => string;
  changeLocale: (locale: LocaleEnum) => void;
  locale: string;
}

export const TranslationContext = createContext({} as TranslationContextType)

const translations: Record<string, object> = {
  [LocaleEnum.PT_BR]: ptBR,
  [LocaleEnum.EN]: en,
}

export const TranslationProvider = ({children}: PropsWithChildren) => {
  const [locale, setLocale] = useLocalStorage<string>(LocaleEnum.PT_BR, 'locale')

  const currentTranslation = useMemo(() => translations[locale], [locale])

  const getValueFromPath = (path: string): string => {
    const result = path.split('.').reduce((acc, part) => acc && (acc as any)[part], currentTranslation)

    return result !== undefined && result !== null ? String(result) : ''
  }

  const changeLocale = (newLocale: LocaleEnum) => {
    setLocale(newLocale)
  }

  return (
    <TranslationContext.Provider value={{getValueFromPath, changeLocale, locale}}>
      {children}
    </TranslationContext.Provider>
  )
}

