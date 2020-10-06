import { createProxyMiddleware } from 'http-proxy-middleware';
import { API } from './config/Api';

const HOST = (path: string) => {
    return `https://api.customer.jp${path}`
}

console.log(HOST(API.GET_TOKEN))

module.exports = function(app: any) {
  app.use(
    API.GET_TOKEN,
    createProxyMiddleware({
      target: HOST(API.GET_TOKEN),
    //   target: HOST+API.GET_TOKEN,
      changeOrigin: true,
    })
  );
};