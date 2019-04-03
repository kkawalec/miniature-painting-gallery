import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFoundPage extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Grid container spacing={16} justify="center">
        <Grid item xs={12} sm={6}>
          <Card>
            <CardHeader title="Page not found"/>
            <CardContent>
              <Link to="/login">
                <Button color="primary" >
                Back to the Home page.
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
