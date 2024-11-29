import config from "../config";
import {Components, Palette} from "@mui/material";


export function componentStyleOverrides(palette:Palette):Components {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    textTransform: 'capitalize',
                    borderRadius: '4px'
                }
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundImage: 'none'
                },
                rounded: {
                    borderRadius: config.borderRadius + 'px'
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    color: palette.text.primary,
                    padding: '24px'
                },
                title: {
                    fontSize: '1.125rem'
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '24px'
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: '24px'
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    alignItems: 'center'
                },
                outlined: {
                    border: '1px dashed'
                }
            }
        },
        // Menu
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    '&.MuiListItem-root': {
                        color: palette.text.primary,
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        '&.Mui-selected': {
                            cursor: "default",
                            color: palette.text.primary,
                            backgroundColor: palette.primary.light,
                            '&:hover': {
                                backgroundColor: palette.primary.light
                            },
                            '& .MuiListItemIcon-root': {
                                color: palette.text.primary
                            }
                        },
                        '&:hover': {
                            backgroundColor: palette.secondary.light,
                            color: palette.text.primary,
                            '& .MuiListItemIcon-root': {
                                color: palette.text.primary
                            }
                        }
                    }
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: palette.text.primary,
                    minWidth: '36px'
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: palette.text.primary
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: palette.text.primary,
                    '&::placeholder': {
                        color: palette.text.secondary,
                        fontSize: '0.875rem'
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    background: config.outlinedFilled
                        ? palette.grey["100"]
                        : 'transparent',
                    borderRadius: config.borderRadius + 'px',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: palette.primary.main
                    },
                    '&:hover $notchedOutline': {
                        borderColor: palette.primary.dark
                    },
                    '&.MuiInputBase-multiline': {
                        padding: 1
                    }
                },
                input: {
                    fontWeight: 500,
                    background: config.outlinedFilled
                        ? palette.grey["100"]
                        : 'transparent',
                    padding: '15.5px 14px',
                    borderRadius: config.borderRadius + 'px',
                    '&.MuiInputBase-inputSizeSmall': {
                        padding: '10px 14px',
                        '&.MuiInputBase-inputAdornedStart': {
                            paddingLeft: 0
                        }
                    }
                },
                inputAdornedStart: {
                    paddingLeft: 4
                },
                notchedOutline: {
                    borderRadius: config.borderRadius + 'px'
                }
            }
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        color: palette.grey["300"]
                    }
                },
                mark: {
                    backgroundColor: palette.background.paper,
                    width: '4px'
                },
                valueLabel: {
                    color: palette.primary.main
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    '& .MuiAutocomplete-tag': {
                        background: palette.secondary.light,
                        borderRadius: 4,
                        color: palette.text.primary,
                        '.MuiChip-deleteIcon': { color: palette.text.primary }
                    }
                },
                popper: {
                    borderRadius: config.borderRadius + 'px',
                    boxShadow: '0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%)'
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: palette.divider,
                    opacity: 1
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    '&:focus': {
                        backgroundColor: 'transparent'
                    }
                }
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    "&.Mui-checked": {
                        fontSize: "28px"
                    }
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    color: palette.primary.dark,
                    background: palette.primary.light
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    '&.MuiChip-deletable .MuiChip-deleteIcon': {
                        color: 'inherit'
                    }
                }
            }
        },
        /*
        MuiTimelineContent: {
            styleOverrides: {
                root: {
                    color: theme.textDark,
                    fontSize: '16px'
                }
            }
        },
         */
        /*
        MuiTreeItem: {
            styleOverrides: {
                label: {
                    marginTop: 14,
                    marginBottom: 14
                }
            }
        },*/
        /*
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    boxShadow: 'none'
                }
            }
        },*/
        /*
        MuiInternalDateTimePickerTabs: {
            styleOverrides: {
                tabs: {
                    backgroundColor: theme.mode === 'dark' ? theme.colors.darkPaper : theme.colors.primaryLight,
                    '& .MuiTabs-flexContainer': {
                        borderColor: theme.mode === 'dark' ? theme.colors.darkTextPrimary + 20 : theme.colors.primary200
                    },
                    '& .MuiTab-root': {
                        color: theme.mode === 'dark' ? theme.colors.darkTextSecondary : theme.colors.grey900
                    },
                    '& .MuiTabs-indicator': {
                        backgroundColor: theme.colors.primaryDark
                    },
                    '& .Mui-selected': {
                        color: theme.colors.primaryDark
                    }
                }
            }
        },*/
        MuiTabs: {
            styleOverrides: {
                flexContainer: {
                    borderBottom: '1px solid',
                    borderColor: palette.primary.dark
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    padding: '12px 0 12px 0'
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderColor: palette.grey["300"],
                    '&.MuiTableCell-head': {
                        fontSize: '0.875rem',
                        color: palette.text.primary,
                        fontWeight: 500
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: palette.text.primary,
                    background: palette.background.paper
                }
            }
        }
    };
}
