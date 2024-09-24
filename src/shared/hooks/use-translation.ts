import {useContext} from "react";
import {TranslationContext} from "../contexts/translation-context.tsx";

export const useTranslation = (prefix?: string) => {
  const {getValueFromPath} = useContext(TranslationContext)

  function translate(path: string, values?: Record<string, any>): string {
    const fullPath = prefix? `${prefix}.${path}` : path

    if (values) {
      const translatedString = getValueFromPath(fullPath)
      return translatedString.replace(/\{(\w+)\}/g, (_, key) => {
        return values[key] || `{${key}}`
      })
    } else {
      return getValueFromPath(fullPath) || path
    }
  }

  return {
    translate
  }
}
