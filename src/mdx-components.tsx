import type { MDXComponents } from 'mdx/types';
import Pre from './components/mdx/Pre';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: (props) => <Pre {...props} />,
    ...components,
  };
}
