interface ITableCustomProps<T> {
  titleTable?: string;
  listData: T[];
  listTableHeader: (keyof T)[];
}

export default ITableCustomProps;
