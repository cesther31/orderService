export interface Order {
    id: number,
    buyer: string,
    product: string,
    cnt: number,
    totalPrice: number,
  }

  export interface OrderType {
    key: number,
    value: string
  }