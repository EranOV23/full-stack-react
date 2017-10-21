import React from 'react';

import Article from './Article';

const style = {
    list:{
        background: '#212121',
        fontFamily: 'sans-serif',
    }
};

const ArticlesList = (props) => {
    return (<div style={style.list}>
            {Object.values(props.articles).map((article, i) =>
                <Article
                    key = {article.id}
                    article = {article}
                    actions = {props.articleActions}
                />
            )}
        </div>
    )
};

export default ArticlesList;