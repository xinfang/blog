
Header(CSRF) Level
res.header('X-Frame-Options', 'SAMEORIGIN');
res.header('Content-Security-Policy', "frame-ancestors 'self'");


Cookie(CSRF, XSS) Level
Set/Get=== Http response(Node.js), http request(Express),  Client JS code(cookie until)
Set-Cookie.httOnly---> access cookie only in HTTP(no Client code can access)
SameSite-cookies 是 Google 开发的用于防御 CSRF 和 XSSI（Cross Site Script Inclusion，跨域脚本包含）的新安全机制，只需在 Set-Cookie 中加入一个新的字段属性，浏览器会根据设置的安全级别进行对应的安全 cookie 发送拦截，而目前在 Chrome-dev（51.0.2704.4）中可用

Node.js Support HTTP2 / SPDY
Node > V6