import React from 'react';

import renderer from '../../../../src/helpers/testing';
import Carousel from '../../../../src/components/carousel';
import styles, {
  innerStyles,
  outterStyles,
} from '../../../../src/components/carousel/styles';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.useFakeTimers();

const mockThumb = {
  title: 'Test title',
  type: 'thumb',
  items: [{title: 'Item title', imageUrl: 'http://placeimg.com/320/480/any'}],
};

describe('<Carousel />', () => {
  test('Should renders Carousel correctly', () => {
    renderer.create(
      <Carousel
        title={mockThumb.title}
        type={mockThumb.type}
        items={mockThumb.items}
      />,
    );
  });

  test('Should has a title', () => {
    const testInstance = renderer.create(
      <Carousel
        title={mockThumb.title}
        type={mockThumb.type}
        items={mockThumb.items}
      />,
    ).root;

    expect(testInstance.findByProps({testId: 'CarouselTitle'})).toBeDefined();
  });

  test('Should has a carousel items', () => {
    const testInstance = renderer.create(
      <Carousel
        title={mockThumb.title}
        type={mockThumb.type}
        items={mockThumb.items}
      />,
    ).root;

    expect(testInstance.findByProps({testId: 'CarouselItems'})).toBeDefined();
  });

  test('Should render all carousel items', () => {
    const testInstance = renderer.create(
      <Carousel
        title={mockThumb.title}
        type={mockThumb.type}
        items={mockThumb.items}
      />,
    ).root;

    expect(
      testInstance.findAllByProps({testId: 'CarouselItem'}).length,
    ).toEqual(mockThumb.items.length);
  });

  test('Should Has setted title styles properly', () => {
    const testInstance = renderer.create(
      <Carousel
        title={mockThumb.title}
        type={mockThumb.type}
        items={mockThumb.items}
      />,
    ).root;

    expect(testInstance.findByProps({style: styles.title}).props.children).toBe(
      mockThumb.title,
    );
  });

  test('Should renders all thumbs with outter styles', () => {
    const testInstance = renderer.create(
      <Carousel title={mockThumb.title} type="thumb" items={mockThumb.items} />,
    ).root;

    expect(testInstance.findAllByProps({styles: outterStyles}).length).toEqual(
      mockThumb.items.length,
    );
  });

  test('Should renders all posters with inner styles', () => {
    const testInstance = renderer.create(
      <Carousel
        title={mockThumb.title}
        type="poster"
        items={mockThumb.items}
      />,
    ).root;

    expect(testInstance.findAllByProps({styles: innerStyles}).length).toEqual(
      mockThumb.items.length,
    );
  });
});
