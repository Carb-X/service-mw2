import { EggRedisOptions } from 'egg-redis';
import { ConnectionOptions } from 'typeorm';

// 数据库配置
export const orm: ConnectionOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'homestead',
  password: 'secret',
  database: 'shop_development',
  synchronize: false,
  logging: true,
};

// redis配置
export const redis: EggRedisOptions = {
  client: {
    port: 6379, // Redis port
    host: '127.0.0.1', // Redis host
    password: '',
    db: 0,
  },
};
