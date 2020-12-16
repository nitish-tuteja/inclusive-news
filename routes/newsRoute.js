const express = require('express');
const newsRouter = express.Router()
const {hitApi} = require("../utility/common");
const axios = require('axios');

//News route
newsRouter.get('/getNews', async(req, res) => {
    
    // try{
    //     const newsData = await axios.get('https://newsapi.org/v2/everything?q=disability job visually &apiKey=e6f69ea161854b3ab0e59868c794e9dc');
    //     console.log(newsData);
    //     res.render('getNews', {articles : newsData.data});
    // } catch(err){
    //     console.log(err);
    //     if(err.response){
    //         console.log(err.response.data);
    //         console.log(err.response.status);
    //         console.log(err.response.headers);

    //     }else{
    //         console.error('Error', err.massage);
    //     }
    // }
    try {
        const data = await hitApi();
        // console.log("data>>>>>>>>>>", data);
        res.render('getNews', {articles : data});
        // res.status(200).json({ data: data });
      } catch (error) {
        console.log("error", error);
        
      }
});

module.exports = newsRouter;