import { useTranslation } from 'react-i18next'

export default () => {
    const { t, i18n } = useTranslation('mainpage')

    return (
        <div>
            <h1>{t('main_p_header')}</h1>
        </div>
    )
}
