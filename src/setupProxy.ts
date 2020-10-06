import { createProxyMiddleware } from 'http-proxy-middleware';
import { API } from './config/Api';
import { API_DOMAIN } from './config/Env';

const HOST = (path: string) => {
  return `${API_DOMAIN}${path}`
}

module.exports = function(app: any) {
  app.use(
    API.GET_MOVIES,
    createProxyMiddleware({
      target: HOST(API.GET_MOVIES),
      changeOrigin: true,
    })
  );
  app.use(
    API.GET_TEACHING_VIDEO,
    createProxyMiddleware({
      target: HOST(API.GET_TEACHING_VIDEO),
      changeOrigin: true,
    })
  );
};