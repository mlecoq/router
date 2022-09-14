import { NavigationContainer } from '@react-navigation/native';
import React, { useMemo } from 'react';

import { useRoutesContext } from './context';
import { getLinkingConfig } from './getRoutes';


type NavigationContainerProps = React.ComponentProps<typeof NavigationContainer>;

function useLinkingConfig() {
    const routes = useRoutesContext()
    const linking = useMemo(() => getLinkingConfig(routes), [routes]);
    return linking;
}

/** react-navigation `NavigationContainer` with automatic `linking` prop generated from the routes context. */
export const ContextNavigationContainer = React.forwardRef((props: NavigationContainerProps, ref: NavigationContainerProps['ref']) => {
    const linking = useLinkingConfig();
    return (<NavigationContainer ref={ref} linking={linking} {...props} />)
})