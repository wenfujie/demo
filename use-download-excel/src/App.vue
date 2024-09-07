<script setup>
import { ExcelExport } from './utils';

const data = [
  {id: 1, name: '张三'},
  {id: 2, name: '李四'},
  {id: 3, name: '王五'}
]
const header = [
  { header: 'Id', key: 'id', width: 10 },
  { header: '名称', key: 'name', width: 32 }
]
const excel = new ExcelExport(data, header)

const onExport = () => {
  excel.download('excel下载demo')
}
</script>

<template>
  <div>
    <strong>数据源</strong>

    <p>{{JSON.stringify(data)}}</p>

    <button @click="onExport">导出</button>
  </div>
</template>
