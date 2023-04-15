import { Footer } from "@components/common";
import Skeleton from "../Skeleton";
import Box from "@mui/material/Box";
import { setCachedUser } from "@rtk/features/users/loginSlice";
import { useAppDispatch, useAppSelector } from "@rtk/store";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import {
  getBuildingType,
  getColors,
  getFloorTypes,
  getMaterials,
  getPostalCodes,
  getServices,
  getWallPapers,
} from "@rtk/features/orderData/thunks";
import { dateDiffInDays } from "utils/getDate";
interface Props {
  children: React.ReactElement;
}
const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [start, setStart] = useState<boolean>(false);

  const {
    postalCodeSlice: { postalCodes },
    areaServicesSlice: { services },
    buildingTypeSlice: { buildingTypes },
    colorsSlice: { colors },
    floorTypesSlice: { floorTypes },
    materialsSlice: { materials },
    wallPapersSlice: { wallPapers },
  } = useAppSelector((state) => state.orderData);
  useEffect(() => {
    const cachedUser = localStorage.getItem("user");

    if (cachedUser) {
      let user = JSON.parse(cachedUser);
      let daysDifference = dateDiffInDays(new Date(), user.loginDate);
      if (daysDifference <= 100) {
        dispatch(setCachedUser({ cachedUser }));
      }
    }
    setStart(true);
    if (!postalCodes.length) dispatch(getPostalCodes());
    if (!buildingTypes.length) dispatch(getBuildingType());
    if (!colors.length) dispatch(getColors());
    if (!floorTypes.length) dispatch(getFloorTypes());
    if (!materials.length) dispatch(getMaterials());
    if (!services.length) dispatch(getServices());
    if (!wallPapers.length) dispatch(getWallPapers());
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Navbar /> */}
      {start ? children : <Skeleton />}
      {!router.route.includes("login") &&
        !router.route.includes("register") && <Footer />}
    </Box>
  );
};

export default Layout;
