<template>
  <div class="about">
    <v-header />
    <v-sidebar />
    <div class="content-box" :class="{ 'content-collapse': sidebar.collapse }">
      <v-tags></v-tags>
      <div class="content">
        <v-breadcrumb />
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <keep-alive :include="tags.nameList">
              <div :key="key">
                <component :is="Component" />
              </div>
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import { useSidebarStore } from "@/stores/sidebar"
import { useTagsStore } from "@/stores/tags"
import vBreadcrumb from "@/components/Breadcrumb.vue"
import vHeader from "@/components/Header.vue"
import vSidebar from "@/components/Sidebar.vue"
import vTags from "@/components/Tags.vue"

const sidebar = useSidebarStore()
const tags = useTagsStore()
const route = useRoute()
const key = computed(() => {
  return route.path
})
</script>
