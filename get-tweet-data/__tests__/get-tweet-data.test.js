const getTweetData = require('../get-tweet-data.js');

describe('Tests for getTweetData', () => {

    test('handles a tweet with no mentions or hashtags', () => {
        expect(getTweetData("My awesome tweet")).toEqual({
            tags: [],
            mentions: [],
            tagCount: 0,
            mentionCount: 0,
            length: 16
        });
    });

    test('handles a tweet with only a mention', () => {
        expect(getTweetData("My awesome tweet to @northcoders")).toEqual({
            tags: [],
            mentions: ['@northcoders'],
            tagCount: 0,
            mentionCount: 1,
            length: 32
        });
    });

    test('handles a tweet with only a hashtag', () => {
        expect(getTweetData("My awesome tweet about #coding")).toEqual({
            tags: ['#coding'],
            mentions: [],
            tagCount: 1,
            mentionCount: 0,
            length: 30
        });
    });

    test('handles a tweet with both a mention and a hashtag', () => {
        expect(getTweetData("My awesome tweet about #coding to @northcoders")).toEqual({
            tags: ['#coding'],
            mentions: ['@northcoders'],
            tagCount: 1,
            mentionCount: 1,
            length: 46
        });
    });

});

