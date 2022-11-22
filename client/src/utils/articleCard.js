import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Favorite as FavoriteIcon } from "@material-ui/icons";

const ArticleCard = ({ article }) => {
  return (
    <Card>
      <CardMedia
        style={{ height: 0, paddingTop: "56.25%" }}
        image="https://picsum.photos/200"
        title="some title"
      />
      <CardContent>
        <Typography variant="h5">What is Lorem Ipsum?</Typography>
        <Typography variant="body1" component="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <Button
          size="small"
          color="primary"
          component={RouterLink}
          to="/article/id"
        >
          View Article
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
