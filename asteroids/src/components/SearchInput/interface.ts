interface ISearchInputProps {
  handleTextFieldSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleButtonSearch: () => void;
  validError: string;
}

export default ISearchInputProps;
