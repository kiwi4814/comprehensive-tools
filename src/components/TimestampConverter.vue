<template>
    <div class="timestamp-converter">
      <h2>时间戳转换工具</h2>
      <input v-model="timestamp" placeholder="输入时间戳" />
      <button @click="convertTimestamp">转换</button>
      <p v-if="chineseTime">转换后的时间: {{ chineseTime }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        timestamp: '',
        chineseTime: ''
      };
    },
    methods: {
      convertTimestamp() {
        if (!this.timestamp) {
          alert('请输入时间戳');
          return;
        }
  
        const timestamp = Number(this.timestamp);
        if (isNaN(timestamp)) {
          alert('请输入有效的时间戳');
          return;
        }
  
        this.chineseTime = this.formatDate(new Date(timestamp));
      },
      formatDate(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
  
        return `${year}年${month}月${day}日 ${hour}时${minute}分${second}秒`;
      }
    }
  };
  </script>
  
  <style scoped>
  .timestamp-converter {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  p {
    margin-top: 20px;
    font-size: 16px;
    color: #333;
  }
  </style>
  