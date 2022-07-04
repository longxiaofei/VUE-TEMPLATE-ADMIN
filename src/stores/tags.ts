import { defineStore } from "pinia"

export declare interface TagItem {
  name: string | any
  title: string | any
  path: string
}

export const useTagsStore = defineStore("tags", {
  state: () => {
    return {
      list: [] as TagItem[],
    }
  },
  getters: {
    show: (state) => {
      return state.list.length > 0
    },
    nameList: (state): string[] => {
      return state.list.map((item) => item.name)
    },
  },
  actions: {
    delTagsItem(index: number) {
      this.list.splice(index, 1)
    },
    setTagsItem(data: TagItem) {
      this.list.push(data)
    },
    clearTags() {
      this.list = []
    },
    closeTagsOther(data: TagItem[]) {
      this.list = data
    },
  },
})
