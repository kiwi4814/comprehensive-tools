// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import TimestampConverter from '../components/TimestampConverter.vue';
// 引入其他功能组件

const routes = [
  { path: '/', component: Dashboard, name: 'dashboard' },
  { path: '/timestamp-converter', component: TimestampConverter, name: 'timestamp-converter' },
  // 添加其他功能的路由
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
