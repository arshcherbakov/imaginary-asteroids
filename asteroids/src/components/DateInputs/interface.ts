import { IDateSearch } from '../../interfaces';
import { Dayjs } from 'dayjs';

interface IDateInputs {
  handleSetDate: (name: keyof IDateSearch, date: Dayjs | null) => void;
  dateSearch: IDateSearch;
  handleSearchByDate: () => void;
  errorValidate?: string;
}

export default IDateInputs;
