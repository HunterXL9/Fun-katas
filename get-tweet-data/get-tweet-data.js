// Please do not change the name of this function
function getTweetData (tweet) {
   
    const words = tweet.split(' ');

    const tags = [];
    const mentions = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.startsWith('#') && !tags.includes(word)) {
            tags.push(word);
        } else if (word.startsWith('@') && !mentions.includes(word)) {
            mentions.push(word);
        }
    }

    return {
        tags: tags,
        mentions: mentions,
        tagCount: tags.length,
        mentionCount: mentions.length,
        length: tweet.length
    };
}


module.exports = getTweetData;
