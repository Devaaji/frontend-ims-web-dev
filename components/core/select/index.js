import { forwardRef } from 'react';

import { HStack, useToken, useFormControlContext } from '@chakra-ui/react';
import ReactSelect, { components } from 'react-select';

const Select = forwardRef(
  ({ styles: _styles, onChange, menuPlacement = 'top', icon, ...props }) => {
    const controlContext = useFormControlContext();

    const isDisabled =
      controlContext && controlContext.isReadOnly
        ? controlContext.isReadOnly
        : undefined;
    const fontSizeSm = useToken('fontSizes', 'sm');

    const customStyles = {
      indicatorSeparator: () => ({
        display: 'none',
      }),
      clearIndicator: () => ({
        display: 'none',
      }),
      dropdownIndicator: (provided) => ({
        ...provided,
        color: 'ims-primary',
      }),
      container: (provided) => ({
        ...provided,
        fontSize: fontSizeSm,
      }),
      input: (provided) => ({ ...provided, color: 'black' }),
    };

    return (
      <ReactSelect
        styles={customStyles}
        menuPlacement={menuPlacement}
        onChange={onChange}
        isDisabled={isDisabled}
        components={{
          Control: ({ children, ...rest }) => (
            <components.Control {...rest}>
              {icon ? (
                <HStack pl="3" spacing="0" w="full">
                  {icon}
                  {children}
                </HStack>
              ) : (
                children
              )}
            </components.Control>
          ),
        }}
        {...props}
      />
    );
  }
);

Select.displayName = 'CustomReactSelect';

export default Select;
