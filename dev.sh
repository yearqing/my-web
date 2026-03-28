#!/bin/bash

echo 正在停止旧容器...
docker rm -f my-web-container

echo 正在启动热更新开发模式...
docker run -d \
  --name my-web-container \
  -p 8080:80 \
  -v /home/docker/my-web:/usr/share/nginx/html \
  --restart=always \
  nginx:alpine

echo 热更新模式启动成功！
echo 修改代码后，直接刷新浏览器即可生效 ✅