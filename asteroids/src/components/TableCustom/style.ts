const useStyle = () => ({
  tableContainer: {
    bgcolor: "#f9f9f9",
  },

  table: {
    minWidth: 650,
  },

  tableRow: {
    "&:last-child td, &:last-child th": { border: 0 },
  },
});

export { useStyle };
