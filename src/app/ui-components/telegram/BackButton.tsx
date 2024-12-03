type NavigateFunction = (to: string) => void;

interface WebAppBackButton {
    show: () => void;
    hide: () => void;
    onClick: (callback: () => void) => void;
}

interface TelegramWebApp {
    BackButton: WebAppBackButton;
}

interface TelegramWindow extends Window {
    Telegram: {
        WebApp: TelegramWebApp;
    };
}

declare const window: TelegramWindow;

const BackBtn = (to: string, navigate: NavigateFunction): void => {
    const tg = window.Telegram.WebApp;
    const backBtn = tg.BackButton;
    backBtn.show();
    backBtn.onClick(() => {
        navigate(to);
        backBtn.hide();
    });
};

export default BackBtn;