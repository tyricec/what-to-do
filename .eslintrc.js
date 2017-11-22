module.exports = {
    'env': {
        'browser': true,
        'jest/globals': true,
    },
    'extends': [
        'react-app',
        'prettier',
    ],
    'plugins': [
        'prettier',
    ],
    'rules': {
        'prettier/prettier': 'error',
    }
};
