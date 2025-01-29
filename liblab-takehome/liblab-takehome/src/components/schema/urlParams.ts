type FilterType = "=" | "<" | ">" | ">=" | "<=" | "!=";
type Order = "asc" | "desc";

export interface filterParams {
    [key: string]: string | number |
    { value: number; filter: FilterType };
}

export interface sortParams {
    field: string;
    order: Order;
}