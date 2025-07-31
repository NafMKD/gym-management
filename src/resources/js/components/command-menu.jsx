import React, { useCallback } from 'react'
import { router } from '@inertiajs/react'
import {
  IconArrowRightDashed,
  IconChevronRight,
  IconDeviceLaptop,
  IconMoon,
  IconSun,
} from '@tabler/icons-react'
import { useSearch } from '@/context/search-context'
import { useTheme } from '@/context/theme-context'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { sidebarData } from '@/components/layout/data/sidebar-data'
import { ScrollArea } from '@/components/ui/scroll-area'

export function CommandMenu() {
  const { setTheme } = useTheme()
  const { open, setOpen } = useSearch()

  const runCommand = useCallback((command) => {
    setOpen(false)
    command()
  }, [setOpen])

  const navigate = (url) => router.visit(url)

  return (
    <CommandDialog modal open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <ScrollArea type="hover" className="h-72 pr-1">
          <CommandEmpty>No results found.</CommandEmpty>

          {sidebarData.navGroups.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((navItem, i) => (
                navItem.url ? (
                  <CommandItem
                    key={`${navItem.url}-${i}`}
                    value={navItem.title}
                    onSelect={() => runCommand(() => navigate(navItem.url))}
                  >
                    <IconArrowRightDashed className="mr-2 size-3 text-muted-foreground/80" />
                    {navItem.title}
                  </CommandItem>
                ) : navItem.items?.map((subItem, j) => (
                  <CommandItem
                    key={`${navItem.title}-${subItem.url}-${j}`}
                    value={`${navItem.title}-${subItem.url}`}
                    onSelect={() => runCommand(() => navigate(subItem.url))}
                  >
                    <IconArrowRightDashed className="mr-2 size-3 text-muted-foreground/80" />
                    {navItem.title}
                    <IconChevronRight className="mx-1 size-3" />
                    {subItem.title}
                  </CommandItem>
                ))
              ))}
            </CommandGroup>
          ))}

          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme('light'))}>
              <IconSun className="mr-2 size-4" />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme('dark'))}>
              <IconMoon className="mr-2 size-4" />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme('system'))}>
              <IconDeviceLaptop className="mr-2 size-4" />
              System
            </CommandItem>
          </CommandGroup>
        </ScrollArea>
      </CommandList>
    </CommandDialog>
  )
}
