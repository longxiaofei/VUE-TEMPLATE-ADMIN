export declare interface Query {
  address: string
  name: string
  pageIndex: number
  pageSize: number
}

export declare interface Item {
  id: number
  name: string
  money: number
  address: string
  state: string
  date: string
  thumb: string
}

export declare interface ItemResult {
  list: Item[]
  pageTotal: number
}
