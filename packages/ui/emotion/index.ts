import type { PropsOf } from '@emotion/react';
import { css } from '@emotion/react';
import type { CreateStyledComponent, StyledOptions } from '@emotion/styled';
import baseStyled from '@emotion/styled';
import type { FilteringStyledOptions } from '@emotion/styled/types/base';

import { palette, rem, typo } from '../theme';

interface Theme {
  palette: typeof palette;
  typo: typeof typo;
  rem: typeof rem;
}

interface CreateStyled<Theme> {
  <
    C extends React.ComponentClass<React.ComponentProps<C>>,
    ForwardedProps extends keyof React.ComponentProps<C> &
    string = keyof React.ComponentProps<C> & string
  >(
    component: C,
    options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & {
      theme?: Theme;
    },
    object,
    {
      ref?: React.Ref<InstanceType<C>>;
    }
  >;

  <C extends React.ComponentClass<React.ComponentProps<C>>>(
    component: C,
    options?: StyledOptions<React.ComponentProps<C>>
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme;
    },
    object,
    {
      ref?: React.Ref<InstanceType<C>>;
    }
  >;

  <
    C extends React.ComponentType<React.ComponentProps<C>>,
    ForwardedProps extends keyof React.ComponentProps<C> &
    string = keyof React.ComponentProps<C> & string
  >(
    component: C,
    options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & {
      theme?: Theme;
    }
  >;

  <C extends React.ComponentType<React.ComponentProps<C>>>(
    component: C,
    options?: StyledOptions<React.ComponentProps<C>>
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme;
    }
  >;

  <
    Tag extends keyof JSX.IntrinsicElements,
    ForwardedProps extends keyof JSX.IntrinsicElements[Tag] &
    string = keyof JSX.IntrinsicElements[Tag] & string
  >(
    tag: Tag,
    options: FilteringStyledOptions<JSX.IntrinsicElements[Tag], ForwardedProps>
  ): CreateStyledComponent<
    { theme?: Theme; as?: React.ElementType },
    Pick<JSX.IntrinsicElements[Tag], ForwardedProps>
  >;

  <Tag extends keyof JSX.IntrinsicElements>(
    tag: Tag,
    options?: StyledOptions<JSX.IntrinsicElements[Tag]>
  ): CreateStyledComponent<
    { theme?: Theme; as?: React.ElementType },
    JSX.IntrinsicElements[Tag]
  >;
}

type StyledTags<Theme> = {
  [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
    {
      theme?: Theme;
      as?: React.ElementType;
    },
    JSX.IntrinsicElements[Tag]
  >;
};

const styled = baseStyled as CreateStyled<Theme> & StyledTags<Theme>;

export { css, styled };
