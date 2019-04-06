import Cookies from 'cookies-js';
import { setLocale } from 'react-redux-i18n';
import { PageLang } from './PageLang';

const LANG_COOKIE = 'PAGE_LANG';
const DEFAULT_LANG: PageLang = PageLang.PL;

export function changeLang(lang: PageLang) {
  return (dispatch) => {
    if (lang) {
      dispatch(setLocale(lang));
      Cookies.set(LANG_COOKIE, lang);
    }
  };
}

export function setLangFromLocalStorage() {
  return (dispatch) => {
    const lang = Cookies.get(LANG_COOKIE);
    if (lang) {
      return dispatch(setLocale(lang));
    }
    return dispatch(setLocale(DEFAULT_LANG));
  };
}
