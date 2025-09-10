export interface IListResponse<Data> {
  data: Data[];
  total: number;
  offset?: number;
  limit?: number;
  filter?: string;
  direction?: string;
}
