import React, { ReactNode, useState } from "react";

type SearchValueType = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

interface Props {
  children: React.ReactNode;
}

const DataContext = React.createContext<SearchValueType>({
  searchValue: "",
  /* eslint-disable @typescript-eslint/no-empty-function */
  setSearchValue: () => {},
});

export const DataProvider: React.FC<Props> = ({
  children,
}: {
  children: ReactNode;
}): React.ReactElement => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <DataContext.Provider
      value={{
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
