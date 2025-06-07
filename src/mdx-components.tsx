import type { MDXComponents } from 'mdx/types';
import Pre from './components/mdx/Pre';
import Heading from './components/mdx/Heading';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: (props) => <Pre {...props} />,
    h1: (props) => <Heading as='h1' {...props} />,
    h2: (props) => <Heading as='h2' {...props} />,
    h3: (props) => <Heading as='h3' {...props} />,
    h4: (props) => <Heading as='h4' {...props} />,
    h5: (props) => <Heading as='h5' {...props} />,
    h6: (props) => <Heading as='h6' {...props} />,
    ...components,
  };
}
