# 1. 设置环境变量

```
cp .env.example .env.local

```

编写.env.local, 写入适当的值

# 2. 初始化

安装依赖

```
yarn install
```

初始化 SDK

```ts
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
  enableTracing: false,
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  // 自定义tag
  beforeSend: (event) => {
    Object.assign(event.tags || {}, {
      transaction: "sentry-frontend",
      reacApp: "sentry-frontend-demo",
    });
    return event;
  },
  // 发布版本(与source map有关)
  release: "demo",
  // 多环境支持
  environment: process.env.REACT_APP_STAGE,
});
```

# 3. 构建和上传

```bash
# 构建
yarn build:local

# 上传
export SENTRY_AUTH_TOKEN=ccc
export SENTRY_ORG=ddd
export SENTRY_PROJECT=eee

yarn sentry-cli releases new demo
yarn sentry-cli sourcemaps upload build --release=demo
yarn sentry-cli releases finalize demo
```

# 4. 测试验证

```bash
caddy file-server --listen :3000 --root build
```

启动本地页面, 点击 button 触发错误, 在 sentry 控制台查看
