import { cn } from '@/lib/utils';
import { Info, Lightbulb, TriangleAlert } from 'lucide-react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type CalloutIcon = 'info' | 'lightbulb' | 'warning';

interface CalloutProps extends ComponentPropsWithoutRef<'aside'> {
  children?: ReactNode;
  icon?: CalloutIcon;
}

const callOutIcons = {
  info: Info,
  lightbulb: Lightbulb,
  warning: TriangleAlert,
} as const;

export default function Callout({
  children,
  className,
  icon = 'info',
  ...props
}: CalloutProps) {
  const Icon = callOutIcons[icon];

  return (
    <aside
      className={cn(
        'border-border bg-muted/50 text-foreground my-6 rounded-xl border p-4 text-sm',
        className,
      )}
      {...props}
    >
      <div className='flex gap-3'>
        <div className='text-muted-foreground mt-0.5 shrink-0'>
          <Icon aria-hidden='true' className='size-4' />
        </div>
        <div className='min-w-0 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0'>
          {children}
        </div>
      </div>
    </aside>
  );
}
