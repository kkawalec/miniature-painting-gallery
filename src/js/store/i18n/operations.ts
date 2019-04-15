import Cookies from 'cookies-js';
import { setLocale } from 'react-redux-i18n';
import { Dispatch } from 'redux';
import { PageLang } from './PageLang';

const LANG_COOKIE = 'PAGE_LANG';
const DEFAULT_LANG: PageLang = PageLang.PL;

export function changeLang(lang: PageLang) {
  return (dispatch: Dispatch) => {
    if (lang) {
      dispatch(setLocale(lang) as any);
      Cookies.set(LANG_COOKIE, lang);
    }
  };
}

export function setLangFromLocalStorage() {
  return (dispatch: Dispatch) => {
    const lang = Cookies.get(LANG_COOKIE);
    if (lang) {
      return dispatch(setLocale(lang) as any);
    }
    return dispatch(setLocale(DEFAULT_LANG) as any);
  };
}
