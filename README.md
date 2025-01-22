# React.Util
It's a personal common library meant to be used as a subtree of any react project, contains common optimizations not contained in the react standard library

## Installation
``` bash
git subtree add --prefix=src/libs/react.util git@github.com:gdavidev/React.Util.git main
cd libs/react.util
npm install
```

## Contributing
Pulling latest changes
``` bash
git subtree pull --prefix=src/libs/react.util git@github.com:gdavidev/React.Util.git main
```

Pushing your changes
``` bash
git subtree push --prefix=src/libs/react.util git@github.com:gdavidev/React.Util.git main
```

## Contents - Hooks
### UseStatefulArray
Contains common functions on array operations when used as a state, it's API aims to mimic a array that triggers state.
``` tsx
export default function CardContainer() {
  const cardList = useStatefulArray();

  return (
    <div className='container'>
      { cardList.all.length >= 0 &&
          cardList.map(card => 
              <Card 
                  data={card} 
                  onAddClick={(newCard) => cardList.add(newCard)}
                  onRemoveClick={(card) => cardList.remove(card)}
              />)
      }
    </div>
  );
}
```

### UseDeviceWidth
Maps current window width to tailwind breakpoints for responsive logic in code
``` tsx
export default Example() {
  const { width, breakpoint } = useDeviceWidth();
  
  return (
    breakpoint >= DeviceWidthBreakpoints.LG ?
          <LargeComponent /> :
          <SmallComponent />
  );
}
```

### UseScrollPosition
Returns a stateful stepped number of which is updated based on the current scroll position of the page, the precision(step) can be altered in the options
``` tsx
export default function Navbar(props: NavbarProps) {
    const {scrollY, setScrollPosition} = useScrollPosition({step: 100});

    // The navbar gets transparent when at the top of the page
    return (
        <nav className={"navbar" + (scrollY >= 100 ? " bg-layout-background" : " bg-transparent")}>
            {/* Navbar content... */}
        </nav>
    );
}
```
