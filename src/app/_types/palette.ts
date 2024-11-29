type ColorsNames =
    "paper" | "darkPaper" |
    "background" | "darkBackground" |

    "primary" | "darkPrimary" |
    "secondary" | "darkSecondary" |

    "info" | "darkInfo" |
    "success" | "darkSuccess" |
    "warning" | "darkWarning" |
    "error" | "darkError" |

    // TEXT
    "textPrimary" | "darkTextPrimary" |
    "textSecondary" | "darkTextSecondary" |
    "textTertiary" | "darkTextTertiary" |

    // grey
    "grey100" | "grey300" | "grey500" | "grey700" | "grey900" |

    // Common colors
    "black" | "darkBlack" |
    "white" | "darkWhite" |
    "blue" | "darkBlue" |
    "red" | "darkRed" |
    "green" | "darkGreen" |
    "orange" | "darkOrange" |
    "yellow" | "darkYellow" |
    "purple" | "darkPurple"
;


export type PaletteColors = {
    [key in ColorsNames]: string;
};

