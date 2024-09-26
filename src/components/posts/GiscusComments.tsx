'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function GiscusComments() {
  const { theme } = useTheme();

  return (
    <section className='mt-20'>
      <Giscus
        id='comments'
        repo='2wndrhs/next-shadcn-blog'
        repoId='R_kgDOMwiiTQ'
        category='Comments'
        categoryId='DIC_kwDOMwiiTc4Ci0mg'
        mapping='pathname'
        term='Welcome to @giscus/react component!'
        reactionsEnabled='1'
        emitMetadata='0'
        inputPosition='bottom'
        theme={theme}
        lang='ko'
      />
    </section>
  );
}
