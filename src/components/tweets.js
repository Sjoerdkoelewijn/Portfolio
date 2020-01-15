import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import LinkIcon from '../images/link-icon.svg';
import styles from "../styles/modules/tweets.module.scss";

const Tweets = () => {
    const data = useStaticQuery(graphql`
    query getTweets {
        twitterStatusesUserTimelineTweets {
            full_text
            user {
                screen_name
            }
            entities {
                hashtags {
                    text
                }
                urls {
                    expanded_url
                    display_url
                    url
                }
            }
        }
    }

    `)

    const tweet = data.twitterStatusesUserTimelineTweets
    return(
        
        <article className={styles.tweet} aria-label="Latest Tweet">
        
            <Link aria-label={tweet.user.screen_name} to={`https://twitter.com/${tweet.user.screen_name}`} className={styles.tweet__screenname}>
                @{tweet.user.screen_name}
            </Link>

            <div className={styles.tweet__text}>
                {tweet.full_text.split('#')[0]} 
                {tweet.entities.hashtags.map(({ text }) => (
                    <a className={styles.tweet__text_url} href={`https://twitter.com/hashtag/${text}`} key={text}>#{text} </a>
                ))}
            </div>

            <div className={styles.tweet__urls}>   
                {tweet.entities.urls.map(({ url }) => (
                    <a className={styles.tweet__url} href={url}>
                        <img className={styles.tweet__url_icon} src={LinkIcon} alt="Link Icon" />  
                        {url.split('//')[1]}
                    </a>
                ))}
            </div>

        </article>

    )
}


export default Tweets 