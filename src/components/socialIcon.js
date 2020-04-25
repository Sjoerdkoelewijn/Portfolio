import React from 'react';
import TwitterIcon from "../components/icons/twitterIcon";
import LinkedinIcon from "../components/icons/linkedinIcon";
import CodepenIcon from "../components/icons/codepenIcon";
import GithubIcon from "../components/icons/githubIcon";


function SocialIcon ({ socialPlatform }) {

    if (socialPlatform === 'twitter') return (
        <TwitterIcon />        
    ) 

    if (socialPlatform === 'linkedin') return (
        <LinkedinIcon />        
    ) 

    if (socialPlatform === 'codepen') return (
        <CodepenIcon />        
    ) 

    if (socialPlatform === 'github') return (
        <GithubIcon />        
    ) 
           
    return ``

}

export default SocialIcon;