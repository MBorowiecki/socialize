import { ISideInfo } from './types';

const SideInfo: React.FC<ISideInfo> = ({
    open,
    position = "bottom_right",
    children
}) => {
    return (
        <aside className={`sideinfo sideinfo-${position} ${open && "sideinfo-open"} sideinfo-primary`}>
            {children && children}
        </aside>
    )
}

export default SideInfo;