const NewsAPI = require('newsapi');

const hitApi = () => new Promise((resolve, reject) => {
    const newsapi = new NewsAPI('e6f69ea161854b3ab0e59868c794e9dc');
    // To query /v2/top-headlines
    // All options passed to topHeadlines are optional, but you need to include at least one of them
    newsapi.v2.everything({
        q: 'disability '
    }).then(response => {
        console.log("response", response);
        if (response.status === "ok") {
            resolve(response.articles);
        } 
        else {
            reject(JSON.stringify({
                errorCode: 400,
                errorMessage: "Error"
            }));
        }
    // console.log(response);
    /*
        {
        status: "ok",
        articles: [...]
        }
    */
    });
});


module.exports = {
    hitApi
};

