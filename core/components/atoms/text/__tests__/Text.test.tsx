import * as React from 'react';
import { shallow } from 'enzyme';
import Text, { TextProps as Props, Appearance } from '../Text';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { _isEqual } from '../../dropdown/utility';

const appearances: Appearance[] = ['default', 'white', 'destructive', 'disabled', 'subtle'];
const weight = ['strong', 'medium'];
const BooleanValue = [true, false];
const StringValue = 'Sample String';

describe('Text component', () => {
  const mapper = {
    children: valueHelper(StringValue, { required: true }),
    appearances: valueHelper(appearances, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Text
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Text component', () => {
  const mapper = {
    children: valueHelper(StringValue, { required: true }),
    weight: valueHelper(weight, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Text
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Text component', () => {
  const mapper = {
    children: valueHelper(StringValue, { required: true }),
    small: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Text
          {...attr}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Text component', () => {

  it('should render the text', () => {
    const { getByTestId } = render(<Text>{'Design System'}</Text>);
    expect(getByTestId('DesignSystem-Text')).toHaveTextContent('Design System');
  });

  it('should render componentType="span"', () => {
    const { getByTestId } = render(<Text>{'Design System'}</Text>);
    expect(getByTestId('DesignSystem-Text').tagName).toEqual('SPAN');
  });

  describe('Text Component with overwrite class', () => {
    it('overwrite Text class', () => {
      const { getByTestId } = render(<Text className="TextClass">{'Text'}</Text>);
      expect(getByTestId('DesignSystem-Text')).toHaveClass('TextClass');
    });
  });

  describe('Text Component with Prop:weight', () => {

    it('should have the class Text--strong when weight="strong"', () => {
      const { getByTestId } = render(<Text weight="strong">{'Design System'}</Text>);
      expect(getByTestId('DesignSystem-Text')).toHaveClass('Text--strong');
    });

    it('should have the class Text--medium when weight="medium"', () => {
      const { getByTestId } = render(<Text weight="medium">{'Design System'}</Text>);
      expect(getByTestId('DesignSystem-Text')).toHaveClass('Text--medium');
    });

  });

  describe('Text Component with Prop:small', () => {

    it('should have the class Text--small when small="true"', () => {
      const { getByTestId } = render(<Text small={true}>{'Design System'}</Text>);
      expect(getByTestId('DesignSystem-Text')).toHaveClass('Text--small');
    });

  });

  describe('Text Component with Prop:appearances', () => {

    it('should have the class Text--default when appearances="default"', () => {
      const { getByTestId } = render(<Text appearance="default">{'Design System'}</Text>);
      expect(getByTestId('DesignSystem-Text')).toHaveClass('Text--default');
    });

    appearances.forEach(appearance => {
      it(`should have the Text--${appearance} class when appearances=${appearance} `, () => {
        const { getByTestId } = render(<Text appearance={appearance} >{'Design System'}</Text>);
        expect(getByTestId('DesignSystem-Text')).toHaveClass(`Text--${appearance}`);
      });
    });
  });
});
