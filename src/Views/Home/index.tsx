import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../api/service";
import { Title, ViewContainer } from "../../components/common/StyledComponents";
import TableComponent from "../../components/common/Tablecomponent";
import { columns } from "../../constants/table";
import { NotificationAlert } from "../../utils/NotificationAlert";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [sportsList, setSportList] = useState([]);
  useEffect(() => {
    setLoading(true);

    fetch(`${baseURL}/ceb09528-8228-4a95-b7d9-c1f945023c92`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setSportList(data);
      })
      .catch((e) => {
        //you can simulate this by turning off your internet

        NotificationAlert("error", "Error occurred", "Kindly refresh page");
        setLoading(false);
      });
  }, []);
  const navigate = useNavigate();
  const handleRowClick = (id: string) => {
    navigate(`person/${id}`, { state: { id } });
  };

  return (
    <ViewContainer>
      <Title>My Amazing Favourite American Sports App</Title>
      <TableComponent
        loading={loading}
        rowClick={(e) => handleRowClick(e)}
        dataSource={[...sportsList]}
        columns={columns}
      />
    </ViewContainer>
  );
};

export default Home;
