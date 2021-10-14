import { useEffect, useState } from "react";
import { Title } from "../../domain/models/Title";
import { titleService } from "../../domain/services/Title.service";

export const TitleList = () => {
  const [titles, setTitles] = useState<Title[]>([]);

  useEffect(() => {
    titleService.getTitles().then((res) => {
      if (!res.isError) {
        console.log(res.value);
        setTitles(res.value);
      }
    });
  }, []);

  return (
    <ul>
      {titles.map((title) => (
        <li key={title.id}>{title.title}</li>
      ))}
    </ul>
  );
};
