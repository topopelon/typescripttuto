import { Alert } from "antd";
import { useEffect, useState } from "react";
import { Title } from "../../domain/models/Title";
import { titleService } from "../../domain/services/Title.service";

export const TitleList = () => {
  const [titles, setTitles] = useState<Title[]>([]);
  const [err, setErr] = useState<boolean>(false);

  useEffect(() => {
    titleService.getTitles().then((res) => {
      if (!res.isError) {
        console.log(res.value);
        setErr(false);
        setTitles(res.value);
        return;
      }
      setErr(true);
    });
  }, []);

  return (
    <div>
      <ul>
        {titles.map((title) => (
          <li key={title.id}>{title.title}</li>
        ))}
      </ul>
      {err && <Alert type="error" message="Error" />}
    </div>
  );
};
