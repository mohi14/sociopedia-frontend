import { useTheme } from "@emotion/react";
import { IconButton, InputBase, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
import { Search } from "@mui/icons-material";

const Navbar = () => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;

    const fullName = `${user.firstName} ${user.lastName}`;





    return <FlexBetween padding="1rem 6%" backgroundColor={alt}>
        <FlexBetween gap={"1.75rem"}>
            <Typography fontWeight="bold" fontSize="clamp(1rem, 2rem,2.25rem)" color="primary" onClick={() => navigate("/home")} sx={{
                "&:hover": {
                    color: primaryLight,
                    cursor: "pointer"
                }
            }}>
                Sociopedia
            </Typography>
            {isNonMobileScreens && <FlexBetween backgroundColor={neutralLight} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">
                <InputBase placeholder="Search..." />
                <IconButton>
                    <Search />
                </IconButton>
            </FlexBetween>}
        </FlexBetween>
    </FlexBetween>
};

export default Navbar;