import * as articles from "./index";
import axios from "axios";

// axios.defaults.headers.post["Content-Type"]="application/json"
// const URL="http://localhost:3002"
export const getArticles=(sort)=>{
    return async (dispatch,getState)=>{
        try {
            const data = JSON.stringify({
              sortBy: sort.sortBy,
              order: sort.order,
              limit: sort.limit,
              skip: sort.skip,
            });
            const config = {
              method: "post",
              url: "http://localhost:3002/api/articles/loadmore",
              headers: {
                "Content-Type": "application/json",
              },
              data: data,
            };
            const arts = await axios(config);
            console.log(arts.data)
        } catch (error) {
            throw(error)
        }
    }
}
