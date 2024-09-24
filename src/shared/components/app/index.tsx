import {useTranslation} from "../../hooks/use-translation.ts";
import {useLocale} from "../../hooks/use-locale.ts";
import {LocaleEnum} from "../../utils/enums.ts";

export default function App() {
  const {translate} = useTranslation()
  const {changeLocale, locale} = useLocale()

  const handleChangeLocale = () => {
    if (locale === LocaleEnum.PT_BR) {
      changeLocale(LocaleEnum.EN)
    } else {
      changeLocale(LocaleEnum.PT_BR)
    }
  }

  return (
    <div className={'h-screen flex gap-4 items-center justify-center '}>
      <h1>{translate('commons.title', { name: 'Mateus Azevedo' })}</h1>
      <button onClick={handleChangeLocale} className="text-lg text-blue-500">
        {translate('commons.buttons.changeLocale.label')}
      </button>
    </div>
  )
}
