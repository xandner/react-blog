import React, { useEffect, useReducer } from "react";
import { Grid } from "@material-ui/core";
import ArticleCard from "../../utils/articleCard";
import { useDispatch, useSelector } from "react-redux";
import {getArticles} from "../../store/actions/article_actions"

const initialSort = { sortBy: "_id", order: "desc", limit: 8, skip: 0 };
const Home = () => {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  const [sort, setSort] = useReducer(
    (state, newState) => ({
      ...state,
      newState,
    }),
    initialSort
  );
  useEffect(()=>{
    if(articles && !articles.articles){
        dispatch(getArticles(initialSort))
    }
  },[dispatch,articles])

  return (
    <>
      <div>
        <div>CARROUSEL</div>
        <Grid container spacing={2} className="article_card">
          <Grid item xs={12} sm={6} lg={3}>
            <ArticleCard />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ArticleCard />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <ArticleCard />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
