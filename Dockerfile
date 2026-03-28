# 使用官方 nginx 镜像
FROM nginx:alpine

# 复制你的前端文件到 nginx 目录
COPY . /usr/share/nginx/html/

# 复制自定义 nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 80 端口
EXPOSE 80