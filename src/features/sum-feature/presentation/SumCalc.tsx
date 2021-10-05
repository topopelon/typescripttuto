import Text from "antd/lib/typography/Text";
import { UploadFile } from "./components/UploadFile";
import { TitleList } from "./components/TitleList";
import { Col } from "antd";
import { FormCalc } from "./components/FormCalc";

export const SumCalc = () => {
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  };

  return (
    <div style={{ justifyContent: "center", display: "flex", marginTop: 200 }}>
      <Col>
        <UploadFile {...props} pepe="holi" />
        <TitleList />
        <FormCalc />
        <Text italic copyable>
          Pepe
        </Text>
      </Col>
    </div>
  );
};
