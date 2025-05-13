import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        flag: "https://s3-alpha-sig.figma.com/img/7260/fbd7/cccd7993400c3b1165f33370bf034acd?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gLUrN30-1nKnQBnozv3ORmyjJPrNRMAiWk3msAbih6lnqaOXCA8dz2JKOvrr6UafbZzv8roMNFmsp~jtt56BybRlPUpSFr0PcR4bGmz54u6tbvoMMhkgB1OQ31lhG0xsxp~dAP0UzLVRV6S9iaPH3CMhYaIRcpTIkvdoEdkd1s0mtiYCXPxR4S8tzjrODOmRSKL-9KMCDuRqku8MgfOLV9Rg9sZUm82SCCkdrFTQ90iXOyo9xbuxd2shAXHspvN1wLSU4Ukdczv6xWDEXjIHUcqGTqSwXJRwIJYEkg0~w9onRj7Zj-sXpfcaAA1-LR2hoWWvD8YnprSfPO492yapWQ__",
        translation: {
         
        },
      },
      vi: {
        translation: {
          
        },
      },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
