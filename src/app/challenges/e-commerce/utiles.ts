export type Order = {
    id: number;
    customer: string;
    product: string;
    amount: number;
    status: string;
    createdAt: Date;
};

export type RecordsProps = {
    orders: Order[];
}