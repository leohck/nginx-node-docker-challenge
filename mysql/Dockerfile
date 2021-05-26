FROM mysql:5.7

WORKDIR /var/lib/mysql
COPY . .

# CMD [ "--inodb-use-native-aio=0" ]
ENV MYSQL_DATABASE=nodedb
ENV MYSQL_ROOT_PASSWORD=root