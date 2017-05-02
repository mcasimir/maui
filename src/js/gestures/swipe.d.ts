interface ElementFn {
    (element: ng.IAugmentedJQuery): ng.IAugmentedJQuery;
}

interface ValidFn {
    (): boolean;
}

interface SwipeOptions {
    sensitiveArea?: ElementFn;
    movementTarget?: ElementFn;
    preventPullToRefresh?: boolean;
    valid?: ValidFn;
}