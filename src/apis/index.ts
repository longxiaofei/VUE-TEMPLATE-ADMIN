import service from "../utils/request"
import type { Query, ItemResult } from "../models/BaseTable"

export const fetchData = (query: Query) => {
  return service.request<never, ItemResult>({
    url: "./table.json",
    method: "get",
    params: query,
  })
}
