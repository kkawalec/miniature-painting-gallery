import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = (theme: any) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap' as any,
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 600,
    // Promote the list into his own layer on Chrome.
    // This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

export interface IGalleryTile {
  img: string;
  title: string;
  featured: boolean;
  game: string;
  paintingType: string;
}

interface IGalleryGridListProps {
  classes: {
    root: string,
    gridList: string,
    titleBar: string,
  };
  tileData: IGalleryTile[];
}

function GalleryGridList(props) {
  const { classes, tileData } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default withStyles(styles)(GalleryGridList);
