<template>
  <div></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { ElMessage } from 'element-plus'

onMounted(() => {
  ElMessage.success('succss')
})
</script>

<style lang="scss" scoped></style>
