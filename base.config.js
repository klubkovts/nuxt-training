const port = 800;
const host = 'localhost';
const siteUrl = 'http://localhost:800/';
const apiUrl = 'https://api.presentation.food.true-false.ru/api/';

module.exports = {
    port: port,
    host: host,
    siteUrl: siteUrl,
    expressUrl: siteUrl + 'api/',
    cssUrl: '/style/dist/presentation/css/app.css',
    apiUrl: apiUrl,
    isCacheActive: false,
    defaultLimit: 24,
    locale: 'ru',
    enableGtmScript: false,
};
