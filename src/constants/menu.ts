declare interface MenuItem {
  index: string
  title: string
  icon?: string
  subs?: MenuItem[]
}

const getMenuPathMap = (menuItems: MenuItem[]) => {
  const result = new Map<string, string[]>()
  const prePath: string[] = []
  const findPath = (curItem: MenuItem) => {
    prePath.push(curItem.title)
    result.set(curItem.index, prePath.slice(0))
    if (curItem.subs) {
      curItem.subs.forEach((item) => findPath(item))
    }
    prePath.pop()
  }
  menuItems.forEach((item) => findPath(item))
  return result
}

export const menuItems = [
  {
    icon: "Monitor",
    index: "/table",
    title: "基础表格",
  },
  {
    icon: "SetUp",
    index: "/tabs",
    title: "tab选项卡",
  },
  {
    icon: "Message",
    index: "3",
    title: "表单相关",
    subs: [
      {
        index: "/form",
        title: "基本表单",
      },
      {
        index: "4",
        title: "三级菜单",
        subs: [
          {
            index: "/markdown",
            title: "markdown编辑器",
          },
        ],
      },
    ],
  },
]

export const menuPathMap = getMenuPathMap(menuItems)

console.log(menuPathMap)
