<template>
  <div class="crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(path, index) in pathList" :key="index">
        {{ path }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import { menuPathMap } from "../constants/menu"

const route = useRoute()

const pathList = computed(() => {
  return menuPathMap.get(route.path)
})
</script>

<style></style>
