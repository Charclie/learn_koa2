module.exports = {
  apps: [
    {
      name: 'hello_koa',
      script: './bin/www',
      cwd: './',
      env: { NODE_ENV: 'development' },
      args: [],
      watch: true,
      ignore_watch: ['./node_modules', './doc', './test', './logs'],
      instances: 4, // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max
      error_file: './logs/pm2-err.log',
      out_file: './logs/pm2-out.log',
      exec_interpreter: 'babel-node',
      merge_logs: true, // 设置追加日志而不是新建日志'
      max_memory_restart: '300M', // 服务占用的内存超过300M，会自动进行重启
    },
  ],
};

// 配置项

// name  应用进程名称；

// script  启动脚本路径；

// cwd  应用启动的路径，关于script与cwd的区别举例说明：在/home/polo/目录下运行/data/release/node/
// index.js，此处script为/data/release/node/index.js，cwd为/home/polo/；

// args  传递给脚本的参数；

// interpreter  指定的脚本解释器；

// interpreter_args  传递给解释器的参数；

// instances  应用启动实例个数，仅在cluster模式有效，默认为fork；

// exec_mode  应用启动模式，支持fork和cluster模式；

// watch  监听重启，启用情况下，文件夹或子文件夹下变化应用自动重启；

// ignore_watch  忽略监听的文件夹，支持正则表达式；

// max_memory_restart  最大内存限制数，超出自动重启；

// env  环境变量，object类型，如{"NODE_ENV":"production", "ID": "42"}；

// log_date_format  指定日志日期格式，如YYYY-MM-DD HH:mm:ss；

// error_file  记录标准错误流，$HOME/.pm2/logs/XXXerr.log)，代码错误可在此文件查找；

// out_file  记录标准输出流，$HOME/.pm2/logs/XXXout.log)，如应用打印大量的标准输出，会导致pm2日志过大；

// min_uptime  应用运行少于时间被认为是异常启动；

// max_restarts  最大异常重启次数，即小于min_uptime运行时间重启次数；

// autorestart  默认为true, 发生异常的情况下自动重启；

// cron_restart  crontab时间格式重启应用，目前只支持cluster模式；

// force  默认false，如果true，可以重复启动一个脚本。pm2不建议这么做；

// restart_delay  异常重启情况下，延时重启时间；
