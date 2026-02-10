interface NavLink {
    readonly label: string;
    readonly href: string;
}
interface MobileNavProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    links: readonly NavLink[];
    onBookClick: () => void;
}
export declare function MobileNav({ open, onOpenChange, links, onBookClick, }: MobileNavProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MobileNav.d.ts.map