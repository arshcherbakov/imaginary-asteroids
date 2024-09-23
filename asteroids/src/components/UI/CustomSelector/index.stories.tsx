import CustomSelector from '.';

const arr = {
  km: 'kilometrs',
  m: 'milies',
};
export default {
  title: 'CustomSelector',
  component: CustomSelector,
};

export const Default = () => (
  <CustomSelector
    dataList={arr}
    handleSelector={() => {}}
    selelctorValue="papa"
  />
);
