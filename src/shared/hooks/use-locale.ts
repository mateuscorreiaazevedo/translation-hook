import {useContext} from "react";
import {TranslationContext} from "../contexts/translation-context.tsx";

export function useLocale() {
  const {changeLocale, locale} = useContext(TranslationContext)

  return {
    changeLocale,
    locale
  }
}
