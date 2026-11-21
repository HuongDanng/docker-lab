const http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>Xin chào từ Docker trên AWS!</h1><p>Phiên bản Huong Xinh Gai</p>');
}).listen(PORT, () => console.log(`Server chạy ở cổng ${PORT}`));
