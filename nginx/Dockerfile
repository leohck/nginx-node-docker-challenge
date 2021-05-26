FROM nginx:1.15.0-alpine

#  Remove default nginx config file
RUN rm /etc/nginx/conf.d/default.conf

#  Inject custom nginx config file (nginx.conf)
COPY nginx.conf /etc/nginx/conf.d