import Text from "antd/lib/typography/Text";
import { Redirect } from "react-router-dom";
import { SumCalc } from "../../features/sum-feature/presentation/SumCalc";
import RouteType from "./models/RouteType";

const index: RouteType = {
  path: "/",
  exact: true,
  layout: () => <div></div>,
  component: () => <Redirect to="/calculator" />,
};

const calculator: RouteType = {
  path: "/calculator",
  layout: () => <div></div>,
  component: SumCalc,
};
const error: RouteType = {
  path: "",
  layout: () => <div></div>,
  component: () => (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text type="danger" strong>
        ERROR
      </Text>
    </div>
  ),
};

export const routes = { index, calculator, error };
