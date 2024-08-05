<template>
    <div class="dashboard">
      <h1>功能聚合页面</h1>
      <div class="grid-container">
        <el-button type="primary" @click="navigateTo('timestamp-converter')">时间戳转换</el-button>
        <el-button type="success" @click="navigateTo('other-feature')">其他功能 1</el-button>
        <el-button type="warning" @click="navigateTo('another-feature')">其他功能 2</el-button>
        <el-button type="danger" @click="navigateTo('yet-another-feature')">其他功能 3</el-button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      navigateTo(feature) {
        this.$router.push({ name: feature });
      }
    }
  };
  </script>
  
  <style scoped>
  .dashboard {
    text-align: center;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    margin: 20px;
  }
  </style>
  