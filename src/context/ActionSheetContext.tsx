import {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import React from 'react';
import {Actionsheet} from 'native-base';

type Action = {
  label: string;
  materialIcon: string;
  onPress: () => void;
};

type ContextProps = {
  toggleSheet: (options: Action[]) => void;
};

const Context = createContext<ContextProps>({} as ContextProps);

export const ActionSheetContextProvider: FC = ({children}) => {
  const [options, setOptions] = useState<Action[]>([]);

  const destroy = useCallback(() => setOptions([]), []);

  const value = useMemo(
    () => ({
      toggleSheet: (newOptions: Action[]) => {
        setOptions(newOptions);
      },
    }),
    [],
  );

  return (
    <Context.Provider value={value}>
      {children}
      <Actionsheet isOpen={options.length > 0} onClose={destroy}>
        <Actionsheet.Content>
          {options.map(option => (
            <Actionsheet.Item
              key={option.label}
              onPress={() => {
                option.onPress();
                destroy();
              }}
            />
          ))}
        </Actionsheet.Content>
      </Actionsheet>
    </Context.Provider>
  );
};

export const useSheet = () => useContext(Context);
