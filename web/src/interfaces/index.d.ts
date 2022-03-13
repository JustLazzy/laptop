export interface OpenViewCalendarProps {
  onClick: () => void;
  open: boolean;
  openCalendar: boolean;
}

export interface MenuProps {
  icon: string;
  title: string;
}

export interface OpenAppProps {
  onClick: () => void;
  icon: string;
  isSvg?: boolean;
  title: string;
}

export interface PanelProps {
  open: boolean;
}

export interface TaskOpenProps {
  open: boolean;
  onClick: () => void;
  icon: string;
  isSvg?: boolean;
}

export interface WindowProps {
  open: boolean;
  image: string;
  title: string;
  isSvg?: boolean;
  size: string;
  isTitle: boolean;
  opened: ReactNode;
  children: ReactNode;
}

export interface IIconProps {
  icon: string;
  className: string;
  onClick?: () => void;
  action?: string;
}
export interface NotificationProps {
  message: string;
  type: string;
  open: boolean;
  isSvg: boolean;
  titleHeader: string;
  title: string;
  icon: string;
  onClick: () => void;
}
