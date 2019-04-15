import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import React from 'react';
import { Translate } from 'react-redux-i18n';
import ScrollableAnchor from 'react-scrollable-anchor';

import GalleryFilter, { IFilter } from 'views/components/GalleryFilter';
import GalleryGridList, { IGalleryTile } from 'views/components/GalleryGridList';

const img1 = require('../../images/header-image.jpg');
const img2 = require('../../images/en.png');
const img3 = require('../../images/pl.png');

const tileData: IGalleryTile[] = [
  {
    img: img1,
    title: 'Img1',
    featured: true,
    game: 'AOS',
    paintingType: 'basic',
  },
  {
    img: img2,
    title: 'Img2',
    featured: false,
    game: 'AOS',
    paintingType: 'standard',
  },
  {
    img: img3,
    title: 'Image3',
    featured: false,
    game: 'Malifaux',
    paintingType: 'pro',
  },
];

const games = ['AOS', '40K', 'Necromunda', 'Malifaux'];
const paintingTypes = ['basic', 'standard', 'pro'];

const styles = {
  filters: {
    display: 'flex',
    justifyContent: 'center',
  },
};

interface IGalleryProps {
  classes: {
    filters: string,
  };
}

interface IGalleryState {
  filters: {
    games: IFilter[],
    paintingTypes: IFilter[],
  };
}

class Gallery extends React.Component<IGalleryProps, IGalleryState> {

  public state = {
    filters: {
      games: games.map((game: string) => ({ label: game, isChecked: true })),
      paintingTypes: paintingTypes.map((game: string) => ({ label: game, isChecked: true })),
    },
  };

  public onFilterChange = (filterName: string, filter: IFilter) => {
    this.setState({
      filters:
      {
        ...this.state.filters,
        [filterName]: this.state.filters[filterName].map((f: IFilter) => {
          if (filter.label === f.label) {
            return filter;
          }
          return f;
        }),
      },
    });
  }

  public render(): JSX.Element {
    const { filters } = this.state;
    const { classes } = this.props;

    const tiles = tileData.filter((tile: IGalleryTile) => {
      const gameFilter = _.find(filters.games, ['label', tile.game]);
      const typeFilter = _.find(filters.paintingTypes, ['label', tile.paintingType]);
      return gameFilter.isChecked && typeFilter.isChecked;
    });

    return (
      <ScrollableAnchor id="gallery">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              <Translate value="gallery.label" />
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.filters}>
            <GalleryFilter
              filters={filters.games}
              onChange={this.onFilterChange}
              filterName="games"
              key="games"
            />

            <GalleryFilter
              filters={filters.paintingTypes}
              onChange={this.onFilterChange}
              filterName="paintingTypes"
              key="paintingTypes"
            />
          </Grid>
          <Grid item xs={12}>
            <GalleryGridList tileData={tiles} filters={filters}/>
          </Grid>
        </Grid>
      </ScrollableAnchor>
    );
  }
}

export default withStyles(styles)(Gallery);
