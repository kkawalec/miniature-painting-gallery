import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import React from 'react';
import { Translate } from 'react-redux-i18n';

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

export interface IFilter {
  label: string;
  isChecked: boolean;
}

interface IGalleryFilterProps {
  classes: {
    root: string,
    formControl: string,
  };
  filters: IFilter[];
  filterName: string;
  onChange: (filterName: string, filter: IFilter) => void;
}

class GalleryFilter extends React.Component<IGalleryFilterProps> {

  public handleChange = (filter: IFilter) => (event: any) => {

    this.props.onChange(this.props.filterName, {
      ...filter,
      isChecked: event.target.checked,
    });
  }

  public render() {
    const { classes, filters, filterName } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <FormLabel><Translate value={`gallery.filters.${filterName}.label`}/></FormLabel>
          <FormGroup>
            {filters.map((filter: IFilter) => (
              <FormControlLabel
                key={filter.label}
                control={
                  <Checkbox
                    checked={filter.isChecked}
                    onChange={this.handleChange(filter)}
                    value={filter.label}
                  />
                }
                label={<Translate value={`gallery.filters.${filterName}.${filter.label}`}/>}
              />))
            }

          </FormGroup>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(GalleryFilter);
