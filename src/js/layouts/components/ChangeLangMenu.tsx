import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import DropdownMenu from 'components/DropdownMenu';
import SelectableMenuItem from 'components/SelectableMenuItem';
import { changeLang } from 'store/i18n/operations';
import { PageLang } from 'store/i18n/PageLang';
import * as selectors from 'store/i18n/selectors';
import IState from 'store/interfaces/IState';

const en = require('../../../images/en.png');
const pl = require('../../../images/pl.png');

interface IChangeLangMenuProps {
  selectedLang: PageLang;
  changeLang: (value: PageLang) => void;
}

class ChangeLangMenu extends PureComponent<IChangeLangMenuProps, {}> {
  public handleChange = (value: PageLang): void => {
    return this.props.changeLang(value);
  }

  public render(): JSX.Element {
    const { selectedLang } = this.props;
    const selectedLangImgSrc = selectedLang === PageLang.PL ? pl : en;
    const labelImg =  <img src={selectedLangImgSrc} style={{ width: 30, height:'auto' }} alt={selectedLang}/>;

    return (
      <DropdownMenu label={labelImg} id="lang-menu">
        <SelectableMenuItem onChange={this.handleChange} img={pl} value={PageLang.PL} selectedValue={selectedLang} />
        <SelectableMenuItem onChange={this.handleChange} img={en} value={PageLang.EN} selectedValue={selectedLang} />
      </DropdownMenu>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  selectedLang: selectors.locale(state),
});

export default connect(mapStateToProps, { changeLang })(ChangeLangMenu);
