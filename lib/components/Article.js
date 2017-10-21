import React from 'react';

const styles = {
    article:{
        color: '#b7b7b7',
        padding: 10,
        borderBottomStyle: 'solid',
        borderColor: '#b2b2b2',
        borderWidth: 1,
        margin: 10,
        fontSize: 18,
        lineHeight: 1.5,
    },

    title: {
      fontSize: 24,
      textAlign: 'center',
    },

};

const dateDisplay = (dateString) => {
    return new Date(dateString).toDateString();
};

const Article = (props) => {

    const {article, actions} = props;
    const author = actions.lookupAuthor(article.authorId);
    return (<div style={styles.article}>
                <div style={styles.title}>{article.title}</div>
                <div style={styles.date}>
                    {dateDisplay(article.date)}
                    </div>
            <div>
                <a href={author.website}>
                    {author.firstName} {author.lastName}
                </a>
            </div>
            <div>
                {article.body}
            </div>
        </div>
    )
};

export default Article;