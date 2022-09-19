import { Link } from 'react-router-dom';
import {useState} from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
    const[gamesClicked, setGamesClicked] = useState(false);
    const[psychClicked, setPsychClicked] = useState(false);
    const[philClicked, setPhilClicked] = useState(false);
    const[commClicked, setCommClicked] = useState(false);
    return (
        <motion.div className="aboutMe"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.2, duration: 0.4}}>
            <p className="aboutMeTitle">Interesting information about a<strike>n interesting</strike> person</p>
            <p className="aboutMeBody">
                Who doesn't love a tier list? If you're curious (rarely a "bad" reason for that),
                here are my opinions and overall ratings on a few of my interests.
                <br/><br/>
                <button onClick={() => setGamesClicked(!gamesClicked)} className="subjectTitle">
                    Games
                </button>
                <br/>
                { gamesClicked && (
                    <p className="subjectBody">
                    &emsp;&emsp;Personally, one of the most exciting parts of playing games is adopting
                    and gradually adapting a strategy in order to out-maneuver my opponents in reaching
                    a particular goal. Take for example, one of my favourite games: basketball (remember,
                    games aren't limited to a digital screen). In basketball, although the ultimate
                    objective of placing a ball within a net is simple enough, there are a myriad of
                    strategies one may employ to achieve it. The continual process of analyzing an
                    opponent's playstyle and adjusting mine accordingly provides such a thrill.
                    However, single-player games also have their charms. The sense of accomplishment
                    after topping a personal record or solving a particularly difficult puzzle
                    without looking up a walkthrough is quite a unique feeling. Though I don't think
                    I could live without them, I'd give games an 8.5/10, deducting points mainly because
                    they can sometimes be dangerous time sinks. <br/>(I also make my own games using Unity,
                    check them out <Link to="/Projects">here!</Link>)
                    <br/><br/>
                    </p>
                )}
                <button onClick={() => setPhilClicked(!philClicked)} className="subjectTitle">
                    Philosophy
                </button>
                <br/>
                {philClicked && (
                    <p className="subjectBody">
                    &emsp;&emsp;Probably the most non-STEM-related topic that I've studied and
                    thought about the most, philosophy has no shortage of timeless topics of
                    discussion. Do humans have free will? Or is everything pre-determined? Is there
                    morality in vice? By the same token, is there immorality in virtue? And of course,
                    is there a meaning to life? If so, what is it? Addressing these questions would
                    require too many pages, so instead, I'll speak to the benefits of philosophy, at least
                    from my experiences with the subject. By their nature, questions asked in the realm of
                    philosophy do not have universally-accepted answers, since if they did, those questions
                    would no longer exist within philosophy's domain. Though this may be unsatisfying
                    to many, it is precisely because these questions have multiple acceptable responses
                    that when formulating your own answers, you must meticulously lay out the foundations
                    of your arguments. From explicitly stating definitions to removing logical fallacies
                    from your reasoning, a lot of careful groundwork must be planned out. Thus,
                    although I have my own opinions on the questions I listed above, philosophy
                    has mainly assisted me in shaping the way in which I think rather than what I think.
                    For its ability to evoke critical thinking and introspection but its lack of concrete
                    answers, philosophy gets a solid 7.5/10.
                <br/><br/>
                    </p>
                )}
                <button onClick={() => setPsychClicked(!psychClicked)} className="subjectTitle">
                    Psychology
                </button>
                <br/>
                { psychClicked && (
                    <p className="subjectBody">
                    &emsp;&emsp;If I didn't major in engineering or computer science, I believe that it
                    would have been interesting to spend a lot more time studying psychology at an 
                    undergraduate/graduate level. Specifically, I'm particularly invested in
                    aspects of psychology that pertain to human behaviour. From a young age, I've always
                    wondered what was going on in someone else's brain. Even now, I often ponder in what way
                    thought processes differ between individuals. Although with current technology it isn't
                    the easiest process to borrow someone's brain for a bit, behavioural psychology can 
                    assist one in trying to predict how people will generally react to certain stimuli. 
                    The fascinating part of this aspect of psychology is that no two people think in the
                    exact same way; even if you feel like you have enough information to understand how
                    others feel or think, your hypotheses are always subject to less than certain
                    probabilities. However, after interacting with a vast, diverse cast of people,
                    you start to understand more and more about human behaviour, heightening your 
                    ability to more accurately, and more consistently, read others — a skill
                    that has great value in, among other things, playing games. Overall, I'd give
                    psychology an 8/10 for its applicability and intrigue, dropping some points due to my
                    relative lack of formal education on the topic.
                <br/><br/>
                    </p>
                )}
                <button onClick={() => setCommClicked(!commClicked)} className="subjectTitle">
                    Language/Communication
                </button>
                <br/>
                {commClicked && (
                    <p className="subjectBody">
                    &emsp;&emsp;If you think about it, there are quite a few filters in everyday
                    communication. Before we say something, we first form an intention that we wish
                    to express. Then, we pick out appropriate words from our language's vocabulary in
                    order to convey our intentions. Further, we may choose to alter the tone of our voice
                    in the hopes of emphasizing/clarifiying what we mean/want. When we vocalize our
                    sentence(s), another person hears our words and tone and must then interpret our
                    original intentions. For most daily conversations, this stream of communication is
                    extremely fast and flows fairly smoothly; in the majority of cases, as long as both
                    parties understand the others' intentions, there is minimal need to achieve a 100%
                    mutual understanding. However, there are times when dissecting what others say
                    and interpreting what they actually mean is a useful skill to possess. In cases where
                    another's intentions are misaligned with their words, you are probably being lied
                    to. If you are being lied to maliciously, being able to discern another's
                    inner thoughts can help you dodge swindlers. If you are being lied to but there is no
                    ill will (e.g. your friend tells you that they're "ok" so as not to trouble you
                    with their issues), such a skill can aid you in helping those you care about. For
                    its nuance and the psychological cue-reading that arises from it,
                    language/communcation gets a 9/10.
                    </p>
                )}
            </p>
        </motion.div>
    );
}
 
export default AboutMe;