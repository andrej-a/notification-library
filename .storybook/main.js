const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-actions',
        '@storybook/addon-interactions',
        'storybook-preset-inline-svg',
    ],
    webpackFinal: config => {
        const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
        fileLoaderRule.exclude = /\.svg$/;

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader'],
        });

        config.resolve.alias = {
            '@': path.resolve(__dirname, '..', 'src'),
        };
        return config;
    },
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
};
