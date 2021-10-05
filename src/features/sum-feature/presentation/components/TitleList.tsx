import { useEffect, useState } from "react";
import { Title } from "../../domain/models/Title";
import { titleService } from "../../domain/services/Title.service"

export const TitleList = () => {
    
    const [titles, setTitles] = useState<Title[]>([]);

    useEffect(() => {
        titleService.getTitles().then(setTitles);
    }, []);

    return (
    <ul>
      {titles.map((title) => <li key={title.id}>{title.title}</li>)}
    </ul>
    );
}